import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/authentication">
      <a>
        <Image src="/logo.svg" alt="Doutor Agenda" width={136} height={28} />
      </a>
    </Link>
  );
}
