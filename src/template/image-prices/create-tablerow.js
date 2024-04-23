import { TableRow } from "docx";

import createTableCell from "./create-tablecell";
//import createEmptyCell from "./create-emptycell";

const createTableRow = (data) => {
  const rows = [];
  for (let i = 0; i < data.length; i += 2) {
    const row = [];
    for (let j = 0; j < 2; j++) {
      if (data[i + j]) {
        row.push(
          createTableCell(data[i + j])
        );
      } else {
        row.push(
          " "
          //createEmptyCell()
        );
      }
    }
    rows.push(new TableRow({ 
      children: row 
    }));
  }
  return rows;
};

export default createTableRow;