import React from 'react';
import './navBar.css'
import {motion} from 'framer-motion'

function NavBar() {
  return (
    <motion.div 
    className="nav"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:9}}
    >
        <ul className="nav-bar">
            <li className="nav-home"><a>home</a></li>
            <li className="nav-projects"><a>projects</a></li>
            <li className="nav-about"><a>about</a></li>
            <li className="nav-email"><a>email</a></li>
            <li className="nav-git"><a>gitHub</a></li>
            <li className="nav-linkedin"><a>linkedIn</a></li>

        </ul>
    </motion.div>
  )
}

export default NavBar