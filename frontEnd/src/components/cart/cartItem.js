import React from 'react';

const style = {height: '60px'}

export default (props) => {
  return (
    <li style={style} className="list-group-item">
      <span><span className="badge">4</span> Dapibus ac facilisis in</span>
      <button type="button" className="float-right btn btn-default pull-right">Remove</button>
    </li>
  );
}