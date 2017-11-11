import React, { Component } from 'react';

import Category from '../components/Category.jsx'
import PageHeader from '../components/Header.jsx'
import WelcomeMessage from '../components/WelcomeMessage.jsx'
import SubCategory from '../components/subCategory.jsx'

import { Container, Divider, Button } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <Container fluid>
      	<PageHeader />

        <Divider section hidden />


        <Container fluid className='page' >
          <WelcomeMessage />

          <Divider section hidden />

          <Category basic name='Javascript'/>
          <Divider />

          <Divider section hidden />

          <SubCategory header='React again'/>
          <Divider hidden />
          <SubCategory header='React'/>

        </Container>

      </Container>
    );
  }
}

export default HomePage;
