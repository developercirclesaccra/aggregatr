import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Container, Divider } from 'semantic-ui-react'

import HomePage from './homepage/homepage.jsx';
import CategoryPage from './categoryPage/categoryPage.jsx';
import SubCategoryPage from './subCategoryPage/subCategoryPage.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const PageFooter = () => (
  <div style ={{textAlign:'center'}}>
    <Divider section hidden />
    <Divider style={{width:'70%',margin:'auto'}}/>
    <div style={{color:'rgb(126, 126, 126)'}}>AggregatR</div>
    <Divider hidden />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/:category" component={CategoryPage}/>
          <Route exact path="/:category/:subcategory" component={SubCategoryPage}/>
        </Switch>
        <Route path="/" component={PageFooter}/>
      </div>
      </Router>
    );
  }
}

export default App;
/*
<Router >
  <HomePage />
</Router>
*/
