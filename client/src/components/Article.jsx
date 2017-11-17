import React, { Component } from 'react';
import { Button, Card, Image, Label, Menu, Icon } from 'semantic-ui-react'

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
          <Menu fluid secondary>
            <Menu.Item as='a'>
              <Icon name='thumbs outline up' />
              <Label color='olive' floating>22</Label>
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='thumbs outline down' />
              <Label color='red' floating>22</Label>
            </Menu.Item>
            <Menu.Item >
              <Button basic color='teal' >Read</Button>
            </Menu.Item>
          </Menu>
        </Card.Content>
    </Card>
    );
  }
}

export default Article;
