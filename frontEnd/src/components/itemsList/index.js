import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as categoryActions from '../../actions/categories';
import { Row, Pagination, SplitButton, MenuItem, Badge, Button, Panel, Form, ControlLabel, FormGroup, FormControl, InputGroup, Col } from 'react-bootstrap';

import ListItem from './listItem';

const MAX_ITEMS_PER_PAGE = 6;

const attrPickList = {
  color: [
    'red',
    'blue',
  ],
  size: [
    'sm',
    'md',
    'lg'
  ]
}
class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    const { categoryId = 1 } = props.match.params;
    this.props.dispatch(categoryActions.fetchById(categoryId));
  }

  render() {
    const { products = [], totalPages = 1, currentPage= 1 } = this.props;

    return (
      <div>
        <Col sm={12}>
          <Col sm={10}>
            {products.map(product => <ListItem key={product.id} {...product} />)}
          </Col>
          <Col sm={2}>
            {Object.keys(attrPickList).map(picklist => (
              <FormGroup>
                <ControlLabel>{picklist}</ControlLabel>
                  <SplitButton title={picklist} pullRight id="split-button-pull-right">
                  {attrPickList[picklist].map((option, index) => (
                    <MenuItem eventKey={index}>{option}</MenuItem>
                  ))}
                  </SplitButton>
            </FormGroup>
            ))}
          </Col>
        </Col>
        <Col sm={6} md={6} smOffset={3} mdOffset={3}>
          <Pagination
            bsSize="large"
            items={10}
          />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.categories.products,
    fetching: state.categories.fetching
  };
};
const ConnectedListItems = connect(mapStateToProps)(ItemsList);
export default ConnectedListItems;