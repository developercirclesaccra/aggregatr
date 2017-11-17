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
          <Button basic >Home</Button>
          <Button basic >{name}</Button>
          <Button basic >{name}</Button>
          <Button basic >{name}</Button>
          <Button basic >{name}</Button>
          <Button basic >{name}</Button>
        </Button.Group>
      </div>
)

export default Category;
