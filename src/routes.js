// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
import React from 'react' /* eslint no-unused-vars:0 */

import { Route, DefaultRoute, Redirect } from 'react-router'
import App from './components/app'

import SnapshotsSmart from './components/snapshots-smart'
import Projects from './components/projects'

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route path=":project/snapshots" handler={SnapshotsSmart} name="snapshots"/>
    <Route path="projects" handler={Projects} name="projects"/>
    <Redirect from="/" to="projects"/>
  </Route>
)

export default routes
