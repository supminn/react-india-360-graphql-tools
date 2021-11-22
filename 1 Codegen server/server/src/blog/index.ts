import { createModule } from "graphql-modules";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

export const blogModule = createModule({
  id: "blog-module",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});
