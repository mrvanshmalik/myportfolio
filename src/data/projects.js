import hiremetricsImg from "../assets/images/projects/hiremetrics.png";
import mybookingImg from "../assets/images/projects/mybooking.png";
import haryanviImg from "../assets/images/projects/haryanvi-lunch.png";

export const projects = [
  {
    id: "hiremetrics",
    title: "HireMetrics",
    subtitle: "Enterprise ATS Dashboard ",
    image: hiremetricsImg,
    description:
      "A modern ATS-style dashboard with jobs, candidates pipeline, analytics, and admin-style UI patterns.",
    highlights: [
      "Clean component architecture (layout/ui/sections)",
      "Analytics-ready UI and reusable cards",
      "Smooth UI interactions and responsive layout",
    ],
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    links: {
      github: "https://github.com/mrvanshmalik/hiremetrics-frontend",
      live: "https://hiremetrics-enterprisesmanagement.vercel.app",
    },
  },
  {
    id: "mybooking",
    title: "MyBooking",
    subtitle: "Bus booking (search, filters, flow)",
    image: mybookingImg,
    description:
      "A booking-style UI inspired by real-world products with filters, lists, and a clean layout system.",
    highlights: [
      "Product-like layout with sections",
      "Reusable UI components",
      "Mobile responsive design",
    ],
    tech: ["React", "CSS", "UI/UX"],
    links: {
      github: "https://github.com/mrvanshmalik/mybooking",
      live: "https://",
    },
  },
  {
    id: "haryanvi-lunch",
    title: "Haryanvi Lunch Hotel",
    subtitle: "Restaurant website (landing + menu)",
    image: haryanviImg,
    description:
      "A restaurant landing page with menu sections, clean typography, and smooth UI structure.",
    highlights: ["Clean landing layout", "Fast & lightweight UI", "Simple UX"],
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/mrvanshmalik/haryanvi-lunch",
      live: "https://",
    },
  },
];




