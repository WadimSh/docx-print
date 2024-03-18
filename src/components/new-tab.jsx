import React from 'react';
import { Document, Packer, WidthType, Paragraph, Table, TableCell, TableRow } from "docx";
import { saveAs } from 'file-saver';

const data = [
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
  { value: "A1" },
  { value: "A2" },
  { value: "A3" },
  { value: "A4" },
];

const NewTab = () => {

const createTableRow = (date) => {
  const rows = [];
  for (let i = 0; i < date.length; i += 4) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      if (date[i + j]) {
        row.push(
          new TableCell({
            width: {
              size: 2834,
              type: WidthType.DXA,
            },
            children: [new Paragraph(date[i + j].value)]
          })
        );
      } else {
        row.push(new TableCell());
      }
    }
    rows.push(new TableRow({ children: row }));
  }
  return rows;
};

const createTable = (daty) => {
  const childrens = [];
  const pages = Math.ceil(daty.length / 28);
  for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
    const pageData = daty.slice(pageIndex * 28, (pageIndex + 1) * 28);
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

const generateWordDocument = (dat) => {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 300,
            left: 300,
            bottom: 300,
            right: 300,
          },
        },
      },
      children: createTable(dat)
    }]
  });
  
  Packer.toBlob(doc).then(blob => {
    saveAs(blob, "eut-blank.docx");
    console.log("Document created successfully");
  });
};

const handleDoc = () => {
  generateWordDocument(data);
}

return (
    <button onClick={() => handleDoc()}>Generate Word Document</button>
  );
};

export default NewTab;