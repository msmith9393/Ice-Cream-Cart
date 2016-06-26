import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlavorComponent from './flavorComponent.js';
import actions from './../actions/actionCreators';
require('./../../stylesheets/main.css');

class MainBody extends Component {

  render() {
    return (
      <div className="sc-body-container">
        {this.props.state.flavors.map((flavor, index) => {
          return (
            <FlavorComponent key={index} index={index} />
          )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
