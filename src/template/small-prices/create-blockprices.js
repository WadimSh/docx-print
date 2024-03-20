import { AlignmentType, Paragraph, TextRun, TableCell, TableRow } from "docx";

const createBlockPrices = (data) => {
  if (data.multiplicity === 1) {
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
                  text: data.price1,
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
                  text: data.price1,
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
                  text: data.units1,
                  size: 27,
                  bold: true,
                }),
                new TextRun({
                  text: "  ",
                  size: 27,
                }),
                new TextRun({
                  text: data.units2,
                  size: 27,
                  bold: true,
                }),
                new TextRun({
                  text: " - ",
                  size: 27,
                }),
                new TextRun({
                  text: data.price2,
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

export default createBlockPrices;