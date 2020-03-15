import React from 'react';
import { connect } from 'react-redux';
import './StoreData.scss';
import { getFilterTable } from '../utils/getFilterTable';
import Select from './Select';
import SelectRole from './SelectRole';
import Input from './Input';

import Arrow from './Arrow';

function StoreData(props) {
  const {currentData} = props;

  return (
    <>
    <span><Input />{`Number user ${currentData.length}`}</span>
    <table className="table">
      <thead className="sticky">
        <tr>
          <th>Rank <Arrow filter="rank" /></th>
          <th>Name <Arrow filter="name"/></th>
          <th>Github<Arrow filter="githubId"/></th>
          <th>{`Role `}<SelectRole /></th>
          <th>Location <Arrow filter="location"/></th>
          <th>Score <Arrow filter="score" /></th>
          <th>Date registration<Arrow filter="registration" /></th>
          <th>Time registration <Arrow filter="registrationGetTime" /></th>
          <th>{`Active `}<Select /></th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((user) => (
          <tr key={user.id} className="row">
            <td>{user.rank}</td>
            <td>{user.name}</td>
            <td>{user.githubId}</td>
            <td>{user.role}</td>
            <td>{user.location}</td>
            <td>{user.score.toLocaleString()}</td>
            <td>{user.registration}</td>
            <td>{user.registrationGetTime}</td>
            <td>{user.isActive ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

function mapStateToProps(state) {
  const {table: {data, dataSearch, isSortName }, getFilter, input: { input }} = state;
  return {
    data,
    currentData: getFilterTable(data, dataSearch, getFilter, input),
    isSortName,
    input,
    getFilter,
  };
}


export default connect(mapStateToProps)(StoreData);

