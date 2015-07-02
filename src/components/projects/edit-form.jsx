import React from 'react'
import {Input} from 'react-bootstrap'

class ProjectsEditForm extends React.Component {
  static displayName = 'ProjectsEditForm'
  render() {
    return (
      <div>
        <Input type="text" label="Name" bsSize="large" placeholder="Gorgeous giraffes"/>
      </div>
    )
  }
}

export default ProjectsEditForm
