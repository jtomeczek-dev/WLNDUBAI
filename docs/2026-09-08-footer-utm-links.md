# Footer links to JT CONSULTING: UTM tagging, English target, noreferrer removal

- **Date:** 2026-09-08
- **Release:** v1.5.14
- **Commit:** `ca75fb5`
- **Files touched:** `index.html`, `README.md`, `package.json`
- **Not touched:** `privacy-policy.html` (contains no link to the company site), Schema.org / JSON-LD blocks, the brand URL field

## What changed

Both footer links to the company site now carry UTM campaign parameters and point at the
English version of that site. `privacy-policy.html` was left alone.

| Location | `utm_content` | Visible label (unchanged) |
| --- | --- | --- |
| Author panel, after the `JULIUSZ TOMECZEK` line, ending with `• for WLN` | `podpis` | `JT Consulting` |
| Copyright line, `© 2026 … All rights reserved.` | `copyright` | `JT CONSULTING` |

The `/en/` path segment is deliberate. The whole bedubai page is English (`<html lang="en">`),
so a footer link should land the visitor on the company site in the language they are already
reading. There is no redirect from the Polish version to the English one, and none is wanted,
so the link must name `/en/` explicitly rather than rely on `https://jt-consulting.pl/`.

`rel` on both links dropped `noreferrer` and is now `rel="noopener"` alone. `noopener` is what
blocks `window.opener` tab hijacking; `noreferrer` added only the stripping of the `Referer`
header, which removes our ability to measure the traffic source and so defeats the UTM tagging
these links now carry. An HTML comment stating this intent sits at the top of the `<footer>`
element so a later review does not "fix" it back.

The two differing visible labels (`JT Consulting` and `JT CONSULTING`) were left as they are.
They have differed for a long time and this change concerns only the addresses and the `rel`
attribute.

## Acceptance conditions

### 1. Exactly two tagged links in `index.html`

Occurrences of `jt-consulting.pl/en/?utm_source=` in `index.html`: **2** — one per
`utm_content` value (`podpis`, `copyright`).

### 2. Counter-check: no stale forms left behind

A count of hits alone would also pass if a bad occurrence sat next to a good one, so both
stale forms were counted as well. Counted in `index.html` only, because this report quotes the
same addresses and a repository-wide count would describe the report rather than the page.

| Pattern | Count |
| --- | --- |
| `jt-consulting.pl/?` (address without the `/en/` segment) | **0** |
| `"https://jt-consulting.pl"` (bare address, no path, no parameters) | **0** |

### 3. `rel` value

Both anchors read exactly `rel="noopener"`.

The live page also returns three matches for the string `rel="noopener"`: the two anchors plus
the intent comment, which quotes the attribute in its text. The four remaining
`rel="noopener noreferrer"` occurrences on the page belong to the AI-tool links in the body
(Copilot, Gemini, Claude, Perplexity) and are outside the scope of this change.

### 4. Local rendering and a real click

Served locally over HTTP and checked in a browser. The rendered footer text was unchanged:

```
WLN SPRING CONFERENCE 2026 Dubai, UAE 12.02 - 14.02.2026 HOSTED BY PAOLETTI LEGAL CONSULTANTS
JULIUSZ TOMECZEK JT CONSULTING • FOR WLN © 2026 JT CONSULTING. All rights reserved.
PRIVACY POLICY VERSION 1.5.14
```

Computed styles and classes on both anchors were unchanged (`hover:text-white transition` and
`hover:text-white hover:opacity-100 transition`; 10px and 12px, `rgb(107,114,128)` and
`rgb(156,163,175)`). The diff touched only the `href` and `rel` attributes, no class, no text
node, so the appearance cannot have shifted.

Both links were clicked. The preview pane suppresses `target="_blank"` popups, so a capturing
click listener recorded what each click actually dispatched:

```json
[
  {"text": "JT Consulting",
   "href": "https://jt-consulting.pl/en/?utm_source=bedubai.aiforeveryone.com.pl&utm_medium=stopka&utm_campaign=realizacje&utm_content=podpis",
   "rel": "noopener", "target": "_blank"},
  {"text": "JT CONSULTING",
   "href": "https://jt-consulting.pl/en/?utm_source=bedubai.aiforeveryone.com.pl&utm_medium=stopka&utm_campaign=realizacje&utm_content=copyright",
   "rel": "noopener", "target": "_blank"}
]
```

That destination was then loaded for real in the browser and resolved to the company site,
with `document.documentElement.lang` reading `en` and the URL retaining `/en/` and every
parameter (no redirect).

### 5. Live page after deployment

Read back from `https://bedubai.aiforeveryone.com.pl/` after the deploy. The `href` attributes
as served:

```html
href="https://jt-consulting.pl/en/?utm_source=bedubai.aiforeveryone.com.pl&amp;utm_medium=stopka&amp;utm_campaign=realizacje&amp;utm_content=podpis"
href="https://jt-consulting.pl/en/?utm_source=bedubai.aiforeveryone.com.pl&amp;utm_medium=stopka&amp;utm_campaign=realizacje&amp;utm_content=copyright"
```

The live page reports `Version 1.5.14`, and the counts from conditions 1 and 2 hold there too
(2 / 0 / 0).

### 6. Destination status code and language

Requested the first link's address exactly as published, without following redirects:

```
http_code=200
redirect_url=[]
final_url=https://jt-consulting.pl/en/?utm_source=bedubai.aiforeveryone.com.pl&utm_medium=stopka&utm_campaign=realizacje&utm_content=podpis
```

- **Status code:** `200`
- **`<html lang>` as served:** `<html lang="en">`

The empty `redirect_url` and the unchanged `final_url` confirm the address is served directly,
not via a redirect. Two later `lang="pl"` attributes in that document belong to social-media
links carrying Polish `aria-label` text and do not affect the document language.
