import React, { useState } from "react";
import { motion } from "framer-motion";
import react from '../assets/react.svg';
import "./marque.css";

const marqueeVariants = {
  animate: (isPaused) => ({
    x: isPaused ? 0 : [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  }),
};

const Marqueeee = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-black mb-32">
      <div className="marquee">
        <div className="flex justify-center items-center h-20 bg-black">
          <motion.div
            className="track"
            variants={marqueeVariants}
            custom={isPaused}
            animate="animate"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex">
              {[...Array(15)].map((_, index) => (
                <div
                key={index}
                className="flex items-center text-white  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 border-gray-300 rounded-lg mx-6 py-4 shadow-md hover:bg-gray-100 cursor-pointer"
              style={{ background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.3) -5.91%, rgba(74, 47, 189, 0.3) 111.58%)', overflow: 'hidden', width: '100%' }}
              >
                  <img src={react} alt="React Logo" className="w-12 text-white h-12 mr-2 pl-4" />
                  <span className="text-lg font-semibold text-white pr-12">Start using</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Marqueeee;
