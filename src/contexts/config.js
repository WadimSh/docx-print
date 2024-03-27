import small_prices_img from '../assets/images/small-prices.png';

export const config = [
  {
    id: 1,
    name: 'Ценники для магазина',
    value: 'prices',
    options: [
      {
        name: 'Маленькие ценники 4х5см',
        value: 'small-prices',
        description: '',
        imege_preview: small_prices_img,
        properties: {
          company_name: true,
          extra_charge: true,
        }
      },
      {
        name: 'Ценники со штрих-кодом',
        value: 'encode-prices',
        description: '',
        imege_preview: '',
        properties: {
          fair_rounding: true,
        }
      },
    ]
  },
];