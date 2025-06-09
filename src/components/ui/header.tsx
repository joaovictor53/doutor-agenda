import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="border-b backdrop-blur">
      <div className="container mx-auto flex h-16 justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <Link href="/authentication">
            <Button variant="ghost">Entrar</Button>
          </Link>
          <Link href="/authentication">
            <Button>Cadastrar</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
