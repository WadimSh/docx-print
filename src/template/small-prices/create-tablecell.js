import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow } from "docx";

import createBlockPrice from "./create-blockprice";

const createTableCell = (data) => {
  const indent = data.name.length === 22 ? 150 : (data.name.length === 40 ? 270 : 0);
  const spacing = data.name.length < 21 ? 500 : (data.name.length === 40 ? 40 : (data.name.length > 32 ? 300 : 200));
  const size = data.name.length > 32 ? 22 : 26;
  
  return new TableCell({
    borders: {
      left: {
        size: 1,
        color: "FFFFFF",
      },
      right: {
        size: 1,
        color: "FFFFFF",
      },
      top: {
        size: 1,
        color: "FFFFFF",
      },
      bottom: {
        size: 1,
        color: "FFFFFF",
      },
    },
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
                        text: data.company,
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
                    indent: { right: 50 },
                    children: [
                      new TextRun({
                        text: data.code,
                        size: 20,
                      }),
                    ],
                  }),
                ],
                borders: {
                  bottom: {
                    size: 1,
                    color: "FFFFFF",
                  },
                },
              }),
            ],
          }),
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph(''),
                  new Paragraph({
                    indent: { left: indent, right: indent },
                    spacing: { after: spacing },
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: data.name,
                        size: size,
                        bold: true,
                      }),
                    ],
                  }),
                ],
                borders: {
                  top: {
                    size: 1,
                    color: "FFFFFF",
                  },
                  bottom: {
                    size: 1,
                    color: "FFFFFF",
                  },
                },
              }),
            ],
          }),
          createBlockPrice(data),  
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    indent: { left: 20 },
                    children: [
                      new TextRun({
                        text: data.origin.length > 10 ? 'Произв.:' : 'Производитель:',
                      }),
                      new TextRun({
                        text: " ",
                      }),
                      new TextRun({
                        text: data.origin,
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
};

export default createTableCell;