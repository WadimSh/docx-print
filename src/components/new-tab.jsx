import React from 'react';
import { Document, Packer, Paragraph, Table, TableCell, TableRow } from "docx";
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

const createTable = (data) => {
  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      if (data[i + j]) {
        row.push(
          new TableCell({
            children: [new Paragraph(data[i + j].value)]
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

const generateWordDocument = () => {
  const pages = Math.ceil(data.length / 28);
  for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
    const pageData = data.slice(pageIndex * 28, (pageIndex + 1) * 28);
    const doc = new Document({
      sections: [{
        properties: {
          page: {
              margin: {
                top: 300,
                left: 300,
              },
          },
        },
        children: [
          new Table({
            rows: createTable(pageData)
          }), 
          new Paragraph(" ")],
      }]
    });
    
    Packer.toBlob(doc).then(blob => {
    saveAs(blob, "eut-blank.docx");
    console.log("Document created successfully");
    });
  }
};

return (
    <button onClick={generateWordDocument}>Generate Word Document</button>
  );
};

export default NewTab;