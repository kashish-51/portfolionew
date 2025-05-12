import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const GitHubStats = ({ username }) => {
  const statsRef = useRef(null);
  const streakRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the GitHub Stats card
    gsap.fromTo(
      statsRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // GSAP animation for the Streak Stats card
    gsap.fromTo(
      streakRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`;

  return (
    <motion.div
      className="flex flex-col items-center  text-white p-6 rounded-lg shadow-lg space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-purple-700">GitHub Stats</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <motion.img
          ref={statsRef}
          src={statsUrl}
          alt={`${username}'s GitHub Stats`}
          className="rounded-lg w-full mr-4 md:w-auto"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          ref={streakRef}
          src={streakUrl}
          alt={`${username}'s GitHub Streak Stats`}
          className="rounded-lg w-full md:w-auto"
          whileHover={{ scale: 1.1 }}
        />
      </div>
    </motion.div>
  );
};

export default GitHubStats;
