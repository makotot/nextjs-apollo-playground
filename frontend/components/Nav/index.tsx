import React from 'react'
import Link from 'next/link'
import { Query } from '../Query'
import { CATEGORIES_QUERY } from '../../apollo/queries/category/categories'
import * as CategoryTypes from '../../apollo/queries/category/types/Categories'

export const Nav: React.FC = () => (
  <Query query={ CATEGORIES_QUERY }>
    {
      ({ data: { categories }}: {
        data: {
          categories: CategoryTypes.Categories['categories'];
        };
      }) => {
        if (!categories || categories.length < 1) {
          return null
        }
        return (
          <div>
            {
              categories.map((category, i) => (
                <Link href="" key={ category?.id }><a>{ category?.name }</a></Link>
              ))
            }
          </div>
        )
      }
    }
  </Query>
)
