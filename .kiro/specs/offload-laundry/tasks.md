# Implementation Plan: OffLoad Laundry Landing Page

## Overview

This implementation plan breaks down the OffLoad Laundry landing page into incremental coding tasks following the design document. The landing page is a single-page Next.js application with TypeScript and Tailwind CSS that introduces the OffLoad Laundry brand, builds awareness, and collects early access leads through a two-field form (Full Name and Instagram Username) integrated with Google Sheets via a server-side Route Handler proxy.

The plan follows the design's folder structure (app/, components/, lib/, content/, types/, tests/) and covers all 21 requirements. Property-based tests using fast-check validate the 5 correctness properties from the design. Each task builds on previous tasks, ending with full page assembly and wiring. The design uses TypeScript with Next.js App Router as the implementation language.

## Tasks

- [ ] 1. Set up project structure and configuration
  - [ ] 1.1 Initialize Next.js project with TypeScript and Tailwind CSS
    - Create a new Next.js project using App Router with TypeScript enabled
    - Configure tsconfig.json with strict mode for type safety
    - Set up app/globals.css with Tailwind CSS directives
    - Create next.config.ts with base configuration
    - _Requirements: 5.1, 5.2, 5.3 (responsive framework foundation)_

  - [ ] 1.2 Configure Tailwind design system (colors, fonts, breakpoints)
    - Extend tailwind.config.ts with custom color palette: primary (#0D4F4A deep teal), secondary (#B8E6E0 soft mint), accent (#F5C842 warm yellow), background (#FAFAFA), text (#2A2A2A charcoal), footer (#0A2E2C dark teal)
    - Configure font family: Inter, DM Sans, system-ui, sans-serif
    - Define responsive breakpoints: mobile (max 639px), tablet (640px-1023px), desktop (1024px+), xl (1280px+)
    - _Requirements: 6.1, 6.2, 6.3, 5.1, 5.2, 5.3_

  - [ ] 1.3 Set up environment configuration files
    - Create .env.example with APPS_SCRIPT_ENDPOINT placeholder (empty value, with documentation comment explaining setup steps)
    - Create .env.local placeholder with instructions for connecting the Apps Script endpoint
    - Create .gitignore to exclude .env.local, node_modules, .next
    - Ensure APPS_SCRIPT_ENDPOINT does NOT use NEXT_PUBLIC_ prefix so it stays server-side only
    - _Requirements: 12.4, 12.5, 13.1, 13.2_

  - [ ] 1.4 Set up testing framework
    - Install vitest, fast-check, @testing-library/react, @testing-library/jest-dom, jsdom as devDependencies
    - Create vitest.config.ts with jsdom environment and test file patterns (tests/**/*.test.ts, tests/**/*.test.tsx)
    - Add test scripts to package.json (vitest run for single execution)
    - _Requirements: 9.4, 9.5 (enables PBT), 8.1, 8.2 (enables validation tests)_

  - [ ] 1.5* Write property test for WCAG AA contrast compliance
    - **Property 5: WCAG AA Contrast Compliance**
    - Write a pure function that calculates WCAG contrast ratio between two hex colors
    - Write a fast-check property test verifying all design system color pairs meet AA standards (at least 4.5:1 for normal text, at least 3:1 for large text and UI component boundaries)
    - Tag test: `// Feature: offload-laundry, Property 5: WCAG AA Contrast Compliance`
    - **Validates: Requirements 6.4**

- [ ] 2. Define TypeScript types and content data
  - [ ] 2.1 Create TypeScript interfaces in types/index.ts
    - Define LeadSubmission, NormalizedSubmission, SubmitLeadResponse, AppsScriptResponse, FAQItem, FormStatus, ValidationErrors interfaces per design document
    - _Requirements: 12.2, 12.3 (data model constraints), 7.1 (form fields)_

  - [ ] 2.2 Create content data files
    - Create content/sections.ts with all section content from requirements: HeroContent (eyebrow "SEGERA HADIR DI SCBD, JAKARTA SELATAN", headline "Laundry Beres, Waktu Lebih Bebas.", supporting copy, form heading "Jadi yang Pertama Tahu!", form supporting text), ProblemSolutionContent (headline "Waktu Kamu Terlalu Berharga untuk Habis Mengurus Laundry." + 3 benefit cards: "Lebih Praktis", "Lebih Banyak Waktu", "Lebih Mudah Diakses"), HowItWorksContent (headline "Pengalaman Laundry, Kini Lebih Sederhana." + 3 steps: "Kenali Kebutuhan Laundry Kamu", "Proses yang Lebih Praktis", "Kembali ke Aktivitas Kamu"), BrandValueContent (headline "Bukan Cuma Soal Pakaian Bersih. Ini Soal Waktu Kamu."), EarlyAccessCTAContent (headline "Jadi yang Pertama Tahu." + button "Gabung Early Access"), FooterContent (wordmark, description "Pengalaman laundry yang lebih sederhana akan hadir di SCBD, Jakarta Selatan.", nav links, Privacy Policy link, copyright "© 2026 OffLoad Laundry. Hak Cipta Dilindungi.")
    - Create content/faq.ts with 5 FAQ items (questions and answers from project brief, rebranded to OffLoad Laundry)
    - Create content/privacy-policy.ts with Privacy Policy draft text from project brief (rebranded to OffLoad Laundry)
    - Ensure all copy is in Bahasa Indonesia (English only where it reads more naturally for specific headlines or labels)
    - Ensure no lorem ipsum, no fictional contact info, no testimonials/ratings/pricing, pre-launch messaging throughout
    - _Requirements: 2.3, 7.1-7.7, 16.4, 14.6, 18.1-18.3, 19.1-19.2, 20.1-20.2, 21.1-21.5_

- [ ] 3. Implement core lib functions
  - [ ] 3.1 Implement normalizeInstagramUsername pure function
    - Create lib/instagram-normalizer.ts with normalizeInstagramUsername(raw: string): string
    - Rules: trim leading/trailing whitespace, remove leading "@" character, return result without @ and without surrounding whitespace
    - Function must be pure (no side effects, deterministic)
    - _Requirements: 9.1, 9.2, 9.3_

  - [ ] 3.2* Write property tests for Instagram normalizer idempotence and confluence
    - **Property 1: Instagram Normalizer Idempotence**
    - Write fast-check test: for any string input, normalize(normalize(x)) === normalize(x)
    - Tag: `// Feature: offload-laundry, Property 1: Instagram Normalizer Idempotence`
    - **Validates: Requirements 9.4**
    - **Property 2: Instagram Normalizer Confluence**
    - Write fast-check test: for any two inputs differing only by leading @ or surrounding whitespace, normalize produces identical output; output always has no leading @ and no leading/trailing whitespace
    - Tag: `// Feature: offload-laundry, Property 2: Instagram Normalizer Confluence`
    - **Validates: Requirements 9.1, 9.2, 9.3, 9.5**

  - [ ] 3.3 Implement validateLeadForm pure function
    - Create lib/validation.ts with validateLeadForm function
    - Validate: fullName not empty and not whitespace-only; instagramUsername not empty and not whitespace-only
    - Return ValidationErrors object with field-specific error messages in Bahasa Indonesia
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ] 3.4* Write property test for whitespace-only input rejection
    - **Property 3: Whitespace-Only Input Rejection**
    - Write fast-check test: for any string composed entirely of whitespace, submitting it as either field value is rejected by validation, form prevents submission and displays error
    - Tag: `// Feature: offload-laundry, Property 3: Whitespace-Only Input Rejection`
    - **Validates: Requirements 8.1, 8.2**

- [ ] 4. Implement utility and navigation components
  - [ ] 4.1 Create utility components (Button, Input, Container, SectionHeading)
    - Create components/ui/Button.tsx with primary and accent variants, WCAG AA contrast compliance
    - Create components/ui/Input.tsx with accessible programmatic label association (htmlFor/id pairing), placeholder support
    - Create components/ui/Container.tsx with max-width and consistent padding
    - Create components/ui/SectionHeading.tsx with consistent heading hierarchy
    - _Requirements: 6.4, 7.3, 7.4, 8.4_

  - [ ] 4.2 Create SmoothScrollLink navigation component
    - Create components/navigation/SmoothScrollLink.tsx as client component
    - Implement smooth scroll to target section on click using scroll-behavior: smooth
    - Support anchor links to section IDs
    - _Requirements: 4.1, 4.2, 4.3_

  - [ ] 4.3 Create MobileMenu navigation component
    - Create components/navigation/MobileMenu.tsx as client component
    - Implement mobile menu toggle that reveals navigation links and CTA button when activated
    - Visible only when viewport width is less than 1024px
    - _Requirements: 3.3_

- [ ] 5. Implement Google Sheets integration
  - [ ] 5.1 Implement Route Handler proxy
    - Create app/api/submit-lead/route.ts
    - Parse JSON body, validate fullName and instagramUsername (not empty, not whitespace-only)
    - Normalize instagramUsername using normalizeInstagramUsername, trim fullName
    - Add ISO 8601 timestamp server-side
    - Read APPS_SCRIPT_ENDPOINT from process.env (not exposed to browser)
    - If endpoint not configured: return {success: false, message: "Endpoint belum dikonfigurasi"}
    - POST to Apps Script endpoint with only {timestamp, fullName, instagramUsername}
    - Return {success: true/false} to client; catch errors generically without exposing endpoint details
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 13.1, 13.2_

  - [ ] 5.2 Create client-side submit function
    - Create lib/submit-lead.ts with function to POST to /api/submit-lead
    - Send JSON body {fullName, instagramUsername}
    - Return SubmitLeadResponse {success, message?}
    - _Requirements: 10.1, 10.3, 11.1, 11.2_

  - [ ] 5.3 Create Google Apps Script code
    - Create apps-script/Code.gs reference file with doPost(e) function
    - Parse JSON body, append row to Google Sheet: [timestamp, fullName, instagramUsername]
    - Return JSON response {success: true/false}
    - Include setup instructions as comments (sheet header row, deploy as Web App, Execute as: Me, access: Anyone)
    - _Requirements: 12.1, 12.2, 12.3, 13.3_

  - [ ] 5.4* Write integration tests for Google Sheets integration
    - Test Route Handler accepts valid submission and forwards to endpoint (mock fetch)
    - Test payload contains only 3 fields (timestamp, fullName, instagramUsername), no email/phone/address
    - Test endpoint-not-configured scenario returns appropriate error
    - Test Route Handler proxy hides endpoint URL from client bundle
    - Tag: `// Integration: Google Sheets Integration`
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 13.1_

- [ ] 6. Implement form and modal components
  - [ ] 6.1 Implement ThankYouModal component
    - Create components/forms/ThankYouModal.tsx as client component
    - Display title "Kamu Sudah Masuk Daftar!", message "Terima kasih sudah tertarik dengan OffLoad Laundry. Kami akan mengabari kamu saat ada update terbaru menjelang peluncuran.", button "Oke, Mengerti"
    - Close on button click
    - Only displayed when submission succeeds (controlled by parent LeadForm via isOpen prop)
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

  - [ ] 6.2* Write unit tests for ThankYouModal
    - Test title, message, button text render correctly
    - Test close on "Oke, Mengerti" button click
    - Test modal does not display when isOpen is false
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

  - [ ] 6.3 Implement PrivacyPolicyModal component
    - Create components/modals/PrivacyPolicyModal.tsx as client component
    - Display Privacy Policy draft text from content/privacy-policy.ts
    - Close on close button click
    - Close on Escape key press (attach event listener when open)
    - Remain readable and scrollable on mobile viewport
    - No page navigation on open
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6_

  - [ ] 6.4* Write unit tests for PrivacyPolicyModal
    - Test opens on link activation, no page navigation
    - Test close on close button click
    - Test close on Escape key press
    - Test Privacy Policy content renders from content file
    - Test scrollable and readable on mobile viewport
    - _Requirements: 14.1-14.6_

  - [ ] 6.5 Implement LeadForm component (wired to integration layer)
    - Create components/forms/LeadForm.tsx as client component
    - Two fields: "Nama Lengkap" (placeholder "Masukkan nama lengkap kamu") and "Instagram Username" (placeholder "@username")
    - Submit button labeled "Daftar Early Access"
    - Microcopy "Gratis untuk bergabung. Kami akan menghubungi kamu saat OffLoad Laundry siap hadir." directly below submit button
    - Privacy Policy link below form that opens PrivacyPolicyModal
    - Client-side validation using validateLeadForm (show field errors, prevent submission on invalid)
    - Loading state on submit button, disable further submissions while submitting
    - On success: display ThankYouModal; on error: display error message and re-enable button
    - Wire to lib/submit-lead.ts for POST to /api/submit-lead
    - Accessible labels for all fields (htmlFor/id pairing)
    - No false success: ThankYouModal only shown when submit returns success: true
    - _Requirements: 7.1-7.7, 8.1-8.4, 10.1-10.3, 11.1-11.2_

  - [ ] 6.6* Write unit tests for LeadForm
    - Test field labels, placeholders, button text, microcopy, Privacy Policy link render correctly
    - Test validation: empty name triggers error, empty username triggers error, whitespace-only triggers error, valid input initiates submission
    - Test loading state appears on submit, double submission prevented
    - Test error state: error message shown, button re-enabled for retry
    - Test ThankYouModal shown only on success response, not on error
    - _Requirements: 7.1-7.7, 8.1-8.4, 10.1-10.3, 11.1-11.2_

- [ ] 7. Implement layout components
  - [ ] 7.1 Create Header component with navigation and mobile menu
    - Create components/layout/Header.tsx
    - Display OffLoad Laundry wordmark, nav links ("Beranda", "Kenapa OffLoad Laundry", "Cara Kerja", "FAQ"), CTA button "Gabung Early Access"
    - Horizontal nav links at viewport 1024px and above; mobile menu control below 1024px
    - CTA button scrolls smoothly to Lead_Form in Hero_Section
    - _Requirements: 3.1, 3.2, 3.3, 4.2_

  - [ ] 7.2* Write unit tests for Header
    - Test wordmark display, nav link labels, CTA button label
    - Test horizontal nav at desktop width, mobile menu at mobile width
    - Test CTA button triggers smooth scroll to lead form
    - _Requirements: 3.1, 3.2, 3.3, 4.2_

  - [ ] 7.3 Create Footer component
    - Create components/layout/Footer.tsx
    - Display OffLoad Laundry wordmark, short description "Pengalaman laundry yang lebih sederhana akan hadir di SCBD, Jakarta Selatan.", nav links, Privacy Policy link, copyright "© 2026 OffLoad Laundry. Hak Cipta Dilindungi."
    - Privacy Policy link opens PrivacyPolicyModal (not page navigation)
    - Use dark teal/footer background color
    - No fictional contact addresses, phone numbers, email, or social media accounts
    - _Requirements: 21.5, 14.1, 14.2, 20.1, 20.2_

  - [ ] 7.4* Write unit tests for Footer
    - Test wordmark, description, nav links, Privacy Policy link, copyright text
    - Test Privacy Policy link triggers modal (not page navigation)
    - Test no fictional contact info displayed
    - _Requirements: 21.5, 14.1, 14.2, 20.1, 20.2_

- [ ] 8. Implement section components
  - [ ] 8.1 Create HeroSection component
    - Create components/sections/HeroSection.tsx
    - Display eyebrow "SEGERA HADIR DI SCBD, JAKARTA SELATAN", headline "Laundry Beres, Waktu Lebih Bebas.", supporting copy from content
    - Import and render LeadForm component from components/forms/LeadForm.tsx
    - Ensure hero content and form fit above the fold at 1280x720 desktop and 360x640 mobile
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ] 8.2 Create ProblemSolution section component
    - Create components/sections/ProblemSolution.tsx
    - Display headline "Waktu Kamu Terlalu Berharga untuk Habis Mengurus Laundry." and 3 benefit cards: "Lebih Praktis", "Lebih Banyak Waktu", "Lebih Mudah Diakses"
    - Responsive card layout (stacked on mobile, grid on tablet/desktop)
    - No unconfirmed operational claims (no pickup, same-day, express, pricing)
    - _Requirements: 21.1, 5.1, 5.2, 5.3, 5.5, 18.2_

  - [ ] 8.3 Create HowItWorks section component
    - Create components/sections/HowItWorks.tsx
    - Display headline "Pengalaman Laundry, Kini Lebih Sederhana." and 3 steps: "Kenali Kebutuhan Laundry Kamu", "Proses yang Lebih Praktis", "Kembali ke Aktivitas Kamu"
    - Responsive step layout
    - _Requirements: 21.2, 5.1, 5.2, 5.3, 5.5_

  - [ ] 8.4 Create BrandValue section component
    - Create components/sections/BrandValue.tsx
    - Display headline "Bukan Cuma Soal Pakaian Bersih. Ini Soal Waktu Kamu." with supporting visual
    - _Requirements: 21.3, 5.5_

  - [ ] 8.5 Create EarlyAccessCTA section component
    - Create components/sections/EarlyAccessCTA.tsx
    - Display headline "Jadi yang Pertama Tahu." and "Gabung Early Access" button
    - Button uses SmoothScrollLink to scroll smoothly to Lead_Form in Hero_Section
    - _Requirements: 21.4, 4.3_

  - [ ] 8.6 Create FAQSection with accordion component
    - Create components/sections/FAQSection.tsx with FAQAccordion as client component
    - Display 5 FAQ items from content/faq.ts in expandable/collapsible accordion
    - Expand on click (collapsed to expanded), collapse on click (expanded to collapsed)
    - _Requirements: 16.1, 16.2, 16.3, 16.4_

  - [ ] 8.7* Write unit tests for FAQAccordion
    - Test 5 FAQ items render with correct question and answer content
    - Test expand on click (collapsed to expanded, answer becomes visible)
    - Test collapse on click (expanded to collapsed, answer becomes hidden)
    - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [ ] 9. Assemble page and implement favicon
  - [ ] 9.1 Create dynamic favicon
    - Create app/icon.tsx with dynamic icon generator rendering OffLoad Laundry monogram (letter "O" or simple symbol) in primary deep teal color
    - Ensure favicon displays in browser tab
    - _Requirements: 15.1, 15.2_

  - [ ] 9.2 Create root layout
    - Create app/layout.tsx with metadata (title, description in Bahasa Indonesia), font imports (Inter/DM Sans), favicon reference
    - Add CSS scroll-behavior: smooth and scroll-margin-top to app/globals.css for section anchor offset
    - _Requirements: 4.1, 6.3, 15.1_

  - [ ] 9.3 Compose all sections in app/page.tsx
    - Create app/page.tsx as Server Component composing sections in order: Header_Navigation, Hero_Section, Problem_and_Solution_Section, How_It_Works_Section, Brand_Value_Section, Early_Access_CTA_Section, FAQ_Section, Footer
    - No additional page loads; single-page with in-page smooth scroll navigation only
    - Wire LeadForm into HeroSection, ThankYouModal into LeadForm, PrivacyPolicyModal accessible from Footer and LeadForm
    - _Requirements: 1.1, 1.2, 2.1, 2.2_

  - [ ] 9.4* Write unit tests for page composition
    - Test all 8 sections render in correct order (Header, Hero, ProblemSolution, HowItWorks, BrandValue, EarlyAccessCTA, FAQ, Footer)
    - Test no additional page loads on in-page navigation
    - Test section content completeness (headlines, benefit cards, steps, CTA, footer content)
    - Test pre-launch messaging throughout (no testimonials, ratings, pricing, operational claims)
    - Test body copy and form labels in Bahasa Indonesia
    - _Requirements: 1.1, 1.2, 2.3, 18.1-18.3, 19.1, 21.1-21.5_

- [ ] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Additional verification tests
  - [ ] 11.1* Write property test for no horizontal scroll
    - **Property 4: No Horizontal Scroll at Any Viewport Width**
    - Write fast-check test verifying document scroll width does not exceed viewport width for any viewport width of at least 320px
    - Use mock rendering at various viewport widths
    - Tag: `// Feature: offload-laundry, Property 4: No Horizontal Scroll`
    - **Validates: Requirements 5.4**

  - [ ] 11.2* Write smoke tests
    - Test APPS_SCRIPT_ENDPOINT is in env var, not in frontend bundle
    - Test no hardcoded credentials or secrets in source code
    - Test favicon file exists and is referenced in metadata
    - Test no GTM container in source code
    - Test no GA4 code (base code, custom form submission events, container setup, DebugView) in source code
    - _Requirements: 12.4, 12.5, 15.1, 15.3, 17.1, 17.2, 17.3_

  - [ ] 11.3* Write responsive design tests
    - Test desktop (1280x720): hero above the fold, horizontal nav, desktop layout
    - Test tablet (640-1023px): tablet layout, spacing and font adjustments
    - Test mobile (360x640): form above the fold, mobile menu, mobile layout, modal readable and scrollable
    - _Requirements: 2.1, 2.2, 3.2, 3.3, 5.1, 5.2, 5.3, 14.5_

- [ ] 12. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties (Properties 1-5 from design)
- Unit tests validate specific examples and edge cases
- Integration tests verify Google Sheets integration with mocked endpoint
- Smoke tests verify configuration and scope exclusions (no GTM/GA4)
- Responsive tests verify layout at desktop, tablet, and mobile breakpoints
- Google Apps Script code (task 5.3) creates a reference file in the repo; developer must deploy it to Google Sheets manually
- Environment variable APPS_SCRIPT_ENDPOINT must never use NEXT_PUBLIC_ prefix to prevent browser exposure
- Content is rebranded from Simsalaclean to OffLoad Laundry; all copy uses OffLoad Laundry branding per requirements.md
- The design uses TypeScript with Next.js App Router as the implementation language

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "1.4", "2.1", "2.2"] },
    { "id": 2, "tasks": ["3.1", "3.3", "4.1", "1.5", "5.2", "9.1"] },
    { "id": 3, "tasks": ["3.2", "3.4", "4.2", "4.3", "5.1", "6.1", "6.3"] },
    { "id": 4, "tasks": ["5.3", "6.5"] },
    { "id": 5, "tasks": ["5.4", "6.2", "6.4", "6.6", "7.1", "7.3", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "9.2"] },
    { "id": 6, "tasks": ["7.2", "7.4", "8.7", "9.3"] },
    { "id": 7, "tasks": ["9.4", "11.1", "11.2", "11.3"] }
  ]
}
```
