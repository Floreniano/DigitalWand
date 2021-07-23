import React, { Component } from 'react';

export class Header extends Component {
  exit = () => {
    localStorage.clear();
    window.location = '/';
  };

  render() {
    return (
      <nav className='nav'>
        <button className='btn__exit' onClick={this.exit}>
          Выйти
        </button>
      </nav>
    );
  }
}
