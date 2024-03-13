import React from 'react';
import { Document, PageNumber, NumberFormat, AlignmentType, Table, TableRow, TableCell, Packer, Paragraph, TextRun, Header, Footer, ImageRun } from 'docx';
import { saveAs } from 'file-saver';
import logo from './logo.png'

const MyComponent = () => {
  const generate = () => {

    //const image = fetch(
    //  "https://new.sharik.ru/media/cache/bc/e1/bce16e37b3bfc3a3c27bb965997b52d6.jpg"
    //).then(r => r.blob());

    const doc = new Document({
      sections: [{
        properties: {
          page: {
            pageNumbers: {
              start: 1,
              formatType: NumberFormat.DECIMAL,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [
                  new ImageRun({
                    data: logo,
                    transformation: {
                      width: 80,
                      height: 36,
                    },
                  }),
                  new TextRun("Page Number "),
                  new TextRun(PageNumber.CURRENT),
                  new TextRun(" to "),
                  new TextRun(PageNumber.TOTAL_PAGES),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun("Foo Bar corp. "),
                  new TextRun("Page Number: "),
                  new TextRun(PageNumber.CURRENT),
                  new TextRun(" to "),
                  new TextRun(PageNumber.TOTAL_PAGES),
                ],
              }),
            ],
          }),
        },
        children: [
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                          children: [
                              new ImageRun({
                                  data: logo,
                                  transformation: {
                                      width: 100,
                                      height: 100,
                                  },
                              }),
                          ],
                      }),
                  ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                          children: [
                              new ImageRun({
                                  data: logo,
                                  transformation: {
                                      width: 100,
                                      height: 100,
                                  },
                              }),
                          ],
                      }),
                  ],
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                          children: [
                              new ImageRun({
                                  data: logo,
                                  transformation: {
                                      width: 100,
                                      height: 100,
                                  },
                              }),
                          ],
                      }),
                  ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            children: [
              new ImageRun({
                data: logo,
                transformation: {
                  width: 100,
                  height: 100,
                },
              }),]}),
          new Table({
            rows: Array.from({ length: 10 }, () => new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph('Title'),
                ],
                }),
                new TableCell({
                  children: [new Paragraph('Title')],
                }),
                new TableCell({
                  children: [new Paragraph('Title')],
                }),
              ],
            })),
          }),
        ],
      }],
    });
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <button onClick={generate}>Generate Document</button>
  );
};

export default MyComponent;