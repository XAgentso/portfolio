# Siddharth Singh — Portfolio

A personal portfolio built with React, Vite, and TailwindCSS. Showcasing projects in AI/ML, Cybersecurity, and Data Science.

## Tech Stack

- **React + Vite** — fast development and builds
- **TailwindCSS** — utility-first styling
- **TanStack Router** — file-based routing with SSR
- **GSAP** — smooth animations
- **Resend** — contact form email delivery
- **MDX** — blog posts with components

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root:

```
RESEND_API_KEY=your_resend_api_key
RESEND_TO_EMAIL=your@email.com
```

Get a free API key at [resend.com](https://resend.com).

## Project Structure

```
src/
├── components/      # Shared UI components
├── sections/        # Page sections (Hero, Projects, Works, etc.)
├── routes/          # TanStack Router routes
├── lib/             # Utilities and SEO helpers
└── styles.css       # Global styles and cyberpunk theme
public/
├── resume.pdf       # Resume download
└── slogo.png        # Personal logo
```

## Sections

- **Hero** — intro with animated text and cyberpunk effects
- **Projects** — 4 featured projects with tech stack badges
- **Works** — highlighted builds with hover effects
- **Showcase** — video/screenshot captures
- **Testimonials** — quotes from mentors and collaborators
- **Blog** — MDX-powered technical writing
- **Contact** — form that sends emails via Resend

---

© Siddharth Singh · [GitHub](https://github.com/XAgentso) · [LinkedIn](https://www.linkedin.com/in/siddharth-singh-a94963248/)
