import React, { lazy, Suspense } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Switch, Route } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
const ItemDetails = lazy(() => import('./components/ItemDetails/ItemDetails'));
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchBar />
        </Route>
        <Route path="/item/:id">
          <Suspense fallback={<Spinner />}>
            <ItemDetails />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
