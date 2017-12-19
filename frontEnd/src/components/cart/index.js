import React from 'react';
import { connect } from 'react-redux'
import * as itemsActions from '../../actions/items';

import CartItem from './cartItem';

const Cart = (props) => { 
  return (
    <div className="col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3">
      <div className="panel panel-default">
        <ul className="list-group">
          <CartItem />
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state/*, props*/) => {
  console.log(state);
  return state.cart;
}
const ConnectedCart = connect(mapStateToProps)(Cart);
export default ConnectedCart;