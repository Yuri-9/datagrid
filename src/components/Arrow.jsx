import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';

const Arrow = (props) => {
  const {onClick} = props;

  return (
    <i className="material-icons" onClick={onClick} >
    keyboard_arrow_down
    </i>
  );
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(actions.setFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Arrow)
