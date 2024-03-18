const createEncode = (input) => {
  const charSets = {
    A: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], 
    B: ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'], 
    C: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  };

  const compatibleEAN13 = (digits) => {
    let numbersets = ['AAAAAA', 'AABABB', 'AABBAB', 'AABBBA', 'ABAABB', 'ABBAAB', 'ABBBAA', 'ABABAB', 'ABABBA', 'ABBABA'];
    let numberset = numbersets[digits[0]];
    return [
              '' + digits[0]
            , charSets[numberset[0]][digits[1]]
            , charSets[numberset[1]][digits[2]]
            , charSets[numberset[2]][digits[3]]
            , charSets[numberset[3]][digits[4]]
            , charSets[numberset[4]][digits[5]]
            , charSets[numberset[5]][digits[6]]
            , '*'
            , charSets.C[digits[7]]
            , charSets.C[digits[8]]
            , charSets.C[digits[9]]
            , charSets.C[digits[10]]
            , charSets.C[digits[11]]
            , charSets.C[digits[12]]
            , '+'
        ].join('');
  };

  const input2didgits = (value) => {
    for(let i=0, l=value.length; i<l; i++) {
      let charcode = value[i].charCodeAt(0);
      if(charcode < 48 || charcode > 57) {
        throw new Error(`Non-digit character "${value[i]}" ` + `(${value[i].charCodeAt(0)}) found in: ${value};`);
      }
    }
    return Array.from(value).map(s=>[0,1,2,3,4,5,6,7,8,9][s]);
  };

  let digits = input2didgits(input);
  let ean13 = digits.slice();
  const result = compatibleEAN13(ean13);

  return result
};

export default createEncode;