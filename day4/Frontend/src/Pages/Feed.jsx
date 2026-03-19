import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Feed = () => {
    const [posts, setposts] = useState([{
         _id: "1",
        image: "https://ik.imagekit.io/8pnailgqb/image_Y9KZqOnq9s.jpg"
    }   
    ])

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{ 
            console.log(res.data);
            
        })
    },[])
  return (
    <div>
      <section className='feed-section'>
       {
        posts.length > 0 ? (
            posts.map((posts)=>{
                <div key={post._id }className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{posts.caption}</p>
                </div>
            })
        ) :(
            <h1>No posts availbale</h1>
        )
       }
      </section>
    </div>
  )
}

export default Feed