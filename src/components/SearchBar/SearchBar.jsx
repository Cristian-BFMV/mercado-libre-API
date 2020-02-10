import React, { useState, useContext } from 'react';
import './SearchBar.css';
import { ItemContext } from '../../provider/ItemsProvider';
import Items from '../Items/Items';

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState('');
  // const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { items, fetchItems } = useContext(ItemContext);

  const handleChange = (event, updaterFunction) => {
    const { value } = event.target;
    updaterFunction(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    if (searchItem !== '') {
      fetchItems(searchItem);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="brand">
          <h2>Mercado Cristian</h2>
        </div>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={event => handleChange(event, setSearchItem)}
          />
          <button className="search-btn" onClick={event => handleSubmit(event)}>
            Search
          </button>
        </form>
      </div>
      <Items offset={handleSubmit} items={items} loading={loading} />
    </div>
  );
};

export default SearchBar;
