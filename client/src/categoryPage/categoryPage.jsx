import React, { Component } from 'react';


import PageHeader from '../components/Header.jsx'
import SubCategory from '../components/subCategory.jsx'

import { Container, Divider, Button } from 'semantic-ui-react'

class CategoryPage extends Component {
  render() {
    return (
      <Container fluid>
      	<PageHeader >
          <h1> {this.props.params.category} </h1>
        </PageHeader>


        <Container fluid className='page' >
          <Divider section hidden />

          <SubCategory header='React again'/>
          <Divider hidden />
          <SubCategory header='React'/>

        </Container>

      </Container>
    );
  }
}

export default CategoryPage;
