import React from 'react'
import Link from 'next/link'
import { Query } from '../Query'
import { CATEGORIES_QUERY } from '../../apollo/queries/category/categories'

export const Nav: React.FC = () => (
  <Query query={ CATEGORIES_QUERY }>
    {
      ({ data: { categories }}: {
        data: {
          categories: {
            id: number;
            name: string;
          }[];
        };
      }) => {
        console.log(categories)
        return (
          <div>
            {
              categories.map((category, i) => (
                <Link href="" key={ category.id }><a>{ category.name }</a></Link>
              ))
            }
          </div>
        )
      }
    }
  </Query>
)
