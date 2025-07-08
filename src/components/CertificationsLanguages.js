import React from 'react';
import '../styles/Services.css';
import { motion } from 'framer-motion';

const CertificationsLanguages = () => {
  const fade = {
    opacity: 1,
    transition: { duration: 1.4 },
  };

  return (
    <div className='services' id='certifications-languages'>
      <div className='container'>
        <motion.div whileInView={fade} initial={{ opacity: 0 }} className='heading'>
          <p className='heading-sub-text'>Achievements & Communication</p>
          <p className='heading-text'>Certifications & Languages</p>
        </motion.div>
        <motion.div className='services-box' whileInView={fade} initial={{ opacity: 0 }}>
          <motion.div className='services-card' initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <p className='services-title'>🎖️ Certifications</p>
            <ul className='services-desc'>
              <li>✅ Build & Secure Networks in Google Cloud</li>
              <li>✅ Google Cloud AI + ML Foundations</li>
              <li>✅ Azure AI & Cloud Fundamentals</li>
              <li>✅ Cisco CCNA (in progress)</li>
              <li>✅ IBM AI SkillsBuild (in progress)</li>
            </ul>
          </motion.div>
          <motion.div className='services-card' initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}>
            <p className='services-title'>🗣️ Languages</p>
            <ul className='services-desc'>
              <li>English – Professional Working Proficiency</li>
              <li>Hindi – Native Speaker</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationsLanguages; 