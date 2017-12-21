import React from 'react';
import { connect } from 'react-redux'
import { Breadcrumb, Row, Col } from 'react-bootstrap';

import CategoriesItem from './categoriesItem';

const Categories = (props) => {
  const { items = [] } = props;
  return (
    <div>
      <Col sm={12}>
        <Row>
          <Col sm={4}>
            <Breadcrumb>
              <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
              <Breadcrumb.Item active> Categories </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        {items.map(item => <CategoriesItem key={item.id} {...item} />)}
      </Col>
    </div>
  );
}

const mapStateToProps = (state) => state.categories;
const ConnectedCategories = connect(mapStateToProps)(Categories);
export default ConnectedCategories