import koa from 'koa'
import bodyParser from 'koa-body-parser'
import cors from 'koa-cors'
import routerFactory from 'koa-router'
import logger from 'winston'

import appRoutes from './routes'

const PORT = process.env.STAKEOUT_PORT || 5050
const app = koa()
var router = routerFactory()
appRoutes(router)

app.use(cors())
app.use(bodyParser())
app.use(router.routes())

app.listen(PORT, function() {
  console.log()
  logger.info('Stakeout API started, listening on port ' + PORT)
})
