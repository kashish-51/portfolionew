import React from 'react';
import { motion } from 'framer-motion';
import man from '../assets/arnav.png';
import Marquee from './marquee';



const Header = () => {
  return (
    <div className='bg-black w-auto h-screen relative'>
        
      <Banner/>
      <motion.div
        className='absolute bottom-11 right-0'
        animate={{ y: [-20, 30] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <img  className=' -z-30' src={man} alt="man" />
      </motion.div>
    </div>
  );
};

export default Header;