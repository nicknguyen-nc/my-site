import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";


function Form() {
    const [formData, setFormData] = useState({title:"", author:"", body:""})



    async function blogPost() {
        const date = new Date().toJSON()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({title:formData.title, author: formData.author, body:formData.body, date:date, data:""})
            };

        //let response = fetch('https://addblog-wbhepoc7lq-uc.a.run.app', requestOptions).then(response => console.log(response.json()))
        let response = fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/addblog', requestOptions).then(response => console.log(response.json()))
        //console.log(response)
    }
    


    const handleFieldChange = (event) => {
        const {name, value} = event.target;
        
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))

    }


    return (
        <div class="flex flex-col">
            <div class="flex justify-center p-2">
                <h1>Create a Blog Post</h1>
            </div>        
            <div class="flex justify-center p-2">
                <textarea class="overflow-y-auto rounded-md" maxLength="100" cols="30" rows="2" placeholder="Title" name="title" 
                onChange={handleFieldChange} value={formData.title}></textarea>
            </div>
            <div class="flex justify-center p-4">
                <textarea class="overflow-y-auto rounded-md" maxLength="30" cols="30" rows="1" placeholder="Author" name="author"
                onChange={handleFieldChange} value={formData.author}></textarea>
            </div>   
  
            <div class="flex justify-center p-2">
                <textarea class="overflow-y-auto rounded-md" maxLength="1000" cols="30" rows="5" placeholder="Body" name="body"
                onChange={handleFieldChange} value={formData.body}></textarea>
            </div>
            <Link to="../Blogs">
            <div class="flex justify-center p-2">
                <button onClick={blogPost} class="rounded-full bg-slate-100 p-2">Create</button>
            </div>
            </Link>
        </div>
    )


}

export default Form;