import React, { Component } from 'react';

import Category from '../components/Category.jsx'

import { Container, Divider } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <Container fluid>
        <Category header='Javascript' />
        <Divider hidden />
        <Category header='Javascript again' />
      </Container>
    );
  }
}

export default HomePage;