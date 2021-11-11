import { ApolloServer } from "apollo-server"
import { typeDefs } from "./blog/typeDefs"
import { resolvers } from "./blog/resolvers"
import { createApplication } from "graphql-modules";
import { blogModule } from "./blog";
import { authorModule } from "./author";

const application = createApplication({
  modules: [blogModule, authorModule],
});

const schema = application.createSchemaForApollo();

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
