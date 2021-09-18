const config = require('../.releaserc')

function getReleasePlugin(plugins) {
  return plugins[plugins.length - 3]
}

function getPreparePlugin(prepare) {
  return prepare[prepare.length - 2]
}

describe('semantic-release-config', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })

  it('prepare package', () => {
    const { preparePackage } = require('..')
    const { prepare } = preparePackage('pypi')
    const plugin = getPreparePlugin(prepare)
    expect(plugin).toBe('semantic-release-pypi')
  })

  it('release package', () => {
    const { releasePackage } = require('..')
    const { plugins } = releasePackage('maven')
    const plugin = getReleasePlugin(plugins)
    expect(plugin).toBe('semantic-release-maven')
  })
})
