import React from 'react'
import { motion } from 'framer-motion'
function About(props) {
  
  

  return (
    <motion.div 
    className="about"
    initial={{x:-1500}}
    animate={{x:0}}>
        <div className="aboutContainer">
            <h2 className='aboutTextTitle'>Hey there!</h2>
            <div className="aboutSection">
                <img className="portraitImg" src={props.image} alt='portrait'/>
                <p className="aboutText">{props.description}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default About