import React from 'react'

function About(props) {
  return (
    <div className="about">
        <div className="aboutContainer">
            <h2 className='aboutTextTitle'>Hey there!</h2>
            <div className="aboutSection">
                <img className="portraitImg" src={props.image} alt='portrait'/>
                <p className="aboutText">{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default About