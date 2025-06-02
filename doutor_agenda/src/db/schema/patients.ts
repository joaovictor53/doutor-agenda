import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { z } from "zod";

export const patients = pgTable("patients", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  gender: text("gender", { enum: ["masculino", "feminino"] }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertPatientSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  gender: z.enum(["masculino", "feminino"]),
});

export const selectPatientSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  gender: z.enum(["masculino", "feminino"]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Patient = z.infer<typeof selectPatientSchema>;
export type NewPatient = z.infer<typeof insertPatientSchema>;
