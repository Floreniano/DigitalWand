import React, { Component } from "react";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.exit = this.exit.bind(this);
    this.backToPosts = this.backToPosts.bind(this);
  }
  exit() {
    localStorage.removeItem("userID");
    localStorage.removeItem("postId");
    window.location = "/";
  }
  backToPosts() {
    window.history.back();
  }
  render() {
    return (
      <nav className="nav">
        <button className="btn__back" onClick={this.backToPosts}>
          Назад
        </button>
        <button className="btn__exit" onClick={this.exit}>
          Выйти
        </button>
      </nav>
    );
  }
}
