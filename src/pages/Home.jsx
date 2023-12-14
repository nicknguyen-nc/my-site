import React, {useRef} from 'react';
import frontImg from "../images/flower.jpg";
import backImg from "../images/beach.jpg";

import Slideshow from "./Slideshow";

import '../App.css'

const ImageToggle = ({frontImg, backImg}) => {
    const imageRef = useRef(null);

    return (
        <img
            onMouseOver={() => {
              //  imageRef.current.src = frontImg;
              imageRef.current.src = backImg
            }}
            onMouseOut={() =>{
                imageRef.current.src= backImg;
            }}
            src={backImg}
            alt=""
            ref={imageRef}
            style={{borderRadius:999}}
        />
        
        
    )
}




function Home() {
    return (

        <div class="flex flex-col mt-4 mb-10 items-center">

            <div class="flex rounded-full justify-center p-8">
                
                {/*<ImageToggle backImg={backImg} frontImg={frontImg} alt=""/>*/}
                <Slideshow/>
            </div>
            <div class="flex-col rounded-full justify-center bg-slate-200 m-2 border-2 border-slate-500 rounded-lg px-10 py-3">
                
                <p class="text-3xl py-1 flex justify-center">Hello, my name is Nick Nguyen!</p>
                <p class="text-3xl py-1 flex justify-center">I'm an early career software engineer with a wide range of interests.</p>
                <p class="text-3xl py-1 flex justify-center">I graduated from UNC Chapel Hill in 2023 with a Bachelors of Science in Computer Science.</p>
                <p class="text-3xl py-1 flex justify-center">Feel free to explore my website with the navbar at the top of the page.</p>
                                    
                                    
            </div>
                                      
        </div>
    )
}

export default Home;