import { WidthType, Paragraph, Table, TableCell, TableRow } from "docx";

import { 
  TYPE_SMALL_PRICES,
  TYPE_SMALL_BARCODE_PRICES,
  TYPE_BARCODE_PRICES,
  TYPE_IMAGE_PRICES,
  TYPE_IMAGE_BARCODE_PRICES 
} from "../../contexts/constant";

const values = {
  [TYPE_SMALL_PRICES]: 2830,
  [TYPE_SMALL_BARCODE_PRICES]: 2830,
  [TYPE_BARCODE_PRICES]: 3500,
  [TYPE_IMAGE_PRICES]: 5668,
  [TYPE_IMAGE_BARCODE_PRICES]: 5668,
};

const getValue = (key) => {
  return values[key];
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