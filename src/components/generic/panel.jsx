import React, { Component } from 'react'
import Icon from 'react-fontawesome'

var STYLES = {
  header: {
    background: '#e2504d',
    color: 'white',
    padding: '1em',
    borderTopRightRadius: '.2em',
    borderTopLeftRadius: '.2em'
  },
  inner: {
    background: 'white',
    padding: '1em',
    borderBottomRightRadius: '.2em',
    borderBottomLeftRadius: '.2em'
  },
  wrapper: {
    borderRadius: '.2em',
    boxShadow: '0 .2em 0 rgba(0, 0, 0, .3)'
  },
  icon: {
    marginRight: '.5rem'
  }
}

export default class Panel extends Component {
  static displayName = 'Panel'

  constructor(props) {
    super(props)
  }

  static propTypes = {
    iconName: React.PropTypes.string,
    headerText: React.PropTypes.string,
    children: React.PropTypes.any
  }

  render() {
    return (
      <div style={STYLES.wrapper}>
        <div style={STYLES.header}>
          {this.props.iconName && <Icon name={this.props.iconName} style={STYLES.icon}/>}
          {this.props.headerText}
        </div>
        <div style={STYLES.inner}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
