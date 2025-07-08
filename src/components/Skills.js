import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData, TechStack, SoftSkills } from "../data/SkillsData";

const Skills = () => {
	const skillEffect = {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className='skills' id='skills'>
				<div className='container'>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading'>
						<p className='heading-sub-text'>What I work with</p>
						<p className='heading-text'>Tech Stack</p>
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						className='skills-box'
						initial={{ y: "-80px", opacity: 0 }}>
						{TechStack.map((el, index) => (
							<div className='skill-card' key={index}>
								<small className='skill-desc'>{el.name}</small>
							</div>
						))}
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						initial={{ y: "-80px", opacity: 0 }}
						className='heading' style={{ marginTop: 40 }}>
						<p className='heading-sub-text'>How I work</p>
						<p className='heading-text'>Soft Skills</p>
					</motion.div>
					<motion.div
						whileInView={skillEffect}
						className='skills-box'
						initial={{ y: "-80px", opacity: 0 }}>
						{SoftSkills.map((el, index) => (
							<div className='skill-card' key={index}>
								<small className='skill-desc'>{el.name}</small>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Skills;
