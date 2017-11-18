import React, { Component } from 'react';


import PageHeader from '../components/Header.jsx'
import SubCategory from '../components/subCategory.jsx'
import WelcomeMessage from '../components/WelcomeMessage.jsx'

import { Container, Divider, Button } from 'semantic-ui-react'


class HomePage extends Component {
  render() {
    return (
      <Container fluid>
      	<PageHeader >
          <WelcomeMessage />
        </PageHeader>


        <Container fluid className='page' >
          <Divider section hidden />

          <SubCategory subcategory ='React again'/>
          <Divider hidden />
          <SubCategory subcategory ='React'/>

        </Container>

      </Container>
    );
  }
}

export default HomePage;
