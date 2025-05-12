import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';

const GitHubContributions = () => {
    return (
        <div className="py-10 flex flex-col items-center justify-center "> {/* Centering with Flexbox */}
          <motion.h2
    className="text-2xl font-bold text-center mb-5 text-purple-700"
    initial={{ opacity: 0, y: -50 }}  // Start higher up with zero opacity
    animate={{ opacity: 1, y: 0, rotate: [0, 5, -5, 0] }}  // Add a slight wobble
    transition={{
        duration: 2, 
        ease: "easeOut", 
        repeat: Infinity,  // Repeat indefinitely
        repeatType: "loop",  // Loop the animation
    }}
>
    My GitHub Contributions
</motion.h2>

            <motion.div
                className="w-full flex items-center justify-center overflow-x-auto"
                initial={{ opacity: 0, scale: 0.8 }}  // Start smaller with zero opacity
                animate={{ opacity: 1, scale: 1 }}    // Scale to full size
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.5,  // Delays the animation to start after the heading
                    type: "spring",  // Add a spring-like bounce
                    stiffness: 100,  // Controls the bounce effect
                }}
            >
                <GitHubCalendar
                    username="annoy004"
                    blockSize={16}
                    blockMargin={4}
                    color="hsl(265, 100%, 70%)" // A simple purple color scheme
                />
            </motion.div>
        </div>
    );
};

export default GitHubContributions;
