import { WidthType, Paragraph, Table, AlignmentType, TextRun } from "docx";

import createTableRow from "./create-tablerow";

const createTable = (data) => {
  const childrens = [];
  //childrens.push(
  //  new Paragraph({
  //    alignment: AlignmentType.CENTER,
  //    children: [
  //      new TextRun({
  //        text: 'Это заголовок листовки',
  //        size: 48,
  //        font: "Roboto Black",
  //        bold: true,
  //      }),
  //    ],
  //  }),
  //  new Paragraph({
  //    alignment: AlignmentType.CENTER,
  //    children: [
  //      new TextRun({
  //        text: 'Это описание под заголовком',
  //        size: 28,
  //        font: "Roboto",
  //      }),
  //    ],
  //  }),
  //  new Paragraph(''),
  //);
  const pages = Math.ceil(data.length / 16);
  for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
    const pageData = data.slice(pageIndex * 16, (pageIndex + 1) * 16);
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