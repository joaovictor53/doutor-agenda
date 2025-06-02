"use client";

import { Pencil, Trash2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { patients } from "@/db/schema/patients";

import { deletePatient } from "../_actions/delete-patient";
import { EditPatientDialog } from "./edit-patient-dialog";

interface PatientsTableProps {
  data: (typeof patients.$inferSelect)[];
}

export function PatientsTable({ data }: PatientsTableProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("id", id);

      const result = await deletePatient(formData);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success("Paciente excluído com sucesso");
      }
    });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Gênero</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                Nenhum paciente encontrado.
              </TableCell>
            </TableRow>
          ) : (
            data.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <EditPatientDialog
                      patient={patient}
                      trigger={
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      }
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive h-8 w-8"
                      onClick={() => handleDelete(patient.id)}
                      disabled={isPending}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
