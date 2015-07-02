import React, { Component } from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Icon from 'react-fontawesome'

import Panel from 'src/components/generic/panel'
import sb from 'src/lib/stylebot'
import EditForm from './edit-form'

var STYLES = {
  list: {
    listStyle: 'none',
    paddingLeft: '0'
  },
  listItem: {
    borderBottom: '1px solid ' + sb.colors.lightBorder,
    padding: '1em 0'
  },
  listItemRowWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listItemText: {
    fontSize: '2em'
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center'
  },
  actionButton: {
    marginLeft: '2rem',
    fontSize: '2rem',
    padding: '0'
  }
}

export default class ProjectsCoreComponent extends Component {
  static displayName = 'ProjectsCore'

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Panel headerText="Projects" iconName="binoculars">
              <ul style={STYLES.list}>
                <li style={STYLES.listItem}>
                  <div style={STYLES.listItemRowWrapper}>
                    <span style={STYLES.listItemText}>CM</span>
                    <div style={STYLES.actionButtons}>
                      <Button bsStyle="link" style={STYLES.actionButton}><Icon name='pencil'/></Button>
                      <a href="#/cm/snapshots" style={STYLES.actionButton}><Icon name='instagram'/></a>
                    </div>
                  </div>
                  <EditForm/>
                </li>
              </ul>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}
