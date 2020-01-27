import React from 'react'
import { Query } from '../components/Query'
import { ARTICLES_QUERY } from '../apollo/queries/article/articles'
import { Articles } from '../components/Articles'

const Index = () => (
  <Query query={ ARTICLES_QUERY }>
    {
      ({ data: { articles }}: {
        data: {
          articles: {
            id: string;
            title: string;
          }[];
        };
      }) => (
        <Articles articles={ articles } />
      )
    }
  </Query>
)

export default Index
