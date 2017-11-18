import React, { Component } from 'react';
import { Search, Container, Divider, Segment, Menu, Image } from 'semantic-ui-react'

import {Link} from 'react-router-dom'

import Category from '../components/Category.jsx'



class PageHeader extends Component {
  render() {
    return (
    	<Container fluid style={{top:'0'}}>

        <Menu borderless fluid stackable color='yellow' style={{ overflow:'hidden', backgroundAttachment:'fixed',zIndex: '1000', position:'fixed',top:'0px'}}>

          <Menu.Item>
            <Search  />
          </Menu.Item>
          <Menu.Item position='right'>
            <Image as={Link} to="/" size='small' src='./images/aggregatr.png' />
          </Menu.Item>

        </Menu>

        <Divider fluid section hidden clearing />
        <Divider fluid section hidden />

        <div style ={{textAlign:'center'}}> {this.props.children} </div>

        <Divider fluid section hidden clearing />

        <Divider />
        <Category basic name='Javascript'/>
        <Divider fluid />

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
