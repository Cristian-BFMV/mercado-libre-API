import React, { useContext } from 'react';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import { ItemContext } from '../../provider/ItemsProvider';
import './Items.css';

const Items = ({ offset, items, loading }) => {
  const { loadMore } = useContext(ItemContext);
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
          <button onClick={() => loadMore()}>Load more</button>
        </div>
      )}
    </div>
  );
};

export default Items;
