
import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['Mushrooms', 'Peppers', 'Onions', 'Olives', 'Extra Cheese', 'Tomatoes'];

  const containerVarient = {
    hidden : {
      x : '100vw',
      opacity: 0
    },
    visible : {
      opacity : 1,
      x : 0,
      transition : {
        type : 'spring',
        delay : 0.5
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }
  return (
    <motion.div className="toppings container"
    variants={containerVarient}
    initial='hidden'
    animate='visible'
    exit='exit'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{scale: 1.3, originX: 0, color: 'yellow'}}
            transition={{type: 'spring', stiffness: 300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 8px rgb(255, 255, 255)',
          boxShadow: '0px 0px 8px rgb(255, 255, 255)'
        }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;