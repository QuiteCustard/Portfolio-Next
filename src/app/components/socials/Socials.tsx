import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { socials } from "~/app/data/socials";

export default function Socials() {
    return (
        <aside>
            <ul className="flex gap-4 fixed bottom-0 left-0 p-2 z-10">
                {socials.map((social) => (
                    <li key={social.name}>
                        <Link href={social.url}>
                            <FontAwesomeIcon icon={social.icon} height={35} width={35} className="text-white" role="img" aria-label={social.name} />
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}