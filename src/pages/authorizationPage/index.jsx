import React, { Component } from 'react';

// components
import Header from 'components/Header';

// redux
import { connect } from 'react-redux';
import dataUsers from 'redux/actions/users';

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '79999999999',
      password: 'qwerty',
      error: '',
    };
    this.authorization = this.authorization.bind(this);
  }

  componentDidMount() {
    this.props.dataUsers();
  }

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  authorization(phone, password) {
    const { users } = this.props;
    const errorOutput = (errString) => this.setState({ error: errString });
    let counter = 0;

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      counter = 1;
      if (user.password === password && user.phone === phone) {
        localStorage.setItem('user', JSON.stringify(user));
        window.history.back(-1);
        counter = 0;
        break;
      }
    }
    if (counter === 1) {
      errorOutput('Неверный телефон или пароль.');
    } else {
      errorOutput('');
    }
  }

  logout() {
    localStorage.removeItem('user');
    window.location = '/authorization';
  }

  render() {
    const { error, phone, password } = this.state;
    const enabled = phone.length > 0 && password.length > 0;
    return (
      <div className="authorization-content">
        <Header />

        {localStorage.getItem('user') ? (
          <div className="form logout">
            <h1 className="title authorization">Вы авторизованы</h1>
            <button
              className="btn authorization"
              onClick={this.logout}
              id="btnConfirm"
            >
              Выйти
            </button>
          </div>
        ) : (
          <div className="form">
            <h1 className="title authorization">Авторизация</h1>
            <span className="valid" id="valid">
              {error}
            </span>
            <input
              type="tel"
              className="custom-input authorization"
              id="phone"
              placeholder="Введите телефон"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            ></input>
            <input
              type="password"
              className="custom-input authorization"
              placeholder="Введите пароль"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            ></input>
            <button
              className="btn authorization"
              onClick={() => this.authorization(phone, password)}
              id="btnConfirm"
              disabled={!enabled}
            >
              Войти
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  dataUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
