import React, { Component } from 'react';
import { Card, Button, Container, Divider } from 'semantic-ui-react'
import SubCategory from './subCategory.jsx'

const Category = ({name}) => (
      <div style={{textAlign:'center',overflow:'auto'}}>
        <Button.Group>
          <Button basic>{name}</Button>
          <Button basic>{name}</Button>
          <Button basic>{name}</Button>
          <Button basic>{name}</Button>
          <Button basic>{name}</Button>
        </Button.Group>
      </div>
)

export default Category;
