import Link from "next/link";
import Image from 'next/image';
import { projects } from "~/app/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
    return (
        <section className="text-white flex flex-col gap-8">
            <h2 className={`text-5xl font-semibold`}>Projects</h2>
            {projects.map(({ name, description, url, icons, image, github }, index) => (
                <article key={index} className="flex border-b-2 pb-4 justify-between">
                    <Image src={image} alt={name} width={215} height={215} className="rounded" />
                    <div className="max-w-xl flex flex-col gap-4">
                        <h3 className="text-2xl">{name}</h3>
                        <p>{description}</p>
                        <Link href={url} className="bg-secondary p-2 text-black rounded-xl w-fit" target="_blank">Visit site</Link>
                        {github && <Link href={github} className="bg-tertiary p-2 text-black rounded-xl w-fit" target="_blank">View code</Link>}
                        <ul className="flex gap-4">
                            {icons.map(({title, icon}, index) => (
                                <li key={index}><FontAwesomeIcon icon={icon} height={35} width={35} className="text-white" role="img" aria-label={title} /></li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </section>
    )
}
