import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Loader from './Loader';
const buttonVarient = {
  hover : {
    // scale: [1.1, 1, 1.1, 1, 1.1, 1],
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255, 255, 255)',
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    // transition : {
      // duration: 0.5,
      // yoyo : Infinity
    // }
  // },
  // visible : {
  //   x : [0, -20, 20, -20, 0], // key frames
  //   transition : {
  //     delay: 2
  //   }
  // }
}
}

const containerVarient = {
  hidden : {
    opacity: 0
  },
  visible : {
    opacity: 1, 
    transition: {
      delay: 0.5,
      duration: 2
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}
const Home = () => {
  return (
    <motion.div className="home container"
    initial='hidden'
    animate='visible'
    variants={containerVarient}
    exit='exit'
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        variants={buttonVarient}
        whileHover="hover"
        // animate='visible'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;