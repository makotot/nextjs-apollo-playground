
## [apollo-client](https://github.com/apollographql/apollo-client)
ReactやAngular等と統合できるGraphQLクライアント。GraphQLからデータをフェッチするUIコンポーネントを容易に作ることができるようになる。

## [apollo-cache-inmemory](https://www.npmjs.com/package/apollo-cache-inmemory)
> apollo-cache-inmemory is the recommended cache implementation for Apollo Client 2.0. InMemoryCache is a normalized data store that supports all of Apollo Client 1.0's features without the dependency on Redux.

Apolloクライアントの正規化データストア

## [apollo-link-http](https://www.apollographql.com/docs/link/links/http/)

http接続でGraphQLのエンドポイントからフェッチする


## [AppProvider](https://www.apollographql.com/docs/react/api/react-hooks/#apolloprovider)

reduxにおける`<Provider />`と同じような働きをするコンポーネント


## [useQuery](https://www.apollographql.com/docs/tutorial/queries/#the-usequery-hook)

GraphQLのクエリをフェッチして結果を`data`プロパティから取り出せるhooks


## [Apollo tooling](https://github.com/apollographql/apollo-tooling)

> Apollo CLI brings together your GraphQL clients and servers with tools for validating your schema, linting your operations for compatibility with your server, and generating static types for improved client-side type safety.

### [apollo.config.js](https://www.apollographql.com/docs/devtools/apollo-config/)

> If you're using one of our workflow tools like the Apollo CLI or the Apollo VS Code extension, you'll need to have an apollo.config.js project to get the features those tools bring.

#### schema生成
```sh
$ yarn run apollo client:download-schema --endpoint=http://localhost:1337/graphql graphql-schema.json
```

node_modules内のgraphqlが複数バージョン入ってしまって、https://github.com/apollographql/apollo-tooling/issues/1296 のようなエラーが起きるケースがある。graphqlのバージョン固定しておけば起きない

```sh
$ node_modules/.bin/apollo client:download-schema --endpoint=http://localhost:1337/graphql graphql-schema.json
  ✔ Loading Apollo Project
  ✖ Saving schema to graphql-schema.json
    → spurious results.
Error: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.
Ensure that there is only one instance of "graphql" in the node_modules
```

#### 型ファイル生成
```sh
$ yarn run apollo client:codegen
```

---

# Next

## [_app.js](https://nextjs.org/docs/advanced-features/custom-app)

> Next.js uses the App component to initialize pages. You can override it and control the page initialization. 

