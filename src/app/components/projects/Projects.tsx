import Link from "next/link";
import Image from 'next/image';
import { projects } from "~/app/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
    return (
        <section className="py-8 text-white flex flex-col gap-8 lg:py-16">
            <h2 className={`text-5xl font-semibold`}>Projects</h2>
            {projects.map(({ name, description, url, icons, image, github }, index) => (
                <article key={index} className="flex flex-col gap-4 border-b-2 pb-8 justify-between lg:flex-row lg:gap-8">
                    <Image src={image} alt={name} width={265} height={265} className="rounded" />
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl">{name}</h3>
                        <p>{description}</p>
                        <div className="flex gap-4">
                            <Link href={url} className="bg-secondary p-2 text-black rounded-xl w-fit transition-colors hover:bg-primary hover:text-white" target="_blank">Visit {name}</Link>
                            {github && <Link href={github} className="bg-primary p-2 text-white rounded-xl w-fit transition-colors hover:bg-secondary hover:text-black" target="_blank">View code</Link>}
                        </div>
                        <ul className="flex gap-4">
                            {icons.map(({ title, icon }, index) => (
                                <li key={index} className="flex flex-col gap-2 items-center">
                                    <FontAwesomeIcon icon={icon} height={35} width={35} className="text-white" role="img" aria-label={title} />
                                    <small>{title}</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </section>
    )
}
