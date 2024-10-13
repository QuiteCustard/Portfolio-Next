import { faCss3Alt, faHtml5, faJs, faPhp, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "../types";

export const projects: Project[] = [
    {
        name: "Pokédex",
        description: "A Pokédex built using NextJS and PokeAPI. I wanted to design and make it look like the generation 9 in game Pokédex.",
        url: "https://pokedex-coral-nu.vercel.app/",
        image: "/pokedex.webp",
        github: "https://github.com/QuiteCustard/pokedexT3",
        icons: [
            {
                title: "React (NextJS)",
                icon: faReact
            },
            {
                title: "CSS3",
                icon: faCss3Alt
            },
            {
                title: "TypeScript",
                icon: faJs
            }
        ],
    },
    {
        name: "CRB1",
        description: "CRB is a chartered account website that I built using WordPress. WordPress was requested by the client as they wished to have a blogging platform.",
        url: "https://crb1.co.uk",
        image: "/crb1.webp",
        icons: [
            {
                title: "WordPress",
                icon: faWordpress
            },
            {
                title: "HTML5",
                icon: faHtml5
            },
            {
                title: "CSS3",
                icon: faCss3Alt
            }
        ],
    },
    {
        name: "IOT",
        description: "A project I built in University that was a part of my Internet of Things module. It was used to monitor and control a Raspberry Pi that could control air conditioning, heating, and opening/closing windows. The username and password can be found on the repo.",
        url: "https://ws269058-iot.remote.ac/",
        image: "/iot.webp",
        github: "https://github.com/QuiteCustard/iot",
        icons: [
            {
                title: "PHP",
                icon: faPhp
            },
            {
                title: "CSS3",
                icon: faCss3Alt
            },
            {
                title: "JavaScript",
                icon: faJs
            }
        ],
    }
]