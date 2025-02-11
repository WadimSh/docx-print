import { TableRow, HeightRule } from "docx";

import createSmallPrices from "./small-prices/create-smallprices";
import createSmallBarcodePrices from "./small-barcode-prices/create-smallbarcodeprices";
import createBarcodePrices from "./barcode-prices/create-barcodeprices";
import createImagePrices from "./image-prices/create-imageprices";
import createImageBarcodePrices from "./image-barcode-prices/create-imagebarcodeprices";
import createImagePricesBox from "./image-prices-box/create-imagepricesbox";

import createEmptyCell from "./create-emptycell";

import { 
  TYPE_SMALL_PRICES,
  TYPE_SMALL_BARCODE_PRICES,
  TYPE_BARCODE_PRICES,
  TYPE_IMAGE_PRICES,
  TYPE_IMAGE_BARCODE_PRICES,
  TYPE_PRICES_BOX
} from "../../contexts/constant";

const createTableRow = (data, inf) => {
  const { grid, value } = inf;
  const { columns } = grid;
  const rows = [];
  for (let i = 0; i < data.length; i += columns) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      if (data[i + j]) {
        switch (value) {
          case TYPE_SMALL_PRICES:
            row.push(createSmallPrices(data[i + j]));
            break;
          case TYPE_SMALL_BARCODE_PRICES:
            row.push(createSmallBarcodePrices(data[i + j]));
            break;
          case TYPE_BARCODE_PRICES:
            row.push(createBarcodePrices(data[i + j]));
            break;
          case TYPE_IMAGE_PRICES:
            row.push(createImagePrices(data[i + j]));
            break;
          case TYPE_IMAGE_BARCODE_PRICES:
            row.push(createImageBarcodePrices(data[i + j]));
            break;
          case TYPE_PRICES_BOX:
            row.push(createImagePricesBox(data[i + j]));
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
      height: { value: value === TYPE_PRICES_BOX ? 3445 : 2300, rule: HeightRule.EXACT },
      children: row 
    }));
  }
  return rows;
};

export default createTableRow;