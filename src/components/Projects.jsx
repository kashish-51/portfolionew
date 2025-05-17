import React, { useRef, useLayoutEffect } from 'react';
import code from '../assets/bg3.avif';
import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpeg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const bg1 = useRef(null);
  const img_container = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1.current,
        pinSpacing: false,
        pin: bg1.current,
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom"
      });

      gsap.set(container.current, {
        marginTop: -container.current.offsetHeight,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: img_container.current,
          pin: img_container.current,
          scrub: 1,
          start: "0% 0%",
        }
      })
      .to(img.current, { transform: "translateZ(2200px)" }, 0)
      .to(text1.current, { y: -800 }, 0.05, "<")
      .to(text2.current, { y: -800 }, 0.08, "<")
      .fromTo(container.current, 
        { yPercent: 100, scaleY: 1 },
         { yPercent: 0, scaleY: 1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='relative' id="projects">
        <div ref={bg1} className="bg bg-[#141414] absolute h-screen w-screen z-[-1]"></div>

        <section>
          <div ref={img_container} className='img-container perspective flex items-center justify-center h-screen w-screen'>
            <img ref={img} className='image' src={code} alt="man" />
            <div className='text-white absolute flex flex-col items-center justify-center'>
              <h1 ref={text1} className='text-[170px]'>
                <span className='text-stroke'>Projects</span> below
              </h1>
              <p ref={text2} className='opacity-50 w-48 text-[13px] text-center'>
                A showcase of the world's best aerial photography
              </p>
            </div>
          </div>

          <div ref={container} className="container flex py-12 flex-wrap items-center justify-around gap-[]">
            <div className="col-1 flex flex-col gap-8 pb-8">
              <div className="flip-card w-full sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] xl:w-[450px] xl:h-[400px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="w-full h-full" src={img1} alt="" />
                  </div>
                  <div className="flip-card-back">
                    <h1>Pokedex</h1>
                    <p>A responsive Pokémon directory built with React and Tailwind CSS, displaying all Pokémon with clean UI and dynamic data.</p>
                    <a href="https://xiv-tech-nhgj.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button className="your-button-class">See Project</button>
</a>
                  </div>
                </div>
              </div>

              <div className="flip-card w-full sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] xl:w-[450px] xl:h-[400px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="w-full h-full" src={img2} alt="" />
                  </div>
                  <div className="flip-card-back">
                    <h1>ChocolateTiffin</h1>
                    <p>Developed the backend for a cake ordering website using Node.js, Express, and MongoDB, handling product management, user data, and order processing.</p>
<a href="https://chocolatetiffin.onrender.com/" target="_blank" rel="noopener noreferrer">
  <button className="your-button-class">See Project</button>
</a>                  </div>
                </div>
              </div>

            </div>
            <div className="col-2 flex flex-col gap-8">
              <div className="flip-card w-full sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] xl:w-[450px] xl:h-[400px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="w-full h-full" src={img3} alt="" />
                  </div>
                  <div className="flip-card-back">
                    <h1>Todo Application</h1>
                    <p>A fullstack task manager built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to add, update, and delete tasks with real-time updates and a clean, responsive UI.</p>
                     <a href="https://github.com/kashish-51/innov_2024_sysntax_sensation" target="_blank" rel="noopener noreferrer">
  <button className="your-button-class">See Project</button>
</a>
                  </div>
                </div>
              </div>

              <div className="flip-card w-full sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[300px] lg:w-[400px] lg:h-[350px] xl:w-[450px] xl:h-[400px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img className="w-full h-full" src={img4} alt="" />
                  </div>
                  <div className="flip-card-back">
                    <h1>LandingPage</h1>
                    <p>A simple and smooth landing page built with React and Framer Motion for clean animations and responsive UI</p>
   <a href="https://credex-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button className="your-button-class">See Project</button>
</a>                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Projects;
