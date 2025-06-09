import Link from "next/link";

import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-background border-t py-6 md:py-10">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-muted-foreground text-sm">
            A maneira mais fácil de agendar consultas médicas online.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Links Rápidos</h3>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Entrar
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Cadastrar
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Sobre Nós
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Especialidades</h3>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Cardiologia
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Dermatologia
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Pediatria
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Contato</h3>
            <p className="text-muted-foreground text-sm">
              Rua da Saúde, 123
              <br />
              Cidade Médica, CM 12345
            </p>
            <p className="text-primary text-sm hover:underline">
              contato@doutoragenda.com
            </p>
            <p className="text-muted-foreground text-sm">(11) 3456-7890</p>
          </div>
        </div>
      </div>
      <div className="text-muted-foreground container mt-8 text-center text-sm">
        © 2025 Doutor Agenda. Todos os direitos reservados.
      </div>
    </footer>
  );
}
