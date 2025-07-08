import React, { useState } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { ReactData, ReactNativeData, VueData } from "../data/WorkData";
import WorkCard from "./WorkCard";

const Works = () => {
	const [activeTab, setActiveTab] = useState("react");

	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	// Remove tabData and activeTab logic

	return (
		<div className='works' id='works'>
			<div className='container'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='heading'>
					<p className='heading-sub-text'>Showcasing My Work</p>
					<p className='heading-text'>Projects</p>
				</motion.div>

				{/* Remove tabs */}

				<motion.div
					className='works-box'
					initial={{ opacity: 0 }}
					whileInView={fade}>
					{ReactData.map((w, index) => (
						<WorkCard w={w} tabId={'react'} key={index} />
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Works;
