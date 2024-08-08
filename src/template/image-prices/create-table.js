import { WidthType, Paragraph, Table } from "docx";

import createTableRow from "./create-tablerow";

const createTable = (data) => {
  const childrens = [];
  const pages = Math.ceil(data.length / 14);
  for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
    const pageData = data.slice(pageIndex * 14, (pageIndex + 1) * 14);
    childrens.push(
      new Table({
        width: {
          size: 15838,
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