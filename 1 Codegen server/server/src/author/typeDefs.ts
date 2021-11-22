import { gql } from "apollo-server";

export const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    authors: [Author]
    author(id: ID!): Author
  }
`;
