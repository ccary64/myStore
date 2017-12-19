import React from 'react';
import CartItem from './cartItem';

export default class Cart extends React.Component {
  render() {  
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
}