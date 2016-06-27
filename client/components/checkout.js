import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
require('./../../stylesheets/main.css');

class Checkout extends Component {
  render() {
    return (
      <div className="creditcard-checkout">
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <div className="chip"></div>
              <div className="number"></div>
              <div className="card-holder">
                <label>Card Holder</label>
                <div></div>
              </div>
              <div className="card-expiration-date">
                <label>Expires</label>
                <div></div>
              </div>
            </div>
            <div className="back">
              <div className="strip"></div>
              <div class="ccv">
                <label>CCV</label>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <form className="form">
          <fieldset>
            <label for="card-number">Card Number</label>
            <input type="num" id="card-number" maxlength="4" className="input-card-number" />
            <input type="num" id="card-number-1" maxlength="4" className="input-card-number" />
            <input type="num" id="card-number-2" maxlength="4" className="input-card-number" />
            <input type="num" id="card-number-3" maxlength="4" className="input-card-number" />
          </fieldset>
          <fieldset>
            <label for="card-holder">Card Holder</label>
            <input type="text" id="card-holder" />
          </fieldset>
          <fieldset>
            <label for="card-expiration-month">Expiration date</label>
            <div className="select">
              <select id="card-expiration-month">
              <option></option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              </select>
            </div>
            <div className="select">
              <select id="card-expiration-year">
                <option></option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </fieldset>
          <fieldset className="fieldset-ccv">
            <label for="card-ccv">CCV</label>
            <input type="num" id="card-ccv" maxlength="3" />
          </fieldset>
          <button className="checkout-btn">Submit</button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
