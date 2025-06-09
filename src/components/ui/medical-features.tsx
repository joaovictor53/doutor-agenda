import { FileText, Shield, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MedicalFeatures() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Por que escolher o Doutor Agenda?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Nossa plataforma oferece recursos especializados para facilitar o
            agendamento e gestão de consultas médicas
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/10 mx-auto mb-2 w-fit rounded-full p-3">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Segurança Total</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Seus dados médicos são protegidos com criptografia de ponta e
                seguem todas as normas da LGPD
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/10 mx-auto mb-2 w-fit rounded-full p-3">
                <Users className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">
                Múltiplas Especialidades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Acesse médicos de diversas especialidades em uma única
                plataforma integrada
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/10 mx-auto mb-2 w-fit rounded-full p-3">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Histórico Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Mantenha um registro completo de todas as suas consultas e
                exames em um só lugar
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
