import React, { useState } from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import {ExpandedCard} from './ExpandedCard'
import {NormalCard} from './NormalCard'

function ProjectCard(props) {

    const [open, setOpen] = useState(false)

    const customClickEvent = ()=>{setOpen((prev)=>!prev)}

    return (
    <AnimateSharedLayout>
        {open ? 
            <ExpandedCard customClickEvent={customClickEvent} {...props}/>
            : 
            <NormalCard customClickEvent={customClickEvent} {...props}
            />}
    </AnimateSharedLayout>
    )
}

export default ProjectCard