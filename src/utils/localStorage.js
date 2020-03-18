import store from '../store/store';

window.onbeforeunload = function setLocalStorage() {
  const {
  getFilter: {
    filter,
    isClickArrowUp,
    isClickArrowDown,
    selectValue,
    listSelectRole
  },
  input: {
    inputValue,
  }
 } = store.getState()

  localStorage.setItem('filter', filter);
  localStorage.setItem('isClickArrowUp', isClickArrowUp);
  localStorage.setItem('isClickArrowDown', isClickArrowDown);
  localStorage.setItem('selectValue', selectValue);
  localStorage.setItem('listSelectRole', listSelectRole);
  localStorage.setItem('inputValue', inputValue);
}

console.log('filter', localStorage.getItem('filter'));
console.log('isClickArrowUp', localStorage.getItem('isClickArrowUp'));
console.log('isClickArrowDown', localStorage.getItem('isClickArrowDown'));
console.log('selectValue', localStorage.getItem('selectValue'));
console.log('listSelectRole', localStorage.getItem('listSelectRole'));
console.log('inputValue', localStorage.getItem('inputValue'));
