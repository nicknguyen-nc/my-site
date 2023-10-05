import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

function PostList() {
    const [list, setList] = useState([])
    async function blogClick() {
        
        var posts = []
        //let response = await fetch('http://localhost:3000/blogs/retrieve').then(response => response.json())
        let response = await fetch('https://getposts-wbhepoc7lq-uc.a.run.app').then(response => response.json())
        Object.values(response).forEach( x => posts.push(x))
        console.log(posts)
        setList(posts)
    }   

    return (
        <div class="flex flex-col justify-center items-center">
            <div class="flex flex-col m-6 px-40">
                {list.map((item) => (<div class="flex-col justify-center bg-slate-200 m-2 rounded-lg px-10 py-3">
                    <div class="flex justify-center py-1">{item.date} Posted by: {item.author}</div>
                    <div class="flex py-1 font-medium text-lg">{item.title}</div>
                    <div class="flex py-1">{item.body}</div>
                    
                </div>))}
            </div>
            <button onClick={blogClick} class="bg-slate-200 rounded-lg grow m-2 w-40 p-3">retrieve blog button</button>
        </div>
    )
        
}

  

function Blogs() {

    return (
        <div class="flex flex-col">
            <div class="flex justify-center">
                <Link to="form">
                    <input class="bg-slate-200 p-8 rounded-lg mt-6"placeholder="Create Post"></input>
                </Link>   
            </div>
            <PostList/>
            
        </div>
    )
}

export default Blogs;