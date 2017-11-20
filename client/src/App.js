import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Container, Divider } from 'semantic-ui-react'

import HomePage from './homepage/homepage.jsx';
import CategoryPage from './categoryPage/categoryPage.jsx';
import SubCategoryPage from './subCategoryPage/subCategoryPage.jsx';
import RessourcePage from './ressourcePage/ressourcePage.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const PageFooter = () => (
  <div style ={{textAlign:'center',marginDown:'0'}}>
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
          <Route exact path="/cat=:category" component={CategoryPage}/>
          <Route exact path="/cat=:category/sub=:subcategory" component={SubCategoryPage}/>
          <Route exact path="/res=:ressource" component={RessourcePage}/>
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
