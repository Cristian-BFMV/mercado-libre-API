import React from 'react';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import './Items.css';

const Items = ({ info, items, loading }) => {
  return (
    <div className="items-container">
      {!items.length ? (
        <div>{loading ? <Spinner /> : <h1>No items found</h1>}</div>
      ) : (
        <div>
          <h1>Items</h1>
          <div>
            {items.map(item => (
              <Item item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
