import React, { Component } from 'react';


import PageHeader from '../components/Header.jsx'
import SubCategory from '../components/subCategory.jsx'
import Article from '../components/Article.jsx'

import { Container, Divider, Button, Menu, Grid } from 'semantic-ui-react'

class SubCategoryPage extends Component {
  render() {
    return (
      <Container fluid>
      	<PageHeader >
          <h1> {this.props.match.params.category} </h1>
        </PageHeader>

        <Divider hidden />

        <Container fluid className='page' style={{overflow:'hidden'}}>

          <Menu text pointing secondary style={{width:'70%',margin:'auto'}}>
            <Menu.Item name={this.props.match.params.subcategory} active={true}  />
            <Menu.Item name='angularJS' />
            <Menu.Item name='viewJS'  />
            <Menu.Item name='meteorJS' />
            <Menu.Item name='NodeJS' />
          </Menu>

          <Divider section hidden />

          <Grid style={{width:'90%',margin:'auto'}}>
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
        </Container>

      </Container>
    );
  }
}

export default SubCategoryPage;
