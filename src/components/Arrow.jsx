import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import './Arrow.scss';

const Arrow = (props) => {
  const {onClick, isClickArrowUp, isClickArrowDown, active } = props;
  return (
    <div className="arrows_box">
      <i
      className="material-icons"
      onClick={() => onClick('arrowUp')}
      style={{color: active && isClickArrowUp ? 'red' :'#cac7c7' }}>
        keyboard_arrow_up
      </i>
      <i className="material-icons"
      onClick={() => onClick('arrowDown')}
      style={{color: active && isClickArrowDown ? 'red' :'#cac7c7' }}>
        keyboard_arrow_down
      </i>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.getFilter.filter,
  isClickArrowUp: state.getFilter.isClickArrowUp,
  isClickArrowDown: state.getFilter.isClickArrowDown,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (typeClickArrow) => dispatch(actions.setFilter(ownProps.filter, typeClickArrow))
})

export default connect(mapStateToProps, mapDispatchToProps)(Arrow)
