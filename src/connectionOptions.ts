import { User } from "./entity/User";

import { ConnectionOptions } from "typeorm";

export const mongoConnectionParams: ConnectionOptions = {
  type: "mongodb",
  host: "127.0.0.1",
  port: 27017,
  database: "test",
  entities: [User]
};
