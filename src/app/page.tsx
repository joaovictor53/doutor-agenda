import { Calendar, CheckCircle, UserCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { MedicalFeatures } from "@/components/ui/medical-features";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-primary-foreground text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Gerencia sua Clínica de Forma Prática
              </h1>
              <p className="text-primary-foreground/90 text-lg">
                Cadastre os melhores médicos, agende consultas e gerencie sua
                Clínica online - tudo em um só lugar.
              </p>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Cadastre-se Agora
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-background text-foreground"
                  >
                    Entrar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="bg-background py-20">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Como Funciona
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center p-6 text-center">
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <Calendar className="text-primary h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Escolha Data e Hora</h3>
                <p className="text-muted-foreground">
                  Navegue pelos horários disponíveis dos médicos e selecione o
                  melhor momento para sua consulta.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 text-center">
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <UserCheck className="text-primary h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Selecione seu Médico</h3>
                <p className="text-muted-foreground">
                  Escolha entre uma variedade de especialistas qualificados e
                  encontre o profissional ideal.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 text-center">
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <CheckCircle className="text-primary h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold">E pronto</h3>
                <p className="text-muted-foreground">
                  O agendamento foi confirmado com sucesso. Agora, só aguardar a
                  confirmação do Médico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Features */}
        <MedicalFeatures />

        {/* CTA Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90">
              Junte-se a milhares de pacientes que confiam no Doutor Agenda para
              gerenciar suas consultas médicas.
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="text-foreground bg-white hover:bg-white/90"
              >
                Comece Agora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
