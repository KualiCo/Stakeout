var DSRethinkDbAdapter = require('js-data-rethinkdb')
var rethinkdbAdapter = new DSRethinkDbAdapter({
  db: 'stakeout'
})

var JSData = require('js-data')
var DS = new JSData.DS({
  bypassCache: true,
  cacheResponse: false,
  findBelongsTo: false,
  findHasMany: false,
  findHasOne: false,
  findInverseLinks: false,
  ignoreMissing: true,
  keepChangeHistory: false,
  log: false,
  notify: false,
  resetHistoryOnInject: false,
  upsert: false
})
DS.registerAdapter('rethinkdb', rethinkdbAdapter, { default: true })

export var Stakeouts = DS.defineResource({
  name: 'stakeouts',
  table: 'stakeouts'
})

export var Snapshots = DS.defineResource({
  name: 'snapshots',
  table: 'snapshots'
})
