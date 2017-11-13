import React, { Component } from 'react';
import { Card, Button, Container, Divider } from 'semantic-ui-react'

import SubCategory from './subCategory.jsx'
import CategoryPage from '../categoryPage/categoryPage.jsx'
import HomePage from '../homepage/homepage.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Category = ({name}) => (
      <div style={{textAlign:'center',overflow:'auto'}}>

        <Route to='/:category' component={HomePage} />

        <Button.Group>
          <Button basic as={Link} to='/' component={HomePage} >Home</Button>
          <Button basic as={Link} to='/:category' component={CategoryPage} basic>{name}</Button>
          <Button basic as={Link} to='/:category' component={CategoryPage} basic>{name}</Button>
          <Button basic as={Link} to='/:category' component={CategoryPage} basic>{name}</Button>
          <Button basic as={Link} to='/:category' component={CategoryPage} basic>{name}</Button>
          <Button basic as={Link} to='/:category' component={CategoryPage} basic>{name}</Button>
        </Button.Group>
      </div>
)

export default Category;
