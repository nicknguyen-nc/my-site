import React from 'react';
import {useState, useEffect} from 'react';
import Front from "../images/Front.png";
import Back from "../images/Back.png";
import Beach from "../images/beach.jpg";
import Flower from "../images/flower.jpg";

const images = [Front, Back, Beach, Flower];
const delay = 5500;
function Slideshow() {

  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    
    return () => {};
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
          {images.map((_,index) => (
            <div key={index} className="slideshowDot bg-gray-500 inline-block h-5 w-5 rounded-xl cursor-pointer m-1"></div>
          ))}
        </div>
        </div>
      
    );
  }

export default Slideshow;