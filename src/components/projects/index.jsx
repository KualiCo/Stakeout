import React, { Component } from 'react'

import Core from './core'
import {Projects} from 'src/lib/db'

export default class ProjectsComponent extends Component {
  static displayName = 'Projects'

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Projects.findAll().then(function(items) {
      console.log('Projects: ', items)
    })
  }

  render() {
    return (
      <Core/>
    )
  }
}
