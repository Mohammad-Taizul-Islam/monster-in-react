import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    }
    fetchData();
  },[]);

  return <div>
    <ul>
        {
            post.map((post)=>(
                <li key={post.id}>
                    {<b style={{color:'yellowgreen',marginRight:'2rem', fontSize:'2rem'}}>{post.title}</b>}
                    {post.body}
                    </li>
            ))
        }
    </ul>
  </div>;
};

export default FetchDataEffect;
