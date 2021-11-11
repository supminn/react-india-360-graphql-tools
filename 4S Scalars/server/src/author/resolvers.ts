import { authors } from "./authors"
import { Resolvers } from "../generated/graphql";
import {oddScalar} from '../scalar/Odd';
import { EmailAddressResolver }  from 'graphql-scalars';

export const resolvers: Resolvers = {
  Odd: oddScalar,
  EmailAddress: EmailAddressResolver,
  Query: {
    authors: () => authors,
  },
};
