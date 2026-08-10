import { FaGitAlt, FaDocker, FaJava } from "react-icons/fa6";

import docker from "../assets/images/certifications/DEVOPS.png";
import git from "../assets/images/certifications/GITHUB.png";
import jee from "../assets/images/certifications/JEE.png";

export const certifications = [
  {
    title: "Docker Basics",
    period: "03 – 06 Mars 2026",
    organization: "Orange Digital Center Madagascar",
    icon: FaDocker,
    color: "#2496ED",
    image: docker,
  },

  {
    title: "Git & GitHub Workflows",
    period: "19 – 22 Mai 2026",
    organization: "Orange Digital Center Madagascar",
    icon: FaGitAlt,
    color: "#F05032",
    image: git,
  },

  {
    title: "JEE / JSP",
    period: "2026",
    organization: "Orange Digital Center Madagascar",
    icon: FaJava,
    color: "#ED8B00",
    image: jee,
  },
];