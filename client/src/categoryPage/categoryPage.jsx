import React, { Component } from 'react';


import PageHeader from '../components/Header.jsx'
import SubCategory from '../components/subCategory.jsx'

import { Container, Divider, Button } from 'semantic-ui-react'

class CategoryPage extends Component {
  render() {
    return (
      <Container fluid>
      	<PageHeader >
          <h1> {this.props.match.params.category} </h1>
        </PageHeader>

        <Divider hidden section/>
        <div style ={{textAlign:'center'}} ><h1>{this.props.match.params.category} </h1></div>


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
