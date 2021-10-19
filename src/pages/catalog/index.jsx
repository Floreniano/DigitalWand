import React, { Component } from 'react';
import Nouislider from 'nouislider-react';
// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Catalog from 'pages/catalog/components/CatalogList.js';
import Preloader from 'components/Preloader';

// assets
import close from 'assets/img/ic-actions-close-simple.svg';
import star from 'assets/img/ic-actions-star-active.svg';
import starNoActive from 'assets/img/ic-actions-star-no-active.svg';

// redux
import { connect } from 'react-redux';
import { dataCatalog } from 'redux/actions/catalog';
import { addToCart } from 'redux/actions/cart';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: '',
      maxValue: 1000,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSlider = (sliderVal) => {
    this.setState({
      minValue: sliderVal[0],
      maxValue: sliderVal[1],
    });
  };

  addCardToCart = (obj) => {
    this.props.addToCart(obj);
  };

  componentDidMount() {
    this.props.dataCatalog();
  }

  render() {
    const { catalog: catalogItems, loading } = this.props;
    if (loading) {
      return <Preloader />;
    }
    return (
      <div className="catalog">
        <Header></Header>
        <img
          className="test"
          src="data:image/png;base64, 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
          IiKBbIyMr3AhQtggGxC0NaAywUj1CAAA/9k="
          alt="Red dot"
        />
        <section className="catalog">
          <div className="content">
            <div className="catalog__top">
              <div className="catalog__top__inner">
                <h1 className="title">Fruit and vegetables</h1>
                <div className="count">
                  <span className="count-number description">117</span>
                  <span className="count-text">Products</span>
                </div>
              </div>
              <ul className="catalog__top__list">
                <li className="catalog__top__list-item">
                  <input
                    type="radio"
                    className="input-radio"
                    id="catalog__top__list-item-rad-1"
                    name="catalog__top__list-filter"
                  ></input>
                  <label htmlFor="catalog__top__list-item-rad-1" className="label-radio">
                    Filtre text
                  </label>
                  <input
                    type="radio"
                    className="input-radio"
                    id="catalog__top__list-item-rad-2"
                    name="catalog__top__list-filter"
                  ></input>
                  <label htmlFor="catalog__top__list-item-rad-2" className="label-radio two">
                    Filtre text
                  </label>
                </li>
                <li className="catalog__top__list-item">
                  <input type="checkbox" className="input-check" id="input-check-1"></input>
                  <label htmlFor="input-check-1" className="label-check">
                    Filtre
                  </label>
                  <div className="catalog__top__list-item-info">Nbm</div>
                </li>
                <li className="catalog__top__list-item">
                  <input type="checkbox" className="input-check" id="input-check-2"></input>
                  <label htmlFor="input-check-2" className="label-check">
                    Filtre
                  </label>
                  <div className="catalog__top__list-item-info">Nbm</div>
                </li>
                <li className="catalog__top__list-item">
                  <input type="checkbox" className="input-check" id="input-check-3"></input>
                  <label htmlFor="input-check-3" className="label-check">
                    Filtre
                  </label>
                  <div className="catalog__top__list-item-info last">12</div>
                  <span className="catalog__top__list-item-select">Select</span>
                </li>
              </ul>
              <ul className="list__selected-filters">
                <li className="list__selected-filters-item applied">Applied filtres:</li>
                <li className="list__selected-filters-item ">
                  Selected Filtre
                  <img className="list__selected-filters-delete" src={close} alt="close"></img>
                </li>
                <li className="list__selected-filters-item ">
                  Selected Filtre
                  <img className="list__selected-filters-delete" src={close} alt="close"></img>
                </li>
                <li className="list__selected-filters-item ">
                  Selected Filtre
                  <img className="list__selected-filters-delete" src={close} alt="close"></img>
                </li>
              </ul>
            </div>

            <div className="catalog__content">
              <div className="catalog__filter">
                <div className="catalog__filter-item categories">
                  <h2 className="catalog__filter-item-title">Categories</h2>
                  <ul className="catalog__filter-list">
                    <li className="catalog__filter-list-item">
                      Category name
                      <span className="catalog__filter-list-count description">320</span>
                    </li>
                    <li className="catalog__filter-list-item">
                      Category name
                      <span className="catalog__filter-list-count description">112</span>
                    </li>
                    <li className="catalog__filter-list-item">
                      Category name
                      <span className="catalog__filter-list-count description">32</span>
                    </li>
                    <li className="catalog__filter-list-item">
                      Category name
                      <span className="catalog__filter-list-count description">48</span>
                    </li>
                  </ul>
                </div>
                <div className="catalog__filter-item">
                  <h3 className="catalog__filter-item-title">Brands</h3>
                  <ul className="catalog__filter-list">
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-check-1"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-check-1" className="label-check">
                        Filtre by brand item
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-check-2"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-check-2" className="label-check">
                        Filtre by brand item
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-check-3"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-check-3" className="label-check">
                        Filtre by brand item
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-check-4"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-check-4" className="label-check">
                        Filtre by brand item
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-check-5"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-check-5" className="label-check">
                        Filtre by brand item
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="catalog__filter-item">
                  <h3 className="catalog__filter-item-title">Rating</h3>
                  <ul className="catalog__filter-list">
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-star-1"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-star-1" className="label-check">
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-star-2"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-star-2" className="label-check">
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-star-3"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-star-3" className="label-check">
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-star-4"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-star-4" className="label-check">
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                      </label>
                    </li>
                    <li className="catalog__filter-list-item">
                      <input
                        type="checkbox"
                        className="input-check"
                        id="catalog__filter-list-item-star-5"
                      ></input>
                      <label htmlFor="catalog__filter-list-item-star-5" className="label-check">
                        <img className="catalog__list-rating-item" src={star} alt="star"></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                        <img
                          className="catalog__list-rating-item"
                          src={starNoActive}
                          alt="star"
                        ></img>
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="catalog__filter-item">
                  <h3 className="catalog__filter-item-title price-slider">Price</h3>
                  <Nouislider
                    className="price-range__slider"
                    start={[this.state.minValue, this.state.maxValue]}
                    connect={true}
                    step={5}
                    range={{
                      min: 0,
                      max: 1000,
                    }}
                    onChange={this.handleSlider}
                  />
                  <div className="catalog__filter-price">
                    <div className="catalog__filter-price-item">
                      <h4 className="price-slider">Min</h4>
                      <input
                        type="number"
                        min="1"
                        max="10000"
                        value={this.state.minValue}
                        onChange={this.handleChange}
                        className="catalog__filter-price-input"
                        name="minValue"
                        placeholder="0"
                        id="price-min"
                      ></input>
                    </div>
                    <div className="catalog__filter-price-item">
                      <h4 className="price-slider">Max</h4>
                      <input
                        type="number"
                        min="1"
                        max="10000"
                        value={this.state.maxValue}
                        onChange={this.handleChange}
                        className="catalog__filter-price-input"
                        name="maxValue"
                        placeholder="000"
                        id="price-max"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="catalog__filter-item buttons">
                  <button className="btn apply">Apply</button>
                  <button className="btn reset">Reset</button>
                </div>
              </div>
              <div className="catalog__list">
                {catalogItems.map((catalogItem) => (
                  <Catalog
                    key={catalogItem.id}
                    id={catalogItem.id}
                    name={catalogItem.name}
                    description={catalogItem.short_description}
                    price={catalogItem.price}
                    rating={catalogItem.rating}
                    images={catalogItem.images}
                    mainImage={catalogItem.mainImage}
                    onClickAddCart={this.addCardToCart}
                  />
                ))}
              </div>
            </div>
            <div className="show__more">
              <div className="show__more-pages">
                <span className="show__more-text">Page:</span>
                <ul className="show__more-list">
                  <li className="show__more-list-item">
                    <a className="show__more-list-link" href="">
                      1
                    </a>
                  </li>
                  <li className="show__more-list-item">
                    <a className="show__more-list-link" href="">
                      2
                    </a>
                  </li>
                  <li className="show__more-list-item">
                    <a className="show__more-list-link active" href="">
                      3
                    </a>
                  </li>
                  <li className="show__more-list-item">
                    <a className="show__more-list-link" href="">
                      4
                    </a>
                  </li>
                </ul>
              </div>
              <button className="btn show__more-btn">
                Show more products
                <svg
                  className="arrow-down"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.3125 7.03333L8.0525 9.77333C8.17741 9.89749 8.34638 9.96719 8.5225 9.96719C8.69862 9.96719 8.86759 9.89749 8.9925 9.77333L11.6592 7.10666"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                </svg>
              </button>
              <div className="count">
                <span className="count-number description">336</span>
                <span className="count-text">Products</span>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  catalog: state.catalog.catalog,
  countCart: state.catalog.totalCount,
  loading: state.app.loading,
});

const mapDispatchToProps = {
  dataCatalog,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
