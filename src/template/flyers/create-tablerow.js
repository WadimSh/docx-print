import { TableRow, HeightRule } from "docx";

import createTableCell from "./create-tablecell";
import createEmptyCell from "./create-emptycell";

const createTableRow = (data, obj) => {
  const { grid, value } = obj;
  const { columns } = grid;
  const rows = [];
  for (let i = 0; i < data.length; i += columns) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      if (data[i + j]) {
        row.push(
          createTableCell(data[i + j])
        );
      } else {
        row.push(
          createEmptyCell()
        );
      }
    }
    rows.push(new TableRow({ 
      //height: { value: 3200, rule: HeightRule.EXACT },
      children: row 
    }));
  }
  return rows;
};

export default createTableRow;