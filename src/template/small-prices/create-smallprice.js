import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow } from "docx";

const createSmallPrice = (data) => {
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
                    size: 31,
                  }),
                  new TextRun({
                    text: val.price2,
                    size: 32,
                    bold: true,
                  }),
                  new TextRun({
                    text: " ₽",
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
                    break: 1,
                    text: "1шт. - ",
                    size: 18,
                  }),
                  new TextRun({
                    text: val.price2,
                    size: 18,
                  }),
                  new TextRun({
                    text: " ₽",
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
                    text: ". ",
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
                    text: " ₽",
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
                margin: {
                  left: 50,
                  right: 50,
                },
                children: [
                  new Paragraph(''),
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({
                        text: data.name,
                        size: 26,
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
                    children: [
                      new TextRun({
                        text: 'Производитель:',
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