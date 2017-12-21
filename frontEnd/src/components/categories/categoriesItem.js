import React from 'react';
import { Link } from 'react-router-dom'
import { Thumbnail, Panel, Col } from 'react-bootstrap';


export default (props) => {
  const { id, name } = props;
  return (
    <Col sm={3}>
    <Panel header={name} bsStyle="info">
      <Link to={`/categories/${id}`}>
        <Thumbnail src={`http://lorempixel.com/300/40${id}/technics/`} />
      </Link>
    </Panel>
    </Col>
  );
}

