import { createApplication } from "graphql-modules";
import { ApolloServer } from "apollo-server";
import { blogModule } from "./blog/";
import { authorModule } from "./author";

const app = createApplication({
  modules: [blogModule, authorModule],
});
const schema = app.createSchemaForApollo();
const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
