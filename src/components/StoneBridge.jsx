import React from 'react'
import "./Projects.css"
import ImageScroller from './ImageScroller';
import stoneBridgeSlides from './stoneBridgeSlides';

const StoneBridge = (props) => {
  
  return (
    <div className='projects-container'>
        <div className="image-container">
            <ImageScroller slides={stoneBridgeSlides} />
        </div>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://www.artstation.com/artwork/V209d5" target='_blank'>Learn More</a></button>
        </div>
    </div>
  )
}

export default StoneBridge
