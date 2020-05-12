import React, { Component } from 'react';


type CountProps = {
  color: string
}

type CountState = {
  count: number
}

class CounterButton extends Component<CountProps, CountState > {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    return (
      <button id='counter' color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
