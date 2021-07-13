import React, { Component } from "react";
import $ from "jquery";
//components
import Comment from "../components/Comment";
import PostToComment from "../components/PostToComment";
import Preloader from "../components/Preloader";
// css
import "../css/comments-style.css";
export class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("userID") == 1) {
      const urlPosts = "https://jsonplaceholder.typicode.com/posts";
      const urlComments = "https://jsonplaceholder.typicode.com/comments?postId=1";
      fetch(urlPosts)
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
      fetch(urlComments)
        .then((response) => response.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: false,
              comments: result,
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
    const { error, isLoaded, posts, comments } = this.state;
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
      function backToPosts() {
        window.history.back();
      }
      return (
        <div className="content">
          <nav className="nav">
            <a className="btn__back" onClick={backToPosts}>
              Назад
            </a>
            <a className="btn__exit" onClick={exit}>
              Выйти
            </a>
          </nav>
          <div class="post_item">
            {posts.map((post) => (
              <PostToComment
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                currentPostId={localStorage.getItem("postId")}
              />
            ))}
          </div>
          <div className="comments">
            <div class="comments__inner">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  email={comment.email}
                  name={comment.name}
                  body={comment.body}
                  id={comment.postId}
                  currentPostId={localStorage.getItem("postId")}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}
