// semantic-release-config

const config = require('./.releaserc')
config.plugins.pop()

module.exports = config
