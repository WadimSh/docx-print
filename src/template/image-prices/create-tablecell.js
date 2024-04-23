import { WidthType, Paragraph, Table, TableCell, TableRow, TextRun, ImageRun, AlignmentType } from "docx";

const createTableCell = (data) => {
  const blob = fetch(
    //"https://raw.githubusercontent.com/dolanmiu/docx/master/demo/images/cat.jpg"
    `https://fr.sharik.ru${data.image}`
  ).then(r => r.blob());
    
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
                    children: [
                      new ImageRun({
                        data: blob,
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
      })
    ],
  });
};

export default createTableCell;