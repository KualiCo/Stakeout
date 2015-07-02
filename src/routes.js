// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
import React from 'react' /* eslint no-unused-vars:0 */

import { Route, DefaultRoute, Redirect } from 'react-router'
import App from './components/app'

import SnapshotsSmart from './components/snapshots-smart'
import Stakeouts from './components/stakeouts/wrapper'

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route path=":stakeout/snapshots" handler={SnapshotsSmart} name="snapshots"/>
    <Route path="stakeouts" handler={Stakeouts} name="stakeouts"/>
    <Redirect from="/" to="stakeouts"/>
  </Route>
)

export default routes
