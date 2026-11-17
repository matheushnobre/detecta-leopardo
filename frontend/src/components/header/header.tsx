import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="mx-auto flex h-16 items-center gap-8 px-4">
        <div className="p-4">
          <Link href="/" className="font-bold text-lg">
            Detecta Leopardo
          </Link>
        </div>
      </div>
    </header>
  );
}
