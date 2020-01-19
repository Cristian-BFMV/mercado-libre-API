import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
const Item = ({ item }) => {
  return (
    <div className="item-container">
      <div className="card-header">
        <div className="item-img">
          <Link to={`item/${item.id}`}>
            <img src={item.thumbnail} alt="item-img" />
          </Link>
        </div>
      </div>
      <div className="card-body">
        <h2>{item.title}</h2>
        {item.original_price ? (
          <div className="pricing">
            <p className="original-price">
              $
              {item.original_price
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
            </p>
            <span>
              $
              {`${item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ${
                item.currency_id
              } `}
            </span>
            <span className="discount">
              $
              {Math.round(
                parseInt(100 - (+item.price * 100) / +item.original_price, 10)
              )}
              % off
            </span>
          </div>
        ) : (
          <p>
            $
            {`${item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ${
              item.currency_id
            }`}
          </p>
        )}
        {item.shipping.free_shipping && (
          <p className="free-shiping">Envío gratis</p>
        )}
      </div>
    </div>
  );
};

export default Item;
