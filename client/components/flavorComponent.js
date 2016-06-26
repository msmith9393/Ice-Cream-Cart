import React, { Component } from 'react';
import AddToCartBar from './AddToCartBar.js';
require('./../../stylesheets/main.css');

class FlavorComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sc-flavor-container">
        <img src={`/static/assets/${this.props.flavor.name}.jpg`} />
        <div className="sc-side">
          <div className="sc-flavor-description">
            <h4>{this.props.flavor.name}</h4>
            <p>Temporary description about ice cream flavor. I am going to make it extra long.</p>
          </div>
          <AddToCartBar flavor={this.props.flavor} index={this.props.index} />
        </div>
      </div>
    )
  }

}

export default FlavorComponent;
