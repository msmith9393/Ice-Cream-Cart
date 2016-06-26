import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../actions/actionCreators';
require('./../../stylesheets/main.css');

class AddToCartBar extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(action) {
    if (action === 'add') {
      this.props.actions.addToCart(this.props.flavors, this.props.index);
    } else {

    }
  }

  render() {
    console.log('HELLO', this.props.flavors);
    return (
      <div className="sc-addToCartBar-container">
        <div className="calculator">
          <div onClick={this.handleClick.bind(this, 'minus')} className="minus">-</div>
          <div className="num">{this.props.flavors[this.props.index].numberScoopsInCart}</div>
          <div onClick={this.handleClick.bind(this, 'add')} className="plus">+</div>
        </div>
        <div className="equals">
          <div className="price-per-unit">${this.props.flavors[this.props.index].price}.00</div>
          <div className="total-price">${this.props.flavors[this.props.index].totalPrice}.00</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartBar);
