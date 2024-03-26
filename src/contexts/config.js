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
        imege_preview: '',
        properties: {
          company_name: true,
          extra_charge: true,
          fair_rounding: true,
        }
      },
      {
        name: 'Ценники со штрих-кодом',
        value: 'encode-prices',
        description: '',
        imege_preview: '',
        properties: {
          company_name: true,
          fair_rounding: true,
        }
      },
    ]
  },
];