import React from 'react'
import * as ArticleTypes from '../../apollo/queries/article/types/Articles'

export const Articles = ({ articles }: {
  articles: ArticleTypes.Articles['articles'];
}) => {
  if (!articles || articles.length < 1) {
    return null
  }
  return (
    <div>
      {
        articles.map((article) => (
          <p key={ article?.id }>{ article?.title }</p>
        ))
      }
    </div>
  )
}
