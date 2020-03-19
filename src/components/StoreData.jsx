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

  render() {
    const { currentData } = this.props;

    return (
      <>
        <span className="input"><Input />{`  ${currentData.length} users `}</span>
        <div className="table">
          <div
           className="scroll"
           ref={this.myRef}
           onScroll={this.onScroll}>
            <div className="container" style={{height: currentData.length * HEIGHT_ROW}}>
              <div className="tr sticky">
                <div className="th rank">Rank <Arrow filter="rank" /></div>
                <div className="th name">Name <Arrow filter="name"/></div>
                <div className="th gidHub">Github<Arrow filter="githubId"/></div>
                <div className="th role">{`Role `}<SelectRole /></div>
                <div className="th location">Location <Arrow filter="location"/></div>
                <div className="th score">Score <Arrow filter="score" /></div>
                <div className="th registration">Date registration<Arrow filter="registration" /></div>
                <div className="th registrationGetTime">Time registration <Arrow filter="registrationGetTime" /></div>
                <div className="th active">{`Active `}<Select /></div>
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
  const {table: {data, dataSearch }, getFilter, input: { inputValue }} = state;
  return {
    currentData: getFilterTable(data, dataSearch, getFilter, inputValue),
  };
}

export default connect(mapStateToProps)(StoreData);

