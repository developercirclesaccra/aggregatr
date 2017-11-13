import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './homepage/homepage.jsx';
import CategoryPage from './categoryPage/categoryPage.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router >
        <HomePage />
      </Router>
    );
  }
}

export default App;
