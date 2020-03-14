import React from 'react';
import { connect } from 'react-redux';
import './StoreData.scss';

import Arrow from './Arrow';

function StoreData(props) {
  const {currentData} = props;

  return (
    <>
    <table className="table">
      <thead className="sticky">
        <tr>
          <th>Rank <Arrow filter="rank" /></th>
          <th>Name <Arrow filter="name"/></th>
          <th>Github ID <Arrow filter="githubId"/></th>
          <th>Location <Arrow filter="location"/></th>
          <th>Score <Arrow filter="score" /></th>
          <th>Date registration<Arrow filter="registration" /></th>
          <th>Time registration <Arrow filter="registrationGetTime" /></th>
          <th>Active <Arrow filter="isActive" /></th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((user) => (
          <tr key={user.id} className="row">
            <td>{user.rank}</td>
            <td>{user.name}</td>
            <td>{user.githubId}</td>
            <td>{user.location}</td>
            <td>{user.score.toLocaleString()}</td>
            <td>{user.registration}</td>
            <td>{user.registrationGetTime}</td>
            <td>{user.isActive ? 'yes' : 'no'}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}


const getFilterTable = (data, dataSearch, getFilter, input) => {
  const currentData = !input.length ? data : dataSearch;
  const { filter, isClickArrowUp } = getFilter;
  const direction = isClickArrowUp ? 1 : -1;
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
      throw new Error('Unknown filter: ' + filter)
  }
}

function mapStateToProps(state) {
  const {table: {data, dataSearch, isSortName }, getFilter, input: { input } } = state;
  return {
    data,
    currentData: getFilterTable(data, dataSearch, getFilter, input),
    isSortName,
    input,
    getFilter,
  };
}


export default connect(mapStateToProps)(StoreData);

