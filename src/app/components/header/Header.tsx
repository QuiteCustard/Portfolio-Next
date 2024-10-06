import Link from "next/link";

export default function Header() {
    return (
        <header className={`fixed top-0 custom-container pt-4 z-10 w-full`}>
            <nav className="bg-primary border-2 border-secondary py-2 px-6 rounded-2xl lg:w-fit lg:mx-auto">
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