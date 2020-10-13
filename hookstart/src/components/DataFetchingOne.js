import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(" ");
  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setLoading(false);
        setPost(response.data)
        setErr(" ")

      } catch (err) {
        setLoading(false);
        setPost({})
        setErr('something went wrong')
      }
    }
    fetchdata()
  } 
  , []);
  return(
    <div>
        {loading? 'Loading': post.title}
        {err? err : null }
    </div>

  ) 
}

export default DataFetchingOne;
