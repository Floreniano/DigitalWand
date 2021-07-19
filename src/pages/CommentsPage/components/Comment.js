import React from 'react';
import logo from 'assets/img/user.png';
import { connect } from 'react-redux';

function Comment({
  email,
  name,
  body,
  id,
  postId,
}) {
  if (id !== postId) {
    return null;
  }
  return (
    <div className='comments__inner-item'>
      <div className='user'>
        <img className='user__img' src={logo} alt='user' />
        <p className='user__email'>{email}</p>
      </div>
      <div className='comments__text'>
        <h2 className='comments__text-title'>{name}</h2>
        <p className='comments__text-text'>{body}</p>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ postId: state.posts.id });

export default connect(mapStateToProps, null)(Comment);
