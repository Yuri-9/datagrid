import React from 'react';
import { connect } from 'react-redux';
import { getFilterTable } from '../utils/getFilterTable';

const HEIGHT_ROW = 35;

const VirtualTable = (props) => {
    const { scrollTop, currentData } = props;
    const firstVirtualElement = Math.floor(scrollTop / HEIGHT_ROW);
    const virtualCurrentData = currentData.slice(firstVirtualElement, firstVirtualElement + 30);

    const showColumn = (nameColumn) => {
      const { listColumns } = props;
      return listColumns.includes(nameColumn);
    }


    const listRows = virtualCurrentData.map((user, index) => (
    <div key={user.id} className="tr" style={{top: scrollTop + HEIGHT_ROW * (index + 1) }}>
     <div className="td rank">{user.rank}</div>
      <div className="td name">{user.name}</div>
      {showColumn('gitHub') ? <div className="td gitHub">{user.githubId}</div> : null}
      {showColumn('role') ? <div className="td role">{user.role}</div> : null}
      {showColumn('location') ? <div className="td location">{user.location}</div> : null}
      {showColumn('score') ? <div className="td score">{user.score.toLocaleString()}</div> : null}
      {showColumn('registration') ? <div className="td registration">{user.registration}</div> : null}
      {showColumn('registrationGetTime') ? <div className="td registrationGetTime">{user.registrationGetTime}</div> : null}
      {showColumn('active') ? <div className="td isActive">{user.isActive ? 'Yes' : 'No'}</div> : null}
    </div>
  ))
  return (
    <>
    {listRows}
    </>

  )
}

function mapStateToProps(state) {
  const {table: {data, dataSearch, listColumns}, getFilter, input: { inputValue }} = state;
  return {
    getFilter,
    currentData: getFilterTable(data, dataSearch, getFilter, inputValue),
    listColumns,
  };
}

export default connect(mapStateToProps)(VirtualTable);
