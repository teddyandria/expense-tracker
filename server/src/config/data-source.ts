import { DataSource } from "typeorm";
import { User } from "../entities/User";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Gabeli45",
  database: "expense-tracker",
  synchronize: true,
  logging: false,
  entities: [User],
  //   subscribers: [],
  //   migrations: [],
});
