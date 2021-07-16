import React from 'react';

export default function Post({
  title,
  body,
  id,
  currentPostId,
}) {
  const currentPostID = parseInt(currentPostId, 16);
  if (id !== currentPostID) {
    return null;
  }
  return (
    <div>
      <h1 className='more__title'>{title}</h1>
      <div className='more__text'>{body}</div>
    </div>
  );
}
