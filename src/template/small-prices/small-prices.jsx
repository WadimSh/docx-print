import React from 'react';
import { Document, Packer, WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow } from "docx";
import { saveAs } from 'file-saver';

const SmallPrices = ({ data }) => {
  const createTableCell = (tab) => {
    return new TableCell({
        children: [
          new Table({
            width: {
              size: 2834,
              type: WidthType.DXA,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({
                            text: 'АО "Европа уно трейд"',
                            bold: true,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.END,
                        children: [
                          new TextRun({
                            text: '1101-0035',
                            size: 14,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({
                            text: "И 10\"/011 Пастель Light Green",
                            size: 28,
                            bold: true,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({
                            break: 1,
                            text: "1шт. - ",
                            size: 18,
                          }),
                          new TextRun({
                            break: 1,
                            text: "23.5 руб",
                            size: 18,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({
                            text: "Упак. 25шт. - ",
                            size: 26,
                            bold: true,
                          }),
                          new TextRun({
                            text: "235 руб",
                            size: 26,
                            bold: true,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'Производитель:',
                          }),
                          new TextRun({
                            text: '\tcompany',
                            bold: true,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ]
          })
        ],
      })
  }

  const createTableRow = (tab) => {
    const rows = [];
    for (let i = 0; i < tab.length; i += 4) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        if (tab[i + j]) {
          row.push(
          createTableCell(tab[i + j])
          );
        } else {
          row.push(new TableCell());
        }
      }
      rows.push(new TableRow({ 
        children: row 
      }));
    }
    return rows;
  };

  const createTable = (tab) => {
    const childrens = [];
    const pages = Math.ceil(tab.length / 28);
    for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
      const pageData = tab.slice(pageIndex * 28, (pageIndex + 1) * 28);
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

  const generateWordDocument = (tab) => {
    const doc = new Document({
      sections: [{
        properties: {
          page: {
            margin: {
              top: 300,
              left: 250,
              bottom: 300,
              right: 250,
            },
          },
        },
        children: createTable(tab)
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
      <button onClick={() => handleDoc()}>Generate Small Price</button>
    );
};

export default SmallPrices;