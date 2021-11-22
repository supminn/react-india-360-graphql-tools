# React India - 360 GraphQL tooling

The codebase for Workshop conducted by [Vilva Athiban](https://twitter.com/vilvaathibanpb) for official React India conference

Once the FE and BE are tightly coupled, all the types would be taken from BE and would result in errors if not followed properly in FE.
If there are any updates to `types` within the BE, running `yarn gen-types` would update the `1 Codegen server\server\src\generated\graphql.ts` file on the new types. Running `yarn generate` on FE would capture these newly updated types.
