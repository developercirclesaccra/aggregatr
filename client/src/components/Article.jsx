import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

class Article extends Component {
  render() {
    return (
      <Card>
      	<Card.Content>
        	<Image floated='left' size='small' src='./images/codLogoo.jpg' />
        	<Card.Header>
        	  {this.props.title}
        	</Card.Header>
        	<Card.Meta>
        	  {this.props.description}
        	</Card.Meta>
      	</Card.Content>
      	<Card.Content extra>
        	<Button floated='right' fluid color='teal'>Read</Button>
      	</Card.Content>
    </Card>
    );
  }
}

export default Article;
