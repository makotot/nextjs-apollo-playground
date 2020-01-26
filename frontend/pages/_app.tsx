import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'
import { Nav } from '../components/Nav'

const App = ({ Component, pageProps, apollo }: {
  Component: React.FC,
  pageProps: any,
  apollo: any,
}) => {
  return (
    <ApolloProvider client={ apollo }>
      <Head>
        <title>next apollo playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Nav />
        <div>app</div>
        <Component { ...pageProps } />
      </div>
    </ApolloProvider>
  )
}

export default withData(App)
