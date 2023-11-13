import React from 'react';
import { useState, useEffect } from 'react';


function GrammarSurvey() {
    
    const [formData, setFormData] = useState({author:"", body:""})
    
    const handleFieldChange = (e) => {
        const {name, value} = e.target;
        
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    let GrammarPost = async () => {
        
        const date = new Date().toJSON()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({author: formData.author, body:formData.body, date:date, data:""})
            };

        let response = fetch('https://addresponse-wbhepoc7lq-uc.a.run.app', requestOptions).then(response => console.log(response.json()))
        //let response = fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/addblog', requestOptions).then(response => console.log(response.json()))
        //console.log(response)
      
    }
    
    
    const [responseData, setResponseData] = useState([])

    useEffect( () => {
        // reveal/build list
    }, [responseData])

    async function retrieveResponses() {
        var posts = []
        //let response = await fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/getposts').then(response => response.json())
        let response = await fetch('https://getresponse-wbhepoc7lq-uc.a.run.app').then(response => response.json())
        //console.log(response)
        Object.values(response).forEach( 
            x => posts.push(x)
        )
        //console.log(posts)
        setResponseData(posts)
    }
    

    return (
        <div class="flex-col">
            <div class="flex justify-center mt-8">What do you think this sentence means?</div>
            <div class="flex flex-col">
                <div class="flex justify-center p-2">
                    <h1>"He is one of the main character's dads."</h1>
                </div>        
                <div class="flex justify-center p-4">
                    <textarea class="overflow-y-auto rounded-md bg-slate-200" maxLength="30" cols="30" rows="1" placeholder="Name" name="author"
                    onChange={handleFieldChange} value={formData.author}></textarea>
                </div>   
                <div class="flex justify-center p-2">
                    <textarea class="overflow-y-auto rounded-md bg-slate-200" maxLength="1000" cols="30" rows="5" placeholder="Answer" name="body"
                    onChange={handleFieldChange} value={formData.body}></textarea>
                </div>
                <div class="flex justify-center p-2">
                    <button onClick={GrammarPost} class="bg-sky-300 p-4 rounded-full px-8">Submit</button>
                </div>
            </div>


            <div class="flex justify-center">
                <list>
                {responseData.map((item) => (<div className="flex-col justify-center bg-slate-200 m-2 rounded-lg px-10 py-3">
                    <div className="flex justify-cente r py-1">Date: {item.date} </div>
                    <div className="flex justify-cente r py-1"> Posted by: {item.author}</div>
                    <div className="flex py-1">{item.body}</div>
                </div>))}
                </list>
                <button onClick={retrieveResponses} class="bg-sky-300 p-4 rounded-full px-8">Show Other Responses</button>
                
            </div>
          
        </div>
    )
}

export default GrammarSurvey;