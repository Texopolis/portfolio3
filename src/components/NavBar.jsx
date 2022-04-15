import React, { useState } from 'react';
import './navBar.css'
import About from './About'
import {motion} from 'framer-motion'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';


function NavBar(props) {

  const [aboutIsOpen, setAboutIsOpen] =useState(false);

  const aboutClickHandler = ()=>{
    setAboutIsOpen((prev)=>!prev)
  }

  const matches= useMediaQuery('(max-width: 768px)');

  const btnStyle={
    fontSize:40, 
    color: 'grey',
  }

  const smBtnStyle={
    fontSize:25,
    color:'grey'
  }

  const smBtnStyleOpen={
    fontSize:25,
    color:'red',
  }

  const btnStyleOpen={
    fontSize:40,
    color:'red',
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
                <PersonIcon style={(matches && aboutIsOpen) ? smBtnStyleOpen
                                  :aboutIsOpen? btnStyleOpen
                                  :matches? smBtnStyle
                                  :btnStyle}/>
              </IconButton>
              {aboutIsOpen && <About {...props}/>}
            </li>
            <li className="nav-email">
              <IconButton href="mailto:0douglasbernstein@gmail.com" target="blank">
                <EmailIcon style={matches? smBtnStyle : btnStyle} />
              </IconButton>
            </li>
            <li className="nav-git">
              <IconButton href="https://github.com/Texopolis" target="blank">
                <GitHubIcon style={matches? smBtnStyle : btnStyle} />
              </IconButton></li>
            <li className="nav-linkedin">
              <IconButton href="https://www.linkedin.com/in/texopolis/" target="blank">
                <LinkedInIcon style={matches? smBtnStyle : btnStyle} />
              </IconButton></li>
        </ul>
    </motion.div>
  )
}

export default NavBar