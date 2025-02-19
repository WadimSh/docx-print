import { AlignmentType, WidthType, Paragraph, TextRun, TableCell, TableRow, Table, HeightRule } from "docx";

const createBlockPrice = (data) => {
  const parts = data.cost.split(".");
  const whole = parts[0];
  const fraction = parts[1];
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 950, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Table({
              width: {
                size: 5668 - 150 * 15,
                type: WidthType.DXA,
              },
              rows: [
                new TableRow({
                  height: { value: 950, rule: HeightRule.EXACT },
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
                          spacing: { line: 230 },
                          children: [
                            new TextRun({
                              text: whole,
                              size: 96,
                              font: "Roboto Black",
                              bold: true,
                              characterSpacing: -60,
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
                          spacing: { line: 188 },
                          children: [
                            new TextRun({
                              text: ' ',
                              size: 24,
                              font: "Roboto",
                            }),
                          ],
                        }),
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          indent: { right: 100 },
                          spacing: { line: 188 },
                          children: [
                            new TextRun({
                              text: fraction,
                              size: 52,
                              font: "Roboto Black",
                              characterSpacing: -20,
                            }),
                          ],
                        }),
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          indent: { right: 100 },
                          spacing: { line: 188 },
                          children: [
                            new TextRun({
                              text: "РУБ",
                              size: 28,
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
      height: { value: 950, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Table({
              width: {
                size: 5668 - 150 * 15,
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
                              size: 18,
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
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  height: { value: 700, rule: HeightRule.EXACT },
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
                            size: 5668 - 150 * 15,
                            type: WidthType.DXA,
                          },
                          rows: [
                            new TableRow({
                              height: { value: 700, rule: HeightRule.EXACT },
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
                                          size: 18,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: ".",
                                          size: 18,
                                        }),
                                        new TextRun({
                                          text: data.counts,
                                          size: 18,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: "-",
                                          size: 18,
                                          font: "Roboto",
                                        }),
                                        new TextRun({
                                          text: whole,
                                          size: 80,
                                          font: "Roboto Black",
                                          bold: true,
                                          characterSpacing: -50,
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
                                          size: 48,
                                          bold: true,
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
                                          size: 26,
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
                    }),
                  ],
                }),
              ],
            }),
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