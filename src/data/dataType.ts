interface dataType {
  title: string;
  subtitle: Array<string>;
  description: string;
  desc2: string;
  desc3: string;
  name: object;
  birthday: object;
  stack: Array<stackData>;
  workXp: Array<workData>;
  detail: object;
  school: Array<schoolData>;
  portfolio: Array<portfolioData>;
}

interface stackData {
  name: string;
  progress: number;
}

interface workData {
  icon: string;
  date: string;
  role: string;
}

interface schoolData {
  icon: string;
  title: string;
  date: string;
  name: string;
}
interface portfolioData {
  name: string;
  image: string;
  description: string;
  link: string;
  category: string;
  role: string;
  tech: string;
  other_img?: string[];
  button?: boolean;
}

export type { dataType, stackData, portfolioData };
