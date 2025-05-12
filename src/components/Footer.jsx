import React from 'react';
import './Footer.css'; // Import the CSS file for keyframes

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 bg-opacity-60 backdrop-blur-lg shadow-lg border border-opacity-30 border-white text-white py-4 w-full z-10 animate-fade-in">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} <span className='text-fuchsia-500'>Name</span>. All rights reserved.</p>
        <p className="mt-2">Made with <span className="animate-heart font-bold"> &lt;3 </span></p>
      </div>
    </footer>
  );
};

export default Footer;
