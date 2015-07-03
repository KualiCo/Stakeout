import React, { Component } from 'react'
import FluxComponent from 'flummox/component'

import Core from './core'

export default class ProjectsComponent extends Component {
  static displayName = 'Projects'
  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.flux.getActions('projects').getAll()
  }

  render() {
    return (
      <FluxComponent connectToStores={['projects']}>
        <Core/>
      </FluxComponent>
    )
  }
}
