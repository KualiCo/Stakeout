import React from 'react'
import Router from 'react-router'
import attachFastClick from 'fastclick'
import FluxComponent from 'flummox/component'

import routes from './routes'
import flux from 'src/lib/store'
import './main.css'


// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

// Expose globally
window.React = React

const router = Router.create({
  routes: routes,
  location: Router.HashLocation // Router.HistoryLocation
})

router.run((Handler, state) => {
  React.render(
    <FluxComponent flux={flux}>
      <Handler {...state} />
    </FluxComponent>,
    document.getElementById('root'))
})
