import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import Header from "./Header";
import { motion } from 'framer-motion';
import man from '../assets/arnav.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';
import movingman from '../assets/codeman.gif'
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showOptions, setShowOptions] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleConnectClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <section className="banner bg-black px-4" id="home">
      <Container>
        <Row className="aligh-items-center lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-20 lg:ml-20">
          <Col xs={12} md={6} xl={7} className="lg:col-span-2 side">
            <TrackVisibility>
              {({ isVisible }) =>
                <motion.div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="tagline text-red-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    Welcome to my Portfolio
                  </motion.span>
                  <motion.h1
                    className="text-red-50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    {`Hi! I'm Arnav`}
                  </motion.h1>
                  <motion.h1
                    className="text-red-50 bg-gradient-to-r from-fuchsia-600 to-fuchsia-950 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  >
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                      <span className="wrap">-{text}</span>
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                  >
                    Lorem Ipsum has been
                  </motion.p>
                  <motion.button
                    onClick={handleConnectClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </motion.button>
                  {showOptions && (
                    <motion.div
                      className="social-options"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.a
                        href="https://www.linkedin.com/in/arnav-singh-75b846271/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaLinkedin size={25} />
                      </motion.a>
                      <motion.a
                        href="https://github.com/annoy004"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaGithub size={25} />
                      </motion.a>
                      <motion.a
                        href="mailto:avsingh02as02@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaEnvelope size={25} />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaInstagram size={25} />
                      </motion.a>
                    </motion.div>
                  )}
                </motion.div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5} className="bg-black">
            <TrackVisibility className="flex justify-center">
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <motion.div
                    className='bottom-11 right-0'
                    animate={{ y: [-20, 30] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <img className='-z-30' src={man} alt="man" />
                  </motion.div>
                </div>
              }
            </TrackVisibility>
            {/* <img src={movingman} /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
