import React from 'react';
import {useState, useEffect} from 'react';
import Mountain from "../images/mountain.jpg"
import Beach from "../images/beach.jpg";
import Flower from "../images/flower.jpg";
import "./Slideshow.css" 


const images = [Beach, Flower, Mountain];
const delay = 5500;
function Slideshow() {

  const [index, setIndex] = useState(0)
  const timeoutRef = React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }


  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    
    return () => {
      resetTimeout()
    };
  }, [index]);

    return (
      <div className="slideshow overflow-hidden max-w-md">
        <div 
          className="slideshowSlider whitespace-nowrap"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` , transition:`ease 500ms`}}
        >

          {images.map((slideImage, index) => (
            <div className="slide inline-block" key={index}>
              <img src={slideImage} className="rounded-full"/>
            </div>
          ))}
       </div>
        <div className="slideshowDots text-center">
          {images.map((_,idx) => (
            <div key={idx} onClick={() => { setIndex(idx)}} className={`slideshowDot ${index === idx ? "active" : ""} bg-gray-500 inline-block h-5 w-5 rounded-xl cursor-pointer m-1`}></div>
          
          ))}
        </div>
        </div>
      
    );
  }

export default Slideshow;