import koa from 'koa'
import bodyParser from 'koa-body-parser'
import cors from 'koa-cors'
import requestLogger from 'koa-logger'
import logger from 'winston'

import {genericModelRoutes} from './routes'

const PORT = process.env.STAKEOUT_PORT || 5050
const app = koa()

app.use(requestLogger())
app.use(cors())
app.use(bodyParser())
app.use(genericModelRoutes.routes())

app.listen(PORT, function() {
  console.log()
  logger.info('Stakeout API started, listening on port ' + PORT)
})
