import app from './app'
import config from './config'
import logger from './logger'

const PORT = config.port || 3001

app.listen(PORT, () => {
  logger.info(`App is listening on ${PORT}`)
  console.log(`App is listening on ${PORT}`)
})
