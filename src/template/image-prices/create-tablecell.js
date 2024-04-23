import { WidthType, Paragraph, Table, TableCell, TableRow, TextRun, AlignmentType } from "docx";

const createTableCell = (data) => {
    
  return new TableCell({
    borders: {
      left: {
        size: 1,
        color: "000000",
      },
      right: {
        size: 1,
        color: "000000",
      },
      top: {
        size: 1,
        color: "000000",
      },
      bottom: {
        size: 1,
        color: "000000",
      },
    },
    children: [
      new Table({
        width: {
          size: 7919,
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
        ],
      })
    ],
  });
};

export default createTableCell;