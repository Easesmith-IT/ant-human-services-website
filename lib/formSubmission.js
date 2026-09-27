export const MAX_PDF_SIZE = 5 * 1024 * 1024;

function validatePdf(file) {
  if (!file) {
    throw new Error('Please upload your resume PDF.');
  }

  if (file.type !== 'application/pdf') {
    throw new Error('Only PDF files are accepted.');
  }

  if (file.size > MAX_PDF_SIZE) {
    throw new Error('PDF must be 5 MB or smaller.');
  }

  return file;
}

async function fileToBase64(file) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';

  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }

  return btoa(binary);
}

export async function submitForm(payload) {
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

  if (!endpoint) {
    throw new Error('Form submission is not configured yet.');
  }

  let requestBody = {
    ...payload,
    submittedAt: new Date().toISOString(),
  };

  if (payload.resume) {
    const resume = validatePdf(payload.resume);
    requestBody = {
      ...requestBody,
      resume: {
        name: resume.name,
        mimeType: resume.type,
        size: resume.size,
        base64: await fileToBase64(resume),
      },
    };
  }

  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
    body: JSON.stringify(requestBody),
  });

  return true;
}

export async function submitCandidateApplication(payload) {
  return submitForm({
    formType: 'candidate_application',
    fullName: payload.fullName,
    phone: payload.phone,
    email: payload.email,
    targetSector: payload.targetSector,
    experienceLevel: payload.experienceLevel,
    locationQualifications: payload.locationQualifications,
    resume: payload.resume,
  });
}

export async function submitEmployerStaffing(payload) {
  return submitForm({
    formType: 'employer_staffing',
    companyName: payload.companyName,
    contactName: payload.contactName,
    phone: payload.phone,
    staffingModel: payload.staffingModel,
    positionsDetails: payload.positionsDetails,
  });
}

export async function submitContactInquiry(payload) {
  return submitForm({
    formType: 'contact_inquiry',
    inquiryType: payload.inquiryType,
    fullName: payload.fullName,
    phone: payload.phone,
    email: payload.email,
    companyName: payload.companyName || '',
    message: payload.message,
  });
}
