import { WidthType, HeightRule, AlignmentType, Paragraph, Table, TableCell, TableRow, TextRun } from "docx";
import createBlockPrice from "./create-blockprice";
import toEAN13 from "../../../utils/create-encode/ean-13";

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
                        size: 20,
                        font: "Roboto",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            height: { value: 950, rule: HeightRule.EXACT },
            children: [
              new TableCell({
                borders: {
                  top: { size: 0, color: "FFFFFF" }, 
                  bottom: { size: 0, color: "FFFFFF" }, 
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: `${data.code} `,
                        size: 20,
                        font: "Roboto",
                      }),
                      new TextRun({
                        text: data.name,
                        size: 20,
                        font: "Roboto",
                        bold: true,
                      }),
                      new TextRun({
                        break: 1,
                      }),
                      new TextRun({
                        text: `Произв.:  ${data.origin}`,
                        size: 18,
                        font: "Roboto",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          createBlockPrice(data),  
          new TableRow({
            height: { value: 180 * 2, rule: HeightRule.EXACT },
            children: [
              new TableCell({
                borders: {
                  top: { size: 0, color: "FFFFFF" }, 
                  bottom: { size: 0, color: "FFFFFF" },
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    indent: { left: 400 },
                    children: [
                      new TextRun({
                        text: toEAN13(data.barcode),
                        size: 144,
                        font: "Libre Barcode EAN13 Text",
                      }) 
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            height: { value: 180, rule: HeightRule.EXACT },
            children: [
              new TableCell({
                borders: {
                  top: { size: 0, color: "FFFFFF" }, 
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: data.barcode,
                        size: 16,
                        font: "Roboto",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
};

export default createTableCell;