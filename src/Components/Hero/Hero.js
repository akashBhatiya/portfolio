import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVarients = {
    initial : {
        x: -500,
        opacity:0,
    },
    animate: {
        x: 0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren:0.1
        }
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat: Infinity
        }
    }
}

const imgVarients = {
    initial : {
        x: 500,
        opacity:0,
    },
    animate: {
        x: 0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren:0.1
        }
    }
}

const sliderVarients = {
    initial : {
        x: 0,
    },
    animate: {
        x: "-100%",
        transition:{
            duration: 20,
            repeat:Infinity,
        }
    },
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <motion.div className='txtContainer' variants={textVarients} initial="initial" animate="animate">
                <motion.h2 variants={textVarients}>AKASH BHATIYA</motion.h2>
                <motion.h1 variants={textVarients}>Full Stack Web Developer</motion.h1>
                <motion.div className='buttons' variants={textVarients}>
                    <motion.button variants={textVarients} className='btn1' >See the Latest Project</motion.button>
                    <motion.button variants={textVarients} className='btn2'>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVarients} animate="scrollButton" src="/scroll.png" width="50px" alt="" />
            </motion.div>
        </div>
        <motion.div className='slidingTxt' variants={sliderVarients} initial="initial" animate="animate">
            REACT.JS NODE.JS MONGODB EXPRESSJS SHOPIFY WORDPRESS
        </motion.div>
        <div className='imgContainer' variants={imgVarients} >
            <motion.img variants={imgVarients} initial="initial" animate="animate" src="/hero.jpg" alt="" height="100%" />
        </div>
    </div>
  )
}

export default Hero;
