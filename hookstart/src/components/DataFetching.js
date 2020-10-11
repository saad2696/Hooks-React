import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPost] = useState([]);

  useEffect(
    () => {
      async function fetchData() {
        try {
          const resp = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          console.log(resp.data);

          setPost(resp.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    },[]

    //   .then((res) => {
    //     console.log(res);
    //     setPost(res.data);
    //   })
    //   .catch((err) => console.log(err));

  );
  return (
    <div>
      {posts.slice(0,1).map((post) => (
        <div key={post.id}>
          {" "}
          <h1>Title</h1>
          {post.title}
          <br></br>
           <h1>Body</h1>
          <div>{post.body}</div> 
        </div>
      ))}
    </div>
  );
}

export default DataFetching;
