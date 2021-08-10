import React from 'react';
// components
import StarList from 'components/StarList';
import CustomPopup from 'components/CustomPopup';

function Cart({
  id,
  name,
  rating,
  images,
  mainImage,
  totalPrice,
  totalCount,
  onRemoveItem,
  onPlus,
  onMinus,
}) {
  const handleRemoveClick = () => {
    onRemoveItem(id);
  };
  const handlePlusItem = () => {
    onPlus(id);
  };
  const handleMinusItem = () => {
    onMinus(id);
  };
  return (
    <div className="card__product">
      <div className="card__product-picture">
        {images.map((image) => (image.id === mainImage ? (
            <img className="card__product-img" src={image.url} alt="product" key={image.id}></img>
        ) : null))}
        <CustomPopup
          onclick={handleRemoveClick}
          trigger={<span className="card__product-remove">Remove</span>}
          text={'Вы действительно хотите удалить выбранный товар?'}
        />
        <div className="card__product-operations">
          <button className="card__product-operations-btn minus" disabled={totalCount === 1} onClick={handleMinusItem}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#6A983C"
              />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#6A983C"
              />
            </svg>
          </button>
          <button className="card__product-operations-btn plus" onClick={handlePlusItem}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#6A983C"
              />
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#6A983C"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="card__product-info">
        <h3 className="card__product-title">{name}</h3>
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
            <span className="card__product-cost-text-price">{totalPrice} ₽</span>
            <span className="card__product-cost-text-count"> ({totalCount} шт)</span>
            {/* Скидка <span className="card__product-cost-text-discount">48.56 ₽</span> */}
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
