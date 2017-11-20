import React, { Component } from 'react';
import { Card, Button, Container, Divider, Grid } from 'semantic-ui-react'

import Article from './Article.jsx'

import {Link} from 'react-router-dom'

class SubCategory extends Component {
  render() {
    return (
      <Container>
        <Button floated='right' as={Link} to={"/cat=Javascript/sub=" + this.props.subcategory} basic color='black'>More</Button>

        <div floated='left' >{this.props.subcategory}</div>


        <Divider  clearing />
        <Grid fluid>
          <Grid.Row columns={3}>

            <Grid.Column>
              <Article title="Getting started with React" description="Get started with the famous Javascript framework by Facebook" />
            </Grid.Column>

            <Grid.Column>
              <Article title="Component patterns in React" description="Quasi exhaustive list of the different ways to create React components" />
            </Grid.Column>

            <Grid.Column>
              <Article title="Speed up your React app" description="Make your React app run faster with these few tips" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Article title="What's so special about React" description="Why do people like React so much. How is it changing the way we do frontend" />
            </Grid.Column>

            <Grid.Column>
              <Article title="Top component libraries for React" description="Some interesting sets of components to build better React UI faster" />
            </Grid.Column>

            <Grid.Column>
              <Article title="React on github" description="Link to the github repo for React" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider section hidden />
        <Divider section hidden />
      </Container>
    );
  }
}

export default SubCategory;
