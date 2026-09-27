const CONFIG = {
  SPREADSHEET_ID: 'REPLACE_WITH_GOOGLE_SHEET_ID',
  DRIVE_FOLDER_ID: 'REPLACE_WITH_GOOGLE_DRIVE_FOLDER_ID',
  MAX_FILE_SIZE_BYTES: 5 * 1024 * 1024,
};

function doGet() {
  return jsonResponse_({ ok: true, service: 'ANT Human Services form receiver' });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Missing request body.');
    }

    const data = JSON.parse(e.postData.contents);

    if (data.formType !== 'candidate_application') {
      throw new Error('Unsupported form type.');
    }

    validateRequired_(data);

    if (!data.resume || !data.resume.base64) {
      throw new Error('Resume PDF is required.');
    }

    if (data.resume.mimeType !== 'application/pdf') {
      throw new Error('Only PDF files are accepted.');
    }

    if (Number(data.resume.size) > CONFIG.MAX_FILE_SIZE_BYTES) {
      throw new Error('PDF must be 5 MB or smaller.');
    }

    const decoded = Utilities.base64Decode(data.resume.base64);

    if (decoded.length > CONFIG.MAX_FILE_SIZE_BYTES) {
      throw new Error('PDF must be 5 MB or smaller.');
    }

    const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
    const safeName = sanitizeFileName_(data.resume.name || 'resume.pdf');
    const file = folder.createFile(
      Utilities.newBlob(decoded, 'application/pdf', safeName)
    );

    const sheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID).getSheets()[0];

    sheet.appendRow([
      new Date(),
      data.fullName,
      data.phone,
      data.email,
      data.targetSector,
      data.experienceLevel,
      data.locationQualifications || '',
      file.getName(),
      file.getUrl(),
    ]);

    return jsonResponse_({
      ok: true,
      message: 'Candidate application received.',
      fileUrl: file.getUrl(),
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: error.message || 'Submission failed.',
    });
  }
}

function validateRequired_(data) {
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
}

function sanitizeFileName_(name) {
  const clean = String(name)
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/_+/g, '_');

  return clean.toLowerCase().endsWith('.pdf') ? clean : clean + '.pdf';
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
