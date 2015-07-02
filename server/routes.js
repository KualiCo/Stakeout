import {Stakeouts, Snapshots} from './db'
import Router from 'koa-router'

const models = {
  'stakeouts': Stakeouts,
  'snapshots': Snapshots
}

export var genericModelRoutes = new Router({
  prefix: '/api/models'
})

genericModelRoutes.get('/', function* () {
  this.body = 'PING!'
})

genericModelRoutes.get('/:model', function* () {
  var res = yield models[this.params.model].findAll()
  this.body = res
})

genericModelRoutes.get('/:model/:id', function* () {
  var res
  try {
    res = yield models[this.params.model].find(this.params.id)
  } catch (e) {
    if (e.message == 'Not Found!') {
      this.status = 404
      return
    }
  }
  this.body = res
})

genericModelRoutes.post('/:model', function* () {
  var res = yield models[this.params.model].create(this.request.body)
  this.body = res
})

genericModelRoutes.put('/:model/:id', function* () {
  var res = yield models[this.params.model].update(this.params.id, this.request.body)
  this.body = res
})

genericModelRoutes.delete('/:model/:id', function* () {
  var res = yield models[this.params.model].destroy(this.params.id)
  this.body = res
})
