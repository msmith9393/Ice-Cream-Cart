import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
class CreditCard extends Component {

  render() {
    return (
      <div className="flip-container">
        <div className="flipper">
          <div className="front">
            <div className="chip"></div>
            <div className="number">
              {this.props.creditCardInfo.cardNumber.map(function(four, index) {
                return (<span key={index}>{four.join('')} </span>)
              })}
            </div>
            <div className="card-holder">
              <label>Card Holder</label>
              <div>{this.props.creditCardInfo.cardHolder}</div>
            </div>
            <div className="card-expiration-date">
              <label>Expires</label>
              <div>{this.props.creditCardInfo.expiration.join('')}</div>
            </div>
          </div>
          <div className="back">
            <div className="strip"></div>
            <div className="ccv">
              <label>CCV</label>
              <div>{this.props.creditCardInfo.ccv}</div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
