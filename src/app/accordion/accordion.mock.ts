import { Accordion } from './accordion.interface';

import { driveLicence } from '../data/drive-licence';
import { uber } from '../data/uber';
// import { labour } from '../data/labour';
// import { visa } from '../data/visa';
// import { investiments } from '../data/investiments';
// import { transport } from '../data/transport';
// import { supermarket } from '../data/supermarket';
// import { habitation } from '../data/habitation';
// import { tax } from '../data/tax';
import { dentist } from '../data/dentist';

export const accordions: Accordion[] = [driveLicence, uber, dentist];
