import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import { request } from 'api/api.js';
// components
import Header from 'components/Header';

// assest
import photoImg from 'assets/img/user-cabinet.png';

// redux
import { connect } from 'react-redux';
import { recalculationPrice } from 'redux/actions/cart';

class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      name: '',
      address: '',
      email: '',
      password: 'qwerty',
      errorAuthorization: '',
      errorFirstName: '',
      errorNumber: '',
      errorEmail: '',
      errorAddress: '',
      successfully: '',
    };
    this.handleChangeData = this.handleChangeData.bind(this);
  }

  componentDidMount() {
    const data = localStorage.getItem('user');
    if (data) {
      const dataJSON = JSON.parse(data);
      this.setState({
        phone: dataJSON.phone.slice(1),
        name: dataJSON.name,
        address: dataJSON.address,
        email: dataJSON.email,
      });
    }
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleChangeData() {
    try {
      const data = JSON.parse(localStorage.getItem('user'));
      const { name, address, email } = this.state;
      let { phone } = this.state;
      if (phone.charAt(0) === '8') {
        phone = phone.slice(1);
      }
      phone = `7${phone.replace(/\D+/g, '')}`;
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let counter = 0;
      if (phone.length !== 11) {
        this.setState({ errorNumber: 'Введите корректный телефон' });
        counter++;
      } else {
        this.setState({ errorNumber: '' });
      }
      if (name.length === 0) {
        this.setState({ errorFirstName: 'Введите имя' });
        counter++;
      } else {
        this.setState({ errorFirstName: '' });
      }
      if (address.length === 0) {
        this.setState({ errorAddress: 'Введите адрес' });
        counter++;
      } else {
        this.setState({ errorAddress: '' });
      }
      if (!re.test(String(email).toLowerCase()) === true) {
        this.setState({ errorEmail: 'Введите корректный email' });
        counter++;
      } else {
        this.setState({ errorEmail: '' });
      }

      if (counter === 0) {
        const prevData = JSON.parse(localStorage.getItem('user'));
        const prevPhone = prevData.phone;
        localStorage.setItem('user', JSON.stringify({ ...prevData, address, email, name, phone }));
        await request(`/api/user/${data.id}`, 'PUT', {
          phone,
          name,
          address,
          email,
          prevPhone,
        });
        this.setState({ successfully: 'Данные успешно изменены' });
      } else {
        this.setState({ successfully: '' });
      }
    } catch (err) {
      /* eslint-disable no-console */
      console.warn('ERROR:', err);
    }
  }

  async handleLogin(phone, password) {
    try {
      const errorOutput = (errString) => this.setState({ errorAuthorization: errString });
      const number = `7${phone.replace(/\D+/g, '').substr(1)}`;
      const response = await request('/api/users', 'POST', { number, password });
      if (response.msg !== '') {
        errorOutput(response[0].msg);
      } else {
        errorOutput('');
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location = '/authorization';
        this.props.recalculationPrice();
      }
    } catch (err) {
      /* eslint-disable no-console */
      console.log('ERROR:', err);
    }
  }

  logout = () => {
    localStorage.removeItem('user');
    this.props.recalculationPrice();
    window.location = '/authorization';
  };

  render() {
    const {
      phone,
      name,
      address,
      email,
      password,
      errorAuthorization,
      errorFirstName,
      errorNumber,
      errorEmail,
      errorAddress,
      successfully,
    } = this.state;
    const enabled = phone.length > 0 && password.length > 0;
    return (
      <div className="authorization-content">
        <Header />
        {localStorage.getItem('user') ? (
          <div className="content bg bg-cabinet">
            <div className="cabinet">
              <h2 className="title">Личный кабинет</h2>
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
                    <div className="input-top">
                      <h2 className="title-for-input">First name</h2>
                      <span>{errorFirstName}</span>
                    </div>

                    <input
                      type="text"
                      className={`custom-input ${errorFirstName !== '' ? 'no-valid' : 'valid'}`}
                      placeholder="First name"
                      name="name"
                      value={name}
                      onChange={this.handleInput}
                    ></input>
                  </div>
                  <div className="cabinet__info-item-info">
                    <div className="input-top">
                      <h2 className="title-for-input">Phone number</h2>
                      <span>{errorNumber}</span>
                    </div>
                    <InputMask
                      className={`custom-input ${errorNumber !== '' ? 'no-valid' : 'valid'}`}
                      name="phone"
                      mask="8 (999) 999 - 99 - 99"
                      placeholder="Введите телефон"
                      maskChar={'_'}
                      value={phone}
                      onChange={this.handleInput}
                    ></InputMask>
                  </div>
                  <div className="cabinet__info-item-info">
                    <div className="input-top">
                      <h2 className="title-for-input">Email address</h2>
                      <span>{errorEmail}</span>
                    </div>

                    <input
                      type="email"
                      name="email"
                      className={`custom-input ${errorEmail !== '' ? 'no-valid' : 'valid'}`}
                      placeholder="Email address"
                      value={email}
                      onChange={this.handleInput}
                    ></input>
                  </div>
                  <div className="cabinet__info-item-info">
                    <div className="input-top">
                      <h2 className="title-for-input">Address</h2>
                      <span>{errorAddress}</span>
                    </div>

                    <input
                      type="text"
                      className={`custom-input ${errorAddress !== '' ? 'no-valid' : 'valid'}`}
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={this.handleInput}
                    ></input>
                  </div>
                  <div className="cabinet-btns">
                    <button className="btn cabinet-confirm" onClick={this.handleChangeData}>
                      Изменить данные
                    </button>
                    <button className="btn exit bottom" onClick={this.logout} id="btnConfirm">
                      Выйти
                    </button>
                    <span className='successfully'>{successfully}</span>
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
              <span className="error">{errorAuthorization}</span>
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
                onClick={() => this.handleLogin(phone, password)}
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
