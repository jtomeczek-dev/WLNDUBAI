# HubSpot removed: contact button to JT CONSULTING, privacy policy update, blog links without trailing slash

- **Date:** 2026-10-17
- **Order read at:** 23:25:54 CEST (UTC+02:00), local clock reading taken right after reading the order
- **Release:** v1.5.15 (tag `v1.5.15`)
- **Commit:** `5a9f68a` (release); this report is a separate commit
- **Files touched:** `index.html`, `privacy-policy.html`, `style.css`, `README.md`, `package.json`; `Privacy Policy.pdf` removed with `git rm`
- **Not touched:** cookie banner, Google scripts, `email` field in structured data, the two footer links to JT CONSULTING, Change Log history entries in `README.md`, the Obsidian vault
- **Independent reviews:** none. The order did not require them (small HTML change, verified by the vault through a measurement on the live site).

## Starting point

`main` = `origin/main` = `d2a284a`, version 1.5.14, clean tree, no commits after 2026-09-08. This matches the order, so there was no difference to describe.

Counts measured before the first change (`hubspot` case-insensitive, everything else literal):

| File | `hubspot` | `26778388` | `hsforms` | `aiforeveryone.blog/en/` | `jt-consulting.pl/en/?utm_source=` |
| --- | --- | --- | --- | --- | --- |
| `index.html` | 2 | 2 | 1 | 4 | 2 |
| `privacy-policy.html` | 3 | 0 | 0 | 3 | 0 |
| `style.css` | 1 | 0 | 0 | 0 | 0 |
| `README.md` | 2 | 0 | 0 | 2 | 0 |

`Privacy Policy.pdf` was tracked by git. All values agree with the order.

## What changed

1. **`index.html`, `<section id="contact">`.** The comment reads `<!-- CONTACT SECTION -->`. The paragraph under "Get in touch" now invites the reader to use the contact form on the JT CONSULTING website (with `<strong>` kept around the name). In the right panel (`md:w-7/12`) the HubSpot embed (comment, `js-eu1.hsforms.net` script, `hs-form-frame` div) is replaced by one button, centred with `flex items-center justify-center` on the panel. The button reuses the classes of "Provide feedback on the guide", opens in a new tab and carries `rel="noopener"` without `noreferrer`, so the `Referer` header still reaches the target, as in the footer. The left panel is unchanged.
2. **Blog links.** All `https://aiforeveryone.blog/en/` in `index.html` (4) and `privacy-policy.html` (3), structured data included, now read `https://aiforeveryone.blog/en`. Measured during this session: `/en/` answers `301` with `Location: https://aiforeveryone.blog/en`, and `/en` answers `200`.
3. **`privacy-policy.html`.** Added "Last updated: October 2026"; section 2 replaces "Contact Form Handling" with "Contact by E-mail", drops "Business and Marketing Communication" and gains a paragraph stating that the site has no contact form of its own; section 3 has the new wording of both legal bases; section 4 loses "HubSpot, Inc."; section 6 loses "Communication (HubSpot)".
4. **`style.css`.** The `.hubspot-placeholder` rule is gone. Before removal, `hubspot-placeholder` occurred **0** times in `index.html` (and 0 times in any `.html` or `.js` file of the repository). `.form-mimic` stays.
5. **`Privacy Policy.pdf`** removed with `git rm`. `The Legal Promptbook.pdf` and `assets/FAQ in a Nutshell.pdf` stay.
6. **`README.md`.** The feature list item reads "Contact Section: Call-to-action button leading to the JT CONSULTING contact page." New v1.5.15 Change Log entry; history untouched.

## Acceptance conditions

### 1. No HubSpot left in the three page files

| File | before: `hubspot` / `hsforms` / `26778388` | after |
| --- | --- | --- |
| `index.html` | 2 / 1 / 2 | 0 / 0 / 0 |
| `privacy-policy.html` | 3 / 0 / 0 | 0 / 0 / 0 |
| `style.css` | 1 / 0 / 0 | 0 / 0 / 0 |
| **Total** | 6 / 1 / 2 | **0 / 0 / 0** |

### 2. Contact button address

`jt-consulting.pl/en/contact/?utm_source=` in `index.html`: **1**. The `href` as cut from the file:

```html
href="https://jt-consulting.pl/en/contact/?utm_source=bedubai.aiforeveryone.com.pl&amp;utm_medium=tresc&amp;utm_campaign=realizacje&amp;utm_content=kontakt"
```

Counter-check, `jt-consulting.pl/en/?utm_source=` (footer): still **2**.

### 3. Blog links

| File | `aiforeveryone.blog/en/` | `aiforeveryone.blog/en"` |
| --- | --- | --- |
| `index.html` | 0 | 4 |
| `privacy-policy.html` | 0 | 3 |
| **Total** | **0** | **7** |

### 4. PDF out of the repository

`git ls-files` does not list `Privacy Policy.pdf` (the check script returned `False`).

### 5. Anchor to the contact section

`id="contact"`: **1**, `href="#contact"`: **1**. On `http://localhost:3000/` at 1280 × 800 the page was scrolled to the top (`scrollY` 0), "Provide feedback on the guide" was clicked with a real mouse click, and after two seconds `location.hash` was `#contact`, `scrollY` was 4981 and the top of `#contact` sat at 0 px from the viewport top. Checked, not assumed.

### 6. Exact wording

Checked with a Python script that strips HTML tags, unescapes entities, collapses whitespace and searches for the strings from the order:

| Point | Result |
| --- | --- |
| 1b paragraph under "Get in touch" | OK |
| 3a "Last updated: October 2026" | OK |
| 3b "Contact by E-mail" item | OK |
| 3b paragraph under the section 2 list | OK |
| 3c Art. 6(1)(f) | OK |
| 3c Art. 6(1)(a) | OK |

The same script also confirmed the markup around them: `<strong>JT CONSULTING</strong>` inside the 1b paragraph, the 3a paragraph with `class="mb-8 italic text-sm"` immediately after the "This Privacy Policy defines" paragraph, `<strong>Contact by E-mail</strong>:`, the 3b paragraph with `class="mb-8"` directly after the section 2 list, both legal bases bold up to the colon, removed items absent, OVH Cloud, Google LLC, the USA transfer paragraph and the Google Analytics item in section 6 present. Every check returned OK.

### 7. Local rendering at 1280 px and 375 px

Served with `python -m http.server 3000` (port 3000 was free before the start; the server was started by this session and stopped at the end).

| Width | Panel (w × h) | Button (w × h) | Left minus right gap | Top minus bottom gap | `scrollWidth` |
| --- | --- | --- | --- | --- | --- |
| 1280 | 495 × 296 | 274 × 56 | 0 px | 0 px | 1265 (narrower than the viewport, no horizontal scroll) |
| 375 | 327 × 160 | 247 × 80 | 0 px | 0 px | 375 (no element in `#contact` reaches past the right edge) |

At 375 px the panels stack, the button stays centred and its label wraps onto two lines ("Contact JT" / "CONSULTING"); see "Outside the scope" below.

Clicking "Contact JT CONSULTING" with a real mouse click made the page open a new tab for `jt-consulting.pl`. The browser pane blocks new tabs opened by the agent, so the pane reported the attempt and kept the source tab on `localhost:3000`, which is the behaviour of `target="_blank"`. The anchor read `target="_blank"`, `rel="noopener"`, text `Contact JT CONSULTING`. The target address loaded separately in the browser shows a page titled "Contact — JT CONSULTING", and `curl` returned `200` for it.

### 8. Live site after deployment

Pushed at 23:29:53. A poll every 30 seconds saw `Version 1.5.14` at 23:29:58 and `Version 1.5.15` at 23:30:29. Read back from the live addresses at 23:31:01:

| Address | HTTP code | Measurement |
| --- | --- | --- |
| `https://bedubai.aiforeveryone.com.pl/` | `200` | footer `Version 1.5.15`; `26778388` 0, `hsforms` 0, `hubspot` (case-insensitive) 0 |
| `https://bedubai.aiforeveryone.com.pl/privacy-policy.html` | `200` | `hubspot` (case-insensitive) 0; "Last updated: October 2026" 1 |
| `https://bedubai.aiforeveryone.com.pl/Privacy%20Policy.pdf` | `404` | (file gone) |

Further counts on the live pages: `jt-consulting.pl/en/contact/?utm_source=` 1 and `jt-consulting.pl/en/?utm_source=` 2 on `/`; `aiforeveryone.blog/en/` 0 and `aiforeveryone.blog/en"` 7 on both pages together. The `href` as served:

```html
href="https://jt-consulting.pl/en/contact/?utm_source=bedubai.aiforeveryone.com.pl&amp;utm_medium=tresc&amp;utm_campaign=realizacje&amp;utm_content=kontakt"
```

## Outside the scope (reported, not changed)

1. **Tag `v1.5.14` does not exist**, neither locally nor on `origin`. The previous release was pushed without it; tags run up to `v1.5.13` and now continue with `v1.5.15`. It was not recreated, because the order did not ask for it.
2. **Contact button wraps at 375 px.** With `px-10` inside a `p-10` panel the label does not fit on one line. The class list was fixed by the order; `whitespace-nowrap` or a smaller horizontal padding on narrow screens would keep it on one line.
3. **Unused CSS beyond `.hubspot-placeholder`.** `.contact-form-wrapper`, `.form-mimic`, `.input-group` and `.form-note` occur 0 times in `index.html`, `privacy-policy.html` and `main.js`. `.form-mimic` was kept on purpose, as the order required.
4. **Cookie banner and consent.** The banner says "By continuing to visit this site you agree to our use of cookies" and offers only "Accept", with no way to decline or later withdraw consent from the page. The privacy policy now says consent is "expressed via the cookie settings", and section 6 lists only the Google Analytics opt-out browser add-on as a way to manage consent. In `index.html` the Google Tag Manager loader (around line 12) runs before `gtag('consent', 'default', …)` (around line 127). The banner and Google scripts were outside the scope of this change and were not touched.
5. **`README.md` mentions Polish versions** ("Privacy Policy subpages (EN/PL)"), but the repository has only `index.html` and `privacy-policy.html`, both English.
6. **Line endings.** Git warns that LF will be replaced by CRLF in the touched files (`core.autocrlf`); the working copies use LF, as before, and the diffs contain only the intended lines.
