import React, { Component } from 'react';

import Post from 'pages/PostPage/components/Post';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';
import { setPosts, fetchPosts } from 'redux/actions/posts';
import { connect } from 'react-redux';

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.props.fetchPosts();
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          this.props.setPosts(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error } = this.state;
    const { items: posts, loading: loader } = this.props;
    if (error) {
      return <p>Ошибка {error.message}</p>;
    }
    if (loader) {
      return <Preloader />;
    }
    return (
      <div className='content'>
        <Header />
        <div className='posts__list'>
          {posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} id={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   items: state.posts.posts,
// });

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.posts.posts,
    fetchPosts: state.posts.fetchedPosts,
    loading: state.app.loading,
  };
};

const mapDispatchToProps = {
  setPosts,
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
