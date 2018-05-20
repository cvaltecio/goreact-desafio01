import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';

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
        <Header />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
