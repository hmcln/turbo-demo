import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schemasMap";

const main = async () => {
  const server = new ApolloServer({
    schema,
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen({ port: 4000 }, () => console.log("connected"));
};

main();
