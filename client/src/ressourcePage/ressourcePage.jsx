import React, { Component } from 'react';

import PureHeader from '../components/pureHeader.jsx'
import Comment from '../components/Comment.jsx'

import { Container, Divider, Menu, Icon, Label, Button, Input } from 'semantic-ui-react'

const RessourcePage = ({match}) => (

  <Container fluid>
    <Container style={{top:'0'}} fluid>
      <PureHeader />
    </Container>

    <Divider hidden section/>

    <Container style={{width:'80%'}} fluid className='page' >
      <Divider section hidden />

      <Menu secondary>

      <Menu.Item>
      <h1 style={{float:'left'}} >{match.params.ressource} <em style = {{fontSize:'small',color:'rgb(152, 152, 152)'}}>added by john</em> </h1>
      </Menu.Item>

      <Menu.Item position='right'>
      <div style={{float:'right'}}>
      <Menu  secondary>
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
      </div>
      </Menu.Item>
    </Menu>

      <Divider clearing />

    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet tincidunt dui, ullamcorper ornare leo tincidunt non. Nulla facilisis lorem quis leo cursus, non tempus velit semper. Suspendisse non blandit tellus. Nam sed porta magna. Ut nec odio ultrices, vehicula turpis vel, congue nibh. Cras volutpat velit lacus, placerat molestie ipsum euismod quis. Etiam et lacus purus. Cras ultricies est pretium, aliquam nisi a, rhoncus tortor. Vivamus erat lectus, malesuada non dignissim sit amet, imperdiet a elit. In hac habitasse platea dictumst. Nullam condimentum mauris tempor, dignissim dui ut, accumsan quam. Sed et nulla id nunc malesuada gravida. Duis in rhoncus purus, hendrerit accumsan lorem. Phasellus arcu mauris, auctor a metus sit amet, viverra mollis eros. Sed pulvinar ex in dolor lobortis, vel porttitor urna tristique. Suspendisse vitae ornare urna.
    </div>

    <Divider hidden section/>

    <Container>

      <Divider horizontal>Comments</Divider>

      <Comment author="New Tyrachester">
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet tincidunt dui, ullamcorper ornare leo tincidunt non. Nulla facilisis lorem quis leo cursus, non tempus velit semper.
        </div>
      </Comment>

      <Comment author="Old Tyrachester">
        <div>
        Vivamus in purus lobortis, placerat urna blandit, suscipit mauris. Cras varius congue ex ut tincidunt. Aliquam at ante quis metus viverra varius. Proin posuere efficitur lorem, at pretium orci faucibus congue. Praesent dapibus quis lacus id tincidunt. Nullam tristique egestas turpis nec egestas. Nam non dolor cursus ligula volutpat pretium. Pellentesque ornare faucibus faucibus. Morbi ut arcu et tortor condimentum dictum.
        </div>
      </Comment>

      <Comment author="Simply Tyrachester">
        <div>
        Duis eu tempus tellus. Vivamus sed felis lectus. Curabitur lectus nibh, pharetra vehicula odio vitae, dignissim lacinia nisi. Sed auctor ut elit at eleifend. Fusce metus nisl, dignissim ac magna ac, fringilla fermentum nulla. In hac habitasse platea dictumst. Quisque nec erat vitae dolor ornare suscipit. Aliquam erat volutpat. Maecenas posuere varius nisi, et accumsan nibh finibus quis. Maecenas dictum tempus mattis. Donec non lacus vel nisl molestie consectetur. Morbi lorem augue, dapibus a congue at, accumsan at dolor. Sed eros enim, gravida consequat accumsan ut, maximus vel risus. Phasellus ac ante nulla. Nullam accumsan laoreet enim ac sollicitudin. Fusce ante felis, mattis non fringilla id, sollicitudin sit amet lacus.
        </div>
      </Comment>

      <Divider hidden/>

      <Input fluid placeholder='Write a comment...' />

    </Container>

    </Container>

  </Container>

)

export default RessourcePage
