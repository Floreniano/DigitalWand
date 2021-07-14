import React, { Component } from "react";
import $ from "jquery";
//assets
import user from "assets/img/user.png";
//css


export class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorPassword: "",
      errorEmail: "",
    };
    this.authorization = this.authorization.bind(this);
  }
  authorization(email, password) {
    const emailForAuthorization = "arkovalexandr1@gmail.com";
    const passwordForAuthorization = "arkov123";
    if (
      emailForAuthorization === email &&
      passwordForAuthorization === $.trim(password)
    ) {
      localStorage.setItem("userID", 1);
      window.location ="/posts";
    }

    const errorOutputPassword = (errorPasswordString) =>
      this.setState({ errorPassword: errorPasswordString });
    const errorOutputEmail = (errorEmailString) =>
      this.setState({ errorEmail: errorEmailString });

    if (password.length === 0) {
      errorOutputPassword("Введите пароль");
    } else if (password.length < 6) {
      errorOutputPassword("Пароль не может быть меньше 6 символов");
    } else if (!password.match(/^[a-zA-Z0-9_ ]*$/)) {
      errorOutputPassword("Пароль содержит не корректные символы");
    } else if (password !== passwordForAuthorization) {
      errorOutputPassword("Пароль введен не верно");
    } else {
      errorOutputPassword("Введите пароль");
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()) === true) {
      errorOutputEmail("Введите email");
    } else {
      errorOutputEmail("");
    }
  }

  render() {
    const { errorPassword, errorEmail } = this.state;
    return (
      <div>
        <div className="form">
          <img className="user" src={user} alt="user"></img>
          <p className="valid" id="validEmail">
            {errorEmail}
          </p>
          <input
            type="email"
            className="txt__email"
            id="email"
            placeholder="Введите email"
            required
          ></input>
          <p className="valid" id="validPassword">
            {errorPassword}
          </p>
          <input
            type="password"
            className="txt__password"
            placeholder="Введите пароль"
            id="password"
            required
          ></input>
          <button
            className="btn__confirm"
            onClick={() =>
              this.authorization(
                document.getElementById("email").value,
                document.getElementById("password").value
              )
            }
            id="btnConfirm"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
