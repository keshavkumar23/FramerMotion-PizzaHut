import React from 'react'
import {motion, useCycle} from 'framer-motion'

const loaderVariants = {
    animationOne : {
        x : [-20, 20],
        y : [0, -30],
        transition : {
            x : {
                repeatType: "mirror",
                repeat: Infinity,
                duration : 0.5,
                // ease : 'easeOut'
            },
            y : {
                repeatType: "mirror",
                repeat: Infinity,
                duration : 0.25,
                ease : 'easeOut'
            }
        }
    },
    animationTwo : {
        y : [0, -40],
        x : 0,
        transition : {
            y : {
                repeatType: "mirror",
                repeat : Infinity,
                duration : 0.25,
                ease : 'easeOut'
            }
        }
    }
}

function Loader() {
    const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo')
  return (
    <>
        <motion.div className='loader'
        variants={loaderVariants}
        animate={animation}
        >
        </motion.div>
        <div className = 'loaderHover' onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  )
}

export default Loader
