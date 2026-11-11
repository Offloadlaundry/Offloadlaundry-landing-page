# Requirements Document

## Introduction

OffLoad Laundry is a premium online laundry service based in SCBD, Jakarta Selatan that is currently in pre-launch. The service targets the middle and upper-middle market segments who value convenience, quality, and time savings. This feature defines a single-page landing website that introduces the OffLoad Laundry brand, builds awareness, and collects early access leads before the service officially launches.

The primary objective is to collect leads from people interested in joining the OffLoad Laundry early community. The primary conversion is a visitor filling a lead form with exactly two fields, Full Name and Instagram Username, after which the page displays a Thank You pop-up confirming the data was received.

The landing page must feel like a real brand website ready to welcome prospective customers, not a template, an assignment, or a site whose service can already be ordered. All copy is in Bahasa Indonesia, with English used only where it reads more naturally for a specific headline or label.

Scope includes: the single-page layout, lead form, Google Sheets integration, Privacy Policy pop-up, favicon, and responsive design. Scope excludes Google Tag Manager (GTM) and Google Analytics 4 (GA4) entirely for this phase.

## Glossary

- **OffLoad_Laundry_Landing_Page**: The single-page website built to introduce the OffLoad Laundry brand and collect early access leads.
- **Hero_Section**: The first visible section of the landing page containing the eyebrow, headline, supporting copy, and Lead_Form.
- **Lead_Form**: The form in the Hero_Section that collects Full Name and Instagram Username.
- **Thank_You_Popup**: The modal confirmation displayed after a successful form submission.
- **Privacy_Policy_Modal**: The pop-up that displays the Privacy Policy content without navigating to another page.
- **FAQ_Accordion**: The expandable and collapsible list of frequently asked questions.
- **Header_Navigation**: The top navigation bar containing the OffLoad Laundry wordmark, navigation links, and CTA button.
- **Early_Access_CTA_Section**: The section before the footer that repeats the call to join early access.
- **Apps_Script_Endpoint**: The Google Apps Script Web App URL that receives form submissions and writes them to Google Sheets.
- **Google_Sheets_Integration**: The mechanism that sends each form submission to a Google Sheets row in real time.
- **Instagram_Normalizer**: The component that converts a user-entered Instagram username into a single consistent stored format.
- **Favicon**: The small icon displayed in the browser tab that represents OffLoad Laundry.
- **Viewport**: The visible area of the web page in the browser window.
- **Above_the_Fold**: The portion of the page visible in the Viewport without scrolling on initial load.
- **Pre-launch**: The current state of OffLoad Laundry where the service is being prepared and is not yet accepting orders.

## Requirements

### Requirement 1: Landing Page Section Composition

**User Story:** As a visitor, I want a single-page landing website with clearly ordered sections, so that I can learn about OffLoad Laundry and find the early access form easily.

#### Acceptance Criteria

1. THE OffLoad_Laundry_Landing_Page SHALL render a single page containing the Header_Navigation, Hero_Section, Problem_and_Solution_Section, How_It_Works_Section, Brand_Value_Section, Early_Access_CTA_Section, FAQ_Section, and Footer in that order.
2. THE OffLoad_Laundry_Landing_Page SHALL not load additional pages when in-page navigation links are activated.

### Requirement 2: Above-the-fold Hero with Lead Form

**User Story:** As a visitor, I want to see the headline and lead form without scrolling, so that I can register my interest immediately.

#### Acceptance Criteria

1. WHEN the OffLoad_Laundry_Landing_Page loads on a desktop Viewport at least 1280px wide and 720px tall, THE Hero_Section SHALL display the headline, supporting copy, and Lead_Form entirely within the Above_the_Fold area.
2. WHEN the OffLoad_Laundry_Landing_Page loads on a mobile Viewport at least 360px wide and 640px tall, THE Hero_Section SHALL display the Lead_Form input fields and submit button within the Above_the_Fold area.
3. THE Hero_Section SHALL display the eyebrow text "SEGERA HADIR DI SCBD, JAKARTA SELATAN", the headline "Laundry Beres, Waktu Lebih Bebas.", and the supporting copy defined in the project brief.

### Requirement 3: Header Navigation

**User Story:** As a visitor, I want a clean header with navigation and a clear call-to-action, so that I can move between sections and reach the early access form.

#### Acceptance Criteria

1. THE Header_Navigation SHALL display the OffLoad Laundry wordmark, the navigation links "Beranda", "Kenapa OffLoad Laundry", "Cara Kerja", "FAQ", and a CTA button labeled "Gabung Early Access".
2. WHILE the Viewport width is at least 1024px, THE Header_Navigation SHALL display the navigation links in a horizontal row.
3. WHILE the Viewport width is less than 1024px, THE Header_Navigation SHALL display a mobile menu control that reveals the navigation links and CTA button when activated.

### Requirement 4: Navigation Smooth Scroll

**User Story:** As a visitor, I want navigation links to scroll smoothly to sections, so that I can reach content without abrupt jumps.

#### Acceptance Criteria

1. WHEN a navigation link is activated, THE OffLoad_Laundry_Landing_Page SHALL scroll smoothly to the corresponding section.
2. WHEN the "Gabung Early Access" button in the Header_Navigation is activated, THE OffLoad_Laundry_Landing_Page SHALL scroll smoothly to the Lead_Form in the Hero_Section.
3. WHEN the "Gabung Early Access" button in the Early_Access_CTA_Section is activated, THE OffLoad_Laundry_Landing_Page SHALL scroll smoothly to the Lead_Form in the Hero_Section.

### Requirement 5: Responsive Layout

**User Story:** As a visitor, I want the landing page to adapt to my device, so that I can read and interact comfortably on any screen.

#### Acceptance Criteria

1. WHILE the Viewport width is at least 1024px, THE OffLoad_Laundry_Landing_Page SHALL render a desktop layout.
2. WHILE the Viewport width is between 640px and 1023px, THE OffLoad_Laundry_Landing_Page SHALL render a tablet layout.
3. WHILE the Viewport width is less than 640px, THE OffLoad_Laundry_Landing_Page SHALL render a mobile layout.
4. THE OffLoad_Laundry_Landing_Page SHALL not produce horizontal scrolling at any Viewport width of at least 320px.
5. WHILE the Viewport width changes, THE OffLoad_Laundry_Landing_Page SHALL adjust font sizes, spacing, card layouts, navigation, and buttons to fit the available width.

### Requirement 6: Visual Design System

**User Story:** As a visitor, I want a modern, clean, friendly visual design, so that OffLoad Laundry feels like a credible, premium digital-first brand.

#### Acceptance Criteria

1. THE OffLoad_Laundry_Landing_Page SHALL use a primary color in the deep teal or dark green range, a secondary color in the soft mint or light aqua range, a white or very light neutral background, dark charcoal text, and a deep navy or dark teal Footer.
2. THE OffLoad_Laundry_Landing_Page SHALL apply a warm yellow or coral accent color sparingly.
3. THE OffLoad_Laundry_Landing_Page SHALL use a modern sans-serif font such as Inter or DM Sans for all text.
4. THE OffLoad_Laundry_Landing_Page SHALL maintain text and button contrast that satisfies WCAG AA standards.

### Requirement 7: Lead Form Fields

**User Story:** As a visitor, I want a short form with only my name and Instagram, so that I can register quickly.

#### Acceptance Criteria

1. THE Lead_Form SHALL contain exactly two input fields: "Nama Lengkap" and "Instagram Username".
2. THE Lead_Form SHALL not contain email, phone number, address, or any additional input fields.
3. THE "Nama Lengkap" field SHALL display the placeholder "Masukkan nama lengkap kamu".
4. THE "Instagram Username" field SHALL display the placeholder "@username".
5. THE Lead_Form SHALL display a submit button labeled "Daftar Early Access".
6. THE Lead_Form SHALL display the microcopy "Gratis untuk bergabung. Kami akan menghubungi kamu saat OffLoad Laundry siap hadir." directly below the submit button.
7. THE Lead_Form SHALL display a Privacy Policy link directly below the form.

### Requirement 8: Lead Form Validation

**User Story:** As a visitor, I want the form to validate my input, so that I am warned of errors before submission.

#### Acceptance Criteria

1. IF the "Nama Lengkap" field is empty at submission, THEN THE Lead_Form SHALL display a validation error and prevent submission.
2. IF the "Instagram Username" field is empty at submission, THEN THE Lead_Form SHALL display a validation error and prevent submission.
3. WHEN a visitor submits valid values for both fields, THE Lead_Form SHALL initiate the submission process.
4. THE Lead_Form SHALL associate each input field with an accessible programmatic label.

### Requirement 9: Instagram Username Normalization

**User Story:** As a developer, I want Instagram usernames normalized consistently, so that stored data is uniform regardless of how the visitor typed it.

#### Acceptance Criteria

1. WHEN a visitor enters an Instagram username with a leading "@" character, THE Instagram_Normalizer SHALL produce the same stored value as the identical username entered without the leading "@".
2. WHEN a visitor enters an Instagram username with leading or trailing whitespace, THE Instagram_Normalizer SHALL trim the whitespace before storing the value.
3. THE Instagram_Normalizer SHALL store every username in a single consistent format.
4. FOR ALL valid username inputs, applying the Instagram_Normalizer twice SHALL produce the same value as applying the Instagram_Normalizer once (idempotence property).
5. FOR ALL username inputs that differ only by a leading "@" or surrounding whitespace, the Instagram_Normalizer SHALL produce identical stored values (confluence property).

### Requirement 10: Lead Form Submission States

**User Story:** As a visitor, I want clear feedback during and after submission, so that I know the status of my registration.

#### Acceptance Criteria

1. WHEN a visitor submits the Lead_Form, THE Lead_Form SHALL display a loading state on the submit button and disable further submissions until the process completes.
2. WHILE a submission is in progress, THE Lead_Form SHALL prevent additional submission attempts.
3. IF the submission process fails, THEN THE Lead_Form SHALL display a clear error message and re-enable the submit button so the visitor can retry.

### Requirement 11: Thank You Pop-up

**User Story:** As a visitor, I want confirmation after registering, so that I know my interest was recorded.

#### Acceptance Criteria

1. WHEN the Apps_Script_Endpoint returns a success response, THE OffLoad_Laundry_Landing_Page SHALL display the Thank_You_Popup.
2. IF the Apps_Script_Endpoint does not return a success response, THEN THE OffLoad_Laundry_Landing_Page SHALL not display the Thank_You_Popup.
3. THE Thank_You_Popup SHALL display the title "Kamu Sudah Masuk Daftar!", the message "Terima kasih sudah tertarik dengan OffLoad Laundry. Kami akan mengabari kamu saat ada update terbaru menjelang peluncuran.", and a button labeled "Oke, Mengerti".
4. WHEN the "Oke, Mengerti" button is activated, THE Thank_You_Popup SHALL close.

### Requirement 12: Google Sheets Integration

**User Story:** As an OffLoad Laundry team member, I want every submission stored in Google Sheets in real time, so that I can manage early access leads.

#### Acceptance Criteria

1. WHEN the Apps_Script_Endpoint returns a success response, THE Google_Sheets_Integration SHALL have created a new row containing the submission timestamp, Full Name, and Instagram Username.
2. THE Google_Sheets_Integration SHALL send only the timestamp, Full Name, and Instagram Username for each submission.
3. THE Google_Sheets_Integration SHALL not send email, phone, address, or any additional fields.
4. THE OffLoad_Laundry_Landing_Page SHALL store the Apps_Script_Endpoint URL in an environment variable or configuration file that is not exposed in the frontend source delivered to the browser.
5. THE OffLoad_Laundry_Landing_Page SHALL not hardcode credentials or secrets in the frontend code.

### Requirement 13: Apps Script Endpoint Placeholder Configuration

**User Story:** As a developer, I want a clear configuration path when the endpoint is not yet available, so that I can connect Google Sheets without guessing.

#### Acceptance Criteria

1. IF the Apps_Script_Endpoint URL is not configured, THEN THE OffLoad_Laundry_Landing_Page SHALL provide a documented configuration placeholder and instructions explaining the steps required to connect the endpoint.
2. IF the Apps_Script_Endpoint URL is not configured, THEN THE OffLoad_Laundry_Landing_Page SHALL not fabricate an endpoint URL or claim that the integration is connected.
3. WHEN the Apps_Script_Endpoint URL becomes available, THE OffLoad_Laundry_Landing_Page SHALL allow a test submission and confirm that a new row appears in the Google Sheet.

### Requirement 14: Privacy Policy Modal

**User Story:** As a visitor, I want to read the Privacy Policy without leaving the page, so that I can understand how my data is used.

#### Acceptance Criteria

1. WHEN the Privacy Policy link below the Lead_Form is activated, THE OffLoad_Laundry_Landing_Page SHALL open the Privacy_Policy_Modal as a pop-up.
2. WHEN the Privacy Policy link is activated, THE OffLoad_Laundry_Landing_Page SHALL not navigate to a different page.
3. WHEN the Privacy_Policy_Modal close button is activated, THE Privacy_Policy_Modal SHALL close.
4. WHEN the Escape key is pressed while the Privacy_Policy_Modal is open, THE Privacy_Policy_Modal SHALL close.
5. WHILE the Privacy_Policy_Modal is open on a mobile Viewport, THE Privacy_Policy_Modal SHALL remain readable and scrollable.
6. THE Privacy_Policy_Modal SHALL display the Privacy Policy draft text defined in the project brief.

### Requirement 15: Favicon

**User Story:** As a visitor, I want a favicon in the browser tab, so that I can identify the OffLoad Laundry page among my open tabs.

#### Acceptance Criteria

1. THE OffLoad_Laundry_Landing_Page SHALL include a Favicon that displays in the browser tab.
2. WHERE a final logo is not available, THE OffLoad_Laundry_Landing_Page SHALL use a temporary monogram or simple symbol consistent with the visual brand.
3. THE Favicon SHALL load correctly on production deployment.

### Requirement 16: FAQ Accordion

**User Story:** As a visitor, I want answers to common questions in an accordion, so that I can expand only the questions I care about.

#### Acceptance Criteria

1. THE FAQ_Section SHALL display five FAQ items using an accordion interface.
2. WHEN a collapsed FAQ item is activated, THE FAQ_Accordion SHALL expand that item to reveal its answer.
3. WHEN an expanded FAQ item is activated, THE FAQ_Accordion SHALL collapse that item to hide its answer.
4. THE FAQ_Section SHALL display the five questions and answers defined in the project brief.

### Requirement 17: Scope Exclusion - Analytics

**User Story:** As a developer, I want the scope to exclude analytics for now, so that the launch focuses on page quality and the lead form.

#### Acceptance Criteria

1. THE OffLoad_Laundry_Landing_Page SHALL not include Google Tag Manager.
2. THE OffLoad_Laundry_Landing_Page SHALL not include Google Analytics 4.
3. THE OffLoad_Laundry_Landing_Page SHALL not include GA4 base code, custom GA4 form submission events, GTM container setup, or GA4 DebugView verification.

### Requirement 18: Pre-launch Content Integrity

**User Story:** As a visitor, I want accurate pre-launch messaging, so that I am not misled about service availability.

#### Acceptance Criteria

1. THE OffLoad_Laundry_Landing_Page SHALL communicate throughout the page that OffLoad Laundry is Pre-launch and not yet accepting orders.
2. THE OffLoad_Laundry_Landing_Page SHALL not display testimonials, customer ratings, customer counts, pricing, or unconfirmed operational claims such as free pickup, same-day service, express service, or service guarantees.
3. THE OffLoad_Laundry_Landing_Page SHALL not display lorem ipsum or placeholder filler text in place of final copy.

### Requirement 19: Website Language

**User Story:** As a visitor in SCBD, Jakarta Selatan, I want the page in Bahasa Indonesia, so that I can understand the content naturally.

#### Acceptance Criteria

1. THE OffLoad_Laundry_Landing_Page SHALL present body copy and form labels in Bahasa Indonesia.
2. WHERE an English term reads more naturally for a specific headline or label, THE OffLoad_Laundry_Landing_Page SHALL use that English term.

### Requirement 20: Contact Information Integrity

**User Story:** As a visitor, I want only verified contact information, so that I am not misled by fabricated details.

#### Acceptance Criteria

1. THE OffLoad_Laundry_Landing_Page SHALL not display fictional contact addresses, phone numbers, email addresses, or social media accounts.
2. WHERE contact details are not yet provided, THE OffLoad_Laundry_Landing_Page SHALL use clearly marked placeholders and shall not invent data.

### Requirement 21: Section Content Completeness

**User Story:** As a visitor, I want each section to present its full content, so that I understand what OffLoad Laundry offers and how it will work.

#### Acceptance Criteria

1. THE Problem_and_Solution_Section SHALL display the headline "Waktu Kamu Terlalu Berharga untuk Habis Mengurus Laundry." and three benefit cards titled "Lebih Praktis", "Lebih Banyak Waktu", and "Lebih Mudah Diakses".
2. THE How_It_Works_Section SHALL display the headline "Pengalaman Laundry, Kini Lebih Sederhana." and three conceptual steps titled "Kenali Kebutuhan Laundry Kamu", "Proses yang Lebih Praktis", and "Kembali ke Aktivitas Kamu".
3. THE Brand_Value_Section SHALL display the headline "Bukan Cuma Soal Pakaian Bersih. Ini Soal Waktu Kamu." with a supporting visual.
4. THE Early_Access_CTA_Section SHALL display the headline "Jadi yang Pertama Tahu." and a "Gabung Early Access" button.
5. THE Footer SHALL display the OffLoad Laundry wordmark, the short description "Pengalaman laundry yang lebih sederhana akan hadir di SCBD, Jakarta Selatan.", the navigation links, a Privacy Policy link, and the copyright "© 2026 OffLoad Laundry. Hak Cipta Dilindungi.".
