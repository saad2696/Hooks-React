import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: " ",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_Sucess":
      return {
        loading: false,
        error: " ",
        post: action.payload,
      };
    case "Fetch_Error":
      return {
        loading: false,
        error: " Something went wrong ",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [currentState, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        dispatch({ type: "Fetch_Sucess", payload: response.data });
      } catch (err) {
        dispatch({ type: "Fetch_Error" });
      }
    }
    fetchdata();
  }, []);

  return (
    <div>
      {currentState.loading ? "Loading" : currentState.post.title}
      {currentState.err ? currentState.err : null}
    </div>
  );
}

export default DataFetchingTwo;
