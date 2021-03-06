import React, { Component } from 'react';

import Post from 'pages/PostPage/components/Post';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';
import Error from 'components/Error';

import { fetchPosts } from 'redux/actions/posts';
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
        {errorText && <Error text={errorText} />}
        {posts.length === 0 ? (
          <div className="post__none"><span className='post__none-text'>Постов нету</span></div>
        ) : (
          <div className="posts__list">
            {posts.map((post) => (
              <Post key={post.id} title={post.title} body={post.body} id={post.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchedPosts: state.posts.fetchedPosts,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
