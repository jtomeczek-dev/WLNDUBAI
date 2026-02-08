# WLN Dubai 2026 - AI in Legal Business

A premium landing page created for the **Warwick Legal Network (WLN) Spring Conference 2026** in Dubai. This project showcases AI solutions for law firms, developed by **JT Consulting**.

## 🚀 Features
- **Hero Video Background**: Optimized 4K background video of Dubai skyline.
- **Brand Consistency**: Color scheme and assets aligned with official WLN branding (Navy Blue & Brand Orange).
- **Responsive Design**: Fully compatible with desktop and mobile devices.
- **Integrated Contact Flow**: HubSpot-ready contact section for business inquiries.
- **Optimized Assets**: High-performance video (WebM/MP4) and custom favicons.
- **Git Optimization**: Strategically tracked assets to ensure reliable deployment of critical media files.

## 🛠 Tech Stack
- **HTML5 / CSS3** (Custom Brand Theme)
- **Tailwind CSS** (Utility Framework)
- **Vanilla JavaScript** (Interactivity)
- **FFmpeg / ImageMagick** (Asset Optimization)

## 📦 Project Structure
- `index.html`: Main landing page structure and internal styles.
- `style.css`: Global design system and component styles.
- `assets/`: Image assets including logos and favicons.
- `VIDEO/`: Optimized video versions for the Hero section.

## 🚦 Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/jtomeczek-dev/WLNDUBAI.git
   ```
2. Run locally using any static file server:
   ```bash
   npx serve .
   ```
   Open `http://localhost:3000` in your browser.

## 📄 License
Created by **Juliusz Tomeczek • JT Consulting**. All rights reserved.

---
### 📝 Change Log
#### v1.2.0
- Embedded YouTube player for Video 2 (Practice & Prompts) in both EN and PL versions.
- Completed the "Conference Materials" section with both videos functional.

#### v1.1.9

#### v1.1.8
- Implemented multi-language support (EN/PL).
- English is now the default language (index.html).
- Polish version moved to subfolder (`/pl/index.html`).
- Added language switcher to the header.
- Synchronized version footer across all language versions.

#### v1.1.6
- Added version information to the website footer.
- Synchronized HTML versioning with automated release workflow.

#### v1.1.5
- Updated `.ai_rules` to respect manual deployment process.
- Synchronized documentation with latest project state.

#### v1.1.4
- Fixed missing background video on live deployment by force-adding optimized assets.
- Adjusted `.gitignore` to allow critical media files.
