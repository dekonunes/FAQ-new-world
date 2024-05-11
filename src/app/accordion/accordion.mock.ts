import { Accordion } from './accordion.interface';

import { driveLicence as driveLicence_pt_br } from '../data/pt-BR/drive-licence.pt-br';
import { driveLicence as driveLicence_en_us } from '../data/en-US/drive-licence.en-us';
import { driveLicence as driveLicence_hi_in } from '../data/hi-IN/drive-licence.hi-IN';
import { AlcoholicDrinks as alcoholicDrinks_en_us } from '../data/en-US/alcoholic-drinks.en-us';
import { AlcoholicDrinks as alcoholicDrinks_pt_br } from '../data/pt-BR/alcoholic-drinks.pt-br';
import { AlcoholicDrinks as alcoholicDrinks_es_co } from '../data/es-CO/alcoholic-drinks.es-CO';
import { supermarket as supermarket_pt_br } from '../data/pt-BR/supermarket.pt-br';
import { supermarket as supermarket_en_us } from '../data/en-US/supermarket.en-us';
import { supermarket as supermarket_hi_in } from '../data/hi-IN/supermarket.hi-IN';

import { uber } from '../data/pt-BR/uber.pt-br';
import { dentist } from '../data/pt-BR/dentist.pt-br';

export const accordions_pt_br: Accordion[] = [
  driveLicence_pt_br,
  supermarket_pt_br,
  alcoholicDrinks_pt_br,
  uber,
  dentist,
];
export const accordions_en_us: Accordion[] = [
  driveLicence_en_us,
  supermarket_en_us,
  alcoholicDrinks_en_us,
];
export const accordions_es_co: Accordion[] = [alcoholicDrinks_es_co];
export const accordions_hi_in: Accordion[] = [
  driveLicence_hi_in,
  supermarket_hi_in,
];
