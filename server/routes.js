import {Stakeouts, Snapshots} from './db'

const models = {
  'stakeouts': Stakeouts,
  'snapshots': Snapshots
}

export default function(router) {
  router.get('/', function* () {
    this.body = 'PING!'
  })

  router.get('/models/:model', function* () {
    var res = yield models[this.params.model].findAll()
    this.body = res
  })

  router.get('/models/:model/:id', function* () {
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

  router.post('/models/:model', function* () {
    var res = yield models[this.params.model].create(this.request.body)
    this.body = res
  })

  router.put('/models/:model/:id', function* () {
    var res = yield models[this.params.model].update(this.params.id, this.request.body)
    this.body = res
  })

  router.delete('/models/:model/:id', function* () {
    var res = yield models[this.params.model].destroy(this.params.id)
    this.body = res
  })
}
