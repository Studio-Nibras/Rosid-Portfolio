import travelinaImg from "../assets/projects/travelina.png";
import noteflowImg from "../assets/projects/noteflow.png";
import dietmateImg from "../assets/projects/diet-mate.png";

export const projects = [
  {
    number: "01",
    title: "Travelina",
    category: "My First Project",
    year: "2025",
    role: "Frontend Developer",
    description:
      "Travelina is my introductory web development project featuring a travel company landing page. It showcases my early hands-on experience in building responsive layouts with Bootstrap and adding functional interactivity using plain JavaScript.",
    tech: ["HTML", "Bootstrap", "JavaScript"],
    image: travelinaImg,
    link: "https://travelina.vercel.app",
  },
  {
    number: "02",
    title: "NoteFlow",
    category: "Full-Stack / AI",
    year: "2026",
    role: "Full-Stack Developer",
    description:
      "An AI-assisted learning workspace connecting speech-to-text, mind maps, quizzes and learning workflows.",
    tech: ["React", "Node.js", "Express.js", "Supabase"],
    image: noteflowImg,
    link: "https://noteflow-fe.vercel.app/",
  },
  {
    number: "03",
    title: "DietMate",
    category: "Web App",
    year: "2026",
    role: "Frontend Developer",
    description:
      "A web-based diet assessment experience built around a guided questionnaire and personalized journey.",
    tech: ["HTML", "SCSS", "JavaScript", "LocalStorage"],
    image: dietmateImg,
    link: "https://diet-mate-two.vercel.app",
  },
];
