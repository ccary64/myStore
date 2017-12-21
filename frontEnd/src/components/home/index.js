import React from 'react';
import { Carousel, Row, Pagination, SplitButton, MenuItem, Badge, Button, Panel, Form, ControlLabel, FormGroup, FormControl, InputGroup, Col } from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentWillMount() {
    this.setState({
      index: 0,
      direction: null,
    });
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
      <Carousel.Item>
        <Col sm={10} smOffset={1}>
          <img width={'100%'} height={'100%'} src="http://lorempixel.com/800/400/animals" />
        </Col>
      </Carousel.Item>
      <Carousel.Item>
      <Col sm={10} smOffset={1}>
          <img width={'100%'} height={'100%'} src="http://lorempixel.com/800/401/nature" />
        </Col>
      </Carousel.Item>
      <Carousel.Item>
        <Col sm={10} smOffset={1}>
          <img width={'100%'} height={'100%'} src="http://lorempixel.com/800/402/cats" />
        </Col>
      </Carousel.Item>
    </Carousel>
    );
  }
}