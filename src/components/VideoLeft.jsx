import React from 'react'
import "./Projects.css"
import YouTubeEmbed from './YouTubeEmbed'

const VideoLeft = (props) => {
  return (
    <div className='projects-container'>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://github.com/prestonschnell/ZenScape" target='_blank'>Learn More</a></button>
        </div>
        <div className="image-container">
            <YouTubeEmbed videoId="ZlESNkp2mXw" />
        </div>
    </div>
  )
}

export default VideoLeft;
