import React, { ReactElement } from 'react'
import { useQuery } from '@apollo/react-hooks'

const Query = ({ children, query, id }: {
  children: any;
  query: any;
  id?: string;
}) => {
  const { data, loading, error } = useQuery(query, {
    variables: {
      id: id ? parseInt(id) : '',
    },
  })

  if (loading) {
    return <p>loading ...</p>
  }
  if (error) {
    return <p>Error!</p>
  }

  return children({ data }) as ReactElement
}

export {
  Query,
}
