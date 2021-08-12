import React from 'react';
import Popup from 'reactjs-popup';
// assets
import closePicture from 'assets/img/close-popup.png';

export default function CustomPopup({ trigger, text, textButton, onclick }) {
  return (
    <Popup trigger={trigger} modal nested>
      {(close) => (
        <div className="popup">
          <button
            className="closed"
            onClick={() => {
              close();
            }}
          >
            <img src={closePicture}></img>
          </button>
          <span className="popup-text">{text}</span>
          <button className="btn confirm" onClick={onclick}>
            {textButton}
          </button>
        </div>
      )}
    </Popup>
  );
}
