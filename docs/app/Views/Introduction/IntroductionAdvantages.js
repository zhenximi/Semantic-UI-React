import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Divider, Grid, Header, List, Segment} from 'semantic-ui-react'

import {semanticUIDocsURL} from 'docs/app/utils'

const containerStyle = {
  backgroundColor: '#00b5ad',
}

const gridStyle= {
  paddingBottom: '2em',
  paddingTop: '2em',
}

const IntroductionAdvantages = () => (
  <Container fluid style={containerStyle}>
  <Grid container style={gridStyle}>
    <Grid.Column width={4}>
      <Header
        as='h3'
        icon='code'
        inverted
        content='jQuery Free'
        subheader='All components were reimplimented for React'
      />
    </Grid.Column>
    <Grid.Column width={4}>
      <Header
        as='h3'
        icon='rocket'
        inverted
        content='Typescript'
        subheader='All components has maintained definitions'
      />
    </Grid.Column>
    <Grid.Column width={4}>
      <Header
        as='h3'
        icon='check'
        inverted
        content='Declarative API'
        subheader='For robust features and prop validation'
      />
    </Grid.Column>
    <Grid.Column width={4}>
      <Header
        as='h3'
        icon='github'
        inverted
        content='Free'
        subheader={{ content: <span>Open source on <a href="#">Github</a></span> }}
      />
    </Grid.Column>

    {/*<Grid.Colu/}
          {/*Semantic UI React is the official React integration for <a href={semanticUIDocsURL}>Semantic UI</a> .*/}
        {/*</p>*/}
        {/*/!* TODO: All items should scroll *!/*/}
        {/*<List>*/}
          {/*<List.Item as='a' icon='check' content='jQuery Free'/>*/}
          {/*<List.Item as='a' icon='check' content='Typescript supported'/>*/}
          {/*<List.Item as='a' icon='check' content='Declarative API'/>*/}
          {/*<List.Item as='a' icon='check' content='Augmentation'/>*/}
          {/*<List.Item as='a' icon='check' content='Shorthand Props'/>*/}
          {/*<List.Item as='a' icon='check' content='Sub Components'/>*/}
          {/*<List.Item as='a' icon='check' content='Auto Controlled State'/>*/}
        {/*</List>*/}
    {/*</Grid.Column>*/}
    {/*<Grid.Column width={8}>*/}
      {/*<p>The Semantic UI React package can be installed via NPM:</p>*/}

      {/*<Segment basic secondary>*/}
        {/*$ npm install semantic-ui-react --save*/}
        {/*<br/>*/}
        {/*$ npm install semantic-ui-css --save*/}
      {/*</Segment>*/}

      {/*<p>*/}
        {/*However, it's not a single method to setup, take a look on <Link to="/Usage">Usage section</Link>.*/}
      {/*</p>*/}

      {/*<Button*/}
        {/*as={Link}*/}
        {/*color="teal"*/}
        {/*content="Read more"*/}
        {/*to="/Usage"*/}
      {/*/>*/}
    {/*</Grid.Column>*/}
  </Grid>
  </Container>
)

export default IntroductionAdvantages
