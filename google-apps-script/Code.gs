const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const PROP_SHEET_ID = 'ANT_FORM_SHEET_ID';
const PROP_FOLDER_ID = 'ANT_RESUME_FOLDER_ID';

function setup() {
  const spreadsheet = SpreadsheetApp.create('ANT Human Services - Form Responses');
  const sheet = spreadsheet.getSheets()[0];

  sheet.getRange(1, 1, 1, 10).setValues([[
    'Timestamp',
    'Form Type',
    'Full Name / Contact Name',
    'Phone',
    'Email',
    'Company',
    'Inquiry / Sector',
    'Experience / Model',
    'Message / Details',
    'PDF / Resume URL'
  ]]);
  sheet.setFrozenRows(1);

  const folder = DriveApp.createFolder('ANT Human Services - Candidate Resumes');

  PropertiesService.getScriptProperties().setProperties({
    [PROP_SHEET_ID]: spreadsheet.getId(),
    [PROP_FOLDER_ID]: folder.getId(),
  });

  Logger.log('Spreadsheet URL: ' + spreadsheet.getUrl());
  Logger.log('Resume folder URL: ' + folder.getUrl());
}

function doGet() {
  return jsonResponse_({ ok: true, service: 'ANT Human Services form receiver' });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Missing request body.');
    }

    const data = JSON.parse(e.postData.contents);

    if (data.website) {
      throw new Error('Invalid submission.');
    }

    validateRequired_(data);

    let fileUrl = '';
    if (data.resume && data.resume.base64) {
      fileUrl = saveResume_(data);
    }

    const sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      data.formType || '',
      data.fullName || data.contactName || '',
      data.phone || '',
      data.email || '',
      data.companyName || '',
      data.targetSector || data.staffingModel || data.inquiryType || '',
      data.experienceLevel || '',
      data.locationQualifications || data.message || data.positionsDetails || '',
      fileUrl,
    ]);

    return jsonResponse_({
      ok: true,
      message: 'Submission received.',
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error.message || 'Submission failed.',
    });
  }
}

function saveResume_(data) {
  const resume = data.resume;

  if (resume.mimeType !== 'application/pdf') {
    throw new Error('Only PDF files are accepted.');
  }

  if (Number(resume.size) > MAX_FILE_SIZE_BYTES) {
    throw new Error('PDF must be 5 MB or smaller.');
  }

  const decoded = Utilities.base64Decode(resume.base64);

  if (decoded.length > MAX_FILE_SIZE_BYTES) {
    throw new Error('PDF must be 5 MB or smaller.');
  }

  const folder = getFolder_();
  const baseName = sanitizeFileName_(
    data.fullName || data.contactName || 'candidate'
  );
  const originalName = sanitizeFileName_(resume.name || 'resume.pdf');
  const fileName = baseName + '_' + Date.now() + '_' + originalName;

  const file = folder.createFile(
    Utilities.newBlob(decoded, 'application/pdf', fileName)
  );

  return file.getUrl();
}

function validateRequired_(data) {
  if (data.formType === 'candidate_application') {
    const required = [
      ['fullName', 'Full name'],
      ['phone', 'Phone number'],
      ['email', 'Email address'],
      ['targetSector', 'Target sector'],
      ['experienceLevel', 'Experience level'],
    ];

    required.forEach(function ([key, label]) {
      if (!String(data[key] || '').trim()) {
        throw new Error(label + ' is required.');
      }
    });

    if (!data.resume || !data.resume.base64) {
      throw new Error('Resume PDF is required.');
    }
    return;
  }

  if (data.formType === 'contact_inquiry') {
    ['fullName', 'phone', 'email', 'message'].forEach(function (key) {
      if (!String(data[key] || '').trim()) {
        throw new Error(key + ' is required.');
      }
    });
    return;
  }

  if (data.formType === 'employer_staffing') {
    ['companyName', 'contactName', 'phone', 'staffingModel', 'positionsDetails'].forEach(function (key) {
      if (!String(data[key] || '').trim()) {
        throw new Error(key + ' is required.');
      }
    });
    return;
  }

  throw new Error('Unsupported form type.');
}

function getSheet_() {
  const id = PropertiesService.getScriptProperties().getProperty(PROP_SHEET_ID);
  if (!id) {
    throw new Error('Run setup() in Apps Script before receiving submissions.');
  }
  return SpreadsheetApp.openById(id).getSheets()[0];
}

function getFolder_() {
  const id = PropertiesService.getScriptProperties().getProperty(PROP_FOLDER_ID);
  if (!id) {
    throw new Error('Run setup() in Apps Script before receiving submissions.');
  }
  return DriveApp.getFolderById(id);
}

function sanitizeFileName_(name) {
  const clean = String(name)
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');

  return clean || 'file';
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
