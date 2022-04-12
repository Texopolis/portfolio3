import React from 'react'
import { motion } from 'framer-motion'
import xSolid from '../images/x-solid.png'

function ExpandedCard(props) {
  return (
    <motion.div 
      className="expandedCard"
      layoutId='expandableCard'
      transition={{duration:.5}}
      layout
      >
        <button className='btn-close' onClick={props.customClickEvent} >
            <img className='btn-image' src={xSolid} />
        </button>
        <motion.div 
      layoutId="techStack"
      className="expanded-card-tech">
        {props.html && <p className="html">html</p>}
        {props.css && <p className="css">css</p>}
        {props.javascript && <p className="javascript">javascript</p>}
        {props.react && <p className="react">react</p>}
        {props.solidity && <p className="solidity">solidity</p>}
        {props.rust && <p className="rust">rust</p>}
      </motion.div>
      <motion.h2 className="expanded-card-title"
      layoutId="title">{props.title}</motion.h2>
      <div className="main-content-container">
        <div className="description">{props.description}</div>
        <img className="thumb-image" src={props.thumbnail}/>
      </div>
      <div className="links">
                  <a>Live site</a>
                  <a>Code</a>
                  {props.video && <a>video</a>}
      </div>
    </motion.div>
  )
}

export { ExpandedCard }