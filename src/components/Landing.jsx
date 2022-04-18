import React from 'react'
import {motion} from 'framer-motion'
import './landing.css'
import nodesImg from '../images/nodes.png'
export default function 
Landing() {
  
  const line1 ="A Web3 Frontend Developer";
  const sentence = {
    hidden: { opacity:1 },
    visible: {
      opacity:1,
      transition: { 
        staggerChildren: .1
      }}
  }
  const letter = {
    hidden: { opacity:0, y:50},
    visible: { opacity:1, y:0}
  }
  return (
    <motion.div className='landing'>
      <div className="landing-container">
        <h1 className='landing-title'>heLLo.<br/> i'M douGLAs </h1>
        <motion.h2
          // transition={{delay:5}}
          className="animating-title"
          variants={sentence}
          initial="hidden"
          animate='visible'
          >
            {line1.split("").map((char, index)=>{
              return (
                <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
              )
            })}
        </motion.h2>
        {/* <img src={nodesImg} height={'400px'}/>   */}
      </div>
    </motion.div>
  )
}
