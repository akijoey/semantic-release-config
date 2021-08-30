const config = require('../.releaserc')

describe('semantic-release-config', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })
})
