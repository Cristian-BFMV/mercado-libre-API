import React, { Component } from 'react';
import './ItemPrice.css';
class ItemPrice extends Component {
  formatPrice = price => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  getDiscount = (price, originalPrice) => {
    return Math.round(parseInt(100 - (+price * 100) / +originalPrice, 10));
  };
  render() {
    const { originalPrice, price, currency_id } = this.props;
    return (
      <div>
        {originalPrice ? (
          <div className="pricing">
            <p className="original-price">${this.formatPrice(originalPrice)}</p>
            <span>${`${this.formatPrice(price)} ${currency_id} `}</span>
            <span className="discount">
              {this.getDiscount(price, originalPrice)}% off
            </span>
          </div>
        ) : (
          <p>${`${this.formatPrice(price)} ${currency_id}`}</p>
        )}
      </div>
    );
  }
}

export default ItemPrice;
