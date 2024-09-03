import { AlignmentType, Paragraph, TextRun, TableCell, TableRow, HeightRule } from "docx";

const createBlockPrice = (data) => {
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 480, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: data.price,
                  font: "Roboto",
                  size: 32,
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  font: "Roboto",
                  size: 28,
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
      height: { value: 480, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "1шт - ",
                  font: "Roboto",
                  size: 18,
                }),
                new TextRun({
                  text: data.price,
                  font: "Roboto",
                  size: 18,
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  font: "Roboto",
                  size: 18,
                }),
                new TextRun({
                  break: 1,
                }),
                new TextRun({
                  text: data.units,
                  font: "Roboto",
                  size: 26,
                }),
                new TextRun({
                  text: " ",
                  size: 26,
                }),
                new TextRun({
                  text: data.counts,
                  font: "Roboto",
                  size: 26,
                }),
                new TextRun({
                  text: " - ",
                  font: "Roboto",
                  size: 26,
                }),
                new TextRun({
                  text: data.cost,
                  font: "Roboto",
                  size: 26,
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  font: "Roboto",
                  size: 26,
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

export default createBlockPrice;