// semantic-release-config

const config = require('./.releaserc')

const packageMap = {
  maven: {
    plugin: 'semantic-release-maven',
    assets: 'pom.xml'
  },
  pypi: {
    plugin: 'semantic-release-pypi',
    assets: 'setup.cfg'
  }
}

config.releasePackage = name => {
  config.preparePackage(name)
  const { plugin } = packageMap[name]
  config.plugins.splice(-2, 0, plugin)
  return config
}

config.preparePackage = name => {
  const { plugin, assets } = packageMap[name]
  const length = config.plugins.length
  config.plugins[length - 2][1].assets.push(assets)
  config.prepare.splice(-1, 0, plugin)
  return config
}

module.exports = config
