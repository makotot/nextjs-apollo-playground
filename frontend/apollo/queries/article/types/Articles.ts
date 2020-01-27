/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Articles
// ====================================================

export interface Articles_articles_category {
  __typename: "Category";
  id: string;
  name: string;
}

export interface Articles_articles {
  __typename: "Article";
  id: string;
  title: string;
  published_at: any;
  category: Articles_articles_category | null;
}

export interface Articles {
  articles: (Articles_articles | null)[] | null;
}
