import React from "react";
import PropTypes from "prop-types";
import "../css/Counter.css";
import Button from "@material-ui/core/Button";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="counter">
          <CounterButton
            by={1}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
          />
          <CounterButton
            by={5}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
          />
          <CounterButton
            by={10}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
          />
          <CounterButton
            by={100}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
          />
          <span className="count">{this.state.counter}</span>
          <div>
            <Button variant="contained" className="reset" onClick={this.reset}>
              Reset
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  increment(by) {
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }

  decrement(by) {
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  }

  reset() {
    this.setState({
      counter: 0,
    });
  }
}

class CounterButton extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="counterButton">
        <Button
          variant="contained"
          color="primary"
          className="increment"
          onClick={this.increment}
        >
          +{this.props.by}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="decrement"
          onClick={this.decrement}
        >
          -{this.props.by}
        </Button>
      </div>
    );
  }

  increment() {
    this.props.incrementMethod(this.props.by);
  }

  decrement() {
    this.props.decrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propType = {
  by: PropTypes.number,
};
