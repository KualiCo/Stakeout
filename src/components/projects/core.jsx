import React, { Component } from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {mapIndexed} from 'ramda'

import Panel from 'src/components/generic/panel'
import Project from './project'

var STYLES = {
  list: {
    listStyle: 'none',
    paddingLeft: '0'
  },
  buttonRightWrapper: {
    textAlign: 'right'
  }
}

export default class ProjectsCoreComponent extends Component {
  static displayName = 'ProjectsCore'
  static propTypes = {
    projects: React.PropTypes.arrayOf(React.PropTypes.object),
    flux: React.PropTypes.any.isRequired
  }

  constructor(props) {
    super(props)
  }

  renderProject(project, i) {
    return (
      <Project key={'project' + i} project={project}/>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Panel headerText="Projects" iconName="binoculars">
              <ul style={STYLES.list}>
                {mapIndexed(this.renderProject, this.props.projects)}
              </ul>
              <div style={STYLES.buttonRightWrapper}>
                <Button onClick={this.props.flux.getActions('projects').create}>New Project</Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}
