import React, {useRef} from 'react';
import frontImg from "../images/flower.jpg";
import backImg from "../images/beach.jpg";

import '../App.css'

const ImageToggle = ({frontImg, backImg}) => {
    const imageRef = useRef(null);

    return (
        <img
            onMouseOver={() => {
                imageRef.current.src = frontImg;
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

        <div class="flex flex-col ">
                          
            <div class="flex rounded-full justify-center p-8">
                
                <ImageToggle backImg={backImg} frontImg={frontImg} alt=""/>
            </div>
            <div class="flex-col rounded-full justify-center">
                
                <p class="text-3xl py-1 flex justify-center">Hello, my name is Nick Nguyen!</p>
                <p class="text-3xl py-1 flex justify-center">I'm an early career software engineer with a wide range of interests.</p>
                <p class="text-3xl py-1 flex justify-center">I graduated from UNC Chapel Hill in 2023 with a Bachelors of Science in Computer Science.</p>
                <p class="text-3xl py-1 flex justify-center">Please explore my website with the navbar at the top of the page.</p>
                                    
                                    
            </div>
                                      
        </div>
    )
}

export default Home;