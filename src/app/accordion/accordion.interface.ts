import { Links } from '../shared/links';

export interface Accordion {
  title: string;
  data?: string;
  author?: {
    name: string;
    link: string;
  };
  image?: string;
  links?: Links[];
  contents?: Accordion[];
}
