import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';

const Select = (props) => {
  const {onChange, selectValue} = props;

  const onChangeSelect = (e) => {
    onChange(e.target.value)
  }
  return (
    <select onChange={onChangeSelect} value={selectValue}>
      <option value="All">All</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  );
};


const mapStateToProps = (state) => ({
  selectValue: state.getFilter.selectValue,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (valueSelect) => dispatch(actions.setSelect(valueSelect))
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);
