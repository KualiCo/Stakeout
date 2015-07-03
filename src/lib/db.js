import DsHttpAdapter from 'js-data-http'
import JSData from 'js-data'

var adapter = new DsHttpAdapter({
  basePath: '/api/models'
})
var store = new JSData.DS({
  log: false
})

store.registerAdapter('http', adapter, {
  default: true
})

export var Projects = store.defineResource('projects')
