import React, { Component } from 'react';
import { Search, Container, Divider, Segment, Image } from 'semantic-ui-react'

import Category from '../components/Category.jsx'



class PageHeader extends Component {
  render() {
    return (
    	<Container fluid style={{top:'0'}}>

        <Container fluid style={{backgroundColor:'#ffffff', overflow:'hidden', backgroundAttachment:'fixed',zIndex: '1000', position:'fixed',top:'0px'}}>
        	<Image style={{position:'fixed', top:'10px', right:'20px'}} size='small' src='./images/aggregatr.png' />
          <Search style={{position:'fixed', top:'10px', left:'20px'}} />

          <Divider fluid section hidden clearing />
        </Container>

        <Divider fluid section hidden clearing />

        <div style ={{textAlign:'center'}}> {this.props.children} </div>

        <Divider fluid section hidden clearing />

        <Divider fitted />
        <Category basic name='Javascript'/>
        <Divider fluid fitted />

      </Container>
    );
  }
}

export default PageHeader;

/*
{ this.props.welcome ? (
<div>
  <Divider fluid section hidden />

  <WelcomeMessage />

  <Divider section hidden />
</div>
) : (<div></div>) }
*/
