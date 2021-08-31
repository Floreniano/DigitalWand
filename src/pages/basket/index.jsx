import React, { Component } from 'react';
import InputMask from 'react-input-mask';
// assets
import FedEx from 'assets/img/price-icon-FedEx.svg';
import DHL from 'assets/img/price-icon-DHL.svg';
import Visa from 'assets/img/visa.svg';
import PayPal from 'assets/img/PayPal.svg';
import Bitcoin from 'assets/img/Bitcoin_logo.svg';

// libs
import { connect } from 'react-redux';
import { removeCartItem, plusCartItem, minusCartItem, clearCart } from 'redux/actions/cart';

// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import CustomPopup from 'components/CustomPopup';
import Cart from './components/Cart';

class BasketPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: '',
    };
  }

  onRemoveItem = (id) => {
    this.props.removeCartItem(id);
  };

  onPlusItem = (id) => {
    this.props.plusCartItem(id);
  };

  onMinusItem = (id) => {
    this.props.minusCartItem(id);
  };

  clearCart = () => {
    this.props.clearCart();
  };

  goBack() {
    window.history.go(-1);
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const data = localStorage.getItem('user');
    if (data) {
      const dataJSON = JSON.parse(data);
      this.setState({
        phone: dataJSON.phone.slice(1),
        firstName: dataJSON.name,
        address: dataJSON.address,
        sale: dataJSON.sale,
      });
    }
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      address,
      email,
    } = this.state;
    const {
      items,
      totalCount,
      subTotalPrice,
      tax,
      totalPrice,
      totalPriceWithDiscount,
    } = this.props;
    const addedCards = Object.keys(items).map((key) => items[key].items[0]);
    return (
      <div className="basket">
        <Header></Header>
        <section className="basket">
          <div className="content">
            {totalCount ? (
              <div className="basket__inner">
                <form className="basket__inner-content">
                  <div className="step">
                    <div className="basket__header">
                      <div className="basket__header-text">
                        <h1 className="basket__header-title">Billing info</h1>
                        <span className="basket__header-clue">Please enter your billing info</span>
                      </div>
                      <span className="basket__header-clue step">Step 1 of 5</span>
                    </div>
                    <div className="personal__information">
                      <div className="personal__information-item">
                        <h2 className="title-for-input">First name</h2>
                        <input
                          required
                          type="text"
                          defaultValue={firstName}
                          name="firstName"
                          onChange={this.handleInput}
                          className="custom-input"
                          placeholder="First name"
                        ></input>
                      </div>
                      <div className="personal__information-item">
                        <h2 className="title-for-input">Last name</h2>
                        <input
                          required
                          type="text"
                          name="lastName"
                          defaultValue={lastName}
                          onChange={this.handleInput}
                          className="custom-input"
                          placeholder="Last name"
                        ></input>
                      </div>
                      <div className="personal__information-item">
                        <h2 className="title-for-input">Email address</h2>
                        <input
                          required
                          type="email"
                          name="email"
                          defaultValue={email}
                          onChange={this.handleInput}
                          className="custom-input"
                          placeholder="Email address"
                        ></input>
                      </div>
                      <div className="personal__information-item">
                        <h2 className="title-for-input">Phone number</h2>
                        <InputMask
                          required
                          className="custom-input"
                          name="phone"
                          mask="8 (999) 999 - 99 - 99"
                          placeholder="Phone number"
                          maskChar={'_'}
                          value={phone}
                          onChange={this.handleInput}
                        ></InputMask>
                      </div>
                      <div className="personal__information-item">
                        <h2 className="title-for-input">Address</h2>
                        <input
                          required
                          type="text"
                          name="address"
                          defaultValue={address}
                          onChange={this.handleInput}
                          className="custom-input"
                          placeholder="Address"
                        ></input>
                      </div>
                      <div className="personal__information-item">
                        <h2 className="title-for-input">Town / City</h2>
                        <input
                          required
                          type="text"
                          name="town"
                          className="custom-input"
                          placeholder="Town or city"
                        ></input>
                      </div>
                      <div className="personal__information-item">
                        <h2 className="title-for-input">State / Country</h2>
                        <input
                          required
                          type="text"
                          name="country"
                          className="custom-input"
                          placeholder="State or country"
                        ></input>
                      </div>
                      <div className="personal__information-item">
                        <h2 className="title-for-input">ZIP/Postal code</h2>
                        <input
                          required
                          type="number"
                          name="ZIP"
                          className="custom-input"
                          placeholder="Postal code or ZIP"
                        ></input>
                      </div>
                      <div className="personal__information-item differrent-address">
                         <input
                         type="checkbox"
                         className="input-check"
                         id="different">
                         </input>
                         <label htmlFor="different" className="label-check">
                           Ship to a different address?
                         </label>
                      </div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="basket__header">
                      <div className="basket__header-text">
                        <h1 className="basket__header-title">Billing method</h1>
                        <span className="basket__header-clue">
                          Please enter your payment method
                        </span>
                      </div>
                      <span className="basket__header-clue step">Step 2 of 5</span>
                    </div>
                    <div className="billing_method">
                      <input
                        type="radio"
                        className="input-radio"
                        id="method-1"
                        name="method"
                      ></input>
                      <label htmlFor="method-1" className="label-radio different">
                        FedEx
                      </label>
                      <div className="price">
                        <span className="price-additional">+32 USD</span>
                        <span className="price-text">Additional price</span>
                      </div>
                      <img className="price-icon" src={FedEx} alt="price-icon"></img>
                    </div>

                    <div className="billing_method">
                      <input
                        type="radio"
                        className="input-radio"
                        id="method-2"
                        name="method"
                      ></input>
                      <label htmlFor="method-2" className="label-radio different">
                        DHL
                      </label>
                      <div className="price">
                        <span className="price-additional">+15 USD</span>
                        <span className="price-text">Additional price</span>
                      </div>
                      <img className="price-icon" src={DHL} alt="price-icon"></img>
                    </div>
                  </div>
                  <div className="step">
                    <div className="basket__header">
                      <div className="basket__header-text">
                        <h1 className="basket__header-title">Payment method</h1>
                        <span className="basket__header-clue">
                          Please enter your payment method
                        </span>
                      </div>
                      <span className="basket__header-clue step">Step 3 of 5</span>
                    </div>
                    <div className="card">
                      <div className="card__method">
                        <div className="card__method-radio">
                          <input
                            type="radio"
                            className="input-radio"
                            id="method-3"
                            name="visa"
                            defaultChecked
                          ></input>
                          <label htmlFor="method-3" className="label-radio different">
                            Credit card
                          </label>
                        </div>
                        <img className="card__method-icon" src={Visa} alt="visa"></img>
                      </div>
                      <h2 className="title-for-input">Card number</h2>
                      <input
                        required
                        className="custom-input card"
                        type="number"
                        placeholder="Card number"
                      ></input>
                      <div className="card__info-inputs">
                        <div className="card__info-input-holder">
                          <h2 className="title-for-input">Card holder</h2>
                          <input
                            required
                            className="custom-input holder"
                            type="number"
                            placeholder="Card holder"
                          ></input>
                        </div>
                        <div className="date-cvc">
                          <div className="card__info-input-date">
                            <h2 className="title-for-input">Expiration date</h2>
                            <input
                              required
                              className="custom-input"
                              type="number"
                              placeholder="MM/YY"
                            ></input>
                          </div>
                          <div className="card__info-input-cvc">
                            <h2 className="title-for-input">CVC</h2>
                            <input
                              required
                              className="custom-input"
                              type="number"
                              placeholder="CVC"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payment_method">
                      <div className="billing_method">
                        <input
                          type="radio"
                          className="input-radio"
                          id="method-card-1"
                          name="method-card"
                        ></input>
                        <label htmlFor="method-card-1" className="label-radio different">
                          PayPal
                        </label>
                        <img className="price-icon" src={PayPal} alt="PayPal"></img>
                      </div>

                      <div className="billing_method">
                        <input
                          type="radio"
                          className="input-radio"
                          id="method-card-2"
                          name="method-card"
                        ></input>
                        <label htmlFor="method-card-2" className="label-radio different">
                          Bitcoin
                        </label>
                        <img className="price-icon" src={Bitcoin} alt="Bitcoin"></img>
                      </div>
                    </div>
                  </div>
                  <div className="step">
                    <div className="basket__header">
                      <div className="basket__header-text">
                        <h1 className="basket__header-title">Additional informations</h1>
                        <span className="basket__header-clue">
                          Need something else? We will make it for you!
                        </span>
                      </div>
                      <span className="basket__header-clue step">Step 4 of 5</span>
                    </div>
                    <h2 className="title-for-input">Order notes</h2>
                    <textarea
                      className="additional-text"
                      placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
                    ></textarea>
                  </div>
                  <div className="step">
                    <div className="basket__header">
                      <div className="basket__header-text">
                        <h1 className="basket__header-title">Confirmation</h1>
                        <span className="basket__header-clue">
                          We are getting to the end. Just few clicks and your order si ready!
                        </span>
                      </div>
                      <span className="basket__header-clue step">Step 5 of 5</span>
                    </div>
                    <div className="agrees">
                      <div className="personal__information-item agree">
                        <input
                          required
                          type="checkbox"
                          className="input-check"
                          id="agree-1"
                        ></input>
                        <label htmlFor="agree-1" className="label-check">
                          I agree with sending an Marketing and newsletter emails. No spam,
                          promissed!
                        </label>
                      </div>
                      <div className="personal__information-item agree">
                        <input
                          required
                          type="checkbox"
                          className="input-check"
                          id="agree-2"
                        ></input>
                        <label htmlFor="agree-2" className="label-check">
                          I agree with our terms and conditions and privacy policy.
                        </label>
                      </div>
                    </div>
                    <input className="btn complete" type="submit" value="Complete order"></input>
                  </div>
                </form>

                <div className="basket__inner-card">
                  <div className="basket__inner-card-content">
                    <div className="basket__card-title">
                      <h2 className="basket__card-text">Order Summary</h2>
                      <span className="basket__card-clue">
                        Price can change depending on shipping method and taxes of your state.
                      </span>
                    </div>
                    {addedCards.map((card) => (
                      <Cart
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        rating={card.rating}
                        images={card.images}
                        mainImage={card.mainImage}
                        totalPrice={items[card.id].subTotalPrice}
                        totalCount={items[card.id].items.length}
                        onRemoveItem={this.onRemoveItem}
                        onPlus={this.onPlusItem}
                        onMinus={this.onMinusItem}
                      />
                    ))}
                    <div className="cards__cost">
                      <div className="cards__cost-subtotal">
                        <span className="cards__cost-text">Subtotal</span>
                        <span className="cards__cost-cost subtotal">{subTotalPrice} ₽</span>
                      </div>
                      <div className="cards__cost-tax">
                        <span className="cards__cost-text">Tax</span>
                        <span className="cards__cost-cost tax">17% {tax} ₽</span>
                      </div>
                      <div className="cards__cost-shipping">
                        <span className="cards__cost-text">Shipping</span>
                        <span className="cards__cost-cost shipping">0 ₽</span>
                      </div>
                    </div>
                    <div className="promo">
                      <input
                        type="text"
                        className="promo-input"
                        placeholder="Apply promo code"
                      ></input>
                      <button className="promo-apply">Apply now</button>
                    </div>
                    <div className="total__cost">
                      <div className="total__cost-description">
                        <h3 className="total__cost-description-title">Total Order</h3>
                        <span className="total__cost-description-delivery">
                          Guaranteed delivery day: June 12, 2020
                        </span>
                      </div>
                      {totalPriceWithDiscount ? (
                        <div className="total__cost-price">
                          <span className="total__cost-price-text">{totalPriceWithDiscount} ₽</span>
                          <span className="total__cost-price-text total">{totalPrice} ₽</span>
                        </div>
                      ) : (
                        <span className="total__cost-price-text">{totalPrice} ₽</span>
                      )}
                    </div>
                  </div>
                  <CustomPopup
                    onclick={this.clearCart}
                    trigger={<button className="btn clear">Очистить корзину</button>}
                    text={'Вы действительно хотите очистить корзину?'}
                    textButton={'Подтвердить'}
                  />
                </div>
              </div>
            ) : (
              <div className="basket__none">
                <h1>Корзина пустая</h1>
                <button className="btn btn-back" onClick={this.goBack}>
                  Вернуться назад
                </button>
              </div>
            )}
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.goods.items,
  totalCount: state.goods.totalCount,
  subTotalPrice: state.goods.subTotalPrice,
  tax: state.goods.tax,
  totalPrice: state.goods.totalPrice,
  totalPriceWithDiscount: state.goods.totalPriceWithDiscount,
});

const mapDispatchToProps = {
  removeCartItem,
  plusCartItem,
  minusCartItem,
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
