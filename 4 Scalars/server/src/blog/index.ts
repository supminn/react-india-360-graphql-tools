
import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

export const blogModule = createModule({
  id: 'blog-module',
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});