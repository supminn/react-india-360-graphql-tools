import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Blog = {
  __typename?: 'Blog';
  author: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  blog?: Maybe<Blog>;
  blogs?: Maybe<Array<Maybe<Blog>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryBlogArgs = {
  id: Scalars['ID'];
};

export type GetBlogByIdQueryVariables = Exact<{
  blogId: Scalars['ID'];
}>;


export type GetBlogByIdQuery = { __typename?: 'Query', blog?: { __typename?: 'Blog', id: string, title: string, author: string, content: string } | null | undefined };

export type GetAllBlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogsQuery = { __typename?: 'Query', blogs?: Array<{ __typename?: 'Blog', id: string, title: string, author: string, content: string } | null | undefined> | null | undefined };


export const GetBlogByIdDocument = gql`
    query getBlogById($blogId: ID!) {
  blog(id: $blogId) {
    id
    title
    author
    content
  }
}
    `;

/**
 * __useGetBlogByIdQuery__
 *
 * To run a query within a React component, call `useGetBlogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogByIdQuery({
 *   variables: {
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useGetBlogByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
      }
export function useGetBlogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
        }
export type GetBlogByIdQueryHookResult = ReturnType<typeof useGetBlogByIdQuery>;
export type GetBlogByIdLazyQueryHookResult = ReturnType<typeof useGetBlogByIdLazyQuery>;
export type GetBlogByIdQueryResult = Apollo.QueryResult<GetBlogByIdQuery, GetBlogByIdQueryVariables>;
export const GetAllBlogsDocument = gql`
    query getAllBlogs {
  blogs {
    id
    title
    author
    content
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;