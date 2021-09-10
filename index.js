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

const releasePackage = (name, options) => {
  preparePackage(name, options)
  let { plugin, assets } = packageMap[name]
  plugin = options ? [plugin, options] : plugin

  const { length } = config.plugins
  config.plugins[length - 2][1].assets.push(assets)
  config.plugins.splice(-2, 0, plugin)
  return config
}

const preparePackage = (name, options) => {
  let { plugin, assets } = packageMap[name]
  plugin = options ? [plugin, options] : plugin

  const { length } = config.prepare
  config.prepare[length - 1][1].assets.push(assets)
  config.prepare.splice(-1, 0, plugin)
  return config
}

module.exports = Object.assign(config, {
  releasePackage,
  preparePackage
})
