import {
  pgTable,
  timestamp,
  serial,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";
import { text } from "stream/consumers";

export const statusEnum = pgEnum("status", [
  "open",
  "paid",
  "void",
  "uncollectible",
]);

export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  status: statusEnum("status").notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
});
