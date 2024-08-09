const toEAN13 = (input) => {
  const charSets = {
    A: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], 
    B: ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'], 
    C: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  };
  const compatibleEAN13 = (digits) => {
    let numbersets = ['AAAAAA', 'AABABB', 'AABBAB', 'AABBBA', 'ABAABB', 'ABBAAB', 'ABBBAA', 'ABABAB', 'ABABBA', 'ABBABA'];
    let numberset = numbersets[parseInt(digits[0])]; // Преобразуем первый символ в число для выбора набора
    return [
      '' + digits[0], 
      charSets[numberset[0]][parseInt(digits[1])], 
      charSets[numberset[1]][parseInt(digits[2])], 
      charSets[numberset[2]][parseInt(digits[3])], 
      charSets[numberset[3]][parseInt(digits[4])], 
      charSets[numberset[4]][parseInt(digits[5])], 
      charSets[numberset[5]][parseInt(digits[6])], 
      '*', 
      charSets.C[parseInt(digits[7])], 
      charSets.C[parseInt(digits[8])], 
      charSets.C[parseInt(digits[9])], 
      charSets.C[parseInt(digits[10])], 
      charSets.C[parseInt(digits[11])], 
      charSets.C[parseInt(digits[12])], 
      '+'
    ].join('');
  };
  const input2digits = (value) => {
    value = value.padStart(13, '0');
    if (value.length !== 13) {
      throw new Error(`Invalid value!`);
    }
    for(let i = 0; i < value.length; i++) {
      let charcode = value[i].charCodeAt(0);
      if(charcode < 48 || charcode > 57) {
        throw new Error(`Non-digit character "${value[i]}" ` + `(${value[i].charCodeAt(0)}) found in: ${value};`);
      }
    }
    return Array.from(value).map(s => parseInt(s));
  };
  let digits = input2digits(input);
  const result = compatibleEAN13(digits);
  return result;
};

export default toEAN13;