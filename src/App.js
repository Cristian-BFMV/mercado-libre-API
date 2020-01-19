import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ItemDetails from './components/ItemDetails/ItemDetails';
import { Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchBar />
        </Route>
        <Route path="/item/:id">
          <ItemDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
