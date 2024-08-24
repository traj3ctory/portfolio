import { FunctionComponent, LazyExoticComponent } from "react";

export interface dataType {
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

export interface stackData {
  name: string;
  progress: number;
}

export interface workData {
  icon: string;
  date: string;
  role: string;
}

export interface schoolData {
  icon: string;
  title: string;
  date: string;
  name: string;
}
export interface portfolioData {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type INotSure = any;

export interface IRoute {
  path: string;
  element: LazyExoticComponent<FunctionComponent<INotSure>>;
  sub?: ISubRoute[];
}

export interface ISubRoute {
  path: string;
  subElement: LazyExoticComponent<FunctionComponent<INotSure>>;
}
