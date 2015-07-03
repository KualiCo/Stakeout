import React, { PropTypes } from 'react'
import { RouteHandler } from 'react-router'
import {Navbar, NavItem} from 'react-bootstrap'
import Icon from 'react-fontawesome'

var STYLES = {
  nav: {
    borderRadius: '0',
    border: 'none',
    background: '#2083E0'
  },
  brandIcon: {
    fontSize: '1.5em',
    marginRight: '.5rem'
  },
  brandWrapper: {
    color: 'rgb(9, 35, 59)',
    display: 'flex',
    alignItems: 'center'
  }
}

export default class App {
  static displayName = 'App'

  static propTypes = {
    pathname: PropTypes.string.isRequired
  }

  render() {
    let { pathname } = this.props
    var brand = (
      <a href="/" style={STYLES.brandWrapper}>
        <Icon name='user-secret' style={STYLES.brandIcon}/>
        <span style={STYLES.brandText}>Stakeout</span>
      </a>
    )

    var nav = <Navbar brand={brand} bsSize="large" style={STYLES.nav}/>

    return (
      <div>
        {nav}
        <RouteHandler {...this.props} key={pathname} />
      </div>
    )
  }
}
