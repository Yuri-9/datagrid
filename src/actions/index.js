const actions = {
  updateInput: (input) => (
    {
      type: 'UPDATE_INPUT',
      payload: {txt: input, length: input.length},
    }
  ),
  sortData: (data, direction, type) => (
    {
      type: 'IS_SORT_NAME',
      payload: data.sort((a, b) => ('' + a[type]).localeCompare(b[type]) * direction ),
    }
  ),
  search: (dataSearch, value) => (
    {
      type: 'SEARCH',
      payload: dataSearch.filter(user => user.name.toLowerCase().includes(value)),
    }
  )
}

export default actions;

// const sortNamber = (state, type) => {
//   const derection = state.isSortName ? -1 : 1;
//   return state.data.sort((a, b) => {return (a[type] - b[type]) * derection}) ;
// }
