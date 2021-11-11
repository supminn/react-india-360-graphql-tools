
import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

export const authorModule = createModule({
  id: 'author-module',
  dirname: __dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
});