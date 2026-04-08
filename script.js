// go

const countWords = (wurdz) => {
  wurdz = wurdz.trim();
  const wordReg  = /([a-z]+)/gi;
  const regArray = [];
  let wordObject = {};

  regArray.push(...wurdz.matchAll(wordReg));
  regArray.forEach((reg) => {
    const tempReg = new RegExp(reg[0], "gi");
    let wordNum = [...wurdz.matchAll(tempReg)].length;
    Object.assign(wordObject, {[reg[0]]: wordNum});
  })
  return wordObject;
};

// ------------------------------------------------

//  countWords

  // //  count one word
  //   const expectedCounts0 = { word: 1 };
  //   const res0 = countWords("word") //  .toEqual(expectedCounts);

  // //  count one of each word
  //   const expectedCounts1 = { one: 1, of: 1, each: 1 };
  //   const res1 = countWords("one of each")  //  .toEqual(expectedCounts);

  // //  multiple occurrences of a word
  //   const expectedCounts2 = {one: 1, fish: 4, two: 1, red: 1, blue: 1,};
  //   const res2 = countWords("one fish two fish red fish blue fish") //  .toEqual(expectedCounts,);

  // //  handles cramped lists
  //   const expectedCounts3 = { one: 1, two: 1, three: 1, };
  //   const res3 = countWords("one,two,three")  //  .toEqual(expectedCounts);

  // //  handles expanded lists
  //   const expectedCounts4 = { one: 1, two: 1, three: 1, };
  //   const res4 = countWords("one,\ntwo,\nthree")  //  .toEqual(expectedCounts);

  //  ignore punctuation
    const expectedCounts5 = { car: 1, carpet: 1, as: 1, java: 1, javascript: 1, };
    const res5 = countWords("car: carpet as java: javascript!!&@$%^&")  //  .toEqual(expectedCounts,);

  //  include numbers
    const expectedCounts6 = { testing: 2, 1: 1, 2: 1, };
    const res6 = countWords("testing, 1, 2 testing")  //  .toEqual(expectedCounts);

  //  normalize case
    const expectedCounts7 = { go: 3, stop: 2, };
    const res7 = countWords("go Go GO Stop stop") //  .toEqual(expectedCounts);

  //  with apostrophes
    const expectedCounts8 = { first: 1, "don't": 2, laugh: 1, then: 1, cry: 1, "you're": 1, getting: 1, it: 1, };
    const res8 = countWords("'First: don't laugh. Then: don't cry. You're getting it.'")
      //  .toEqual(expectedCounts);

  //  with quotations
    const expectedCounts9 = { joe: 1, "can't": 1, tell: 1, between: 1, large: 2, and: 1, };
    const res9 = countWords("Joe can't tell between 'large' and large.")  //  .toEqual(expectedCounts,);

  //  substrings from the beginning
    const expectedCounts10 = { joe: 1, "can't": 1, tell: 1, between: 1, app: 1, apple: 1, and: 1, a: 1, };
    const res10 = countWords("Joe can't tell between app, apple and a.") //  .toEqual(expectedCounts,);

  // //  multiple spaces not detected as a word
  //   const expectedCounts11 = { multiple: 1, whitespaces: 1, };
  //   const res11 = countWords(" multiple   whitespaces")  //  .toEqual(expectedCounts);

  // //  alternating word separators not detected as a word
  //   const expectedCounts12 = { one: 1, two: 1, three: 1, };
  //   const res12 = countWords(",\n,one,\n ,two \n 'three'") //  .toEqual(expectedCounts);

  // //  quotation for word with apostrophe
  //   const expectedCounts13 = { can: 1, "can't": 2, };
  //   const res13 = countWords("can, can't, 'can't'")  //  .toEqual(expectedCounts);

// ------------------------------------------------

// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);
console.log(res10);
// console.log(res11);
// console.log(res12);
// console.log(res13);

