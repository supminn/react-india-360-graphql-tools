import { UserInputError } from 'apollo-server';
import { GraphQLScalarType, Kind } from 'graphql';

function oddValue(value) {
  if (typeof value === "number" && Number.isInteger(value) && value % 2 !== 0) {
    return value;
  }
  throw new UserInputError("Provided value is not an odd integer");
}

export const oddScalar = new GraphQLScalarType({
  name: 'Odd',
  description: 'Odd custom scalar type',
  parseValue: oddValue,
  serialize: oddValue,
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return oddValue(parseInt(ast.value, 10));
    }
    throw new UserInputError("Provided value is not an odd integer");
  },
})