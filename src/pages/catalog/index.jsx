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
