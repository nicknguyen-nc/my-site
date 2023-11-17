import React from "react";
import GeneralForm from "./GeneralForm";
import { useNavigate } from "react-router-dom";


function Form() {

    const formFields = {title:"", author:"", body:""};
    const navigate = useNavigate();


    async function blogPost(formData) {
        const date = new Date().toJSON()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({title:formData.title, author: formData.author, body:formData.body, date:date, data:""})
            };

        let response = fetch('https://addblog-wbhepoc7lq-uc.a.run.app', requestOptions).then(response => console.log(response.json()))
        navigate("/blogs")
        //let response = fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/addblog', requestOptions).then(response => console.log(response.json()))
        //console.log(response)
    }
    



    return (
         <div class="flex flex-col">
            <div class="flex justify-center p-2">
                <h1>Create a Message Post</h1>
            </div>
            <GeneralForm formFields={formFields} handleSubmit={blogPost} isMessageBoard={true}/>

        </div>
    )


}

export default Form;