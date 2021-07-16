import React, { Component } from 'react';

import Comment from 'pages/CommentsPage/components/Comment';
import PostToComment from 'pages/CommentsPage/components/PostToComment';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';

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
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    const urlComments = 'https://jsonplaceholder.typicode.com/comments?postId=1';

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
        },
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
        },
      );
  }

  render() {
    const {
      error,
      isLoaded,
      posts,
      comments,
    } = this.state;
    if (error) {
      return <p>Ошибка {error.message}</p>;
    }
    if (isLoaded) {
      return <Preloader />;
    }
    return (
      <div className='content'>
        <Header />
        <div className='post_item'>
          {posts.map((post) => (
            <PostToComment
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              currentPostId={localStorage.getItem('postId')}
            />
          ))}
        </div>
        <div className='comments'>
          <div className='comments__inner'>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                email={comment.email}
                name={comment.name}
                body={comment.body}
                id={comment.postId}
                currentPostId={localStorage.getItem('postId')}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
