// semantic-release-config

const config = require('./.releaserc')
config.plugins.pop()

const packageMap = {
  npm: {
    plugin: '@semantic-release/npm',
    assets: 'package.json'
  },
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
  if (name !== 'npm') {
    config.preparePackage(name)
  }
  const { plugin } = packageMap[name]
  config.plugins.push(plugin)
  return config
}

config.preparePackage = name => {
  const { plugin, assets } = packageMap[name]
  config.plugins[3][1].assets.push(assets)
  config.prepare.splice(2, 0, plugin)
  return config
}

module.exports = config
