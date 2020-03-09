import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';
import User from './User';
import { StoreData } from './components/StoreData';


const initialState = {
  count: 0,
};


function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const user = {
  name: 'Yra',
  surname: 'Vashk',
  date: '1922',
};

function App() {
  return (
    <Provider store={store}>            
        <Counter />
         
      {/* <User name={user.name} surname={user.surname} date={user.date}/> */}
      {/* <section>
        <label htmlFor='search'>Search </label>
        <input type='text' value={search} onChange={e => onSearchChange(e.target.value)}/>
      </section> */}
      <StoreData />
    </Provider>
  );
}

export default App;
