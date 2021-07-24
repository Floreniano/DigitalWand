import React, { Component } from 'react';

import Comment from 'pages/CommentsPage/components/Comment';
import PostToComment from 'pages/CommentsPage/components/PostToComment';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';
import Error from 'components/Error';

import { fetchPosts } from 'redux/actions/posts';
import { fetchComments } from 'redux/actions/comments';
import { connect } from 'react-redux';

class CommentsPage extends Component {
  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchPosts();
  }

  render() {
    const {
      fetchedPosts: posts,
      fetchedComments: comments,
      loading: loader,
      error: errorText,
    } = this.props;
    if (loader) {
      return <Preloader />;
    }
    return (
      <div className="content">
        <Header />
        <div className="post_item">
          {posts.map((post) => (
            <PostToComment key={post.id} title={post.title} body={post.body} id={post.id} />
          ))}
        </div>
        <div className="comments">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              email={comment.email}
              name={comment.name}
              body={comment.body}
              id={comment.postId}
            />
          ))}
          {errorText && <Error text={errorText} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fetchedPosts: state.posts.fetchedPosts,
  fetchedComments: state.comments.fetchedComments,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = {
  fetchComments,
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
