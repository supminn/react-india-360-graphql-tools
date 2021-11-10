const { blogs } = require("./blogs");

const resolvers = {
  Query: {
    blogs: () => blogs,
    blog: (parent, args, context, info) => {
      return blogs.find((blog) => blog.id === args.id);
    },
  },
};

module.exports = { resolvers };
