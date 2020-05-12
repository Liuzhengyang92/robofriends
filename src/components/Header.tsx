import React, { Component } from 'react';
import CounterButton from './CounterButton';

type HeaderProps = {
  color?: string,
  children?: JSX.Element
}

type HeaderState = {

}

class Header extends Component<HeaderProps> {
  shouldComponentUpdate(nextProps: HeaderProps, nextState: HeaderState) {
    return false;
  }

  render () {
    return (
      <div>
        <CounterButton color={'red'} />
        <h1 className='f1'>RoboFriends</h1>
      </div>
    );
  }
}

export default Header;