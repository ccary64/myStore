import React from 'react';
import { connect } from 'react-redux'
import * as itemsActions from '../../actions/items';
import { ButtonGroup, Badge, Button, Panel, Form, ControlLabel, FormGroup, FormControl, InputGroup, Col } from 'react-bootstrap';

import CartItem from './cartItem';

const Cart = (props) => { 
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
      <Col smOffset={4} sm={4}>
        <ButtonGroup horizontal block>
          <Button bsStyle="info" > Create Order </Button>
          <Button bsStyle="warning" > Remove All </Button>
        </ButtonGroup>    
      </Col>
    </Col>
  );
}

const mapStateToProps = (state/*, props*/) => {
  console.log(state);
  return state.cart;
}
const ConnectedCart = connect(mapStateToProps)(Cart);
export default ConnectedCart;