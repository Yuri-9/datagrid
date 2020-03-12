import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

const { search, updateInput } = actions;

const Input = (props) => {
  const { input: { txt = '' } } = props;

  const handleChange = (e) => {
    const { data, search, updateInput } = props;
    search(data, e.target.value);
    updateInput(e.target.value);
  }

  return (
    <section>
      <label htmlFor="search">Search </label>
      <input type="text" value={txt} onChange={handleChange} />
    </section>
  );
};

function mapStateToProps(state) {
  return {
    data: state.table.data,
    dataSearch: state.table.dataSearch,
    isSortName: state.table.isSortName,
    input: state.input.input,
  };
}

  const mapDispatchToProps = dispatch => bindActionCreators({
    search, updateInput,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Input);
