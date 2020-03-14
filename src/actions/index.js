const actions = {
  updateInput: (input) => (
    {
      type: 'UPDATE_INPUT',
      payload: {txt: input, length: input.length},
    }
  ),
  search: (dataSearch, value) => (
    {
      type: 'SEARCH',
      payload: dataSearch.filter(user => user.name.toLowerCase().includes(value)),
    }
  ),

  setFilter: (filter) => ({
    type: 'SET_FILTER',
    filter
  })
}


export default actions;

export const nameFilters = {
  RANK: 'rank',
  NAME: 'name',
  GITHUB_ID: 'githubId',
  LOCATION: 'location',
  SCORE: 'score',
  IS_ACTIVE: 'isActive',
  REGISTRATION: 'registration',
  REGISTRATION_GET_TIME: 'registrationGetTime',
}
