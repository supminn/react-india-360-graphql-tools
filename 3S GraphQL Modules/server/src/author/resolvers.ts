import { authors } from "./authors"
import { Resolvers } from "../generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    authors: () => authors,
  },
};
