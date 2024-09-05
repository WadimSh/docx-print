import { WidthType, Paragraph, Table } from "docx";

import createTableRow from "./create-tablerow";

const createTable = (data) => {
  const childrens = [];
  const pages = Math.ceil(data.length / 16);
  for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
    const pageData = data.slice(pageIndex * 1, (pageIndex + 1) * 16);
    childrens.push(
      new Table({
        width: {
          size: 11336,
          type: WidthType.DXA,
        },
        rows: createTableRow(pageData)
      }), 
      new Paragraph(" "),
    );
  }
  return childrens;
};

export default createTable;