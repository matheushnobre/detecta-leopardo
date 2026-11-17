
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-primary text-white mx-auto px-6 py-6">
            <p className="text-center text-xs text-white/70">
                Desenvolvido por

                <Link
                href="https://sites.google.com/view/matheus-nobre-portifolio/p%C3%A1gina-inicial?authuser=3"
                className="ml-1 text-md font-bold"
                >
                    Matheus Nobre
                </Link>
            </p>
        </footer>
    );
}
