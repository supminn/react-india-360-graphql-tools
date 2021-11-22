import { authors } from "./author";
import { Resolvers } from "../generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    authors: () => authors,
    author: (parent, args, context, info) => {
      return authors.find((author) => author.id === args.id);
    },
  },
};
