import { gql } from "apollo-server"

export const typeDefs = gql`
scalar Odd
scalar EmailAddress
  type Author {
    id: ID!
    author: String!
    value: Odd
    email: EmailAddress
  }

  type Query {
    authors: [Author]
  }
`;
