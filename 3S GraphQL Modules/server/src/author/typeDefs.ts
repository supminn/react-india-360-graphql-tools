import { gql } from "apollo-server"

export const typeDefs = gql`
  type Author {
    id: ID!
    author: String!
  }

  type Query {
    authors: [Author]
  }
`;
