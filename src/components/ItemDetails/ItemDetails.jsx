import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import ItemPrice from '../ItemPrice/ItemPrice';
import './ItemDetails.css';

const ItemDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});

  const fetchItem = useCallback(async () => {
    const itemData = await (
      await fetch(`https://api.mercadolibre.com/items/${id}`)
    ).json();
    setItem(itemData);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="item-details-container">
          <div className="item-details-routing">
            <Link to="/">Atras</Link>
          </div>
          <div className="item-details-header">
            <img src={item.pictures[0].secure_url} alt="" />
          </div>
          <div className="item-details-body">
            <h1>Información general</h1>
            <h3>{item.title}</h3>
            <ItemPrice
              originalPrice={item.original_price}
              price={item.price}
              currency_id={item.currency_id}
            />
            <p>Cantidad disponible: {item.available_quantity}</p>
          </div>
          <div className="item-details-footer">
            <h2>Información del producto</h2>
            <div className="item-info">
              {item.attributes.map(attribute => (
                <div key={attribute.id}>
                  <h4>{attribute.name}</h4>
                  <p>{attribute.value_name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
