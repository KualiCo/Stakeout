import React, { Component } from 'react'

import Stakeouts from './stakeouts'

export default class StakeoutsWrapper extends Component {
  static displayName = 'StakeoutsWrapper'

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Stakeouts/>
    )
  }
}
