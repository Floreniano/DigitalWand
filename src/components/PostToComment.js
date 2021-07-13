import React from "react";
export default function Post({ title, body, id, currentPostId }) {
    if(id == currentPostId){
        return (
          <div>
            <h1 class="more__title">{title}</h1>
            <div class="more__text">{body}</div>
          </div>
        );
    }
  else{
      return null;
  }
}
