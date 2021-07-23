import React, { Component } from 'react';

import Post from 'pages/PostPage/components/Post';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';
import Error from 'components/Error';
import { fetchPosts } from 'redux/actions/posts';
import { showError } from 'redux/actions/error';
import { connect } from 'react-redux';

class PostsPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { fetchedPosts: posts, loading: loader, error: errorText } = this.props;
    if (loader) {
      return <Preloader />;
    }
    return (
      <div className="content">
        <Header></Header>
        {<Error text={errorText} />}
        <div className="posts__list">
          {posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} id={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchedPosts: state.posts.fetchedPosts,
  loading: state.app.loading,
  error: state.app.error,
});

// const mapStateToProps = (state) => {
//   console.log(state.app.error);
//   return {
//     fetchedPosts: state.posts.fetchedPosts,
//     loading: state.app.loading,
//   };
// };

const mapDispatchToProps = {
  fetchPosts,
  showError,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
