import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './header/Header';
import Post from './post/Post';

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
        <div className="containerPost">
          <Post />
          <Post />
          <Post />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
