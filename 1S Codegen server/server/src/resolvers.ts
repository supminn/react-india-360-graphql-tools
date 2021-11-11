import { blogs } from "./blogs"
import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    blogs: () => blogs,
    blog: (parent, args, context, info) => {
      return blogs.find((blog) => blog.id === args.id);
    },
  },
};
