import { faCss3Alt, faHtml5, faWordpress } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "../types";

export const projects: Project[] = [
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
    }
]