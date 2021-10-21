const pino = require('pino')

let _logger

const LOG_LEVEL = process.env.LOG_LEVEL || 'info'

function logger() {
  if (_logger) return _logger

  _logger = pino({
    name: process.env.npm_package_name || 'ogn-arena',
    level: LOG_LEVEL
  })

  return _logger
}

module.exports = {
  logger
}
