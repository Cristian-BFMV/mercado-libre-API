import React, { createContext } from 'react';

export const ItemContext = createContext({ items: [] });

class ItemProvider extends React.Component {
  state = {
    offset: 1,
    endPoint: 'https://api.mercadolibre.com/sites/MCO/search?q=',
    items: [],
    query: '',
    isOffset: true,
    primaryResults: 0
  };

  fetchItems = async query => {
    this.setState({ items: [], query, offset: 1 });
    const { endPoint } = this.state;
    const response = await (await fetch(`${endPoint}${query}`)).json();
    console.log(response)
    const { results } = response;
    this.setState({ items: results, primaryResults: response.paging.primary_results });
  };

  loadMore = async () => {
    const { endPoint, query, offset,primaryResults } = this.state;
    
      const response = await (
        await fetch(`${endPoint}${query}&offset=${50 * offset}`)
      ).json();
      const { results } = response;
      this.setState(prevState => {
        const { items, offset } = prevState;
        return { items: items.concat(results), offset: offset + 1 };
      });
    
      this.setState({isOffset: (offset+1)*50 < primaryResults ? true : false});
    
  };
  render() {
    const fetchItems = this.fetchItems;
    const loadMore = this.loadMore;
    const { children } = this.props;
    const { items, isOffset } = this.state;
    return (
      <ItemContext.Provider value={{ items, fetchItems, loadMore, isOffset }}>
        {children}
      </ItemContext.Provider>
    );
  }
}

export default ItemProvider;
