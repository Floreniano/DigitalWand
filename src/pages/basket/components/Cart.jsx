import React from 'react';
import Popup from 'reactjs-popup';
import StarList from 'components/StarList';
import closePicture from 'assets/img/close-popup.png';

function Cart({ id, name, rating, images, mainImage, totalPrice, totalCount, onRemoveItem }) {
  const handleRemoveClick = () => {
    onRemoveItem(id);
  };
  return (
    <div className="card__product">
      <div className="card__product-picture">
        {images.map((image) => (image.id === mainImage ? (
            <img className="card__product-img" src={image.url} alt="product" key={image.id}></img>
        ) : null))}
        <Popup trigger={<span className="card__product-remove">Remove</span>}>
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
              <span className="popup-text">Вы действительно хотите удалить выбранный товар?</span>
              <button className="btn confirm" onClick={handleRemoveClick}>
                Подтвердить
              </button>
            </div>
          )}
        </Popup>
      </div>
      <div className="card__product-info">
        <h3 className="card__product-title">
          {name} ({totalCount})
        </h3>
        <table className="card__product-table">
          <tbody>
            <tr>
              <td className="card__product-table-title">Farm:</td>
              <td className="card__product-table-property">Tharamis Farm</td>
            </tr>
            <tr>
              <td className="card__product-table-title">Freshness:</td>
              <td className="card__product-table-property">1 day old</td>
            </tr>
          </tbody>
        </table>
        <div className="card__product-rating">
          <StarList ratingStars={rating} />
        </div>
        <div className="card__product-cost">
          <div className="card__product-cost-text">
            <span className="card__product-cost-text-price">{totalPrice} USD</span>
            {/* Скидка <span className="card__product-cost-text-discount">48.56 USD</span> */}
          </div>
          <div className="card__product-cost-count">
            <span className="card__product-cost-count-text">1pcs</span>
            <div className="card__product-cost-count-list">
              <span className="card__product-cost-count-list-text">Pcs</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.60938 4.89992L5.66437 6.95492C5.75806 7.04804 5.88478 7.10031 6.01687 7.10031C6.14897 7.10031 6.27569 7.04804 6.36937 6.95492L8.36937 4.95492"
                  stroke="#151515"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
