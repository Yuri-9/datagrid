import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import User from './User';
import StoreData from './components/StoreData';
import store from './store/store';


function App(props) {
  return (
    <Provider store={store}>
      <header className="header">
      </header>
      <main className="main">
        <StoreData />
      </main>
    </Provider>
  );
}

export default App;
