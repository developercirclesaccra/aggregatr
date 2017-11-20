import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Card, Button, Container, Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container>
        <Button color='youtube'>
          ADD
        </Button>
        <Divider horizontal/>
        <Button.Group>
          <Button>Previous</Button>
          <Button>Next</Button>
        </Button.Group>
      </Container>
    );
  }
}

export default App;
