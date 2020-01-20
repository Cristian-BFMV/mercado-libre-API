import React from 'react';
import { Link } from 'react-router-dom';
import ItemPrice from '../ItemPrice/ItemPrice';
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
        <Link to={`item/${item.id}`}>
          <h2>{item.title}</h2>
        </Link>
        <ItemPrice
          originalPrice={item.original_price}
          price={item.price}
          currency_id={item.currency_id}
        />
        {item.shipping.free_shipping && (
          <p className="free-shiping">Envío gratis</p>
        )}
      </div>
    </div>
  );
};

export default Item;
