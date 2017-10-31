import React, { Component } from 'react';
import { Card, Button, Container, Divider } from 'semantic-ui-react'
import SubCategory from './subCategory.jsx'

class Category extends Component {
  render() {
    return (
      <Container>
        <div>
          <div floated='left'>{this.props.header}</div>
          <Button floated='right' basic color='black'>More</Button>
        </div>
        <Divider />
        <Card.Group>
        <SubCategory header='React' information='JS framework for building beautiful UIs' />
        <SubCategory header='Meteor' information='JS fullstack framework for building Web applications' />
        <SubCategory header='Vue' information='JS lightweight framework for building User Interface' />
        </Card.Group>
        <Divider hidden />
      </Container>
    );
  }
}

export default Category;