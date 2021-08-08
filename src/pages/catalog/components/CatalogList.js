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
      i <= rating
        ? stars.push(
            <img className="catalog__list-rating-item" key={i} src={star} alt="star"></img>,
        )
        : stars.push(
            <img className="catalog__list-rating-item" key={i} src={starNoActive} alt="star"></img>,
        );
    }
    return stars;
  }
  function saveId() {
    localStorage.setItem('catalogId', id);
  }
  const onAddCard = () => {
    const obj = {
      id,
      name,
      price,
      images,
      mainImage,
    };
    onClickAddCart(obj);
  };
  return (
    <div className="catalog__list-item">
      <Link className="catalog__list-link" to="/card" onClick={saveId}>
        <div className="catalog__list-discount description">-36%</div>
        {images.map((image) => (image.id === mainImage ? (
            <img className="catalog__list-img" src={image.url} alt="product" key={image.id}></img>
        ) : null))}
      </Link>
      <h3 className="catalog__list-title">{name}</h3>
      <span className="catalog__list-description">{description}</span>
      <div className="catalog__list-rating">{createStars()}</div>
      <div className="catalog__list-bottom">
        <div className="catalog__list-bottom-price">
          <span className="catalog__list-bottom-price-cost">{price} USD</span>
          {/* Скидка <span className='catalog__list-bottom-price-discount'>48.56</span> */}
        </div>
        <div className="catalog__list-bottom-buttons">
          <Link className="btn catalog__list-bottom-btn more" onClick={saveId} to="/card">
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
