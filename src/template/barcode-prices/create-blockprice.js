import { AlignmentType, Paragraph, TextRun, TableCell, TableRow, HeightRule } from "docx";

const createBlockPrice = (data) => {
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 500, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
              children: [
                new TextRun({
                  text: data.price,
                  size: 48,
                  font: "Roboto",
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  size: 32,
                  font: "Roboto",
                }),
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
      height: { value: 500, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
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
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
              children: [
                new TextRun({
                  text: data.units,
                  size: 20,
                  font: "Roboto",
                }),
                new TextRun({
                  text: " ",
                  size: 20,
                }),
                new TextRun({
                  text: data.counts,
                  size: 20,
                  font: "Roboto",
                }),
                new TextRun({
                  text: " - ",
                  size: 20,
                  font: "Roboto",
                }),
                new TextRun({
                  text: data.cost,
                  size: 28,
                  bold: true,
                  font: "Roboto",
                }),
                new TextRun({
                  text: " ₽",
                  size: 20,
                  font: "Roboto",
                }),
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
  }
};

export default createBlockPrice;