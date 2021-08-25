import React, { Component } from 'react';
// import { request } from 'api/api.js';
// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Card from 'pages/card/components/Card';
import Preloader from 'components/Preloader';

// redux
import { connect } from 'react-redux';
import { dataProduct } from 'redux/actions/card';
import { addToCart } from 'redux/actions/cart';

class CardPage extends Component {
  componentDidMount() {
    try {
      const address = window.location.href;
      const last = address.substr(address.lastIndexOf('/') + 1);
      this.props.dataProduct(last);
    } catch (err) {
      /* eslint-disable no-console */
      console.log('ERROR: ', err);
    }
  }

  addCardToCart = (obj) => {
    this.props.addToCart(obj);
  };

  render() {
    const { card, loading } = this.props;
    if (loading) {
      return <Preloader />;
    }
    return (
      <div className="card-content">
        <Header></Header>

        <section className="card-description">
          <div className="content description-card">
            {card !== undefined ? (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                fullDescription={card.fullDescription}
                price={card.price}
                rating={card.rating}
                images={card.images}
                mainImage={card.mainImage}
                onClickAddCart={this.addCardToCart}
              />
            ) : (
              <div className="card__inner not">
                <h1 className="not-found">Подробности о товаре не найдены</h1>
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
  card: state.card.card,
  loading: state.app.loading,
});
// const mapStateToProps = (state) => {
//   console.log(state);
//   return state;
// };

const mapDispatchToProps = {
  dataProduct,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
