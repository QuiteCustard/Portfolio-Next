import type{ Skill } from "../types";
import { faCss3Alt, faJs, faPhp, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";

export const skills: Skill[] = [
    {
        name: "NextJS/ React",
        icon: faReact
    },
    {
        name: "TypeScript",
        icon: faJs
    },
    {
        name: "CSS/ TailwindCSS",
        icon: faCss3Alt
    },
    {
        name: "PHP",
        icon: faPhp
    },
    {
        name: "WordPress",
        icon: faWordpress
    },
]