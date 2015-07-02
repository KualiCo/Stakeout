import React from 'react'
import {Input} from 'react-bootstrap'

class StakeoutsEditForm extends React.Component {
  static displayName = 'StakeoutsEditForm'
  render() {
    return (
      <div>
        <Input type="text" label="Name" bsSize="large" placeholder="Gorgeous giraffes"/>
      </div>
    )
  }
}

export default StakeoutsEditForm
