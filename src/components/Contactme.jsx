import React, { useRef } from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Footer from './Footer';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contactme = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div 
    id="contact" 
      className="contact mb-20 mt-20" 
      variants={variants} 
      ref={ref} 
      initial="initial" 
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <div className="display">  
            <FaEnvelope className='icon'/> 
            <h2> Mail</h2>
          </div>
          <span>singhkashish14203@gmail.com</span>
        </motion.div>


        <motion.div className="item" variants={variants}>
          <div className="display left">  
            < FaPhone className='icon'/> 
            <h2>Phone</h2>
          </div>
          <span>8828442592</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <div className="display">  
            <FaMapMarkerAlt className='icon'/> 
            <h2>Address</h2>
          </div> 
          <span>Mumbai</span>
        </motion.div>


      </motion.div>
      <motion.div className="formContainer">
        <motion.div 
          className="phoneSvg "
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg height="450px" width="450px" version="1.1" id="Layer_1"  viewBox="0 0 512.107 512.107" xmlSpace="preserve">
            <defs>
              <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'pink', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <g> 
              <g>
                <motion.path
                  strokeWidth={2}
                  fill="none"
                  className="gradient-stroke "
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 3 }}
                  d="M256,0.053c-141.12,0-256,114.88-256,256s114.88,256,255.893,256h2.773c101.973,0,137.387-46.827,145.813-61.333
                      c9.493-16.32,11.093-33.28,4.16-45.44c-4.053-6.933-10.667-11.84-18.453-13.76l4.48-4.48c14.293-14.293,14.187-37.44-0.107-51.733
                      c-1.067-1.067-2.133-2.027-3.307-2.987l-43.093-33.6c-13.227-10.347-31.893-10.347-45.013,0.107l-9.6,7.573
                      c-5.973,4.8-14.613,4.267-20.053-1.173L196.48,228c-5.44-5.44-5.973-14.187-1.173-20.16l7.573-9.6
                      c10.453-13.227,10.56-31.787,0.213-45.12l-33.493-43.2c-6.4-8.213-16.107-13.333-26.56-13.973
                      c-10.453-0.64-20.693,3.2-28.053,10.667l-27.52,27.52c-15.893,16-39.36,66.773,86.827,193.28
                      C256,409.333,306.24,426.507,334.08,426.507c17.493,0,27.627-6.507,33.173-12.053l5.973-5.973c1.92,1.813,4.48,2.773,7.147,2.88
                      c4.907,0,8.213,1.493,9.92,4.48c2.24,4.053,2.667,12.693-4.053,24.107c-14.613,24.96-56.213,51.52-130.133,50.667
                      c-129.387,0-234.667-105.28-234.667-234.667S126.613,21.387,256,21.387s234.667,105.28,234.667,234.667
                      c0,43.093-11.84,85.227-34.133,122.027c-3.307,4.907-2.133,11.52,2.773,14.827c4.907,3.307,11.52,2.133,14.827-2.773
                      c0.213-0.32,0.427-0.64,0.64-0.96c24.427-40.107,37.333-86.187,37.333-133.12C512,114.933,397.12,0.053,256,0.053z
                      M380.587,370.72c-0.32,0.427-0.747,0.96-1.173,1.387L352,399.627c-3.733,3.733-10.133,5.76-18.027,5.76
                      c-19.413,0-64.107-12.053-144.64-92.8c-121.28-121.6-90.667-159.253-86.827-163.2l27.52-27.52c2.773-2.88,6.613-4.48,10.667-4.48
                      h0.96c4.373,0.213,8.427,2.347,10.987,5.867l33.493,43.2c4.267,5.547,4.267,13.333-0.107,18.773l-7.573,9.6
                      c-11.413,14.507-10.24,35.307,2.773,48.427l77.013,77.227c13.12,13.12,33.92,14.293,48.427,2.88l9.6-7.573
                      c5.44-4.373,13.227-4.373,18.667-0.107l43.093,33.6C384.64,354.507,385.813,364.107,380.587,370.72z"
                />
              </g>
            </g>
          </svg>


        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button className='bg-gradient-to-r from-fuchsia-600 to-purple-600'>Submit</button>
        </motion.form>
      </motion.div>
    </motion.div>
    
  );
}

export default Contactme;
