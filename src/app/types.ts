import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export type Social = {
    name: string;
    url: string;
    icon: IconProp;
}

export type Project = {
    name: string;
    description: string;
    url: string;
    image: string;
    icons: {
        title: string;
        icon: IconProp
    }[];
    github?: string;
}

export type Skill = {
    name: string;
    icon: IconProp
}