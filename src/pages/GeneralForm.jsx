import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

function GeneralForm({formTitle, formFields, isMessageBoard}) {
    const [formData, setFormData] = useState(formFields);
    


    const handleFieldChange = (event) => {
        const {name, value} = event.target;
        
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))

    }

    return (
        <div class="flex flex-col">
            <div class="flex justify-center p-2">
                <h1>{formTitle}</h1>
            </div>        
           {isMessageBoard && <div class="flex justify-center p-2">
                <textarea class="overflow-y-auto rounded-md bg-slate-200" maxLength="100" cols="30" rows="2" placeholder="Title" name="title" 
                onChange={handleFieldChange} value={formData.title}></textarea>
            </div>} 
            <div class="flex justify-center p-4">
                <textarea class="overflow-y-auto rounded-md bg-slate-200" maxLength="30" cols="30" rows="1" placeholder="Author" name="author"
                onChange={handleFieldChange} value={formData.author}></textarea>
            </div>   
  
            <div class="flex justify-center p-2">
                <textarea class="overflow-y-auto rounded-md bg-slate-200" maxLength="1000" cols="30" rows="5" placeholder="Body" name="body"
                onChange={handleFieldChange} value={formData.body}></textarea>
            </div>
            <Link to="../Blogs">
            <div class="flex justify-center p-2">
                <button onClick={props.handleSubmit(formData)} class="bg-sky-300 p-4 rounded-full px-8">Create</button>
            </div>
            </Link>
        </div>
    )


}

export default GeneralForm;

