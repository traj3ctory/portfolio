interface dataType {
    title: string;
    subtitle: Array<string>;
    description: string;
    name: object;
    birthday: object;
    stack: Array<stackData>;
    workXp: Array<workData>;
    detail: object;
    school: Array<schoolData>;
    portfolio: Array<portfolioData>;
}

interface stackData{
    name: string;
    progress: number;
}

interface workData{
    icon: string;
    date: string;
    role: string;
}

interface schoolData{
    icon: string;
    title: string;
    date: string;
    name: string;
}
interface portfolioData{
    name: string;
    image: string;
    description?: string;
    link?: string;
    category?: string;
}

export type { dataType, stackData};