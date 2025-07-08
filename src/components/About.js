import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'
import { useState, useEffect } from 'react';

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  // Add typewriter effect for the intro
  const catchyIntro = "Blending code, creativity, and curiosity to build real-world solutions — from live dashboards to community tech events.";
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(catchyIntro.slice(0, i + 1));
      i++;
      if (i === catchyIntro.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="about-intro-typewriter">
                          {displayedText}
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
                          I’m Nikhil Kumar, currently in my final year at BIT Mesra, majoring in B.Tech. I work at the intersection of software development, data science, and cloud computing.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }}>
                          I’ve worn many hats — Microsoft Learn Ambassador, Tech Head at EDC, open-source contributor, and student leader at GDSC and MyGov India. Whether it’s building a real-time stock dashboard, leading a 300+ attendee tech event, or mentoring juniors in full-stack development, I bring both technical depth and team spirit to the table.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1 }}>
                          I don’t believe in fluff. I believe in doing — and learning as I go.
                        </motion.p>
                        <br />
                        <motion.ul className="quick-facts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}>
                            <li>🏠 From Prayagraj, Uttar Pradesh, India</li>
                            <li>🎓 Final Year B.Tech @ BIT Mesra</li>
                            <li>💬 Fluent in English & Hindi</li>
                            <li>🧠 Mix of logic, design sense, and leadership</li>
                            <li>👀 Working on personal grooming & communication too!</li>
                        </motion.ul>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0, scale: 0.8}} animate={{x: 0, opacity: 1, scale: [1, 1.05, 1]}} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
