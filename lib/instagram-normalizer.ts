/**
 * lib/instagram-normalizer.ts
 * Pure function for normalizing Instagram usernames.
 * Properties: idempotent (Req 9.4) and confluent (Req 9.5)
 */

/**
 * Normalizes an Instagram username to a single consistent stored format.
 * Rules:
 * 1. Trim leading and trailing whitespace
 * 2. Remove leading "@" character if present
 * Returns username without "@" and without surrounding whitespace.
 */
export function normalizeInstagramUsername(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("@")) {
    return trimmed.slice(1).trim();
  }
  return trimmed;
}
