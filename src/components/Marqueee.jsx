import React, { useState } from "react";
import { motion } from "framer-motion";
import reactLogo from '../assets/react.svg'; // Replace with correct icons
import "./marque.css";

// Skills array with placeholder icons (replace icons as needed)
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

// Marquee animation config
const marqueeVariants = (isPaused) => ({
  animate: {
    x: isPaused ? 0 : [0, 1035],
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

// Individual skill item
const MarqueeItem = ({ icon, name }) => (
  <div
    className="flex items-center text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer"
    style={{
      background:
        "linear-gradient(90.21deg, rgba(170, 54, 124, 0.3) -5.91%, rgba(74, 47, 189, 0.3) 111.58%)",
      overflow: "hidden",
      width: "100%",
    }}
  >
    <img src={icon} alt={`${name} Logo`} className="w-12 h-12 mr-2 pl-4" />
    <span className="text-lg font-semibold pr-12 text-white">{name}</span>
  </div>
);

const Marqueee = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the skills array to make marquee smooth
  const items = [...skills, ...skills];

  return (
    <div className="bg-black">
      <div className="marquee">
        <div
          className="flex justify-center items-center h-20 bg-black"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="track flex"
            variants={marqueeVariants(isPaused)}
            animate="animate"
          >
            {items.map((skill, index) => (
              <MarqueeItem key={index} icon={skill.icon} name={skill.name} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marqueee;
