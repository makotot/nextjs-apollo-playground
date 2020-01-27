module.exports = {
  client: {
    target: 'typescript',
    includes: [
      './apollo/**/*.ts',
    ],
    service: {
      url: 'http://localhost:1337/graphql',
    },
  },
}
