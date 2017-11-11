import React, { Component } from 'react';
import { Card, Button, Container, Divider } from 'semantic-ui-react'
import Article from './Article.jsx'

class SubCategory extends Component {
  render() {
    return (
      <Container>
        <Button floated='right' style={{paddingDown:'50px'}} basic color='black'>More</Button>

          <div floated='left' >{this.props.header}</div>


        <Divider />
        <Card.Group fluid>
        <Article title="Getting started with React" description="Get started with the famous Javascript framework by Facebook" />
        <Article title="Component patterns in React" description="Quasi exhaustive list of the different ways to create React components" />
        <Article title="Speed up your React app" description="Make your React app run faster with these few tips" />
        <Article title="What's so special about React" description="Why do people like React so much. How is it changing the way we do frontend" />
        </Card.Group>
        <Divider hidden />
      </Container>
    );
  }
}

export default SubCategory;
