import { AlignmentType, Paragraph, TextRun, TableCell, TableRow, HeightRule } from "docx";

const createBlockPrice = (data) => {
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 580, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: data.price,
                  size: 48,
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  size: 32,
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
      height: { value: 580, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: "1шт - ",
                  size: 18,
                }),
                new TextRun({
                  text: data.price,
                  size: 18,
                }),
                new TextRun({
                  text: " ₽",
                  size: 18,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.LEFT,
              children: [
                new TextRun({
                  text: data.units,
                  size: 24,
                }),
                new TextRun({
                  text: " ",
                  size: 24,
                }),
                new TextRun({
                  text: data.counts,
                  size: 24,
                }),
                new TextRun({
                  text: " - ",
                  size: 24,
                }),
                new TextRun({
                  text: data.cost,
                  size: 30,
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  size: 24,
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