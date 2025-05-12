import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

// Example Timeline Data
const timelineData = [
  {
    date: '2023',
    title: 'Senior Developer at XYZ Company',
    description: 'Developed and maintained web applications using React, Node.js, and MongoDB.',
    icon: '💻',
  },
  {
    date: '2022',
    title: 'Frontend Developer at ABC Corp',
    description: 'Led the front-end team to build a scalable e-commerce platform using React and Redux.',
    icon: '🛒',
  },
  {
    date: '2022',
    title: 'Frontend Developer at ABC Corp',
    description: 'Led the front-end team to build a scalable e-commerce platform using React and Redux.',
    icon: '🛒',
  },
  {
    date: '2022',
    title: 'Frontend Developer at ABC Corp',
    description: 'Led the front-end team to build a scalable e-commerce platform using React and Redux.',
    icon: '🛒',
  },
  {
    date: '2022',
    title: 'Frontend Developer at ABC Corp',
    description: 'Led the front-end team to build a scalable e-commerce platform using React and Redux.',
    icon: '🛒',
  },
  // Add more experiences here...
];

const Timeline = () => {
  return (
    <>
      <motion.h1 
        className="flex justify-center text-4xl mt-20 font-semibold my-8 text-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id="experience"
      >
        Experience
      </motion.h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'transparent',
              padding: '20px',
              minHeight: '200px',
              border: 'none',
            }}
            contentArrowStyle={{ borderRight: '7px solid transparent' }}
            date={item.date}
            iconStyle={{
              background: '#1a202c',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            icon={
              <motion.div
                className="flex items-center justify-center w-full h-full text-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                {item.icon}
              </motion.div>
            }
          >
            <div className="bg-gradient-to-l from-fuchsia-950 to-pink-800 p-4 rounded-lg h-full">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="vertical-timeline-element-title text-lg font-bold mb-2"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 + 0.3 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
