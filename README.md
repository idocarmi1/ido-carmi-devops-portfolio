# Ido Carmi DevOps Portfolio

Professional personal portfolio website for Ido Carmi, presenting a recruiter-friendly story as a NOC Engineer building a path into DevOps, Cloud Infrastructure, DevSecOps, and AI-powered automation.

## Purpose

This website highlights:

- Professional background in NOC, networking, Linux, monitoring, and infrastructure troubleshooting
- Technical skills grouped by Linux, networking, DevOps, cloud, Python, and AI automation
- GitHub projects and a featured DevSecOps CI/CD portfolio project
- DevOps and AI automation learning roadmap
- Contact links for recruiters and hiring managers

The content is intentionally honest and portfolio-focused. It does not invent companies, fake roles, or production AI experience.

## Tech Stack

- React
- Vite
- CSS
- Static content only
- No backend required

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production build will be created in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Deploy to GitHub Pages

1. Install the GitHub Pages helper if you want to deploy from the command line:

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. If deploying to a project page, configure Vite with the correct base path in `vite.config.js`.
4. Run:

```bash
npm run deploy
```

## Project Structure

```text
src/
  components/
    Hero.jsx
    About.jsx
    Skills.jsx
    FeaturedProject.jsx
    Projects.jsx
    Roadmap.jsx
    Notes.jsx
    Contact.jsx
  data/
    projects.js
    skills.js
    roadmap.js
  App.jsx
  main.jsx
  styles.css

public/
  screenshots/
  resume.pdf
```

## Resume

The site includes a `Download Resume` button that points to:

```text
public/resume.pdf
```

Place the final resume PDF at that path before deploying. If the file is missing, the button will still render but the download URL will not resolve.

## Screenshot Placeholder

The featured project includes a clean placeholder for the AI Incident Assistant screenshot. When a screenshot is ready, place it at:

```text
public/screenshots/ai-incident-assistant.png
```

The current site uses a designed placeholder card, so deployment does not depend on the image existing.

## Future Improvements

- Add the final resume PDF
- Replace the AI Incident Assistant placeholder with a real screenshot
- Add real blog posts for the technical notes section
- Add more project screenshots
- Add GitHub Pages configuration if needed
- Add analytics after deployment
- Add OpenAI API integration to the AI Incident Assistant project when ready
