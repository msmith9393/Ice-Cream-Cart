import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
require('./../../stylesheets/main.css');

class Footer extends Component {

  render() {
    return (
      <div className="sc-footer-container">
        <div className="subtotal">
          <h3>Subtotal: ${this.props.state.total}.00</h3>
          <p className="taxes">Taxes (8.5%): ${(this.props.state.total * 0.085).toFixed(2)}</p>
        </div>
        <div className="total">
          <h2 className="price">${(Number(this.props.state.total) + Number(this.props.state.total * 0.085)).toFixed(2)}</h2>
          <div className="checkout">Checkout</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
