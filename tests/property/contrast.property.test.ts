// Feature: simsalaclean-landing-page, Property 5: WCAG AA Contrast Compliance
// Validates: Requirements 6.4

import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { contrastRatio, WCAG_AA } from "@/lib/wcag-contrast";

/**
 * Design system colors — mirrors tailwind.config.ts.
 * These are the only colors used in the UI.
 */
const designColors = {
  primary: "#0D4F4A",
  secondary: "#B8E6E0",
  accent: "#F5C842",
  background: "#FAFAFA",
  "background-white": "#FFFFFF",
  text: "#2A2A2A",
  footer: "#0A2E2C",
};

/**
 * Meaningful text-on-background and UI-boundary color pairs actually
 * used in the design. Each entry records the foreground, background,
 * the minimum AA threshold required, and a human-readable context label.
 *
 * Pairs NOT used in the design (e.g. accent on background, text on footer)
 * are intentionally excluded — the property only covers combinations the
 * design actually applies.
 */
interface ColorPair {
  fg: string;
  bg: string;
  min: number;
  context: string;
}

const designColorPairs: ColorPair[] = [
  // ── Normal text (requires ≥ 4.5:1) ──────────────────────────────
  {
    fg: designColors.text,
    bg: designColors.background,
    min: WCAG_AA.NORMAL_TEXT,
    context: "body text on page background",
  },
  {
    fg: designColors.text,
    bg: designColors.secondary,
    min: WCAG_AA.NORMAL_TEXT,
    context: "body text on mint card background",
  },
  {
    fg: designColors["background-white"],
    bg: designColors.primary,
    min: WCAG_AA.NORMAL_TEXT,
    context: "white text on primary button",
  },
  {
    fg: designColors.background,
    bg: designColors.footer,
    min: WCAG_AA.NORMAL_TEXT,
    context: "footer text on dark footer background",
  },
  {
    fg: designColors.secondary,
    bg: designColors.footer,
    min: WCAG_AA.NORMAL_TEXT,
    context: "secondary text on footer background",
  },

  // ── Large text & UI component boundaries (requires ≥ 3:1) ───────
  {
    fg: designColors.primary,
    bg: designColors.background,
    min: WCAG_AA.LARGE_TEXT_OR_UI,
    context: "primary heading on page background",
  },
  {
    fg: designColors.primary,
    bg: designColors.secondary,
    min: WCAG_AA.LARGE_TEXT_OR_UI,
    context: "primary heading on mint card background",
  },
  {
    fg: designColors.accent,
    bg: designColors.primary,
    min: WCAG_AA.LARGE_TEXT_OR_UI,
    context: "accent text on primary background",
  },
];

/**
 * fast-check arbitrary that generates random #RRGGBB hex color strings.
 */
const hexColorArbitrary = fc
  .tuple(fc.nat(255), fc.nat(255), fc.nat(255))
  .map(
    ([r, g, b]) =>
      `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`,
  );

describe("Property 5: WCAG AA Contrast Compliance", () => {
  // ── Unit tests: verify each individual design pair ──────────────
  for (const pair of designColorPairs) {
    it(`meets AA for "${pair.context}" (${pair.fg} on ${pair.bg})`, () => {
      const ratio = contrastRatio(pair.fg, pair.bg);
      expect(ratio).toBeGreaterThanOrEqual(pair.min);
    });
  }

  // ── Property test: every design-system pair satisfies its AA threshold ─
  it("all design system color pairs meet their required AA threshold", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: designColorPairs.length - 1 }),
        (index) => {
          const pair = designColorPairs[index];
          const ratio = contrastRatio(pair.fg, pair.bg);
          expect(ratio).toBeGreaterThanOrEqual(pair.min);
        },
      ),
      { numRuns: 100 },
    );
  });

  // ── Property: contrast ratio is always ≥ 1 for any two colors ───
  it("contrast ratio is always >= 1 for any two hex colors", () => {
    fc.assert(
      fc.property(hexColorArbitrary, hexColorArbitrary, (a, b) => {
        return contrastRatio(a, b) >= 1;
      }),
      { numRuns: 200 },
    );
  });

  // ── Property: contrast ratio is symmetric (order-independent) ────
  it("contrast ratio is symmetric: contrast(a,b) === contrast(b,a)", () => {
    fc.assert(
      fc.property(hexColorArbitrary, hexColorArbitrary, (a, b) => {
        const ratioAB = contrastRatio(a, b);
        const ratioBA = contrastRatio(b, a);
        return Math.abs(ratioAB - ratioBA) < 1e-10;
      }),
      { numRuns: 200 },
    );
  });
});
