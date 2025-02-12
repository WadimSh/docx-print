import { AlignmentType, Paragraph, TextRun, TableCell, TableRow, HeightRule } from "docx";

const createBlockPrice = (data) => {
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 1250, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph(''),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
              spacing: { line: 190 },
              children: [
                new TextRun({
                  text: data.price,
                  size: 120,
                  font: "Roboto Black",
                  bold: true,
                  characterSpacing: -60,
                }),
                new TextRun({
                  text: " ₽",
                  size: 40,
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
      height: { value: 1250, rule: HeightRule.EXACT },
      children: [
        new TableCell({
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
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
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
                  text: data.cost,
                  size: 120,
                  font: "Roboto Black",
                  bold: true,
                  characterSpacing: -60,
                }),
                new TextRun({
                  text: " ₽",
                  size: 40,
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