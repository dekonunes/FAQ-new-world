import { Accordion } from '../../accordion/accordion.interface';

export const AlcoholicDrinks: Accordion = {
  title: 'Alcoholic Drinks',
  contents: [
    {
      title: 'Age Restriction',
      data: 'The legal age to purchase and consume alcohol in Australia is 18 years. It is illegal for anyone under this age to buy alcohol or to consume it in licensed premises. <br><br> Valid photo identification must be presented by customers who appear to be under 25 to verify their age.',
    },
    {
      title: 'Where to Buy Alcohol',
      data: `<li>Licensed Premises: Alcohol can be purchased at various licensed venues including pubs, clubs, bars, and restaurants.</li><br>
      <li>Retail Outlets: Bottleshops, supermarkets with a liquor license, and specialty liquor stores are the main retail outlets. Some states allow alcohol sales in supermarkets, while others do not.</li>`,
    },
    {
      title: 'Online Sales',
      data: 'Alcohol can also be purchased online, but the buyer must verify their age at the time of purchase.',
    },
    {
      title: 'Bottleshops',
      data: `Bottle shops are usually located near supermarkets, with the exception of Aldi, where you can purchase alcohol inside the store. However, you will need to choose a specific cashier that is authorized to handle alcoholic drink transactions. <br><br>
      <li>BWS: This is the Woolworths bottle shop.</li>
      <li>Liquorland: This is the Coles bottle shop.</li>`,
    },
    {
      title: 'Operating Hours',
      data: 'Retail liquor stores have specific hours when they can operate, which might differ on weekends and public holidays.',
    },
    {
      title: 'Last Call',
      data: 'Bars and pubs usually have a designated "last call" time, after which no more alcohol can be served or sold.',
    },
  ],
};
