import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

class SubCategory extends Component {
  render() {
    return (
      <Card>
      	<Card.Content>
        	<Image floated='left' size='tiny' src='./images/codLogoo.jpg' />
        	<Card.Header>
        	  {this.props.header}
        	</Card.Header>
        	<Card.Meta>
        	  {this.props.information}
        	</Card.Meta>
      	</Card.Content>
      	<Card.Content extra>
        	<Button floated='right' fluid color='teal'>Explore</Button>
      	</Card.Content>
    </Card>
    );
  }
}

export default SubCategory;