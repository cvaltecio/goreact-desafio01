import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  hadleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1 className="title">Olá mundo</h1>
        <h2 style={{ color: '#f00' }}>{this.state.counter}</h2>
        <Button onClick={this.hadleClick}>Somar </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
