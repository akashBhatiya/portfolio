import React from 'react';
import { LuMenu } from "react-icons/lu";
import styles from './Navbar.module.css';
import {motion} from 'framer-motion';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{duration:1}} className={styles.logoCont}>
                <h1 style={{fontSize:"4rem"}}>AB</h1>
            </motion.div>
            <motion.ul initial={{ x: '100%' }} animate={{ x: 0 }} transition={{duration:1}} className={styles.listCont}>
                <li className={styles.liItem}>Home</li>
                <li className={styles.liItem}>About Me</li>
                <li className={styles.liItem}>Services</li>
                <li className={styles.liItem}>Capabilities</li>
                <li className={styles.liItem}>Projects</li>
                <li className={styles.menuIcon}><LuMenu /></li>
                <li className={styles.contactBtn}><a href='tel:6354523893'>Call me<span className={styles.phoneNo}>: +916354523893</span></a></li>
            </motion.ul>
        </div>
    </>
  )
}

export default Navbar
