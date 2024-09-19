import { TableRow, HeightRule } from "docx";

import createCellForFour from "./four-products-flyers/create-cell-for-four";
import createCellForNine from "./nine-products-flyers/create-cell-for-nine";
import createCellForSixteen from "./sixteen-products-flyers/create-cell-for-sixteen";
import createEmptyCell from "./create-emptycell";

import { 
  TYPE_ONE_PRODUCTS_FLYERS,
  TYPE_FOUR_PRODUCTS_FLYERS,
  TYPE_NINE_PRODUCTS_FLYERS,
  TYPE_SIXTEEN_PRODUCTS_FLYERS
} from "../../contexts/constant";

const value = {
  [TYPE_ONE_PRODUCTS_FLYERS]: 3340,
  [TYPE_FOUR_PRODUCTS_FLYERS]: 6680,
  [TYPE_NINE_PRODUCTS_FLYERS]: 4450, 
  [TYPE_SIXTEEN_PRODUCTS_FLYERS]: 3340,
};

const getValue = (key) => {
  return value[key];
};

const createTableRow = (data, obj) => {
  const { grid, value } = obj;
  const { columns } = grid;
  const rows = [];
  for (let i = 0; i < data.length; i += columns) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      if (data[i + j]) {
        switch (value) {
          case TYPE_ONE_PRODUCTS_FLYERS:
            row.push(createCellForSixteen(data[i + j]));
            break;
          case TYPE_FOUR_PRODUCTS_FLYERS:
            row.push(createCellForFour(data[i + j]));
            break;
          case TYPE_NINE_PRODUCTS_FLYERS:
            row.push(createCellForNine(data[i + j]));
            break;
          case TYPE_SIXTEEN_PRODUCTS_FLYERS:
            row.push(createCellForSixteen(data[i + j]));
            break;
          default:
            console.error(`Unknown name: ${value}`);
        }
      } else {
        row.push(
          createEmptyCell(value)
        );
      }
    }
    rows.push(new TableRow({ 
      height: { value: getValue(value), rule: HeightRule.EXACT },
      children: row 
    }));
  }
  return rows;
};

export default createTableRow;