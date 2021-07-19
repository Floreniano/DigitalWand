import React from 'react';
// import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { savePostId } from 'redux/actions/posts';
import store from 'redux/store';

export default function Post({ title, body, id }) {
  const history = useHistory();
  function saveCurrentPostId() {
    // savePostId(id);
    store.dispatch(savePostId(id));
    history.push('/comments');
  }
  return (
    <div className='posts__list-item'>
      <h2 className='posts__list-item-title'>{title}</h2>
      <p className='posts__list-item-text'>{body}</p>
      <a
        onClick={saveCurrentPostId}
        onMouseDown={saveCurrentPostId}
        className='posts__list-item-link'
      >
        Подробнее
      </a>
    </div>
  );
}

// const mapDispatchToProps = {
//   savePostId,
// };

// export default connect(null, mapDispatchToProps)(Post);
