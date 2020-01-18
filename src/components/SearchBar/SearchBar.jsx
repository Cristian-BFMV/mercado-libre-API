import React, { useState } from 'react';
import './SearchBar.css';
import Items from '../Items/Items';
const SearchBar = () => {
  const [searchItem, setSearchItem] = useState('');
  const [items, setItems] = useState([]);
  const [info, setInfo] = useState({});
  const handleChange = (event, updaterFunction) => {
    const { value } = event.target;
    updaterFunction(value);
  };

  const handleSubmit = async (event, query) => {
    event.preventDefault();
    if (query !== '') {
      console.log(
        `https://api.mercadolibre.com/sites/MCO/search?q=${query}&offset=50`
      );
      const response = await fetch(
        `https://api.mercadolibre.com/sites/MCO/search?q=${query}&offset=50`
      );
      const result = await response.json();
      const { results } = result;
      setItems(results);
      setInfo(result);
    }
  };
  return (
    <div>
      <div className="container">
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={event => handleChange(event, setSearchItem)}
          />
          <button
            className="search-btn"
            onClick={event => handleSubmit(event, searchItem)}
          >
            Search
          </button>
        </form>
      </div>
      <Items info={info} items={items} />
    </div>
  );
};

export default SearchBar;
