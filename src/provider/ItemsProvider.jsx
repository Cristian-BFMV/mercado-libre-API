import React, { createContext } from 'react';

export const ItemContext = createContext({ items: [] });

class ItemProvider extends React.Component {
  state = {
    offset: 1,
    endPoint: 'https://api.mercadolibre.com/sites/MCO/search?q=',
    items: [],
    query: ''
  };

  fetchItems = async query => {
    this.setState({ items: [], query, offset: 1 });
    const { endPoint } = this.state;
    const response = await (await fetch(`${endPoint}${query}`)).json();
    const { results } = response;
    this.setState({ items: results });
  };

  loadMore = async () => {
    const { endPoint, query, offset } = this.state;
    const response = await (
      await fetch(`${endPoint}${query}&offset=${50 * offset}`)
    ).json();
    const { results } = response;
    this.setState(prevState => {
      const { items, offset } = prevState;
      return { items: items.concat(results), offset: offset + 1 };
    });
  };
  render() {
    const fetchItems = this.fetchItems;
    const loadMore = this.loadMore;
    const { children } = this.props;
    const { items } = this.state;
    return (
      <ItemContext.Provider value={{ items, fetchItems, loadMore }}>
        {children}
      </ItemContext.Provider>
    );
  }
}

export default ItemProvider;
