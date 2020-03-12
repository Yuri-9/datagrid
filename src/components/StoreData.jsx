import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './StoreData.scss';
import actions from '../actions/index';

const { sortData } = actions;

function StoreData(props) {
  const {data, dataSearch, isSortName, input} = props;
  const currentData = !input.length ? data : dataSearch;

  const handleClick = () => {
    const { sortData } = props;
    const direction = isSortName ? 1 : -1;

    sortData(currentData, direction, 'name');
  }

  return (
    <>
    <table className="table">
      <thead className="sticky">
        <tr>
          <th onClick={handleClick}>Rank</th>
          <th>Name</th>
          <th>Github ID</th>
          <th>Location</th>
          <th>Score</th>
          <th>Date registration</th>
          <th>Time registration</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((user) => (
          <tr key={user.id} className="row">
            <td>{user.rank}</td>
            <td>{user.name}</td>
            <td>{user.githubId}</td>
            <td>{user.locationName}</td>
            <td>{user.totalScore.toLocaleString()}</td>
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


function mapStateToProps(state) {
  return {
    data: state.table.data,
    dataSearch: state.table.dataSearch,
    isSortName: state.table.isSortName,
    input: state.input.input,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  sortData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StoreData);

