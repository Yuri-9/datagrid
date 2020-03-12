import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import User from './User';
import StoreData from './components/StoreData';
import Input from './components/Input';
import store from './store/store';

const user = {
  name: 'Yra',
  surname: 'Vashk',
  date: '1922',
};


function App(props) {
  return (
    <Provider store={store}>
        <Counter />
      <User {...user}/>
      <Input />
      <StoreData />
    </Provider>
  );
}

export default App;
