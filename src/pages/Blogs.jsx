import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

function PostList() {
    const [list, setList] = useState([])
    async function retrievePosts() {
        
        var posts = []
        //let response = await fetch('http://127.0.0.1:5001/nicholas-nguyen/us-central1/getposts').then(response => response.json())
        let response = await fetch('https://getposts-wbhepoc7lq-uc.a.run.app').then(response => response.json())
        //console.log(response)
        Object.values(response).forEach( 
            x => posts.push(x)
            

        )
        console.log(posts)
        setList(posts)
    }   

    useEffect(() => {
        retrievePosts()
        }
        , []

    )
    
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col m-6 px-40">
                {list.map((item) => (<div className="flex-col justify-center bg-slate-200 m-2 border-2 border-slate-500 rounded-lg px-10 py-3">
                    <div className="flex justify-center py-1">Date: {item.date} </div>
                    <div className="flex justify-center py-1"> Posted by: {item.author}</div>
                    <div className="flex py-1 text-xl">{item.title}</div>
                    <div className="flex py-1">{item.body}</div>
                    
                </div>))}
            </div>
            <button onClick={retrievePosts} className="bg-sky-300 rounded-lg grow m-2 w-40 p-3">Refresh Posts</button>
        </div>
    )
        
}

  

function Blogs() {

    return (
        <div className="flex flex-col">
            
                <Link to="form">
                <div className="flex justify-center mt-6">   
                    <div className="border-2 border-slate-500 rounded-lg">
                    <div className="flex justify-center place-items-center space-x-2 m-4">
                        <input className="flex bg-slate-200 p-8 rounded-lg " placeholder="Create Post"></input>
                        <button className="flex bg-sky-300 p-4 rounded-full ">Post</button>
                    </div>
                    </div>
                </div>
                </Link>   
            
            <PostList/>
            
        </div>
    )
}

export default Blogs;