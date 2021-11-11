import { blogs } from "./blogs"

export const resolvers = {
  Query: {
    blogs: () => blogs,
    blog: (parent, args, context, info) => {
      return blogs.find((blog) => blog.id === args.id);
    },
  },
};
