import { Accordion } from '../../accordion/accordion.interface';

export const supermarket: Accordion = {
  title: 'Supermercados',
  contents: [
    {
      title: 'Data de vencimento',
      data: 'Na parte de perecíveis, as prateleiras são quase sempre organizadas de forma que o que vai vencer primeiro fica na frente. Entao legumes e carnes, busque os produtos de trás',
    },
    {
      title: 'Woolworths (wollies)',
      data: 'Bom para pegar as comidas prontas pra comer. Grande variedade e qualidade e a dica é aproveitar as etiquetas laranjas com o reduced price porque eles baixam os preços para evitar que sejam desperdiçadas. Quanto mais perto do vencimento, maior o desconto.<br><br> À partir das 4 da tarde, a parte de pães, folhados e doces não embalados feitos no dia ficam pela metade do preço.',
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
      data: 'Mais barato que o wollies, o coles costuma ter os melhores home brands (ou produtos com a marca Coles). Também tem descontos com etiquetas laranjas<br><br> A nota fiscal do Coles geralmente tem promoções e descontos para a Liquorland, onde você pode conseguir comprar bebida mais barato',
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
      data: 'É o mercado com marcas mais alternativas e no geral o mais barato dos 3',
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
      title: 'Metade do preço',
      data: 'Essencial para encontrar promoções no Coles, Wollies Liquorland and BWS, o catálogo é atualizado toda quarta-feira pela manhã',
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
      title: 'Comparador de preço',
      data: 'A diferenca de preço entre os supermercados pode ser grande, utilizar um app para comprar antes de sair de casa pode te economizar bons dolares',
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
