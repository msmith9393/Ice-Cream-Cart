import React, { Component } from 'react';
require('./../../stylesheets/main.css');

class FlavorComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.index);
    return (
      <div className="sc-flavor-container">
        {this.props.flavor.name}
      </div>
    )
  }

}

export default FlavorComponent;
