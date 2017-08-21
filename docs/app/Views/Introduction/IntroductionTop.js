import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Divider, Grid, Header, Label, Segment} from 'semantic-ui-react'

import pkg from 'package.json'
import Logo from 'docs/app/Components/Logo'
import { repoURL } from 'docs/app/utils'

const gridStyle = {
  backgroundColor: '#fff',
  height: '60vh',
}

const IntroductionTop = () => (
  <Grid columns={1} style={gridStyle} verticalAlign='middle'>
    <Grid.Column textAlign="center">
      <Logo centered size='small'/>

      <Header as='h1'>
        Semantic UI React
        <Header.Subheader>The official Semantic-UI-React integration</Header.Subheader>
      </Header>

      <Label
        href={repoURL}
        size="small"
        rel='noopener noreferrer'
        target='_blank'
      >
        { pkg.version }
      </Label>
      <Divider hidden />

      <Button
        as={Link}
        color='teal'
        size="large"
        to="/Usage"
      >
        Get started
      </Button>
      {/* TODO: Button should open sidebar */}
      <Button size="large">View docs</Button>
    </Grid.Column>
  </Grid>
)

export default IntroductionTop
