import { WidthType, Paragraph, Table } from "docx";

import createTableRow from "./create-tablerow";

const createTable = (data, value) => {
  const { grid } = value;
  const { table } = grid;
  const childrens = [];
  const pages = Math.ceil(data.length / table);
  for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
    const pageData = data.slice(pageIndex * table, (pageIndex + 1) * table);
    childrens.push(
      new Table({
        width: {
          size: 11336,
          type: WidthType.DXA,
        },
        rows: createTableRow(pageData, value)
      }), 
      new Paragraph(" "),
    );
  }
  return childrens;
};

export default createTable;