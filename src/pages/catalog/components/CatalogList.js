import React from 'react';
// assets
import star from 'assets/img/ic-actions-star-active.svg';
import starNoActive from 'assets/img/ic-actions-star-no-active.svg';
import { Link } from 'react-router-dom';

export default function Catalog({
  id,
  name,
  description,
  price,
  rating,
  images,
  mainImage,
  onClickAddCart,
}) {
  function createStars() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          className="catalog__list-rating-item"
          key={i}
          src={i <= rating ? star : starNoActive}
          alt="star"
        ></img>,
      );
    }
    return stars;
  }
  const onAddCard = () => {
    const obj = {
      id,
      name,
      price,
      images,
      mainImage,
      rating,
    };
    onClickAddCart(obj);
  };

  const setMainImage = images.find((image) => image.id === mainImage);
  return (
    <div className="catalog__list-item">
      <Link className="catalog__list-link" to={`/card/${id}`}>
        <div className="catalog__list-discount description">-36%</div>
        <img
          className="catalog__list-img"
          src={setMainImage.url}
          alt="product"
          key={setMainImage.id}
        ></img>
      </Link>
      <h3 className="catalog__list-title">{name}</h3>
      <span className="catalog__list-description">{description}</span>
      <div className="catalog__list-rating">{createStars()}</div>
      <div className="catalog__list-bottom">
        <div className="catalog__list-bottom-price">
          <span className="catalog__list-bottom-price-cost">{price} ₽</span>
          {/* Скидка <span className='catalog__list-bottom-price-discount'>48.56 ₽</span> */}
        </div>
        <div className="catalog__list-bottom-buttons">
          <Link className="btn catalog__list-bottom-btn more" to="/card">
            Подробнее
          </Link>
          <button className="btn catalog__list-bottom-btn buy" onClick={onAddCard}>
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
