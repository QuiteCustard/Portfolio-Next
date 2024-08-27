import Link from "next/link";

export default function Header() {
    return (
        <header className={`fixed top-0 custom-container pt-4 bg-primary z-10 w-full`}>
            <a className={`absolute -top-full left-0 opacity-0 z-10 bg-white p-4 transition-opacity focus:opacity-100 focus:top-0`} href="#main-content">Skip to content</a>
            <nav>
                <menu className="flex justify-center items-center gap-4">
                <li>
                        <Link href="/" className="text-white">About</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white">Skills</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white">Projects</Link>
                    </li>
                </menu>
            </nav>
        </header>
    )
}
