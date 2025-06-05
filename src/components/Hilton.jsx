import React from 'react'
import "./Projects.css"
import ImageScroller from './ImageScroller';
import hiltonSlides from './hiltonSlides';
import DecryptedText from './DecryptedText';

const Hilton = (props) => {
  return (
    <div className='projects-container'>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://www.artstation.com/artwork/DLoogA" target='_blank'>Learn More</a></button>
        </div>
        <div className="image-container">
            <ImageScroller slides={hiltonSlides}/>
        </div>
    </div>
  )
}


export default Hilton
