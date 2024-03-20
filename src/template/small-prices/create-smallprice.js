import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow } from "docx";

const createSmallPrice = (data) => {
  const indent = data.name.length === 22 ? 150 : 0;
  const spacing = data.name.length > 38 ? 240 : data.name.length < 20 ? 500 : 200;
  const size = data.name.length > 38 ? 23 : 26;

  const changePrice = (val) => {
    if (val.multiplicity === 1) {
      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    break: 1,
                    size: 13,
                  }),
                  new TextRun({
                    text: val.price2,
                    size: 32,
                    bold: true,
                  }),
                  new TextRun({
                    text: "₽",
                    size: 32,
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
            },
          }),
        ],
      })
    } else {
      return new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: "1шт - ",
                    size: 18,
                  }),
                  new TextRun({
                    text: val.price2,
                    size: 18,
                  }),
                  new TextRun({
                    text: "₽",
                    size: 18,
                  }),
                  new TextRun({
                    break: 1,
                  }),
                  new TextRun({
                    text: val.units1,
                    size: 27,
                    bold: true,
                  }),
                  new TextRun({
                    text: "  ",
                    size: 27,
                  }),
                  new TextRun({
                    text: val.units2,
                    size: 27,
                    bold: true,
                  }),
                  new TextRun({
                    text: " - ",
                    size: 27,
                  }),
                  new TextRun({
                    text: val.price1,
                    size: 27,
                    bold: true,
                  }),
                  new TextRun({
                    text: "₽",
                    size: 27,
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
      })
    }
  };
  
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
          changePrice(data),  
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    indent: { left: 20 },
                    children: [
                      new TextRun({
                        text: data.value.length > 10 ? 'Произв.:' : 'Производитель:',
                      }),
                      new TextRun({
                        text: " ",
                      }),
                      new TextRun({
                        text: data.value,
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

export default createSmallPrice;