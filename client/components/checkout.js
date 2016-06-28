import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
import CCForm from './form.js';
import CreditCard from './creditcard.js';
require('./../../stylesheets/main.css');

class Checkout extends Component {
  componentWillMount() {
    var payload = {
      cardNumber: [['*', '*', '*', '*'], ['*', '*', '*', '*'], ['*', '*', '*', '*'], ['*', '*', '*', '*']],
      cardHolder: 'Full Name',
      expiration: ['MM', '/', 'YY'],
      ccv: '***',
      submitted: false
    };
    this.props.actions.getCreditCardInfo(payload);
  }
  render() {
    if (!this.props.creditCardInfo.submitted) {
      return (
        <div className="creditcard-checkout">
          <CreditCard />
          <CCForm />
        </div>
      )
    } else {
      return (
        <div className="creditcard-checkout">
          Thank you for your order!
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
