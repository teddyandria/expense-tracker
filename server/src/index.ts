import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema, Resolver, Query } from "type-graphql";
import { AppDataSource } from "./config/data-source";

@Resolver()
class HelloResolver {
  @Query(() => String, {
    nullable: true,
    description: "Fonction simple pour tester!",
  })
  async hello() {
    return "Hello World";
  }
}

const main = async () => {
  await AppDataSource.initialize();
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = await new ApolloServer({ schema });
  apolloServer.start().then(() => {
    const app = Express();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log("Serveur démarré sur  http://localhost:4000");
    });
  });
};
main();
