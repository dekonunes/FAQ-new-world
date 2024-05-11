import { Accordion } from '../../accordion/accordion.interface';

export const AlcoholicDrinks: Accordion = {
  title: 'Bebidas Alcoólicas',
  contents: [
    {
      title: 'Restrição de Idade',
      data: 'A idade legal para comprar e consumir álcool na Austrália é de 18 anos. É ilegal para qualquer pessoa abaixo desta idade comprar álcool ou consumi-lo em estabelecimentos licenciados. <br><br> Uma identificação com foto válida deve ser apresentada por clientes que aparentem ter menos de 25 anos para verificar sua idade.',
    },
    {
      title: 'Onde Comprar Álcool',
      data: `<li>Estabelecimentos Licenciados: O álcool pode ser comprado em diversos locais licenciados, incluindo pubs, clubes, bares e restaurantes.</li><br>
      <li>Pontos de Venda: Lojas de bebidas, supermercados com licença para vender bebidas alcoólicas e lojas especializadas são os principais pontos de venda. Alguns estados permitem a venda de álcool em supermercados, enquanto outros não.</li>`,
    },
    {
      title: 'Vendas Online',
      data: 'O álcool também pode ser comprado online, mas o comprador deve verificar sua idade no momento da compra.',
    },
    {
      title: 'Lojas de Bebidas',
      data: `As lojas de bebidas geralmente estão localizadas próximas a supermercados, com exceção da Aldi, onde você pode comprar álcool dentro da loja. No entanto, você precisará escolher um caixa específico que está autorizado a lidar com transações de bebidas alcoólicas. <br><br>
      <li>BWS: Esta é a loja de bebidas da Woolworths.</li>
      <li>Liquorland: Esta é a loja de bebidas da Coles.</li>`,
    },
    {
      title: 'Horário de Funcionamento',
      data: 'As lojas de bebidas têm horários específicos de funcionamento, que podem variar nos finais de semana e feriados.',
    },
    {
      title: 'Última Chamada',
      data: 'Bares e pubs geralmente têm um horário designado de "última chamada", após o qual nenhuma bebida alcoólica pode mais ser servida ou vendida.',
    },
  ],
};
