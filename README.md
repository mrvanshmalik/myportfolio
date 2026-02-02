# My Portfolio ⚡

A clean, responsive, and fast developer portfolio built with **React**, **Vite**, and **Tailwind CSS**.  
Includes sections for **Projects, Skills, Experience, Education, Certifications, and Contact** with smooth UI and reusable components.

---

## ✨ Highlights

- 📱 Fully responsive (mobile / tablet / desktop)
- 🧩 Clean component structure (UI + Layout + Sections)
- 🧠 Data-driven content (update everything from `/src/data/*`)
- 🎯 SEO-ready (`/src/app/seo.js`)
- 🖼️ OG Image + Resume in `/public`
- 🧰 Smooth animations-ready (Framer Motion friendly)

---

## 🛠️ Tech Stack

- **Frontend:** React (JSX)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** (Lucide)
- **Deployment:** Vercel 

---

## 📁 Project Structure (Locked)

```bash
public/
  resume.pdf
  og-image.png

src/
  app/
    App.jsx
    seo.js

  assets/
    images/
      projects/
        hiremetrics.png
        mybooking.png
        haryanvi-lunch.png

  components/
    layout/
      Navbar.jsx
      Footer.jsx
      Container.jsx
      Section.jsx

    ui/
      Button.jsx
      Card.jsx
      Badge.jsx
      IconButton.jsx
      Modal.jsx

    projects/
      ProjectCard.jsx
      ProjectModal.jsx

  data/
    profile.js
    skills.js
    projects.js
    experience.js
    education.js
    certifications.js

  hooks/
    useScrollSpy.js
    useReducedMotion.js

  sections/
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Education.jsx
    Certifications.jsx
    Contact.jsx

  utils/
    cn.js
    motion.js

  index.css
  main.jsx
  index.html

tailwind.config.js
vite.config.js
package.json
