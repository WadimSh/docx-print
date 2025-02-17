import { AlignmentType, Paragraph, TextRun, TableCell, TableRow, Table, WidthType, HeightRule } from "docx";

const createBlockPrice = (data) => {
  const parts = data.cost.split(".");
  const whole = parts[0];
  const fraction = parts[1];
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 600, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Table({
              width: {
                size: 3500,
                type: WidthType.DXA,
              },
              rows: [
                new TableRow({
                  height: { value: 600, rule: HeightRule.EXACT },
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
                          spacing: { line: 185 },
                          children: [
                            new TextRun({
                              text: whole,
                              size: 74,
                              font: "Roboto Black",
                              bold: true,
                              characterSpacing: -40,
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
                        size: 100,
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
                              size: 40,
                              font: "Roboto Black",
                              characterSpacing: -20,
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
                              size: 22,
                              font: "Roboto",
                            }),
                          ],
                        }),
                      ]
                    }),
                  ]
                })
              ],
            }),
          ],
          borders: {
            top: { size: 0, color: "FFFFFF" }, 
            bottom: { size: 0, color: "FFFFFF" }, 
          },
        }),
      ],
    })
  } else {
    return new TableRow({
      height: { value: 600, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Table({
              width: {
                size: 3500,
                type: WidthType.DXA,
              },
              rows: [
                new TableRow({
                  height: { value: 150, rule: HeightRule.EXACT },
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
                          spacing: { line: 180 },
                          children: [
                            new TextRun({
                              text: "1шт - ",
                              size: 16,
                              font: "Roboto",
                            }),
                            new TextRun({
                              text: data.price,
                              size: 18,
                              font: "Roboto",
                              bold: true,
                            }),
                            new TextRun({
                              text: " ₽",
                              size: 16,
                              font: "Roboto",
                            }),
                          ],
                        }),
                      ]
                    }),
                  ],
                }),
                new TableRow({
                  height: { value: 450, rule: HeightRule.EXACT },
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
                            size: 3500,
                            type: WidthType.DXA,
                          },
                          rows: [
                            new TableRow({
                              height: { value: 450, rule: HeightRule.EXACT },
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
                                      spacing: { line: 190 },
                                      children: [
                                        new TextRun({
                                          text: data.units,
                                          size: 18,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: " ",
                                          size: 18,
                                        }),
                                        new TextRun({
                                          text: data.counts,
                                          size: 18,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: " - ",
                                          size: 18,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: whole,
                                          size: 56,
                                          bold: true,
                                          font: "Roboto Black",
                                          characterSpacing: -10,
                                        }),
                                      ],
                                    }),
                                  ], 
                                }),
                                new TableCell({
                                  borders: {
                                    left: { size: 0, color: "FFFFFF" }, 
                                    right: { size: 0, color: "FFFFFF" }, 
                                    top: { size: 0, color: "FFFFFF" }, 
                                    bottom: { size: 0, color: "FFFFFF" }, 
                                  },
                                  width: {
                                    size: 100,
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
                                          size: 32,
                                          bold: true,
                                          font: "Roboto",
                                          characterSpacing: -20,
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
                        })

                        

                      ]
                    }),
                  ],
                }),
              ]
            }),


            
            



          ],
          borders: {
            top: { size: 0, color: "FFFFFF" }, 
            bottom: { size: 0, color: "FFFFFF" }, 
          },
        }),
      ],
    })
  }
};

export default createBlockPrice;