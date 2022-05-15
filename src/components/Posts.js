import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((el) => setPosts(el.data))
      .then(setLoaded(true));
  }, []);

  return (
    <>
      <h1>All Posts ({posts.length})</h1>
      {loaded === false && <h1>...Loading...</h1>}
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: 12 + "px"
        }}
      >
        {loaded &&
          posts.map((post) => (
            <li
              style={{
                backgroundColor: "white",
                margin: 5 + "px",
                textAlign: "left",
                border: "solid",
                padding: 20 + "px"
              }}
              key={post.id}
            >
              <h2 align="center">{post.title.toUpperCase()}</h2>
              <hr />
              {post.body}
              <br />
              <br />
            </li>
          ))}
      </ul>
    </>
  );
}
