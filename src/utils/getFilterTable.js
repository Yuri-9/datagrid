const getFilterTable = (data, dataSearch, getFilter, input) => {
  const { filter, isClickArrowUp, selectValue } = getFilter;
  const currentData2 = !input.length ? data : dataSearch;
  const direction = isClickArrowUp ? 1 : -1;
  let currentData;

  if (selectValue === 'Yes') {
    currentData = currentData2.filter(user => user.isActive === true)
  } else if (selectValue === 'No') {
    currentData = currentData2.filter(user => user.isActive === false)
  } else {
  currentData = currentData2;
  }

  switch (filter) {
    case 'rank':
      return currentData.sort((a, b) => (a[filter] - b[filter]) * direction);
    case 'name':
      return currentData.sort((a, b) => ('' + a[filter]).localeCompare(b[filter]) * direction );
    case 'githubId':
      return currentData.sort((a, b) => ('' + a[filter]).localeCompare(b[filter]) * direction );
    case 'location':
      return currentData.sort((a, b) => ('' + a[filter]).localeCompare(b[filter]) * direction );
    case 'score':
      return currentData.sort((a, b) => (a[filter] - b[filter]) * direction);
    case 'isActive':
      return currentData.sort((a, b) => ((a[filter] === b[filter]) ? 0 : a[filter] ? -1 : 1) * direction);
    case 'registration':
      return currentData.sort((a, b) => (new Date(a[filter]) - new Date(b[filter])) * direction);
    case 'registrationGetTime':
      return currentData.sort((a, b) => (a[filter] - b[filter]) * direction);
    default:
      return currentData.sort((a, b) => (a[filter] - b[filter]) * direction);
  }
}

export  { getFilterTable };
