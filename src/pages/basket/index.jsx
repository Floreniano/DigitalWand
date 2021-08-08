import React, { Component } from 'react';

// components
import Header from 'components/Header';
import Footer from 'components/Footer';

// assets
import testPng from 'assets/img/test.png';
import FedEx from 'assets/img/price-icon-FedEx.svg';
import DHL from 'assets/img/price-icon-DHL.svg';
import Visa from 'assets/img/visa.svg';
import PayPal from 'assets/img/PayPal.svg';
import Bitcoin from 'assets/img/Bitcoin_logo.svg';

// libs
import { connect } from 'react-redux';

class BasketPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="basket">
        <Header></Header>
        <section class="basket">
          <div class="content">
            <div class="basket__inner">
              <div class="basket__inner-content">
                <div class="step">
                  <div class="basket__header">
                    <div class="basket__header-text">
                      <h1 class="basket__header-title">Billing info</h1>
                      <span class="basket__header-clue">Please enter your billing info</span>
                    </div>
                    <span class="basket__header-clue step">Step 1 of 5</span>
                  </div>
                  <div class="personal__information">
                    <div class="personal__information-item">
                      <h2 class="title-for-input">First name</h2>
                      <input type="text" class="custom-input" placeholder="First name"></input>
                    </div>
                    <div class="personal__information-item">
                      <h2 class="title-for-input">Last name</h2>
                      <input type="text" class="custom-input" placeholder="Last name"></input>
                    </div>
                    <div class="personal__information-item">
                      <h2 class="title-for-input">Email address</h2>
                      <input type="email" class="custom-input" placeholder="Email address"></input>
                    </div>
                    <div class="personal__information-item">
                      <h2 class="title-for-input">Phone number</h2>
                      <input type="text" class="custom-input" placeholder="Phone number"></input>
                    </div>
                    <div class="personal__information-item">
                      <h2 class="title-for-input">Address</h2>
                      <input type="text" class="custom-input" placeholder="Address"></input>
                    </div>
                    <div class="personal__information-item">
                      <h2 class="title-for-input">Town / City</h2>
                      <input type="text" class="custom-input" placeholder="Town or city"></input>
                    </div>
                    <div class="personal__information-item">
                      <h2 class="title-for-input">State / Country</h2>
                      <input
                        type="text"
                        class="custom-input"
                        placeholder="State or country"
                      ></input>
                    </div>
                    <div class="personal__information-item">
                      <h2 class="title-for-input">ZIP/Postal code</h2>
                      <input
                        type="number"
                        class="custom-input"
                        placeholder="Postal code or ZIP"
                      ></input>
                    </div>
                    <div class="personal__information-item differrent-address">
                      <input type="checkbox" class="input-check" id="different"></input>
                      <label for="different" class="label-check">
                        Ship to a different address?
                      </label>
                    </div>
                  </div>
                </div>
                <div class="step">
                  <div class="basket__header">
                    <div class="basket__header-text">
                      <h1 class="basket__header-title">Billing method</h1>
                      <span class="basket__header-clue">Please enter your payment method</span>
                    </div>
                    <span class="basket__header-clue step">Step 2 of 5</span>
                  </div>
                  <div class="billing_method">
                    <input type="radio" class="input-radio" id="method-1" name="method"></input>
                    <label for="method-1" class="label-radio different">
                      FedEx
                    </label>
                    <div class="price">
                      <span class="price-additional">+32 USD</span>
                      <span class="price-text">Additional price</span>
                    </div>
                    <img class="price-icon" src={FedEx} alt="price-icon"></img>
                  </div>

                  <div class="billing_method">
                    <input type="radio" class="input-radio" id="method-2" name="method"></input>
                    <label for="method-2" class="label-radio different">
                      DHL
                    </label>
                    <div class="price">
                      <span class="price-additional">+15 USD</span>
                      <span class="price-text">Additional price</span>
                    </div>
                    <img class="price-icon" src={DHL} alt="price-icon"></img>
                  </div>
                </div>
                <div class="step">
                  <div class="basket__header">
                    <div class="basket__header-text">
                      <h1 class="basket__header-title">Payment method</h1>
                      <span class="basket__header-clue">Please enter your payment method</span>
                    </div>
                    <span class="basket__header-clue step">Step 3 of 5</span>
                  </div>
                  <div class="card">
                    <div class="card__method">
                      <div class="card__method-radio">
                        <input
                          type="radio"
                          class="input-radio"
                          id="method-3"
                          name="visa"
                          checked
                        ></input>
                        <label for="method-3" class="label-radio different">
                          Credit card
                        </label>
                      </div>
                      <img class="card__method-icon" src={Visa} alt="visa"></img>
                    </div>
                    <h2 class="title-for-input">Card number</h2>
                    <input
                      class="custom-input card"
                      type="number"
                      placeholder="Card number"
                    ></input>
                    <div class="card__info-inputs">
                      <div class="card__info-input-holder">
                        <h2 class="title-for-input">Card holder</h2>
                        <input
                          class="custom-input holder"
                          type="number"
                          placeholder="Card holder"
                        ></input>
                      </div>
                      <div class="date-cvc">
                        <div class="card__info-input-date">
                          <h2 class="title-for-input">Expiration date</h2>
                          <input class="custom-input" type="number" placeholder="MM/YY"></input>
                        </div>
                        <div class="card__info-input-cvc">
                          <h2 class="title-for-input">CVC</h2>
                          <input class="custom-input" type="number" placeholder="CVC"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="payment_method">
                    <div class="billing_method">
                      <input
                        type="radio"
                        class="input-radio"
                        id="method-card-1"
                        name="method-card"
                      ></input>
                      <label for="method-card-1" class="label-radio different">
                        PayPal
                      </label>
                      <img class="price-icon" src={PayPal} alt="PayPal"></img>
                    </div>

                    <div class="billing_method">
                      <input
                        type="radio"
                        class="input-radio"
                        id="method-card-2"
                        name="method-card"
                      ></input>
                      <label for="method-card-2" class="label-radio different">
                        Bitcoin
                      </label>
                      <img class="price-icon" src={Bitcoin} alt="Bitcoin"></img>
                    </div>
                  </div>
                </div>
                <div class="step">
                  <div class="basket__header">
                    <div class="basket__header-text">
                      <h1 class="basket__header-title">Additional informations</h1>
                      <span class="basket__header-clue">
                        Need something else? We will make it for you!
                      </span>
                    </div>
                    <span class="basket__header-clue step">Step 4 of 5</span>
                  </div>
                  <h2 class="title-for-input">Order notes</h2>
                  <textarea
                    class="additional-text"
                    placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
                  ></textarea>
                </div>
                <div class="step">
                  <div class="basket__header">
                    <div class="basket__header-text">
                      <h1 class="basket__header-title">Confirmation</h1>
                      <span class="basket__header-clue">
                        We are getting to the end. Just few clicks and your order si ready!
                      </span>
                    </div>
                    <span class="basket__header-clue step">Step 5 of 5</span>
                  </div>
                  <div class="agrees">
                    <div class="personal__information-item agree">
                      <input type="checkbox" class="input-check" id="agree-1"></input>
                      <label for="agree-1" class="label-check">
                        I agree with sending an Marketing and newsletter emails. No spam, promissed!
                      </label>
                    </div>
                    <div class="personal__information-item agree">
                      <input type="checkbox" class="input-check" id="agree-2"></input>
                      <label for="agree-2" class="label-check">
                        I agree with our terms and conditions and privacy policy.
                      </label>
                    </div>
                  </div>
                  <button class="btn complete">Complete order</button>
                </div>
              </div>

              <div class="basket__inner-card">
                <div class="basket__card-title">
                  <h2 class="basket__card-text">Order Summary</h2>
                  <span class="basket__card-clue">
                    Price can change depending on shipping method and taxes of your state.
                  </span>
                </div>
                <div class="card__product">
                  <div class="card__product-picture">
                    <img class="card__product-img" src={testPng} alt="product"></img>
                    <span class="card__product-remove">Remove</span>
                  </div>
                  <div class="card__product-info">
                    <h3 class="card__product-title">Product title</h3>
                    <table class="card__product-table">
                      <tbody>
                        <tr>
                          <td class="card__product-table-title">Farm:</td>
                          <td class="card__product-table-property">Tharamis Farm</td>
                        </tr>
                        <tr>
                          <td class="card__product-table-title">Freshness:</td>
                          <td class="card__product-table-property">1 day old</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="card__product-rating">
                      <input id="star-4" type="radio" name="reviewStars"></input>
                      <label title="отлично" for="star-4"></label>

                      <input id="star-3" type="radio" name="reviewStars"></input>
                      <label title="хорошо" for="star-3"></label>

                      <input id="star-2" type="radio" name="reviewStars"></input>
                      <label title="могло быть лучше" for="star-2"></label>

                      <input id="star-1" type="radio" name="reviewStars"></input>
                      <label title="плохо" for="star-1"></label>

                      <input id="star-0" type="radio" name="reviewStars"></input>
                      <label title="ужасно" for="star-0"></label>
                    </div>
                    <div class="card__product-cost">
                      <div class="card__product-cost-text">
                        <span class="card__product-cost-text-price">36.23 USD</span>
                        <span class="card__product-cost-text-discount">48.56 USD</span>
                      </div>
                      <div class="card__product-cost-count">
                        <span class="card__product-cost-count-text">1pcs</span>
                        <div class="card__product-cost-count-list">
                          <span class="card__product-cost-count-list-text">Pcs</span>
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="bevel"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card__product">
                  <div class="card__product-picture">
                    <img class="card__product-img" src={testPng} alt="product"></img>
                    <span class="card__product-remove">Remove</span>
                  </div>
                  <div class="card__product-info">
                    <h3 class="card__product-title">Product title</h3>
                    <table class="card__product-table">
                      <tr>
                        <td class="card__product-table-title">Farm:</td>
                        <td class="card__product-table-property">Tharamis Farm</td>
                      </tr>
                      <tr>
                        <td class="card__product-table-title">Freshness:</td>
                        <td class="card__product-table-property">1 day old</td>
                      </tr>
                    </table>
                    <div class="card__product-rating">
                      <input id="star-4" type="radio" name="reviewStars"></input>
                      <label title="отлично" for="star-4"></label>

                      <input id="star-3" type="radio" name="reviewStars"></input>
                      <label title="хорошо" for="star-3"></label>

                      <input id="star-2" type="radio" name="reviewStars"></input>
                      <label title="могло быть лучше" for="star-2"></label>

                      <input id="star-1" type="radio" name="reviewStars"></input>
                      <label title="плохо" for="star-1"></label>

                      <input id="star-0" type="radio" name="reviewStars"></input>
                      <label title="ужасно" for="star-0"></label>
                    </div>

                    <div class="card__product-cost">
                      <div class="card__product-cost-text">
                        <span class="card__product-cost-text-price">36.23 USD</span>
                        <span class="card__product-cost-text-discount">48.56 USD</span>
                      </div>
                      <div class="card__product-cost-count">
                        <span class="card__product-cost-count-text">1pcs</span>
                        <div class="card__product-cost-count-list">
                          <span class="card__product-cost-count-list-text">Pcs</span>
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
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="bevel"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cards__cost">
                  <div class="cards__cost-subtotal">
                    <span class="cards__cost-text">Subtotal</span>
                    <span class="cards__cost-cost subtotal">73.98 USD</span>
                  </div>
                  <div class="cards__cost-tax">
                    <span class="cards__cost-text">Tax</span>
                    <span class="cards__cost-cost tax">17% 16.53 USD</span>
                  </div>
                  <div class="cards__cost-shipping">
                    <span class="cards__cost-text">Shipping</span>
                    <span class="cards__cost-cost shipping">0 USD</span>
                  </div>
                </div>
                <div class="promo">
                  <input type="text" class="promo-input" placeholder="Apply promo code"></input>
                  <button class="promo-apply">Apply now</button>
                </div>
                <div class="total__cost">
                  <div class="total__cost-description">
                    <h3 class="total__cost-description-title">Total Order</h3>
                    <span class="total__cost-description-delivery">
                      Guaranteed delivery day: June 12, 2020
                    </span>
                  </div>
                  <span class="total__cost-price">89.84 USD</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
// fetchedPosts: state.posts.fetchedPosts,
// loading: state.app.loading,
// error: state.app.error,
// });

// const mapDispatchToProps = {
// fetchPosts,
// };

export default connect(null, null)(BasketPage);
