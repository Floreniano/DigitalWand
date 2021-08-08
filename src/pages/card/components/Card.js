import React, { useState } from 'react';
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
  ratingStar,
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
  const [rating, setRating] = useState(ratingStar);
  const [hover, setHover] = useState(null);

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
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={ratingValue}>
                  <input
                    type="radio"
                    name="reviewStars"
                    value={i}
                    onClick={() => setRating(ratingValue)}
                  />
                  <svg
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        className="card__rating-list-star"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.34191 2.1266C7.38796 1.98057 7.47936 1.85303 7.60284 1.76249C7.72633 1.67195 7.87546 1.62314 8.02857 1.62314C8.18169 1.62314 8.33082 1.67195 8.4543 1.76249C8.57779 1.85303 8.66919 1.98057 8.71524 2.1266L9.95524 5.93993H13.9552C14.1138 5.93394 14.27 5.98003 14.4 6.07116C14.5299 6.16229 14.6264 6.29345 14.6748 6.44461C14.7232 6.59577 14.7207 6.7586 14.6678 6.90824C14.6149 7.05787 14.5145 7.18608 14.3819 7.27327L11.1352 9.6266L12.3752 13.4466C12.4243 13.5921 12.4255 13.7495 12.3788 13.8957C12.332 14.042 12.2397 14.1695 12.1154 14.2596C11.991 14.3497 11.8412 14.3977 11.6876 14.3965C11.5341 14.3954 11.3849 14.3452 11.2619 14.2533L8.00857 11.8733L4.76191 14.2333C4.63891 14.3252 4.48975 14.3754 4.3362 14.3765C4.18266 14.3777 4.03277 14.3297 3.90842 14.2396C3.78408 14.1495 3.69179 14.022 3.64505 13.8757C3.5983 13.7295 3.59953 13.5721 3.64857 13.4266L4.88857 9.6066L1.64191 7.25327C1.5093 7.16608 1.40888 7.03787 1.35599 6.88824C1.3031 6.7386 1.30066 6.57577 1.34902 6.42461C1.39739 6.27345 1.49392 6.14229 1.62385 6.05116C1.75379 5.96003 1.90998 5.91394 2.06857 5.91993H6.06857L7.34191 2.1266Z"
                        stroke={ratingValue <= (hover || rating) ? '#FDBC15' : '#EBEBEB'}
                        fill={ratingValue <= (hover || rating) ? '#FDBC15' : '#ffff'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.00878906)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </label>
              );
            })}
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
            <span className="card__buy-cost-price">{price} USD</span>
            {/* Скидка <span className="card__buy-cost-discount">48.56 USD</span> */}
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
