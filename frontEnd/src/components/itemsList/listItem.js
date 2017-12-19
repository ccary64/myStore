import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
  const { id, name } = props;
  return (
    <div className="col-md-4 col-xs-4 list-group"> 
      <Link to={`/items/${id}`} className="list-group-item label">
        <img height={'200px'} src={'https://i.pinimg.com/736x/8e/bc/d5/8ebcd53c316b797d2f218ba5ceeacdc0--black-raspberries-strawberries.jpg'} />
        <div className="ListItems-title">
          <h2>
            <span className="label label-default">{name}</span>
          </h2>
        </div>
      </Link>
    </div>
  );
}

