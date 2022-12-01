import React from "react";
import { motion } from "framer-motion";
import "./navBar.css"

function About(props) {
  return (
    // <div style={{backgroundColor:"red", height:"200px", position:"absolute", left:120}}>
      <motion.div className="about" initial={{ x: -1500 }} animate={{ x: 0 }}>
        <div className="aboutContainer">
          <h2 className="aboutTextTitle">Hey there!</h2>
          <div className="aboutSection">
            <img className="portraitImg" src={props.image} alt="portrait" />
            <p className="aboutText">{props.description}</p>
          </div>
        </div>
      </motion.div>
    // </div>
  );
}

export default About;
