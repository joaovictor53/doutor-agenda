"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { db } from "@/db";
import { patients } from "@/db/schema/patients";

const deletePatientSchema = z.object({
  id: z.string().uuid(),
});

export async function deletePatient(formData: FormData) {
  const validatedFields = deletePatientSchema.safeParse({
    id: formData.get("id"),
  });

  if (!validatedFields.success) {
    return {
      error: "Dados inválidos",
    };
  }

  const { id } = validatedFields.data;

  try {
    await db.delete(patients).where(eq(patients.id, id));
    revalidatePath("/patients");
    return {
      success: true,
    };
  } catch (error: unknown) {
    console.error("Erro ao excluir paciente:", error);
    return {
      error: "Erro ao excluir paciente",
    };
  }
}
