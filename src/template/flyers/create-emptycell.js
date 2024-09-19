import { WidthType, Paragraph, Table, TableCell, TableRow } from "docx";

import { 
  TYPE_ONE_PRODUCTS_FLYERS,
  TYPE_FOUR_PRODUCTS_FLYERS,
  TYPE_NINE_PRODUCTS_FLYERS,
  TYPE_SIXTEEN_PRODUCTS_FLYERS
} from "../../contexts/constant";

const value = {
  [TYPE_ONE_PRODUCTS_FLYERS]: 2830,
  [TYPE_FOUR_PRODUCTS_FLYERS]: 2830,
  [TYPE_NINE_PRODUCTS_FLYERS]: 3770, 
  [TYPE_SIXTEEN_PRODUCTS_FLYERS]: 2830,
};

const getValue = (key) => {
  return value[key];
};

const createEmptyCell = (type) => {
    
  return new TableCell({
    borders: {
      left: {
        size: 1,
        color: "FFFFFF",
      },
      right: {
        size: 1,
        color: "FFFFFF",
      },
      top: {
        size: 1,
        color: "FFFFFF",
      },
      bottom: {
        size: 1,
        color: "FFFFFF",
      },
    },
    children: [
      new Table({
        width: {
          size: getValue(type),
          type: WidthType.DXA,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: {
                  left: {
                    size: 1,
                    color: "FFFFFF",
                  },
                  right: {
                    size: 1,
                    color: "FFFFFF",
                  },
                  top: {
                    size: 1,
                    color: "FFFFFF",
                  },
                  bottom: {
                    size: 1,
                    color: "FFFFFF",
                  },
                },
                children: [
                  new Paragraph('')
                ]
              }),
            ],
          }),
        ],
      })
    ],
  });
};

export default createEmptyCell;