import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

const { search, updateInput } = actions;

const Input = (props) => {
  const { inputValue } = props;

  const handleChange = (e) => {
    const { data, search, updateInput } = props;
    search(data, e.target.value);
    updateInput(e.target.value);
  }

  return (
    <>
      <label htmlFor="search">Search </label>
      <input type="text" value={inputValue} onChange={handleChange} />
    </>
  );
};

function mapStateToProps(state) {
  return {
    data: state.table.data,
    dataSearch: state.table.dataSearch,
    isSortName: state.table.isSortName,
    inputValue: state.input.inputValue,
  };
}

  const mapDispatchToProps = dispatch => bindActionCreators({
    search, updateInput,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Input);
