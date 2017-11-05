import React, { Component } from 'react';
import { Container, Divider, Segment, Image } from 'semantic-ui-react'

class PageHeader extends Component {
  render() {
    return (
    	<Container fluid >
      	<Segment fluid style = {{height:'60px'}}>
        	<Image floated='right' size='small' src='./images/aggregatr.png' />
      	</Segment>
      	<Divider hidden />
      	</Container>
    );
  }
}

export default PageHeader;