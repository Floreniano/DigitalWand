import React from "react";
// import $ from "jquery";
// css
import "../css/comments-style.css";
export const CommentsPage = () => {
  return (
    <div>
      <nav className="nav">
        <button className="btn__back">
          Назад
        </button>
        <button className="btn__exit">
          Выйти
        </button>
      </nav>

      <div className="post_item"></div>

      <div className="comments">
        <div className="comments__inner"></div>
      </div>
    </div>
  );
};
// $(document).ready(function () {
//   if (localStorage.getItem("userId") == 1) {
//     const urlPosts = "https://jsonplaceholder.typicode.com/posts";
//     const urlComments =
//       "https://jsonplaceholder.typicode.com/comments?postId=1";
//     var currentPost;
//     fetch(urlPosts)
//       .then((response) => response.json())
//       .then((result) => {
//         const post = document.querySelector(".post_item");
//         currentPost = result[localStorage.getItem("postId")];
//         let itemPost = `
//             <h1 class="more__title">${currentPost.title}</h1>
//             <div class="more__text">${currentPost.body}</div>
//             `;
//         post.innerHTML = itemPost;
//       });
//     fetch(urlComments)
//       .then((response) => response.json())
//       .then((result) => {
//         currentPost = result[localStorage.getItem("postId")];
//         const commentsList = document.querySelector(".comments__inner");
//         let output = "";
//         result.forEach((items) => {
//           if (items.postId == currentPost.id) {
//             let item = `
//               <div class="user">
//                 <img class="user__img" src="img/user.png" alt="user" />
//                 <p class="user__email">${items.email}</p>
//               </div>
//               <div class="comments__text">
//                 <h2 class="comments__text-title">${items.name}</h2>
//                 <p class="comments__text-text">${items.body}</p>
//               </div>
//           `;
//             output += item;
//           }
//         });
//         commentsList.innerHTML = output;
//       });
//   }
// });
