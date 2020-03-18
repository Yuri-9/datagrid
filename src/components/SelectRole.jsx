import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';

const SelectRole = (props) => {
  const { onChange, listSelectRole } = props;

  const onChangeSelect = ({target: {value}}) => {
    const [...listSelect] = listSelectRole;
    if (!value) {
      return onChange([]);
    }
    if (listSelect.includes(value)){
      const resultList = listSelect.filter(item => item !== value);
      return onChange(resultList);
    }
    listSelect.push(value);
    onChange(listSelect);
  }

  return (
    <select onChange={onChangeSelect} value={listSelectRole}>
    <option value="" >
      All
    </option>
    <option
      value="mentor"
      style={{color: listSelectRole.includes('mentor') ? "red" : "inherit"}}>
      Mentor
    </option>
    <option
      value="activist"
      style={{color: listSelectRole.includes('activist') ? "red" : "inherit"}}>
      Activist
    </option>
    <option
      value="student"
      style={{color: listSelectRole.includes('student') ? "red" : "inherit"}}>
      Student</option>
    </select>
  );
};


const mapStateToProps = (state) => ({
listSelectRole: state.getFilter.listSelectRole
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (valueSelect) => dispatch(actions.setSelectRole(valueSelect))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectRole);
