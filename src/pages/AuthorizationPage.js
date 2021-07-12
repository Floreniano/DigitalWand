import React from "react";
import $ from "jquery";
//assets
import user from "../assets/img/user.png";
//css
import "../css/authorization-style.css";

export const AuthorizationPage = () => {
    return (
      <div>
         <div className="form">
            <img className="user" src={user} alt="user"></img>
            <p className="valid" id="validEmail"></p>
            <input type="email" className="txt__email" id="email" placeholder="Введите email" required></input>
            <p className="valid" id="validPassword"></p>
            <input type="password" className="txt__password" placeholder="Введите пароль" id="password" required></input>
            <button className="btn__confirm" id="btnConfirm">Login</button>
        </div>
      </div>
    );
}
$(document).ready(function () {
    //Авторизация
    const emailForAuthorization = "arkovalexandr1@gmail.com";
    const passwordForAuthorization = "arkov123";
    const validEmail = document.getElementById("validEmail");
    const validPassword = document.getElementById("validPassword");
  
    class Authorization {
      constructor(email, password) {
        this.email = email;
        this.password = password;
      }
      validateEmail(email) {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase()) === true) {
          validEmail.innerHTML = "Введите email";
        } else {
          validEmail.innerHTML = "";
        }
      }
      validatePassword(password) {
        if (password.length === 0) {
          validPassword.innerHTML = "Введите пароль";
        } else if (password.length < 6) {
          validPassword.innerHTML = "Пароль не может быть меньше 6 символов";
        } else if (!password.match(/^[a-zA-Z0-9_ ]*$/)) {
          validPassword.innerHTML = "Пароль содержит не корректные символы";
        } else if (password !== passwordForAuthorization) {
          validPassword.innerHTML = "Пароль введен не верно";
        } else {
          validPassword.innerHTML = "";
        }
      }
      redirect(email, password) {
        if (
          email === emailForAuthorization &&
          password === passwordForAuthorization
        ) {
          localStorage.setItem("userID", 1);
          window.close();
          window.open('/posts');
        }
      }
    }
  
    $(".btn__confirm").click(function () {
       let txtBoxEmail = document.getElementById("email").value;
       let txtBoxPassword = $.trim(document.getElementById("password").value);
       
       let authorization = new Authorization();  
       authorization.validateEmail(txtBoxEmail);
       authorization.validatePassword(txtBoxPassword);
       authorization.redirect(txtBoxEmail, txtBoxPassword);
    });
  });
