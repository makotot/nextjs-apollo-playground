module.exports = {
  client: {
    target: 'typescript',
    includes: [
      './apollo/**/*.ts',
    ],
    service: {
      name: 'nextjs-apollo-playground',
      localSchemaFile: './graphql-schema.json',
    },
  },
}
