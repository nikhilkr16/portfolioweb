import React, { useState } from "react";
import "../styles/HeroSection.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import CV from "../data/Peace Jinadu-Paul Resume.pdf";
import { useEffect } from "react";

// Add staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring' } },
};

const HeroSection = ({ nav, handleNav }) => {
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: "linear" });
	};

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	window.addEventListener("scroll", toggleVisible);

	const heroVariants = {
		hidden: {
			opacity: 0,
			y: "-50%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<div className='hero-section' name='home' id='home'>
			<div className='hero-overlay'>
				<motion.div
					initial={{ opacity: 0.2, scale: 1 }}
					animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
					transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
					className='hero-bg-animated'
					style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
				/>
			</div>
			<motion.div
				// viewport={{ once: true }}
				variants={menuVariants}
				initial='hidden'
				whileInView='visible'
				onClick={handleNav}
				className='menu-icon'>
				{nav ? <FaTimes /> : <FaBars />}
			</motion.div>
			<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className={visible ? "to-top-icon show" : "to-top-icon hide"}
				onClick={scrollToTop}>
				<AiOutlineArrowUp />
			</motion.div>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				className='hero-content'>
				<motion.p className='hero-intro' variants={itemVariants}>
					<span>Hi, I’m Nikhil Kumar</span>
				</motion.p>
				<motion.p className='hero-desc' variants={itemVariants}>
					Final Year B.Tech Student • SDE + Data Enthusiast • AI + Cloud Explorer
				</motion.p>
				<motion.p className='hero-subheadline' variants={itemVariants}>
					Blending code, creativity, and curiosity to build real-world solutions — from live dashboards to community tech events.
				</motion.p>
			</motion.div>
			<motion.span
				variants={itemVariants}
				initial='hidden'
				animate='visible'>
				<a href={CV} download='Nikhil Kumar CV' className='hero-contact'>
					Download CV <BiDownload className='cv-icon' />
				</a>
			</motion.span>
		</div>
	);
};

export default HeroSection;
