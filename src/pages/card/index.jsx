import React, { Component } from 'react';
import { request } from 'api/api.js';
// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Card from 'pages/card/components/Card';

// redux
import { connect } from 'react-redux';
import { addToCart } from 'redux/actions/cart';

class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const address = window.location.href;
      const last = address.substr(address.lastIndexOf('/') + 1);
      const response = await request(`/api/catalog/${last}`, 'GET');
      this.setState({ data: response });
    } catch (err) {
      /* eslint-disable no-console */
      console.log('ERROR: ', err);
    }
  }

  addCardToCart = (obj) => {
    this.props.addToCart(obj);
  };

  render() {
    const { data: productItem } = this.state;
    return (
      <div className="card-content">
        <Header></Header>

        <section className="card-description">
          <div className="content description-card">
            {productItem !== undefined ? (
              <Card
                key={productItem.id}
                id={productItem.id}
                name={productItem.name}
                fullDescription={productItem.fullDescription}
                price={productItem.price}
                rating={productItem.rating}
                images={productItem.images}
                mainImage={productItem.mainImage}
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

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(CardPage);
