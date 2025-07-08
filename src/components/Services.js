import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">Leadership & Impact</p>
                    <p className='heading-text'>POSITION OF RESPONSIBILITY</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <p className='services-title'>🚀 Director, Entrepreneurship Development Cell – BIT Mesra (May 2025 – Present)</p>
                        <p className='services-desc'>Led full-stack web development for E-Summit’24. Mentored juniors, managed deployment, and ensured a smooth tech experience for 300+ users.</p>
                    </div>
                    <div className="services-card">
                        <p className='services-title'>🧠 Microsoft Learn Student Ambassador (Feb – May 2024)</p>
                        <p className='services-desc'>Hosted sessions on Azure & AI. Mentored students on real-world cloud projects. Built awareness and adoption across campus.</p>
                    </div>
                    <div className="services-card">
                        <p className='services-title'>🌐 Google Developer Student Clubs (Oct 2023 – Present)</p>
                        <p className='services-desc'>Organized DevFest’24, Jharkhand’s largest tech event. Helped hundreds of students connect with modern tools and dev skills.</p>
                    </div>
                    <div className="services-card">
                        <p className='services-title'>🎖 NCC Cadet – BIT Mesra (Dec 2022 – Aug 2024)</p>
                        <p className='services-desc'>Completed NCC B certificate. Learned teamwork, discipline, and leadership.</p>
                    </div>
                    <div className="services-card">
                        <p className='services-title'>🏛 Campus Roles</p>
                        <ul className='services-desc'>
                            <li>MyGov India Ambassador (2+ years)</li>
                            <li>Campus Ambassador at Techfest IIT Bombay, Coding Ninjas, Internshala</li>
                            <li>Subject Matter Expert at Chegg</li>
                            <li>Robotics (Robolution), Embedded Systems Team</li>
                            <li>International MUN Intern, Philippines</li>
                        </ul>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
