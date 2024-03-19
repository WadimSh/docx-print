import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow } from "docx";

const createSmallPrice = (data) => {
    if (data.value == '2' || data.value == '4') {
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
                            text: '1101-0035',
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
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({
                            text: "И 10\"/011 Пастель Light Green",
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
              new TableRow({
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
                            text: "235 руб",
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
              }),
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
                            text: '\tcompany',
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
   } else {
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
                            text: '1101-0035',
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
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({
                            text: "И 10\"/011 Пастель Light Green",
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
              new TableRow({
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
                            text: "23.5 руб",
                            size: 18,
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
              new TableRow({
                children: [
                  new TableCell({
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({
                            text: "Упак. 25шт. - ",
                            size: 27,
                            bold: true,
                          }),
                          new TextRun({
                            text: "235 руб",
                            size: 27,
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
              }),
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
                            text: '\tcompany',
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
  } };

export default createSmallPrice;