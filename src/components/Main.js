import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';
import CertificationsLanguages from './CertificationsLanguages';

const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        <HeroSection nav={nav} handleNav={handleNav} />
        <About />
        <Skills />
        <Services />
        <CertificationsLanguages />
        <Works />
        <Contact />
    </div>
  )
};

export default Main;
