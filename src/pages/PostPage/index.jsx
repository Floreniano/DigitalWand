import React, { Component } from 'react';

import Post from 'pages/PostPage/components/Post';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';

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
    const url = 'https://jsonplaceholder.typicode.com/posts';
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
        },
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return <p>Ошибка {error.message}</p>;
    }
    if (isLoaded) {
      return <Preloader />;
    }
    return (
      <div className='content'>
        <Header />
        <div className='posts__list'>
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
