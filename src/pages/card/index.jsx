import React, { Component } from 'react';
// components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Card from 'pages/card/components/Card';

import { connect } from 'react-redux';
import dataProduct from 'redux/actions/product';
import { addToCart } from 'redux/actions/cart';

class CardPage extends Component {
  componentDidMount() {
    this.props.dataProduct();
  }

  addCardToCart = (obj) => {
    this.props.addToCart(obj);
  };

  render() {
    const { product: productItem } = this.props;
    return (
      <div className="card-content">
        <Header></Header>

        <section className="card-description">
          <div className="content description-card">
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
          </div>
        </section>

        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product.product,
});

const mapDispatchToProps = {
  dataProduct,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
