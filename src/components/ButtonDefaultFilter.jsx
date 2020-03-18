import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';

const ButtonDefaultFilter = (props) => {
  const { onClickDefaultActive, onClickDefaultRoles, onClickDefaultFilter } = props;

  const onClick = () => {
    onClickDefaultActive('All');
    onClickDefaultRoles([]);
    onClickDefaultFilter('rank','arrowUp')
  }
  return (
    <button onClick={onClick}>
      Default filter
    </button>
  );
};


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onClickDefaultActive: value => dispatch(actions.setSelect(value)),
  onClickDefaultRoles: value => dispatch(actions.setSelectRole(value)),
  onClickDefaultFilter: (filter, typeClickArrow)  => dispatch(actions.setFilter(filter, typeClickArrow)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonDefaultFilter);
