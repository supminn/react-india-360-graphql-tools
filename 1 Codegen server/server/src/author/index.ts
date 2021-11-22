import { createModule } from "graphql-modules";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

export const authorModule = createModule({
  id: "author-module",
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});
