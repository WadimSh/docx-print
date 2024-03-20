import { WidthType, Paragraph, Table, TableCell, TableRow } from "docx";

const NoneCell = () => {
    
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
                  new Paragraph('')
                ]
              }),
            ],
          }),
        ],
      })
    ],
  });
};

export default NoneCell;