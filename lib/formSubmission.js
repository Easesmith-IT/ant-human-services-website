'use client';

const MAX_PDF_SIZE = 5 * 1024 * 1024;

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

export async function submitCandidateApplication(payload) {
  const endpoint = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

  if (!endpoint) {
    throw new Error('Form submission is not configured yet.');
  }

  const resume = validatePdf(payload.resume);
  const resumeBase64 = await fileToBase64(resume);

  const requestBody = {
    formType: 'candidate_application',
    submittedAt: new Date().toISOString(),
    fullName: payload.fullName,
    phone: payload.phone,
    email: payload.email,
    targetSector: payload.targetSector,
    experienceLevel: payload.experienceLevel,
    locationQualifications: payload.locationQualifications,
    resume: {
      name: resume.name,
      mimeType: resume.type,
      size: resume.size,
      base64: resumeBase64,
    },
  };

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
