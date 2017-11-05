import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react'

class PageHeader extends Component {
  render() {
    return (
      <Segment>
        <Image floated='left' size='tiny' src='./images/aggregatr.png' />
      </Segment>
    );
  }
}

export default PageHeader;