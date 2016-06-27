import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
import AddToCartBar from './AddToCartBar.js';
require('./../../stylesheets/main.css');

class FlavorComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleRemove() {
    this.props.actions.removeProduct(this.props.state.flavors, this.props.index, this.props.state.total);
  }
  render() {
    return (
      <div className="sc-flavor-container">
        <a className="sc-remove">
          <img src={`/static/assets/${this.props.state.flavors[this.props.index].name}.jpg`} />
          <span onClick={this.handleRemove.bind(this)} className="sc-remove-product">Remove Product</span>
        </a>
        <div className="sc-side">
          <div className="sc-flavor-description">
            <h4>{this.props.state.flavors[this.props.index].name}</h4>
            <p>{this.props.state.flavors[this.props.index].description}</p>
          </div>
          <AddToCartBar index={this.props.index} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(actions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FlavorComponent);
