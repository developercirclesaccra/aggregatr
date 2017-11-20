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



        <Button.Group>
          <Button as={Link} to='/' basic >Home</Button>
          <Button as={Link} to={'/cat='+name} basic >{name}</Button>
          <Button as={Link} to={'/cat='+name} basic >{name}</Button>
          <Button as={Link} to={'/cat='+name} basic >{name}</Button>
          <Button as={Link} to={'/cat='+name} basic >{name}</Button>
          <Button as={Link} to={'/cat='+name} basic >{name}</Button>
        </Button.Group>
      </div>
)

export default Category;
