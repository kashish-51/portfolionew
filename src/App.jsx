import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Banner } from './components/Banner';
import Marquee from './components/marquee';
import Marqueee from './components/Marqueee';
import Marqueeee from './components/Marqueeee';
import Contactme from './components/Contactme';
import Projects from './components/Projects';
import Loader from './components/Loader';
import GitHubContributions from './components/GithubContributions';
import GitHubStats from './components/GithubStats';
import ExperienceSection from './components/ExperienceSection';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='bg-black'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Banner />
          <Marquee />
          <Marqueee />
          <Marqueeee />
          <Projects />
          <GitHubContributions/>
          <GitHubStats username="annoy004" />
          <ExperienceSection/>
          <Contactme />
        </>
      )}
    </div>
  );
};

export default App;
