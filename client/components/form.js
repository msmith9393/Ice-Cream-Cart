import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
import $ from 'jquery';

class CCForm extends Component {
  handleExpiration(e) {
    var currentInfo = this.props.creditCardInfo;
    var currentVal = $(e.currentTarget).val();
    var index = Number(e.currentTarget.getAttribute('data'));
    currentVal = currentVal.split('').slice(-2).join('');
    if (!currentVal) {
      currentVal = (index === 0) ? 'MM' : 'YY';
    }
    currentInfo.expiration[index] = currentVal;
    this.props.actions.getCreditCardInfo(currentInfo);
  }
  handleCardHolder(e) {
    var currentInfo = this.props.creditCardInfo;
    var currentVal = $(e.currentTarget).val();
    currentInfo.cardHolder = currentVal;
    this.props.actions.getCreditCardInfo(currentInfo);
  }
  handleCardNumber(e) {
    var maxLength = 4;
    var currentInfo = this.props.creditCardInfo;
    var currentVal = $(e.currentTarget).val();
    var index = Number(e.currentTarget.getAttribute('data'));
    if (currentVal.length === 4) {
      var next = $(e.currentTarget).next('.input-card-number');
      if (next.length) {
        $(e.currentTarget).next('.input-card-number').focus();
      } else {
        $(e.currentTarget).blur();
      }
    }
    for (var i = 0; i < 4; i++) {
      if (currentVal.charAt(i)) {
        currentInfo.cardNumber[index][i] = currentVal.charAt(i);
      } else {
        currentInfo.cardNumber[index][i] = '*';
      }
    }
    this.props.actions.getCreditCardInfo(currentInfo);
  }
  handleCCV(e) {
    var currentInfo = this.props.creditCardInfo;
    var currentVal = $(e.currentTarget).val();
    currentInfo.ccv = currentVal;
    this.props.actions.getCreditCardInfo(currentInfo);
  }
  flipCard(e) {
    if (e.currentTarget.getAttribute('data') === 'back') {
      $('.flipper').addClass('trigger-flip');
    } else {
      $('.flipper').removeClass('trigger-flip');
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    var currentInfo = this.props.creditCardInfo;
    currentInfo.submitted = true;
    this.props.actions.getCreditCardInfo(currentInfo);
  }
  render() {
    return (
      <form className="form">
        <fieldset className="cc-number">
          <label for="card-number">Card Number</label>
            <input onFocus={this.flipCard.bind(this)} type="text" data="0" onKeyUp={this.handleCardNumber.bind(this)} maxLength="4" className="input-card-number" />
            <input onFocus={this.flipCard.bind(this)} type="text" data="1" onKeyUp={this.handleCardNumber.bind(this)} maxLength="4" className="input-card-number" />
            <input onFocus={this.flipCard.bind(this)} type="text" data="2" onKeyUp={this.handleCardNumber.bind(this)} maxLength="4" className="input-card-number" />
            <input onFocus={this.flipCard.bind(this)} type="text" data="3" onKeyUp={this.handleCardNumber.bind(this)} maxLength="4" className="input-card-number" />
        </fieldset>
        <fieldset className="card-holder">
          <label for="card-holder">Card Holder</label>
          <input onFocus={this.flipCard.bind(this)} onKeyUp={this.handleCardHolder.bind(this)} type="text" />
        </fieldset>
        <div className="thirdRow">
          <fieldset className="expiration">
            <label for="card-expiration-month">Expiration date</label>
            <div className="select">
              <select onFocus={this.flipCard.bind(this)} data="0" onChange={this.handleExpiration.bind(this)}>
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
              <select onFocus={this.flipCard.bind(this)} data="2" onChange={this.handleExpiration.bind(this)}>
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
            <div className="card-ccv">
              <label for="card-ccv">CCV</label>
              <input type="text"
              data="back" onFocus={this.flipCard.bind(this)} onKeyUp={this.handleCCV.bind(this)} maxLength="3" />
            </div>
          </fieldset>
        </div>
        <button onClick={this.handleSubmit.bind(this)} className="checkout-btn">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(actions, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CCForm);
