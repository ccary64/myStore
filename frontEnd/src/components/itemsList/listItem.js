import React from 'react';
import { Link } from 'react-router-dom'
import { Thumbnail, Button, Col } from 'react-bootstrap';


export default (props) => {
  const { id, attributes } = props;
  return (
    <Col sm={4}>
      <Thumbnail src={`http://lorempixel.com/300/40${id}/technics/`}>
        <h3>Widget {id}</h3>
        {Object.keys(attributes).map((attr, index) => (<p key={index}>{attr}: {attributes[attr]}</p>))}
        <Button bsStyle="primary">Add to Cart</Button>
      </Thumbnail>
    </Col>
  );
}

