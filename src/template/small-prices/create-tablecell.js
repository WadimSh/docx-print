import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow, HeightRule } from "docx";
import createBlockPrice from "./create-blockprice";

const createTableCell = (data) => {
    
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
          size: 2830,
          type: WidthType.DXA,
        },
        rows: [
          new TableRow({
            height: { value: 280, rule: HeightRule.EXACT },
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
            height: { value: 226, rule: HeightRule.EXACT },
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
                    size: 0,
                    color: "FFFFFF",
                  },
                },
              }),
            ],
          }),
          new TableRow({
            height: { value: 1000, rule: HeightRule.EXACT },
            children: [
              new TableCell({
                children: [
                  new Paragraph(''),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: data.name,
                        size: 20,
                        bold: true,
                      }),
                    ],
                  }),
                ],
                borders: {
                  top: {
                    size: 0,
                    color: "FFFFFF",
                  },
                  bottom: {
                    size: 0,
                    color: "FFFFFF",
                  },
                },
              }),
            ],
            
          }),
          createBlockPrice(data),  
          new TableRow({
            height: { value: 280, rule: HeightRule.EXACT },
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