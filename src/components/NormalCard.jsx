import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './card.css'

const NormalCard = (props)=> {
  const [isShown, setIsShown]=useState(false);
  return (
    <motion.div 
    className="normal-card"
    onClick={props.customClickEvent}
    onMouseEnter={()=>setIsShown(true)}
    onMouseLeave={()=>setIsShown(false)}
    layoutId="expandableCard"
    transition={{duration:.5}}
    layout

    >
      <motion.div 
      layoutId="techStack"
      className="normal-card-tech">
        {props.html && <p className="html">html</p>}
        {props.css && <p className="css">css</p>}
        {props.javascript && <p className="javascript">javascript</p>}
        {props.react && <p className="react">react</p>}
        {props.solidity && <p className="solidity">solidity</p>}
        {props.rust && <p className="rust">rust</p>}
        {props.node && <p className="node">node</p>}
        {props.express && <p className="express">express</p>}
        {props.mongoDB && <p className="mongoDB">mongoDB</p>}
      </motion.div>
      <motion.h2 layoutId="title" className="normal-card-title">{props.title}</motion.h2>
      {isShown && <motion.img className="thumb-image" src={props.thumbnail} alt="project thumbnail"/>}
    </motion.div>
  )
}

export { NormalCard } 