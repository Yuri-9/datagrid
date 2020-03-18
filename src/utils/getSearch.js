const listItemSrting = ['rank','name', 'githubId', 'role', 'location', 'score', 'registration',  'registrationGetTime'];
const getSearch = (dataSearch, value) => dataSearch.filter((user) => listItemSrting.some(item => user[item].toString().toLowerCase().includes(value.toLowerCase())));

export default getSearch;
