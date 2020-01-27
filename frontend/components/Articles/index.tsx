import React from 'react'

export const Articles = ({ articles }: {
  articles: {
    id: string;
    title: string;
  }[];
}) => {
  return (
    <div>
      {
        articles.map((article) => (
          <p key={ article.id }>{ article.title }</p>
        ))
      }
    </div>
  )
}
