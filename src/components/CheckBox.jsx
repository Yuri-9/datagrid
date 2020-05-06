import React from 'react';
import actions from '../actions/index';
import { connect } from 'react-redux';
import './Checkbox.scss';

const Checkbox = (props) => {
  const {onChangeCheckbox, listColumns} = props;

  const onChange = (e) => {

    let [...newListColumns] = listColumns;
    if (!e.target.checked) {
      onChangeCheckbox(newListColumns.filter(column => column !== e.target.value));
    } else {
      newListColumns.push(e.target.value);
      onChangeCheckbox(newListColumns);
    }
  }

  return (
    <div className='checkbox'>
       Show columns
        <ul className="drop">
          <li>
            <label htmlFor="gitHub" className="checkbox--label">
              <input type="checkbox" id="gitHub" name="subscribe" value="gitHub" defaultChecked={true} onChange={onChange}/>
              Github
            </label>
          </li>
          <li>
          <label htmlFor="role" className="checkbox--label">
            <input type="checkbox" id="role" name="subscribe" value="role" defaultChecked={true} onChange={onChange}/>
            Role
            </label>
          </li>
          <li>
          <label htmlFor="location" className="checkbox--label">
            <input type="checkbox" id="location" name="subscribe" value="location" defaultChecked={true} onChange={onChange}/>
            Location
            </label>
          </li>
          <li>
          <label htmlFor="score" className="checkbox--label">
            <input type="checkbox" id="score" name="subscribe" value="score" defaultChecked={true} onChange={onChange}/>
            Score
            </label>
          </li>
          <li>
          <label htmlFor="registration" className="checkbox--label">
            <input type="checkbox" id="registration" name="subscribe" value="registration" defaultChecked={true} onChange={onChange}/>
            Registration
            </label>
          </li>
          <li>
          <label htmlFor="registrationGetTime" className="checkbox--label">
            <input type="checkbox" id="registrationGetTime" name="subscribe" value="registrationGetTime" defaultChecked={true} onChange={onChange}/>
            RegistrationGetTime
            </label>
          </li>
          <li>
          <label htmlFor="active" className="checkbox--label">
            <input type="checkbox" id="active" name="subscribe" value="active" defaultChecked={true} onChange={onChange}/>
            Active
            </label>
          </li>
        </ul>
    </div>

  );
};


const mapStateToProps = (state) => ({
  listColumns: state.table.listColumns,
})

const mapDispatchToProps = (dispatch) => ({
  onChangeCheckbox: (listColumns) => dispatch(actions.showColumn(listColumns))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
