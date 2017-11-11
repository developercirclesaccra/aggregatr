import React, { Component } from 'react';
import { Search, Container, Divider, Segment, Image } from 'semantic-ui-react'

class PageHeader extends Component {
  render() {
    return (
    	<Container fluid style={{backgroundColor:'white', overflow: 'hidden',zIndex: '1000', position:'fixed',top:'0px'}}>

        	<Image style={{position:'fixed', top:'10px', right:'20px'}} size='small' src='./images/aggregatr.png' />
          <Search style={{position:'fixed', top:'10px', left:'20px'}} />

      	<Divider section hidden />
      	</Container>
    );
  }
}

export default PageHeader;
