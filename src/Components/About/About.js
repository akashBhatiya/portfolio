import React from 'react';
import './About.scss';
import {motion} from 'framer-motion';

const About = () => {
  return (
    <div className='about'>
        <motion.h2 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}}>About Me</motion.h2>
        <motion.p initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}}>Hi there! 👋 I'm <b>Akash Bhatiya</b> , a passionate web developer with a keen eye for clean and elegant design. I specialize in creating dynamic and user-friendly websites that provide a seamless user experience.</motion.p>
        <motion.p initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}}>I believe in continuous learning and staying up-to-date with the ever-evolving tech landscape. I am always eager to take on new challenges and am driven by a strong commitment to delivering high-quality results.</motion.p>
    </div>
  )
}

export default About
