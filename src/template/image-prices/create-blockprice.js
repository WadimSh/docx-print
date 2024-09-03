import { AlignmentType, Paragraph, TextRun, TableCell, TableRow, HeightRule } from "docx";

const createBlockPrice = (data) => {
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 780, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph(''),
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
      height: { value: 780, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph(''),
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
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
              children: [
                new TextRun({
                  text: data.units,
                  size: 22,
                  font: "Roboto",
                }),
                new TextRun({
                  text: " ",
                  size: 22,
                }),
                new TextRun({
                  text: data.counts,
                  size: 22,
                  font: "Roboto",
                }),
                new TextRun({
                  text: " - ",
                  size: 22,
                  font: "Roboto",
                }),
                new TextRun({
                  text: data.cost,
                  size: 30,
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  size: 22,
                  font: "Roboto",
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