import React from 'react';
import { connect } from 'react-redux';

function PostToComment({
  title,
  body,
  id,
  postId,
}) {
  if (id !== postId) {
    return null;
  }
  return (
    <div>
      <h1 className='more__title'>{title}</h1>
      <div className='more__text'>{body}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({ postId: state.posts.id });

export default connect(mapStateToProps, null)(PostToComment);
