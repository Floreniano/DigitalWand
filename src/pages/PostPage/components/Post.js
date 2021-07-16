import React from "react";
import { createStore } from "redux";
import { rootReducer } from "redux/rootReducer";
export default function Post({ 
  title, 
  body, 
  id }) {
  const store = createStore(rootReducer, 0)
  window.store = store;
  function savePostId() {
    localStorage.setItem("postId", id);
  }
  return (
    <div className="posts__list-item">
      <h2 className="posts__list-item-title">{title}</h2>
      <p className="posts__list-item-text">{body}</p>
      <a
        href="comments"
        onClick={savePostId}
        onMouseDown={savePostId}
        className="posts__list-item-link"
      >
        Подробнее
      </a>
    </div>
  );
  
}