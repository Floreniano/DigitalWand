import React from "react";
export default function Post({ title, body, id }) {
  function savePostId(postID) {
    localStorage.setItem("postId", postID);
  }
  return (
    <div className="posts__list-item">
      <h2 className="posts__list-item-title">{title}</h2>
      <p className="posts__list-item-text">{body}</p>
      <a
        href="comments"
        onClick={() => savePostId(id)}
        onMouseDown={() => savePostId(id)}
        className="posts__list-item-link"
      >
        Подробнее
      </a>
    </div>
  );
}