import React, { Component } from 'react';
import { Search, Divider, Menu, Image } from 'semantic-ui-react'





class Comment extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.author}</strong>
        <div style={{color:'rgb(73, 73, 73)'}}>
          {this.props.children}
        </div>
        <Divider hidden/>
      </div>
    );
  }
}

export default Comment
