import React, { useState } from 'react';
import { request } from 'api/api.js';
// libs
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';

// assets
import closePicture from 'assets/img/close-popup.png';
import cabinet from 'assets/img/ic-actions-user.svg';

// redux
import { useDispatch } from 'react-redux';
import { recalculationPrice } from 'redux/actions/cart';

function PopupAuthorization({ classNames }) {
  const [phone, setPhone] = useState('999999999');
  const [password, setPassword] = useState('qwerty');
  const [errorAuthorization, setErrorAuthorization] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const errorOutput = (errString) => setErrorAuthorization(errString);
      const number = `7${phone.replace(/\D+/g, '').substr(1)}`;
      const response = await request('/api/users', 'POST', { number, password });
      if (password.length < 6) {
        errorOutput('Минимальная длина пароля 6 символов');
      }
      if (response.msg !== '') {
        errorOutput(response[0].msg);
      } else {
        errorOutput('');
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location = '/authorization';
        dispatch(recalculationPrice());
      }
    } catch (err) {
      /* eslint-disable no-console */
      console.log('ERROR:', err);
    }
  };
  const enabled = phone.length > 0 && password.length > 0;
  return (
    <Popup
      trigger={
        <img className={`cabinet__list-img ${classNames}`} src={cabinet} alt="cabinet"></img>
      }
      modal
      nested
    >
      {(close) => (
        <div className="popup authorization">
          <button
            className="closed"
            onClick={() => {
              close();
            }}
          >
            <img src={closePicture}></img>
          </button>
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
              onChange={(e) => setPhone(e.target.value)}
            ></InputMask>
            <input
              type="password"
              className="custom-input authorization"
              placeholder="Введите пароль"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              className="btn authorization"
              onClick={() => handleLogin(phone, password)}
              id="btnConfirm"
              disabled={!enabled}
            >
              Войти
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default PopupAuthorization;