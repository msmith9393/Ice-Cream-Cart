import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
import Checkout from './checkout.js'
require('./../../stylesheets/main.css');

class Footer extends Component {
  handleModal(action) {
    var modal = document.getElementById('openModal');
    if (action === 'open') {
      modal.classList.add('showModal');
    } else {
      modal.classList.remove('showModal');
    }
  }
  render() {
    if (this.props.state.flavors.length) {
      return (
        <div className="sc-footer-container">
          <div className="subtotal">
            <h3>Subtotal: ${this.props.state.total}.00</h3>
            <p className="taxes">Taxes (8.5%): ${(this.props.state.total * 0.085).toFixed(2)}</p>
          </div>
          <div className="total">
            <h2 className="price">${(Number(this.props.state.total) + Number(this.props.state.total * 0.085)).toFixed(2)}</h2>
            <div onClick={this.handleModal.bind(this, 'open')} className="checkout">Checkout</div>
          </div>
          <div id="openModal" className="modalDialog">
            <div className="modalContainer">
              <a onClick={this.handleModal.bind(this, 'close')} className="close">X</a>
              <h2>Modal Box</h2>
              <p>This is a sample modal box</p>
              <Checkout />
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(actions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
