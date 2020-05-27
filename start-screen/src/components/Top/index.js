
import './Top.scss';

import iconWhite from './icon-white-vector.svg';
import close from './close_button.svg';
import React, { Component } from 'react';

class Top extends Component {

  render() {
    let { title } = this.props;
    return (
      <div className="top-section">
        <div className="top-icon">
          <img className="image-icon" src={iconWhite} alt="" />
        </div>
        <div className="greeting-phrase">{title}</div>
        <div className="close-button">
          <img close-start-screen="true"
            src={close}
            alt="" />
        </div>
      </div>

    )
  }
}

export default Top