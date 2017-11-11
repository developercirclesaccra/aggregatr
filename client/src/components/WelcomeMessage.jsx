import React from 'react'
import { Header, Divider, Container } from 'semantic-ui-react'

const WelcomeMessage = () => (
  <Container textAlign='center' >
    <Header as='h1' > Welcome to AggregatR </Header>
    <Divider hidden />
    <p>Aggregatr is a community driven website that facilitates the sharing of best resources on popular programming languages.</p>
  </Container>
)

export default WelcomeMessage
