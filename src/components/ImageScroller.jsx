import React, { useState } from "react";
import "./Projects.css"
import next from '../../public/next.png'
import previous from '../../public/previous.png'

const ImageScroller = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        width: '100vw',
        height: '100%',
        position: 'relative'
    }

    const leftArrow = {
        position: 'absolute',
        top: '50%',
        transform:'translate(0, -50%)',
        left: '32px',
        fontSize: '30px',
        color: 'white',
        zIndex: '1',
        cursor: 'pointer',
    };

    const rightArrow = {
        position: 'absolute',
        top: '50%',
        transform:'translate(0, -50%)',
        right: '32px',
        fontSize: '30px',
        color: 'white',
        zIndex: '1',
        cursor: 'pointer',
    };

    /* const slideStyles = {
    width: "1200px",
    height: "720px",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    }; */

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        /* Checking if currentIndex of slides[] === 0 (first slide) */
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        /* Creating a new const newIndex to check if isFirstSlide is true, and if so, then we set the slides.length - 1, but if not then we subtract what ever index we are currently at to go back. */
        setCurrentIndex(newIndex);
        /* Finally, we use the useState properties to dynamically overwrite the index to go back from wherever we are. */
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        /* Checking if currentIndex of slides[] === 0 (first slide) */
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        /* Creating a new const newIndex to check if isFirstSlide is true, and if so, then we set the slides.length + 1, but if not then we add what ever index we are currently at to go to the next slide. */
        setCurrentIndex(newIndex);
        /* Finally, we use the useState properties to dynamically overwrite the index to go to the next slide from wherever we are. */
    }

    return (
    <div style={sliderStyles}>
        <div style={leftArrow} onClick={goToPrevious}><img className="scroller-controls" src={previous} alt="" /></div>
        <div style={rightArrow} onClick={goToNext}><img className="scroller-controls" src={next} alt="" /></div>
        <div className="slide-container">
            <img src={slides[currentIndex].url} alt="slide" className="slide-image" />
        </div>
    </div>
    )
}

export default ImageScroller;