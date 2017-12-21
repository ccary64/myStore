import React from 'react';
import { Badge, Button, Panel, Form, ControlLabel, FormGroup, FormControl, InputGroup, Col } from 'react-bootstrap';

export default (props) => {
  console.log(props);
  return (
    <Col smOffset={2} sm={8} >
    <Panel>
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            <Badge> 10 </Badge>
          </Col>
          <Col inline sm={8}>
          <ControlLabel>Static text</ControlLabel>
          </Col>
          <Col sm={2} componentClass={Button}> Remove </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={1}>
            <Badge> 10 </Badge>
          </Col>
          <Col inline sm={8}>
          <ControlLabel>Static text</ControlLabel>
          </Col>
          <Col sm={2} componentClass={Button}> Remove </Col>
        </FormGroup>
      </Form>
    </Panel>
    </Col>
  );
}
