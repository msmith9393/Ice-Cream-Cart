import React, { Component } from 'react';
require('./../../stylesheets/main.css');

class Header extends Component {

  render() {
    return (
      <div className="sc-header-container">
        <div className="sc-title-container">
          <h2 className="sc-title">Shopping Cart <span className="sc-bracket1">[</span>
              <a href="#0">ice cream</a>
            <span className="sc-bracket2">]</span>
          </h2>
        </div>
      </div>
    )
  }

}

export default Header;
