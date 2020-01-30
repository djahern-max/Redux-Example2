import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Prices from './components/Price';
import PriceForm from './components/PriceForm';

import Store from '../src/store';

function App() {
  return (
    <Provider store={Store}>
      <div className='App'>
        <PriceForm />
        <hr />
        <Prices />
      </div>
    </Provider>
  );
}

export default App;
