import React, { Component } from 'react';
// import InputMask from 'react-input-mask';
// components
import Header from 'components/Header';

// redux
import { connect } from 'react-redux';
import dataUsers from 'redux/actions/users';
import { recalculationPrice } from 'redux/actions/cart';

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      error: '',
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.dataUsers();
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
        this.props.recalculationPrice();
        window.location = '/authorization';
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
    this.props.recalculationPrice();
    window.location = '/authorization';
  }

  render() {
    const { phone, password, error } = this.state;
    const enabled = phone.length > 0 && password.length > 0;
    return (
      <div className="authorization-content">
        <Header />
        {localStorage.getItem('user') ? (
          <div className="form logout">
            <h1 className="title authorization">Вы авторизованы</h1>
            <button className="btn authorization exit" onClick={this.logout} id="btnConfirm">
              Выйти
            </button>
          </div>
        ) : (
          <div className="form">
            <h1 className="title authorization">Авторизация</h1>
            <span className="valid">{error}</span>
            {/* <InputMask
            className="custom-input authorization"
             name="phone"
              mask="8 (999) 999 - 99 - 99"
              maskChar={null}
              value={this.state.phone}
              onChange={this.handleInput}
            ></InputMask> */}
            <input
              type="tel"
              className="custom-input authorization"
              name="phone"
              placeholder="Введите телефон"
              value={phone}
              onChange={this.handleInput}
            ></input>
            <input
              type="password"
              className="custom-input authorization"
              placeholder="Введите пароль"
              name="password"
              value={password}
              onChange={this.handleInput}
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
  recalculationPrice,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
