// lib/validation.ts — Req 8.1, 8.2

export interface ValidationErrors {
  fullName?: string;
  instagramUsername?: string;
}

export function isWhitespaceOnly(value: string): boolean {
  return value.trim().length === 0;
}

export function validateLeadForm(
  fullName: string,
  instagramUsername: string
): ValidationErrors {
  const errors: ValidationErrors = {};
  if (!fullName || isWhitespaceOnly(fullName)) {
    errors.fullName = "Nama lengkap wajib diisi.";
  }
  if (!instagramUsername || isWhitespaceOnly(instagramUsername)) {
    errors.instagramUsername = "Instagram username wajib diisi.";
  }
  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
