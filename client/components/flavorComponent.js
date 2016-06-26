import React, { Component } from 'react';
require('./../../stylesheets/main.css');

class FlavorComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sc-flavor-container">
        <img src='/static/assets/Vanilla.jpg' />
        {this.props.flavor.name}
      </div>
    )
  }

}

export default FlavorComponent;
