import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';

const Select = (props) => {
  const {onChange} = props;

  const onChangeSelect = (e) => {
    onChange(e.target.value)
  }

  return (
    <select onChange={onChangeSelect}>
      <option value="All">All</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
  );
};


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.getFilter.filter,
  isClickArrowUp: state.getFilter.isClickArrowUp,
  isClickArrowDown: state.getFilter.isClickArrowDown,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (valueSelect) => dispatch(actions.setSelect(valueSelect))
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);
