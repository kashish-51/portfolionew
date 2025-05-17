import React, { useState } from "react";
import { motion } from "framer-motion";
import reactLogo from '../assets/react.svg'; // replace/add actual paths for other logos

import "./marque.css";

// List of skills and their icons (add the appropriate SVGs to your assets folder)
const skills = [
  { name: "HTML", icon: reactLogo },
  { name: "CSS", icon: reactLogo },
  { name: "JavaScript", icon: reactLogo },
  { name: "ReactJS", icon: reactLogo },
  { name: "Node.js", icon: reactLogo },
  { name: "Express.js", icon: reactLogo },
  { name: "MongoDB", icon: reactLogo },
  { name: "Tailwind CSS", icon: reactLogo },
  { name: "GitHub", icon: reactLogo },
];

const marqueeVariants = (isPaused) => ({
  animate: {
    x: isPaused ? 0 : [0, -1035],
    transition: {
      x: {
        repeat: isPaused ? 0 : Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
});

const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="bg-black" id="skills">
      <div className="marquee">
        <div className="flex justify-center items-center h-20 bg-black">
          <motion.div
            className="track"
            variants={marqueeVariants(isPaused)}
            animate="animate"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex">
              {skills.concat(skills).map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer"
                  style={{
                    background:
                      'linear-gradient(90.21deg, rgba(170, 54, 124, 0.3) -5.91%, rgba(74, 47, 189, 0.3) 111.58%)',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} Logo`}
                    className="w-12 h-12 mr-2 pl-4"
                  />
                  <span className="text-lg font-semibold text-white pr-12">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
