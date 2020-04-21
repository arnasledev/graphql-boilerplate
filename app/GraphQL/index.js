import fs from "fs";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
import resolvers from "./Resolvers";
import { IsAuthDirective } from "./Directives";
import { identifyUserByAccessToken } from "./Controllers/Auth";

const schema = fs.readFileSync(
  path.join(__dirname, "./Schema/Schema.graphql"),
  "utf8"
);
const typeDefs = importSchema(schema);

const graphQLServer = new ApolloServer({
  playground: true,
  schemaDirectives: { IsAuthDirective },
  context: async ({ req }) => {
    const user = await identifyUserByAccessToken(
      req.headers.authorization,
      "graphql"
    ); // todo extract path
    return {
      user
    };
  },
  typeDefs,
  resolvers
});

export { graphQLServer };
