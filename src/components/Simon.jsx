import React from 'react'
import "./Projects.css"
import simon from '../../public/simon.mp4'
/* import YouTubeEmbed from './YouTubeEmbed' */

const Simon = (props) => {
  return (
    <div className='projects-container'>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://github.com/prestonschnell/Coding-Projects/tree/main/Simon%20Says" target='_blank'>Learn More</a></button>
        </div>
        <div className="image-container">
            <video width="100%" height="100%" controls>
                <source src={simon} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default Simon;
