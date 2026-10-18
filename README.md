# Abhishek Gupta — Software Engineer Portfolio

A premium, recruiter-first personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed specifically for software engineering job applications, technical recruiters, hiring managers, and HR teams.

Live Preview & Production Build:
- **Candidate:** Abhishek Gupta
- **Role:** Full-Stack Developer | AI Integration
- **Target:** Software Engineer & Full-Stack Developer roles / internships
- **Contact:** abhishekgupta639415@gmail.com | +91 6394158352

---

## 🚀 Key Highlights & Sections

1. **Recruiter Fast-Track Header & Hero**:
   - Immediate value proposition: Full-Stack Developer (MERN + AI).
   - 3 verified proof indicators:
     - **2 Production Full-Stack Apps Deployed**
     - **250+ DSA Problems Solved on LeetCode**
     - **AWS Certified Cloud Practitioner**
   - Quick action bar: Instant "Copy Email", "Copy Phone", "Resume PDF", and "Projects".

2. **Verified Credentials & Certifications (Interactive Modal)**:
   - **Certifications**:
     - *AWS Certified Cloud Practitioner* (Issue: Feb 23, 2026 | Exp: Feb 23, 2029 | Val: `2464558ea06b42a0a2adffc4420af489` | Direct AWS verification link)
     - *Cisco Networking Academy* (Network Technician Career Path | Course Completion: Apr 15, 2026 | Scan QR code on certificate to verify)
   - **Internships**:
     - *MLSA KIET* (100-Hour Full Stack Web Development Internship | Official GitHub repository PR submission)
     - *Codveda Technologies* (Web Development Intern | Nov–Dec 2025 | Issued: Jan 05, 2026 | Direct certificate preview in both Experience & Credentials sections)
   - **Achievements**:
     - *Smart India Hackathon 2025* (Institute Finalist among 100+ teams)
     - *INNOTECH 2025* (Certificate of Achievement | KIET Group of Institutions | Nov 14, 2025)
     - *250+ LeetCode Problems* (DSA & algorithmic problem solving)
   - **Reusable CertificateModal**: High-resolution image preview, responsive design, ESC/backdrop dismissal, zoom controls, download options, and direct verification URLs.

3. **Featured Projects (Production Live Deployments)**:
   - **NetflixGPT**: AI-powered movie discovery platform integrating OpenAI GPT API, Firebase Auth, TMDB API, and Redux Toolkit.
     - *Performance:* ~31% initial bundle size reduction via route-level code splitting (`React.lazy()` & `Suspense`).
     - *Live Demo:* [netflixgpt-khaki.vercel.app](https://netflixgpt-khaki.vercel.app/)
     - *Source Code:* [github.com/abhigupta639415/netflixgpt](https://github.com/abhigupta639415/netflixgpt)
   - **NutriGenie**: Full-stack MERN health platform integrating Google Gemini AI and Gemini Vision for multimodal calorie/macro analysis, JWT authentication, OTP verification via Brevo, and 20+ REST API endpoints.
     - *Deployment:* Vercel (Frontend), Render (Backend), Cloud MongoDB (Database).
     - *Live Demo:* [frontend-blush-nine-11.vercel.app](https://frontend-blush-nine-11.vercel.app/)
     - *Source Code:* [github.com/abhigupta639415/Nutri_Genie](https://github.com/abhigupta639415/Nutri_Genie)
   - Interactive **"View Details"** modal providing full system architecture breakdowns.

3. **Work Experience**:
   - **Codveda Technologies** (Front-End Development Intern | Nov 2025 – Jan 2026)
   - Quantified impact: 12+ reusable React components, 30% reduction in development time, 15+ responsive pages, 20% bug reduction.

4. **Academic Background**:
   - **KIET Group of Institutions, Ghaziabad** — B.Tech in Computer Science & Engineering (Aug 2023 – Jul 2027).
   - Coursework: Data Structures & Algorithms, OOP, DBMS, System Design, Computer Networks, Operating Systems.

5. **Technical Skills**:
   - Categorized strictly by verified candidate experience: Languages (C, C++, JS), Frontend (React, Redux Toolkit, Tailwind, CSS3, HTML5), Backend (Node.js, Express.js, REST API Design), Database (MongoDB, Mongoose), Auth & Security (JWT, Firebase Auth, bcrypt, OTP, express-validator), AI Integration (OpenAI GPT, Google Gemini, Gemini Vision), Tools & Platforms (Git, GitHub, AWS EC2, S3, IAM, Vercel, Render, Postman, VS Code).

6. **Problem Solving**:
   - 250+ LeetCode problems solved across 8 foundational domains: Arrays, Strings, Linked Lists, Recursion, Searching, Sorting, Greedy Algorithms, Dynamic Programming.
   - Direct link to profile: [leetcode.com/u/abhishek639415/](https://leetcode.com/u/abhishek639415/)

7. **Resume CTA & In-Browser Viewer**:
   - Instant 1-click download of `Abhishek_Gupta_Resume.pdf`.
   - In-browser interactive preview with print-ready stylesheet.

8. **Contact Section**:
   - Interactive contact form with client-side validation.
   - Quick one-click copy buttons for email and phone.
   - External service support via `.env` (`VITE_CONTACT_FORM_ENDPOINT`).

---

## 🛠️ Project Structure

```text
profile_resume/
├── public/
│   ├── Abhishek_Gupta_Resume.pdf  # Downloadable PDF resume asset
│   └── favicon.svg                # Geometric "AG" brand icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky glassmorphic navbar with active scroll spy
│   │   ├── Hero.jsx               # Recruiter-focused hero with code architecture card
│   │   ├── RecruiterQuickView.jsx # Fast-track summary bar for recruiters
│   │   ├── About.jsx              # Candidate overview with 4 credential cards
│   │   ├── Education.jsx          # KIET B.Tech CS card with coursework tags
│   │   ├── Experience.jsx         # Codveda Technologies internship timeline
│   │   ├── Specializations.jsx    # "What I Build" (Full-Stack, AI, REST, Frontend)
│   │   ├── Projects.jsx           # Featured project showcase container
│   │   ├── ProjectCard.jsx        # Realistic browser mockup cards with metrics
│   │   ├── ProjectModal.jsx       # Architectural deep-dive dialog
│   │   ├── Skills.jsx             # Categorized technical skill pills with filter
│   │   ├── ProblemSolving.jsx     # LeetCode 250+ focus with 8 algorithmic domains
│   │   ├── Achievements.jsx       # AWS Cloud Practitioner, SIH 2025, LeetCode
│   │   ├── ResumeSection.jsx      # Resume CTA block
│   │   ├── ResumeModal.jsx        # Full in-browser printable resume modal
│   │   ├── Contact.jsx            # Form & direct contact cards (email, phone, socials)
│   │   └── Footer.jsx             # Standard copyright and profiles
│   ├── data/
│   │   └── portfolioData.js       # Central data repository (100% verified facts)
│   ├── App.jsx                    # Root app orchestrator
│   ├── index.css                  # Tailwind styles and custom utilities
│   └── main.jsx                   # React 18 DOM root
├── index.html                     # SEO metadata, OpenGraph tags, Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚡ Development & Deployment

### 1. Run Locally
```bash
npm install
npm run dev
```

### 2. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 3. Deploy to Vercel (Recommended)
You can deploy with one command:
```bash
npx vercel
```
Or connect your GitHub repository directly to [Vercel](https://vercel.com).

### 4. Updating the Resume PDF
To update your resume in the future:
1. Export your latest resume as a PDF named `Abhishek_Gupta_Resume.pdf`.
2. Replace the file in `public/Abhishek_Gupta_Resume.pdf`.
3. Run `npm run build` or push to GitHub. All "Download Resume" buttons will automatically serve your latest PDF.

### 5. Contact Form Backend (Optional)
By default, the contact form validates input and opens your mail client with prefilled details.
To connect to an email backend service like Formspree or EmailJS:
1. Create a `.env.local` file:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```
2. The form will automatically POST to that endpoint with JSON payloads.
