import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import StoreData from './components/StoreData';
import store from './store/store';
import ButtonDefaultFilter from './components/ButtonDefaultFilter';


function App(props) {
  return (
    <Provider store={store}>
      <header className="header">
      <ButtonDefaultFilter />
      </header>
      <main className="main">
        <StoreData />
      </main>
    </Provider>
  );
}

export default App;
