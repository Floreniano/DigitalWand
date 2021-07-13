import React, { Component } from "react";
import $ from "jquery";
//components
import Post from "../components/Post";
import Preloader from "../components/Preloader";
// css
import "../css/posts-style.css";
export class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      posts: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("userID") == 1) {
      const url = "https://jsonplaceholder.typicode.com/posts";
      fetch(url)
        .then((response) => response.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: false,
              posts: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: false,
              error,
            });
          }
        );
    }
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <p>Ошибка {error.message}</p>;
    } else if (isLoaded) {
      return <Preloader />;
    } else {
      function exit() {
        localStorage.removeItem("userID");
        localStorage.removeItem("postId");
        window.location = "/";
      }
      return (
        <div className="content">
          <button className="btn__exit" onClick={exit}>
            Выйти
          </button>
          <div className="posts__list">
            {posts.map((post) => (
              <Post key={post.id} title={post.title} body={post.body} id={post.id} />
            ))}
          </div>
        </div>
      );
    }
  }
}
