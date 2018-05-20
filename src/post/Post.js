import React, { Component, Fragment } from 'react';

import PostHeader from '../post-header/PostHeader';
import PostContent from '../post-content/PostContent';

import './Post.scss';

export default class Post extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="postCard">
          <div className="post">
            <PostHeader />
            <hr />
            <PostContent />
          </div>
        </div>
      </Fragment>
    );
  }
}
