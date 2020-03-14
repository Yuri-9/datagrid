import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import User from './User';
import StoreData from './components/StoreData';
import store from './store/store';

const user = {
  name: 'Yra',
  surname: 'Vashk',
  date: '1922',
};


function App(props) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Counter />
        <User {...user}/>
        <StoreData />
      </div>
    </Provider>
  );
}

export default App;
