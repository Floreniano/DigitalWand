import React from 'react';
import StarList from 'components/StarList';
// Slider
import Slider from 'react-slick';
import SliderArrow from 'components/SliderArrow';
import SliderArrowNext from 'assets/img/slick-arrow-next.png';
import SliderArrowPrev from 'assets/img/slick-arrow-prev.png';

export default function Card({
  id,
  name,
  fullDescription,
  price,
  rating,
  images,
  mainImage,
  onClickAddCart,
}) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow to="prev" icon={SliderArrowPrev} />,
    nextArrow: <SliderArrow to="next" icon={SliderArrowNext} />,
  };

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

  if (id !== parseInt(localStorage.catalogId, 16)) {
    return (
      <div className="card__inner not">
        <h1 className="not-found">Нет подробностей о товаре</h1>
      </div>
    );
  }
  return (
    <div className="card__inner">
      <Slider {...settings} className="card__list">
        {images.map((image) => (
          <div className="card__list-item" key={image.id}>
            <img className="card__list-img" src={image.url} alt="product"></img>
            <div className="card__list-description">
              <div className="card__list-discount description">- 36 %</div>
              <div className="card__list-shipping description">Free shipping</div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="card__content">
        <h1 className="card-title title">{name}</h1>
        <div className="card__rating">
          <div className="card__rating-list">
            <StarList ratingStars={rating} />
          </div>
          <div className="card__review">
            (
            <div className="card__review-content">
              <span className="card__review-count">1</span>
              <span className="card__review-text">customer review</span>
            </div>
            )
          </div>
        </div>
        <p className="card-text">{fullDescription}</p>
        <div className="card__properties">
          <table className="card__properties-table">
            <tbody>
              <tr>
                <td className="card__properties-title">SKU:</td>
                <td>76645</td>
              </tr>
              <tr>
                <td className="card__properties-title">Category:</td>
                <td className="underline">Vegetables</td>
              </tr>
              <tr>
                <td className="card__properties-title">Stock:</td>
                <td className="underline lime">In Stocks</td>
              </tr>
              <tr>
                <td className="card__properties-title">Farm</td>
                <td>Grocery Tarm Fields</td>
              </tr>
            </tbody>
          </table>
          <table className="card__properties-table">
            <tbody>
              <tr>
                <td className="card__properties-title">Freshness:</td>
                <td>1 days old</td>
              </tr>
              <tr>
                <td className="card__properties-title">Buy by:</td>
                <td>pcs, kgs, box, pack</td>
              </tr>
              <tr>
                <td className="card__properties-title">Delivery:</td>
                <td>in 2 days</td>
              </tr>
              <tr>
                <td className="card__properties-title">Delivery area:</td>
                <td>Czech republic</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card__buy">
          <div className="card__buy-cost">
            <span className="card__buy-cost-price">{price} ₽</span>
            {/* Скидка <span className="card__buy-cost-discount">48.56 ₽</span> */}
          </div>
          <div className="card__buy-btn">
            <div className="card__buy-btn-type">
              <span className="card__buy-btn-type-count">1</span>
              <div className="card__buy-btn-type-list">
                <span className="card__buy-btn-type-list-text">Pcs</span>
                <svg
                  className="card__buy-btn-type-list-arrow"
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
            <div className="card__buy-btn-add">
              <button className="btn card__buy-btn-add-btn" onClick={onAddCard}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card__description">
          <ul className="card__description-list">
            <li className="card__description-list-item active" id="#description">
              Description
            </li>
            <li className="card__description-list-item" id="#reviews">
              Reviews
            </li>
          </ul>
          <div className="card__description-content active" id="description">
            <h2 className="card__description-content-title">Origins</h2>
            <p className="card__description-content-text">
              We work hard to ensure that the fruit and vegetables we sell are fresh and high in
              quality. If we don’t grow them ourselves, we source them from carefully chosen
              suppliers, preferring to buy locally whenever possible.
            </p>
            <h2 className="card__description-content-title">How to cook</h2>
            <p className="card__description-content-text">
              From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness,
              texture and colour to an enormous number of recipes.
            </p>
          </div>
          <div className="card__description-content" id="reviews">
            <h2 className="card__description-content-title">Origins1</h2>
            <p className="card__description-content-text">
              We work hard to ensure that the fruit and vegetables we sell are fresh and high in
              quality. If we don’t grow them ourselves, we source them from carefully chosen
              suppliers, preferring to buy locally whenever possible.
            </p>
            <h2 className="card__description-content-title">How to cook1</h2>
            <p className="card__description-content-text">
              From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness,
              texture and colour to an enormous number of recipes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
