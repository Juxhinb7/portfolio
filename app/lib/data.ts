import PortfolioImage from "@/public/portfolioImage.png";
import MendoImage from "@/public/mendoImage.png";
import VideoBotImage from "@/public/unedited.png";

export const SKILLS = [
    {
        title: "HTML",
        color: "#54bc54"
    },
    {
        title: "CSS",
        color: "#247ae8"
    },
    {
        title: "JavaScript",
        color: "#e79e0d"
    },
    {
        title: "TypeScript",
        color: "#0f3994"
    },
    {
        title: "Tailwind",
        color: "#417af5"
    },
    {
        title: "Python",
        color: "#64bf21"
    },
    {
        title: "React",
        color: "#0ed7fb"
    },
    {
        title: "Django",
        color: "#006100"
    },
    {
        title: "Flask",
        color: "#000000"
    },
    {
        title: "Git",
        color: "#ec4e13"
    },
    {
        title: "SQL",
        color: "#a5a5a5"
    },
    {
        title: "OOP",
        color: "#000000"
    },
    {
        title: "Scrum",
        color: "#d9ad09"
    }
] as const;

export const PROJECTS = [
    {
        title: "Mendo",
        description: "A smart project management tool that is currently work in progress. The tool will have features like adding tasks, drag & drop functionality and AI Text Generation.",
        url: "/mendo",
        imageUrl: MendoImage,
        tools: ["React", "TypeScript", "Django", "Tailwind CSS", "Sqlite"]
    },
    {
        title: "Personal Portfolio",
        description: "This personal portfolio was built to demonstrate my current experience and skills.",
        url: "/github",
        imageUrl: PortfolioImage,
        tools: ["React", "Next", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "VideoBot",
        description: "This is a desktop application i developed to generate Youtube Shorts stories. It leverages AI for content generation.",
        url: "/VideoBot",
        imageUrl: VideoBotImage,
        tools: ["Python", "Tkinter", "Ollama AI Inference Engine"]
    }
] as const;