import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

function PostList() {
    const [list, setList] = useState([])
    async function blogClick() {
        
        var posts = []
        let response = await fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/getposts').then(response => response.json())
   
        Object.values(response).forEach( x => posts.push(x))
        console.log(posts)
        setList(posts)
    }   

    return (
        <div class="flex flex-col">
            
            {list.map((item) => (<div class="flex justify-center bg-slate-200">date: {item.date} title: {item.title} author: {item.author} body: {item.body}</div>))}
            
            <button onClick={blogClick}>retrieve blog button</button>
        </div>
        
    )
        
}

 

function Blogs() {

    return (
        <div class="flex flex-col">
            <h1>this is my blog</h1>
            <div class="flex justify-center">
                <Link to="submit">
                    <input class="bg-slate-200 p-8 rounded-lg"placeholder="Create Post"></input>
                </Link>   
            </div>
            <PostList/>
            
        </div>
    )
}

export default Blogs;