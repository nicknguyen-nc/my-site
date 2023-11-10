import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

function PostList() {
    const [list, setList] = useState([])
    async function retrievePosts() {
        
        var posts = []
        //let response = await fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/getposts').then(response => response.json())
        let response = await fetch('https://getposts-wbhepoc7lq-uc.a.run.app').then(response => response.json())
        console.log(response)
        Object.values(response).forEach( 
            x => posts.push(x)
            

        )
        //console.log(posts)
        setList(posts)
    }   
    retrievePosts()
    return (
        <div class="flex flex-col justify-center items-center">
            <div class="flex flex-col m-6 px-40">
                {list.map((item) => (<div class="flex-col justify-center bg-slate-200 m-2 rounded-lg px-10 py-3">
                    <div class="flex justify-cente r py-1">Date: {item.date} </div>
                    <div class="flex justify-cente r py-1"> Posted by: {item.author}</div>
                    <div class="flex py-1 text-xl">{item.title}</div>
                    <div class="flex py-1">{item.body}</div>
                    
                </div>))}
            </div>
            <button onClick={retrievePosts} class="bg-sky-300 rounded-lg grow m-2 w-40 p-3">Refresh Posts</button>
        </div>
    )
        
}

  

function Blogs() {

    return (
        <div class="flex flex-col">
            
                <Link to="form">
                    
                <div class="flex justify-center place-items-center space-x-2 mt-8 mx-32 border-2 border-slate-500 rounded-lg">
                    <input class="flex bg-slate-200 p-8 rounded-lg m-4" placeholder="Create Post"></input>
                    <button class="flex bg-sky-300 p-4 rounded-full m-4">Post</button>
                </div>
                </Link>   
            
            <PostList/>
            
        </div>
    )
}

export default Blogs;