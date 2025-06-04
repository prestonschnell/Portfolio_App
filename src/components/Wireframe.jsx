import React from 'react'
import "./Projects.css"
import cube from '../../public/OpenGL_Wireframe Cube.mp4'
/* import YouTubeEmbed from './YouTubeEmbed' */

const Wireframe = (props) => {
  return (
    <div className='projects-container'>
        <div className="image-container">
            <video width="100%" height="100%" controls>
                <source src={cube} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://github.com/prestonschnell/Coding-Projects/tree/main/Wireframe_cube" target='_blank'>Learn More</a></button>
        </div>
    </div>
  )
}

export default Wireframe;
