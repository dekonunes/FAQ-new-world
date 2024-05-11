import { Accordion } from '../../accordion/accordion.interface';

export const AlcoholicDrinks: Accordion = {
  title: 'Bebidas Alcohólicas',
  contents: [
    {
      title: 'Restricción de Edad',
      data: 'La edad legal para comprar y consumir alcohol en Australia es de 18 años. Es ilegal para cualquier persona menor de esta edad comprar alcohol o consumirlo en establecimientos autorizados. <br><br> Los clientes que parezcan tener menos de 25 años deben presentar una identificación válida con foto para verificar su edad.',
    },
    {
      title: 'Dónde Comprar Alcohol',
      data: `<li>Establecimientos Licenciados: El alcohol se puede comprar en varios lugares autorizados, incluyendo pubs, clubes, bares y restaurantes.</li><br>
      <li>Puntos de Venta al Detalle: Las tiendas de bebidas, supermercados con licencia de licores y tiendas especializadas en licores son los principales puntos de venta. Algunos estados permiten la venta de alcohol en supermercados, mientras que otros no.</li>`,
    },
    {
      title: 'Ventas en Línea',
      data: 'El alcohol también puede comprarse en línea, pero el comprador debe verificar su edad en el momento de la compra.',
    },
    {
      title: 'Tiendas de Bebidas',
      data: `Las tiendas de bebidas suelen estar ubicadas cerca de supermercados, con la excepción de Aldi, donde puedes comprar alcohol dentro de la tienda. Sin embargo, necesitarás elegir un cajero específico que esté autorizado para manejar transacciones de bebidas alcohólicas. <br><br>
      <li>BWS: Esta es la tienda de bebidas de Woolworths.</li>
      <li>Liquorland: Esta es la tienda de bebidas de Coles.</li>`,
    },
    {
      title: 'Horarios de Operación',
      data: 'Las tiendas de licores al detalle tienen horarios específicos en los que pueden operar, que pueden variar en fines de semana y días festivos.',
    },
    {
      title: 'Última Llamada',
      data: 'Los bares y pubs generalmente tienen un tiempo designado de "última llamada", después del cual no se puede servir ni vender más alcohol.',
    },
  ],
};
