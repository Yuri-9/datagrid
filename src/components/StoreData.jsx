import React, { Component } from 'react';
import { connect } from 'react-redux';
import './StoreData.scss';
import Select from './Select';
import SelectRole from './SelectRole';
import Input from './Input';
import VirtualTable from './VirtualTable';
import { getFilterTable } from '../utils/getFilterTable';

import Arrow from './Arrow';

const HEIGHT_ROW = 35;
const WIDTH_RANK = 100;
const widthColumn = {
  name: 230,
  gitHub: 230,
  role: 190,
  location: 190,
  score: 190,
  registration: 190,
  registrationGetTime: 190,
  active: 90,
}

class StoreData extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.state = {
      scrollTop: 0,
      virtualCurrentData: this.props.currentData.slice(0, 30),
    }
  }

  onScroll = () => {
    const scrollTopNew = this.myRef.current.scrollTop
    this.setState({
      scrollTop: scrollTopNew,
    })
  }

  showColumn = (nameColumn) => {
    const { listColumns } = this.props;
    return listColumns.includes(nameColumn);
  }

  render() {
    const { currentData, listColumns } = this.props;
    const listWidthColumns = listColumns.map(item => widthColumn[item]);
    const widthTable = listWidthColumns.reduce((acc, item) => acc + item) + WIDTH_RANK;

    return (
      <>
        <span className="input"><Input />{`  ${currentData.length} users `}</span>
        <div className="table">
          <div
           className="scroll"
           ref={this.myRef}
           onScroll={this.onScroll}>
            <div className="container" style={{height: currentData.length * HEIGHT_ROW, width: `${widthTable}px`}}>
              <div className="tr sticky" style={{ width: `${widthTable}px`}}>
               <div className="th rank">Rank <Arrow filter="rank" /></div>
                <div className="th name">Name <Arrow filter="name"/></div>
                {this.showColumn('gitHub') ? <div className="th gitHub">Github<Arrow filter="githubId"/></div> : null}
                {this.showColumn('role') ? <div className="th role">{`Role `}<SelectRole /></div> : null}
                {this.showColumn('location') ? <div className="th location">Location <Arrow filter="location"/></div> : null}
                {this.showColumn('score') ? <div className="th score">Score <Arrow filter="score" /></div> : null}
                {this.showColumn('registration') ? <div className="th registration">Date registration<Arrow filter="registration" /></div> : null}
                {this.showColumn('registrationGetTime') ? <div className="th registrationGetTime">Time registration <Arrow filter="registrationGetTime" /></div> : null}
                {this.showColumn('active') ? <div className="th active">{`Active`}<Select /></div> : null}
              </div>
              <VirtualTable
                scrollTop={this.state.scrollTop}
               />
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  const {table: {data, dataSearch, listColumns }, getFilter, input: { inputValue }} = state;
  return {
    currentData: getFilterTable(data, dataSearch, getFilter, inputValue),
    listColumns,
  };
}

export default connect(mapStateToProps)(StoreData);

