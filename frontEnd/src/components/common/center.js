import React from 'react';

export default (props) => {
  return (
    <div className="row">
      <div className="span4"></div>
        <div className="span4">
          {props.children}
        </div>
      <div className="span4"></div>
    </div>
  );
}