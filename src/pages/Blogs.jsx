import React from "react";
import {useState} from "react";

function Blogs() {
    const initialText = "";
    const [pText, setPText] = useState(initialText)
    const [bText, setBText] = useState(initialText)
    async function testClick() {
        setPText("test successful")
       
        let response = await fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/helloworld').then(response => response.text())
        //let data = response.text()
        setPText(response)
        console.log(response)
    }

    async function blogClick() {
        setBText("test successful")
       
        let response = await fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/getposts').then(response => response.text())
        //let data = response.text()
        setBText(response)
        console.log(response)
    }

    async function blogPost() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({author: 'me', body: 'super duper hunky bod', data:"this is data"})
            };

            let response = fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/addblog', requestOptions).then(response =>response.json())
            console.log(response)
    }

    

    return (
        <div>
            <h1>this is my blog</h1>
            <button onClick={testClick}>test button</button>
            <br></br>
            <button onClick={blogClick}>blog button</button>
            <br></br>
            <button onClick={blogPost}>blog post test</button>
            <div>
                <label>
                    Your Name:< input name="name"class="bg-red-500"></input>
                </label>
                <label>
                    Blog Text:
                    <textarea class="bg-red-500">

                    </textarea>
                    
                </label>
            </div>
            <p>{pText}</p>
            <p>{bText}</p>
        </div>
    )
}

export default Blogs;