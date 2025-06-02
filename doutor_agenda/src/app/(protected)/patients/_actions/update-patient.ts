"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/db";
import { patients } from "@/db/schema/patients";

const updatePatientSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  gender: z.enum(["masculino", "feminino"]),
});

export async function updatePatient(formData: FormData) {
  const validatedFields = updatePatientSchema.safeParse({
    id: formData.get("id"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    gender: formData.get("gender"),
  });

  if (!validatedFields.success) {
    return {
      error: "Dados inválidos",
    };
  }

  const { id, ...data } = validatedFields.data;

  try {
    await db
      .update(patients)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(patients.id, id));

    revalidatePath("/patients");
    return {
      success: true,
    };
  } catch (error: unknown) {
    console.error("Erro ao atualizar paciente:", error);
    return {
      error: "Erro ao atualizar paciente",
    };
  }
}
