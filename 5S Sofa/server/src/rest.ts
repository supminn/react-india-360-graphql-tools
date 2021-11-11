import {useSofa} from 'sofa-api';
import express from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const app = express();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  })

app.use(useSofa({ schema, basePath: "/api" }));

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})