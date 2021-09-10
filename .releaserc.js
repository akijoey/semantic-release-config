// .releaserc.js

const getGitPluginConfig = () => [
  '@semantic-release/git',
  {
    assets: ['CHANGELOG.md', 'package.json']
  }
]

module.exports = {
  branches: 'main',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    getGitPluginConfig(),
    '@semantic-release/github'
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    getGitPluginConfig()
  ]
}
