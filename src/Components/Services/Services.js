import React from 'react';
import {motion} from 'framer-motion';
import './Services.scss';

const leftVariant = {
    initial: {
        opacity:0
    },
    whileInView : {
        opacity:1,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        }
    }
}

const rightVariant = {
    initial: {
        y:200,
        opacity:0
    },
    whileInView  : {
        y:0,
        opacity:1,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
  return (
    <motion.div className='services' variants={leftVariant} initial="initial" whileInView="whileInView">
      <motion.div className='txtCont' variants={leftVariant} initial="initial" whileInView="whileInView" >
        <p>I focus on helping your brand grow<br/> and move forward</p>
        <hr />
      </motion.div>
      <motion.div className='titleCont' variants={leftVariant} initial="initial" whileInView="whileInView">
        <div className='title'>
            <img src="/people.webp" alt="" />
            <h1><b>Unique</b> Ideas</h1>
        </div>
        <div className='title'> 
            <h1><b>For Your</b> Business.</h1>
            <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className='listCont' variants={rightVariant} initial="initial" whileInView="whileInView" >
        <motion.div className="box" variants={rightVariant} initial="initial" whileInView="whileInView">
            <h2>Branding</h2>
            <p>Crafting compelling brand identities through logo design, messaging development, and strategic positioning. </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" variants={rightVariant} initial="initial" whileInView="whileInView">
            <h2>Design</h2>
            <p>Incorporate the best website designs using high-end User Interaction technologies like Adobe XD, Figma, etc.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" variants={rightVariant} initial="initial" whileInView="whileInView">
            <h2>Development</h2>
            <p>Create custom e-commerce websites with excellent APIs and design structures to boost your overall growth.</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" variants={rightVariant} initial="initial" whileInView="whileInView">
            <h2>Content Writing</h2>
            <p>We provide content writing services to cater to all your content requirements under one roof. </p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
