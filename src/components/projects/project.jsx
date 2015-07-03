import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import Icon from 'react-fontawesome'
import FluxComponent from 'flummox/component'

import sb from 'src/lib/stylebot'
import EditForm from './edit-form'

var STYLES = {
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
  },
  formWrapper: {
    marginTop: '1em'
  }
}

export default class ProjectsCoreComponent extends Component {
  static displayName = 'ProjectsCore'
  static propTypes = {
    project: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  toggleEditing() {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    return (
      <li style={STYLES.listItem}>
        <div style={STYLES.listItemRowWrapper}>
          <span style={STYLES.listItemText}>{this.props.project.name}</span>
          <div style={STYLES.actionButtons}>
            <Button bsStyle="link" style={STYLES.actionButton} onClick={this.toggleEditing.bind(this)}><Icon name='pencil'/></Button>
            <a href="#/cm/snapshots" style={STYLES.actionButton}><Icon name='instagram'/></a>
          </div>
        </div>
        {this.state.editing && (
          <div style={STYLES.formWrapper}>
            <FluxComponent connectToStores={['projects']}>
              <EditForm project={this.props.project} onFinishEditing={this.toggleEditing.bind(this)}/>
            </FluxComponent>
          </div>
        )}
      </li>
    )
  }
}
