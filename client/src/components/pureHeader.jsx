import React, { Component } from 'react';
import { Search, Divider, Menu, Image } from 'semantic-ui-react'

import {Link} from 'react-router-dom'

import Category from '../components/Category.jsx'



const PureHeader = () => (
        <Menu borderless fluid stackable color='yellow' style={{ overflow:'hidden', backgroundAttachment:'fixed',zIndex: '1000', position:'fixed',top:'0px'}}>

          <Menu.Item>
            <Search  />
          </Menu.Item>
          <Menu.Item position='right'>
            <Image as={Link} to="/" size='small' src='./images/aggregatr.png' />
          </Menu.Item>

        </Menu>
);

export default PureHeader
