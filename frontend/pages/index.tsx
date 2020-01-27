import React from 'react'
import { Query } from '../components/Query'
import { ARTICLES_QUERY } from '../apollo/queries/article/articles'
import * as ArticleTypes from '../apollo/queries/article/types/Articles'
import { Articles } from '../components/Articles'

const Index = () => (
  <Query query={ ARTICLES_QUERY }>
    {
      ({ data: { articles }}: {
        data: {
          articles: ArticleTypes.Articles['articles'];
        };
      }) => (
        <Articles articles={ articles } />
      )
    }
  </Query>
)

export default Index
