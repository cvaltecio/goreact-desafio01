import React, { Component, Fragment } from 'react';

import './PostHeader.scss';
import photo from '../profile.png';

export default class PostHeader extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="photoProfile">
            <img className="thumb" src="../profile.png" />
          </div>
          <div className="user">
            <div className="userName">Nome</div>
            <small className="timePost">há 10 min</small>
          </div>
        </div>
      </Fragment>
    );
  }
}
