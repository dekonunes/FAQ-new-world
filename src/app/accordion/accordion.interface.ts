import { Links } from '../shared/links';

export interface Accordion {
  index: string;
  title: string;
  description?: string;
  data?: string;
  author?: {
    name: string;
    link: string;
  };
  image?: string;
  links?: Links[];
  contents?: Omit<Accordion, 'index'>[];
}
