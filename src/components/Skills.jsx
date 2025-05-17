import React from "react";
import bgGif from "../assets/bubbles.gif";


const skills = [
  "ReactJS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git & GitHub",
  "MySql",
  "Figma",
  "Bootstrap",
  "Material UI",
  "Postman",
];

const Skills = () => {
  return (
    <div
      className="relative h-fit py-20 flex items-center justify-center"   id="skills"
      style={{
        backgroundImage: `url(${bgGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-6xl">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-10 tracking-wide text-center">
          My Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 min-w-[140px] text-center text-white text-lg font-medium rounded-2xl border border-pink-400 shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
