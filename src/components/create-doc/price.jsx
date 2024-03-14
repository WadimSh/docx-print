import React from 'react';
import { Document, WidthType, BorderStyle, PageNumber, NumberFormat, AlignmentType, Table, TableRow, TableCell, Packer, Paragraph, TextRun, Header, Footer, ImageRun } from 'docx';
import { saveAs } from 'file-saver';


const TemplatePrice = () => {

  const generate = () => {
    const docx = new Document({
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
            width: {
              size: 11336,
              type: WidthType.DXA,
            },
            rows: Array.from({ length: 7 }, () =>
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 2834,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2834,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2834,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2834,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            )
          }),
        ]
      }],
    });

    Packer.toBlob(docx).then(blob => {
      saveAs(blob, "eut-blank.docx");
      console.log("Document created successfully");
    });
  };

  return (
    <>
      <button onClick={generate}>Создать ценники</button>
    </>
  );
};

export default TemplatePrice;
