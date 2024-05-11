import { Accordion } from '../../accordion/accordion.interface';

export const supermarket: Accordion = {
  title: 'Supermarkets',
  contents: [
    {
      title: 'Expiration Date',
      data: 'In the perishables section, the shelves are almost always organized so that the items expiring first are at the front. So for vegetables and meats, look for the products at the back',
    },
    {
      title: 'Woolworths (Wollies)',
      data: 'Good for picking up ready-to-eat food. Wide variety and quality, and the tip is to take advantage of the orange reduced price tags because they lower prices to prevent waste. The closer to the expiration, the greater the discount.<br><br> Starting from 4 pm, the section of breads, pastries, and unpackaged sweets made on the day are half price.',
      links: [
        {
          title: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.woolworths',
        },
        {
          title: 'iOS',
          url: 'https://apps.apple.com/au/app/woolworths/id975089690',
        },
      ],
    },
    {
      title: 'Coles',
      data: 'Cheaper than Wollies, Coles usually has the best home brands (or Coles-branded products). They also have discounts with orange tags<br><br> The Coles receipt often has promotions and discounts for Liquorland, where you can get cheaper drinks',
      links: [
        {
          title: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.coles.android.shopmate',
        },
        {
          title: 'iOS',
          url: 'https://apps.apple.com/au/app/coles/id529118855',
        },
      ],
    },
    {
      title: 'Aldi',
      data: 'It is the market with the most alternative brands and generally the cheapest of the three',
      links: [
        {
          title: 'Android',
          url: 'https://play.google.com/store/apps/details?id=de.apptiv.business.android.aldi_au',
        },
        {
          title: 'iOS',
          url: 'https://apps.apple.com/au/app/aldi-australia/id429158202',
        },
      ],
    },
    {
      title: 'Half Price',
      data: 'Essential for finding promotions at Coles, Wollies, Liquorland and BWS, the catalogue is updated every Wednesday morning',
      links: [
        {
          title: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.codylab.halfprice',
        },
        {
          title: 'iOS',
          url: 'https://apps.apple.com/au/app/half-price-grocery-deals/id1453645622',
        },
      ],
    },
    {
      title: 'Price Comparator',
      data: 'The price difference between supermarkets can be large, using an app to compare before leaving home can save you good dollars',
      links: [
        {
          title: 'Android',
          url: 'https://play.google.com/store/apps/details?id=com.arimac.frugl',
        },
        {
          title: 'iOS',
          url: 'https://apps.apple.com/au/app/frugl-grocery-price-comparison/id1496295329',
        },
      ],
    },
  ],
};
