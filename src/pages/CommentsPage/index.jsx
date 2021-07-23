import React, { Component } from 'react';

import Comment from 'pages/CommentsPage/components/Comment';
import PostToComment from 'pages/CommentsPage/components/PostToComment';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';
import { setComments } from 'redux/actions/comments';
import { connect } from 'react-redux';

class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const urlComments = 'https://jsonplaceholder.typicode.com/comments?postId=1';

    fetch(urlComments)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          this.props.setComments(result);
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
    const { error, isLoaded } = this.state;
    const { allPosts: posts, allComments: comments } = this.props;
    if (error) {
      return <p>Ошибка {error.message}</p>;
    }
    if (!isLoaded) {
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
            id={post.id} />
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
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.posts.posts,
  allComments: state.comments.comments,
});

const mapDispatchToProps = {
  setComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
