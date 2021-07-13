import React from "react";
import logo from "../assets/img/user.png";
export default function Post({ email, name, body, id, currentPostId }) {
  if (id == currentPostId) {
    return (
      <div className="comments__inner-item">
        <div class="user">
          <img class="user__img" src={logo} alt="user" />
          <p class="user__email">{email}</p>
        </div>
        <div class="comments__text">
          <h2 class="comments__text-title">{name}</h2>
          <p class="comments__text-text">{body}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
