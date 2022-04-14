import React, { useState } from 'react';
import './navBar.css'
import About from './About'
import {motion} from 'framer-motion'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function NavBar(props) {

  const [aboutIsOpen, setAboutIsOpen] =useState(false);

  const aboutClickHandler = ()=>{
    setAboutIsOpen((prev)=>!prev)
  }

  const btnStyle={
    fontSize:40, 
    color: 'grey',
    
  }

  return (
    <motion.div 
    className="nav"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:9}}
    >
        <ul className="nav-bar">
            <li className="nav-about">
              <IconButton onClick={aboutClickHandler} target="blank">
                <PersonIcon style={btnStyle} />
              </IconButton>
              {aboutIsOpen && <About {...props}/>}
            </li>
            <li className="nav-email">
              <IconButton href="mailto:0douglasbernstein@gmail.com" target="blank">
                <EmailIcon style={btnStyle} />
              </IconButton>
            </li>
            <li className="nav-git">
              <IconButton href="https://github.com/Texopolis" target="blank">
                <GitHubIcon style={btnStyle} />
              </IconButton></li>
            <li className="nav-linkedin">
              <IconButton href="https://www.linkedin.com/in/texopolis/" target="blank">
                <LinkedInIcon style={btnStyle} />
              </IconButton></li>
        </ul>
    </motion.div>
  )
}

export default NavBar