import React from 'react';
import ReactDOM from 'react-dom';
import ItemProvider from './provider/ItemsProvider';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <ItemProvider>
      <App />
    </ItemProvider>
  </Router>,
  document.getElementById('root')
);
