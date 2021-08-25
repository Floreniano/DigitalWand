import React, { Component } from 'react';
import InputMask from 'react-input-mask';
// components
import Header from 'components/Header';
import { request } from 'api/api.js';

// assest
import photoImg from 'assets/img/user-cabinet.png';

// redux
import { connect } from 'react-redux';
import { recalculationPrice } from 'redux/actions/cart';

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '999999999',
      password: 'qwerty',
      error: '',
    };
    this.logout = this.logout.bind(this);
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async loginHandler(phone, password) {
    try {
      const errorOutput = (errString) => this.setState({ error: errString });
      const number = `7${phone.replace(/\D+/g, '').substr(1)}`;
      const response = await request('/api/users', 'POST', { number, password });
      if (response[0].msg !== '') {
        errorOutput(response[0].msg);
      } else {
        errorOutput('');
        localStorage.setItem('user', JSON.stringify(response[0].data.user));
        window.location = '/authorization';
        this.props.recalculationPrice();
      }
    } catch (err) {
      /* eslint-disable no-console */
      console.log('ERROR:', err);
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
          <div className="content bg bg-cabinet">
            <div className="cabinet">
              <div className="cabinet__info">
                <div className="cabinet__info-item info">
                  <div className="cabinet__info-item-top">
                    <div className="cabinet__info-item-photo">
                      <img className="cabinet__info-item-photo-img" src={photoImg} alt="photo" />
                    </div>
                    <button className="btn exit top" onClick={this.logout} id="btnConfirm">
                      Выйти
                    </button>
                  </div>
                  <div className="cabinet__info-item-info">
                    <h2 className="title-for-input">First name</h2>
                    <input type="text" className="custom-input" placeholder="First name"></input>
                  </div>
                  <div className="cabinet__info-item-info">
                    <h2 className="title-for-input">Phone number</h2>
                    <input type="text" className="custom-input" placeholder="Phone number"></input>
                  </div>
                  <div className="cabinet__info-item-info">
                    <h2 className="title-for-input">Email address</h2>
                    <input
                      type="email"
                      className="custom-input"
                      placeholder="Email address"
                    ></input>
                  </div>
                  <div className="cabinet__info-item-info">
                    <h2 className="title-for-input">Address</h2>
                    <input type="text" className="custom-input" placeholder="Address"></input>
                  </div>
                  <div className="cabinet-btns">
                    <button className="btn cabinet-confirm">Подтвердить</button>
                    <button className="btn exit bottom" onClick={this.logout} id="btnConfirm">
                      Выйти
                    </button>
                  </div>
                </div>
                <div className="cabinet__info-item">
                  <div className="cabinet__info-item-discount">
                    <span>10%</span>
                  </div>
                  <div className="cabinet__info-item-description">
                    <h2 className="title">Скидка</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="content bg bg-cabinet">
            <div className="cabinet authorization">
              <h1 className="title authorization">Авторизация</h1>
              <span className="error">{error}</span>
              <InputMask
                className="custom-input authorization"
                name="phone"
                mask="8 (999) 999 - 99 - 99"
                placeholder="Введите телефон"
                maskChar={'_'}
                value={phone}
                onChange={this.handleInput}
              ></InputMask>
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
                onClick={() => this.loginHandler(phone, password)}
                id="btnConfirm"
                disabled={!enabled}
              >
                Войти
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  recalculationPrice,
};

export default connect(null, mapDispatchToProps)(AuthorizationPage);
