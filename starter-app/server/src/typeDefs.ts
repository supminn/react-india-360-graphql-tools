import { gql } from "apollo-server"

export const typeDefs = gql`
  type Blog {
    id: ID!
    title: String!
    author: String!
    content: String!
  }

  type Query {
    blogs: [Blog]
    blog(id: ID!): Blog
  }
`;
