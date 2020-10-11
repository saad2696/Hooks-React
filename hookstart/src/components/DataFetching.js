import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [btnclickid, setButtonclickid] = useState(1);
  const handleClick = () => {
      setButtonclickid(id)
  };
  useEffect(
    () => {
      async function fetchData() {
        try {
          const resp = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${btnclickid}`
          );
          console.log(resp.data);

          setPost(resp.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    },
    [btnclickid]

    //   .then((res) => {
    //     console.log(res);
    //     setPost(res.data);
    //   })
    //   .catch((err) => console.log(err));
  );
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      {/* slice is used to iterate specific number of objects in array  */}
      {/* posts.slice(25, 50).map((post) => ( */}
      {/* {posts.map((post) => (
        <div key={post.id}>
          {" "}
          <h1>Title</h1>
          {post.title}
          <br></br>
          <h1>Body</h1>
          <div>{post.body}</div>
        </div>
      ))} */}
      <div>{post.body}</div>
    </div>
  );
}

export default DataFetching;
