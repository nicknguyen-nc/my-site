import React, {Component, useRef} from 'react';
import frontImg from "../images/Front.png";
import backImg from "../images/Back.png";

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

        <div class="bg-slate-500 flex flex-col h-screen">
                          
            <div class="h-1/4 flex rounded-full justify-center p-8">
                
                <ImageToggle backImg={backImg} frontImg={frontImg} alt=""/>
            </div>
            <div class="h-full flex rounded-full justify-center" >this is the homepage</div>
                                      
        </div>
    )
}

export default Home;