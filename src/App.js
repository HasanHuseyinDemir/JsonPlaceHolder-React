import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import axios from "axios";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [todos, setTodos] = useState([]);

  //Posts Sayısı
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then((el) =>
      setPosts(el.data.length)
    );
  }, []);

  //Users Sayısı
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((el) =>
      setUsers(el.data.length)
    );
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments").then((el) =>
      setComments(el.data.length)
    );
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/albums").then((el) =>
      setAlbums(el.data.length)
    );
  }, []);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/photos").then((el) =>
      setPhotos(el.data.length)
    );
  }, []);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos").then((el) =>
      setTodos(el.data.length)
    );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/users">Users {users && "(" + users + ")"}</Link>
          <Link to="/posts">Posts {posts && "(" + posts + ")"}</Link>
          <Link to="/comments">
            Comments {comments && "(" + comments + ")"}
          </Link>
          <Link to="/albums">Albums {albums && "(" + albums + ")"}</Link>
          <Link to="/">Photos {photos && "(" + photos + ")"}</Link>
          <Link to="/">Todos {todos && "(" + todos + ")"}</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Sayfama Hoşgeldiniz.</p>
    </div>
  );
}
