import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "~/app/data/skills";

export default function Skills() {
    return (
        <section className="py-8 text-white grid grid-cols-3 gap-8 lg:py-16">
            <h2 className={`text-5xl font-semibold col-span-full`}>Skills</h2>
            {skills.map(({ name, icon }, index) => (
                <article key={index} className="flex flex-col gap-4 items-center lg:flex-row lg:gap-8">
                    <FontAwesomeIcon icon={icon} height={35} width={35} className="text-white" role="img" aria-label={name} />
                    <h3 className="text-2xl">{name}</h3>
                </article>
            ))}
        </section>
    )
}