import React from "react";
import logo from "assets/img/user.png";
export default function Post({ 
  email, 
  name, 
  body, 
  id, 
  currentPostId }) {
  const currentPostID = parseInt(currentPostId, 16);
  console.log(typeof currentPostID);
  if (id !== currentPostID) {
    return null;
  }
  return (
    <div className="comments__inner-item">
      <div className="user">
        <img className="user__img" src={logo} alt="user" />
        <p className="user__email">{email}</p>
      </div>
      <div className="comments__text">
        <h2 className="comments__text-title">{name}</h2>
        <p className="comments__text-text">{body}</p>
      </div>
    </div>
  );
}
