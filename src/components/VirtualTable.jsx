import React from 'react';
import { connect } from 'react-redux';
import { getFilterTable } from '../utils/getFilterTable';

const HEIGHT_ROW = 35;

const VirtualTable = (props) => {
    const { scrollTop, currentData } = props;
    const firstVirtualElement = Math.floor(scrollTop / HEIGHT_ROW);
    const virtualCurrentData = currentData.slice(firstVirtualElement, firstVirtualElement + 30);

    const listRows = virtualCurrentData.map((user, index) => (
    <div key={user.id} className="tr" style={{top: scrollTop + HEIGHT_ROW * (index + 1) }}>
      <div className="td rank">{user.rank}</div>
      <div className="td name">{user.name}</div>
      <div className="td gidHub">{user.githubId}</div>
      <div className="td role">{user.role}</div>
      <div className="td location">{user.location}</div>
      <div className="td score">{user.score.toLocaleString()}</div>
      <div className="td registration">{user.registration}</div>
      <div className="td registrationGetTime">{user.registrationGetTime}</div>
      <div className="td isActive">{user.isActive ? 'Yes' : 'No'}</div>
    </div>
  ))
  return (
    <>
    {listRows}
    </>

  )
}

function mapStateToProps(state) {
  const {table: {data, dataSearch, }, getFilter, input: { inputValue }} = state;
  return {
    getFilter,
    currentData: getFilterTable(data, dataSearch, getFilter, inputValue),
  };
}

export default connect(mapStateToProps)(VirtualTable);
