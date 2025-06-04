import React from 'react'
import "./Projects.css"
import ImageScroller from './ImageScroller';
import secSlides from './SecSlides';

const SEC = (props) => {
  
  return (
    <div className='projects-container'>
        <div className="image-container">
            <ImageScroller slides={secSlides} />
        </div>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://www.artstation.com/artwork/XJ22yy" target='_blank'>Learn More</a></button>
        </div>
    </div>
  )
}

export default SEC
