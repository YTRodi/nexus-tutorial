// This is the graphql context
import { Db, db } from "./db";

export interface Context {
  db: Db;
}

export const context: Context = {
  db,
};
