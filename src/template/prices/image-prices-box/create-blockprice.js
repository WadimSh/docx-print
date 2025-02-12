import { AlignmentType, WidthType, Paragraph, TextRun, Table, TableCell, TableRow, HeightRule } from "docx";

const createBlockPrice = (data) => {
  const parts = data.cost.split(".");
  const whole = parts[0];
  const fraction = parts[1];
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 1250, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Table({
              width: {
                size: 11336 - 225 * 15,
                type: WidthType.DXA,
              },
              rows: [
                new TableRow({
                  height: { value: 1250, rule: HeightRule.EXACT },
                  children: [
                    new TableCell({
                      borders: {
                        left: { size: 0, color: "FFFFFF" }, 
                        right: { size: 0, color: "FFFFFF" }, 
                        top: { size: 0, color: "FFFFFF" }, 
                        bottom: { size: 0, color: "FFFFFF" }, 
                      },
                      children: [
                        new Paragraph(''),
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          indent: { right: 10 },
                          spacing: { line: 190 },
                          children: [
                            new TextRun({
                              text: whole,
                              size: 120,
                              font: "Roboto Black",
                              bold: true,
                              characterSpacing: -60,
                            }),
                          ],
                        }),
                      ]
                    }),
                    new TableCell({
                      borders: {
                        left: { size: 0, color: "FFFFFF" }, 
                        right: { size: 0, color: "FFFFFF" }, 
                        top: { size: 0, color: "FFFFFF" }, 
                        bottom: { size: 0, color: "FFFFFF" }, 
                      },
                      width: {
                        size: 225,
                        type: WidthType.DXA,
                      },
                      children: [
                        new Paragraph(''),
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          indent: { right: 100 },
                          spacing: { line: 190 },
                          children: [
                            new TextRun({
                              text: fraction,
                              size: 72,
                              font: "Roboto Black",
                              characterSpacing: -40,
                            }),
                          ],
                        }),
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          indent: { right: 100 },
                          spacing: { line: 190 },
                          children: [
                            new TextRun({
                              text: "РУБ",
                              size: 36,
                              font: "Roboto",
                            }),
                          ],
                        }),
                      ]
                    }),
                  ]
                })
              ]
            })
          ],
          borders: {
            left: { size: 0, color: "FFFFFF" }, 
            right: { size: 0, color: "FFFFFF" }, 
            top: { size: 0, color: "FFFFFF" }, 
            bottom: { size: 0, color: "FFFFFF" }, 
          },
        }),
      ],
    })
  } else {
    return new TableRow({
      height: { value: 1250, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Table({
              width: {
                size: 11336 - 225 * 15,
                type: WidthType.DXA,
              },
              rows: [
                new TableRow({
                  height: { value: 250, rule: HeightRule.EXACT },
                  children: [
                    new TableCell({
                      borders: {
                        left: { size: 0, color: "FFFFFF" }, 
                        right: { size: 0, color: "FFFFFF" }, 
                        top: { size: 0, color: "FFFFFF" }, 
                        bottom: { size: 0, color: "FFFFFF" }, 
                      },
                      children: [
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          indent: { right: 100 },
                          children: [
                            new TextRun({
                              text: "1шт - ",
                              size: 24,
                              font: "Roboto",
                            }),
                            new TextRun({
                              text: data.price,
                              size: 24,
                              font: "Roboto",
                              bold: true,
                            }),
                            new TextRun({
                              text: " ₽",
                              size: 20,
                              font: "Roboto",
                            }),
                          ],
                        }),
                      ]
                    })
                  ]
                }),
                new TableRow({
                  height: { value: 1000, rule: HeightRule.EXACT },
                  children: [
                    new TableCell({
                      borders: {
                        left: { size: 0, color: "FFFFFF" }, 
                        right: { size: 0, color: "FFFFFF" }, 
                        top: { size: 0, color: "FFFFFF" }, 
                        bottom: { size: 0, color: "FFFFFF" }, 
                      },
                      children: [
                        new Table({
                          width: {
                            size: 11336 - 225 * 15,
                            type: WidthType.DXA,
                          },
                          rows: [
                            new TableRow({
                              height: { value: 1000, rule: HeightRule.EXACT },
                              children: [
                                new TableCell({
                                  borders: {
                                    left: { size: 0, color: "FFFFFF" }, 
                                    right: { size: 0, color: "FFFFFF" }, 
                                    top: { size: 0, color: "FFFFFF" }, 
                                    bottom: { size: 0, color: "FFFFFF" }, 
                                  },
                                  children: [
                                    new Paragraph({
                                      alignment: AlignmentType.RIGHT,
                                      indent: { right: 10 },
                                      spacing: { line: 190 },
                                      children: [
                                        new TextRun({
                                          text: data.units,
                                          size: 40,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: " ",
                                          size: 22,
                                        }),
                                        new TextRun({
                                          text: data.counts,
                                          size: 40,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: " - ",
                                          size: 40,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: whole,
                                          size: 120,
                                          font: "Roboto Black",
                                          bold: true,
                                          characterSpacing: -60,
                                        }),
                                      ],
                                    }),
                                  ]
                                }),
                                new TableCell({
                                  borders: {
                                    left: { size: 0, color: "FFFFFF" }, 
                                    right: { size: 0, color: "FFFFFF" }, 
                                    top: { size: 0, color: "FFFFFF" }, 
                                    bottom: { size: 0, color: "FFFFFF" }, 
                                  },
                                  width: {
                                    size: 225,
                                    type: WidthType.DXA,
                                  },
                                  children: [
                                    new Paragraph({
                                      alignment: AlignmentType.RIGHT,
                                      indent: { right: 100 },
                                      spacing: { line: 190 },
                                      children: [
                                        new TextRun({
                                          text: fraction,
                                          size: 72,
                                          font: "Roboto Black",
                                          characterSpacing: -40,
                                        }),
                                      ],
                                    }),
                                    new Paragraph({
                                      alignment: AlignmentType.RIGHT,
                                      indent: { right: 100 },
                                      spacing: { line: 190 },
                                      children: [
                                        new TextRun({
                                          text: "РУБ",
                                          size: 36,
                                          font: "Roboto",
                                        }),
                                      ],
                                    }),
                                  ]
                                }),
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                  ]
                }),
              ]
            })
          ],
          borders: {
            left: { size: 0, color: "FFFFFF" }, 
            right: { size: 0, color: "FFFFFF" }, 
            top: { size: 0, color: "FFFFFF" }, 
            bottom: { size: 0, color: "FFFFFF" }, 
          },
        }),
      ],
    })
  }
};

export default createBlockPrice;