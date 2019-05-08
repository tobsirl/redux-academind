import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  DECREMENT,
  ADD,
  SUB,
  STORE_RESULT,
  DELETE_RESULT,
  increment
} from '../../components/store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  render() {
    console.log(this.props.results);
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 15" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul style={{ listStyle: 'none' }}>
          {this.props.results.map(result => (
            <li
              onClick={() => this.props.onDeleteResult(result.id)}
              key={result.id}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAddCounter: () => dispatch({ type: ADD, value: 10 }),
    onSubCounter: () => dispatch({ type: SUB, value: 15 }),
    onStoreResult: result => dispatch({ type: STORE_RESULT, result: result }),
    onDeleteResult: id => dispatch({ type: DELETE_RESULT, resultElid: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
