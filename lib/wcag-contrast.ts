/**
 * WCAG 2.1 Contrast Ratio Calculation
 *
 * Pure functions for computing the contrast ratio between two hex colors
 * according to the WCAG 2.1 specification.
 *
 * Reference: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 *
 * Used by Property 5: WCAG AA Contrast Compliance to verify that all
 * text/background color pairs in the design system meet AA standards.
 */

/**
 * Parses a hex color string (#RRGGBB or #rgb) into an [R, G, B] tuple
 * where each channel is in the range 0-255.
 */
export function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace(/^#/, "");

  if (cleaned.length === 3) {
    // Shorthand form #rgb → #rrggbb
    const r = parseInt(cleaned[0] + cleaned[0], 16);
    const g = parseInt(cleaned[1] + cleaned[1], 16);
    const b = parseInt(cleaned[2] + cleaned[2], 16);
    return [r, g, b];
  }

  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  return [r, g, b];
}

/**
 * Converts an sRGB channel value (0-255) to a linear RGB value
 * using the WCAG 2.1 formula.
 *
 * If c <= 0.03928: c / 12.92
 * Otherwise: ((c + 0.055) / 1.055) ^ 2.4
 */
function srgbChannelToLinear(channel: number): number {
  const c = channel / 255;
  if (c <= 0.03928) {
    return c / 12.92;
  }
  return Math.pow((c + 0.055) / 1.055, 2.4);
}

/**
 * Computes the relative luminance of a hex color according to WCAG 2.1.
 *
 * L = 0.2126 * R + 0.7152 * G + 0.0722 * B
 * where R, G, B are the linearized channel values.
 */
export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return (
    0.2126 * srgbChannelToLinear(r) +
    0.7152 * srgbChannelToLinear(g) +
    0.0722 * srgbChannelToLinear(b)
  );
}

/**
 * Computes the WCAG 2.1 contrast ratio between two hex colors.
 *
 * The ratio is (L1 + 0.05) / (L2 + 0.05) where L1 is the lighter
 * (higher) luminance and L2 is the darker (lower) luminance.
 *
 * The result is always >= 1. A ratio of 1 means identical colors,
 * 4.5 is the minimum for AA normal text, 3.0 is the minimum for
 * AA large text and UI component boundaries.
 *
 * @param foreground - Foreground color as a #RRGGBB hex string
 * @param background - Background color as a #RRGGBB hex string
 * @returns Contrast ratio (a number >= 1)
 */
export function contrastRatio(foreground: string, background: string): number {
  const l1 = relativeLuminance(foreground);
  const l2 = relativeLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * WCAG AA contrast thresholds.
 */
export const WCAG_AA = {
  /** Minimum contrast ratio for normal-sized text (below 18pt / 24px) */
  NORMAL_TEXT: 4.5,
  /** Minimum contrast ratio for large text (>= 18pt / 24px, or >= 14pt bold) and UI component boundaries */
  LARGE_TEXT_OR_UI: 3.0,
} as const;
