import React from 'react'
import "./Projects.css"
import braveOnes from '../../public/brave-ones-demo-win.mp4'
/* import YouTubeEmbed from './YouTubeEmbed' */

const Brave = (props) => {
  return (
    <div className='projects-container'>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://www.artstation.com/artwork/9EJP5W" target='_blank'>Learn More</a></button>
        </div>
        <div className="image-container">
            <video width="100%" height="100%" controls>
                <source src={braveOnes} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default Brave;
