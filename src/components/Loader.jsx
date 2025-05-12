import React from 'react';
import loader from '../assets/loader2.gif';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={loader}
        alt="Loading..."
        className="w-[50vh] h-[50vh]"
      />
    </div>
  );
};

export default Loader;
