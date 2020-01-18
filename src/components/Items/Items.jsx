import React from 'react';
import Item from '../Item/Item';
const Items = ({ info, items }) => {
  return (
    <div>
      {!items.length ? (
        <h1>No items found</h1>
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
