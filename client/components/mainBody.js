import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlavorComponent from './flavorComponent.js';
import actions from './../actions/actionCreators';
require('./../../stylesheets/main.css');

class MainBody extends Component {

  render() {
    if (this.props.state.flavors.length) {
      return (
        <div className="sc-body-container">
        {this.props.state.flavors.map((flavor, index) => {
          return (
            <FlavorComponent key={index} index={index} />
          )
        })}
        </div>
      )
    } else {
      return (
        <div className="sc-body-container">
          <p>You have no more items in your cart. Go add more items to your cart!</p>
        </div>
      )
    }
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(actions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
