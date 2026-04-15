// go

const isIsogram = (wurd) => {
  const regEx = /[a-z]+/g;
  let testStr = "";
  let chars = wurd.toLowerCase();
  let isIso = true;
  
  //#region Build test string
  chars = [...chars.matchAll(regEx)];
  chars.forEach(char => {
    testStr += char[0];
  });
  //#endregion

//#region Test string for duplicate characters
  if (wurd.length > 0) {
    for (let x = 0; x < testStr.length; x++) {
      for (let y = x + 1; y < testStr.length; y++) {
        if (testStr[x] === testStr[y]) {
          isIso = false;
        }
      }
    }
  }
  //#endregion

  return isIso;
};

// --------------------------------------

//  Isogram

  //  Check if the given string is an isogram

    // //  empty string
    //   const res0 = isIsogram("")  //  .toEqual(true);

    // //  isogram with only lower case characters
    //   const res1 = isIsogram("isogram") //  .toEqual(true);

    // //  word with one duplicated character
    //   const res2 = isIsogram("eleven")  //  .toEqual(false);

    // //  word with one duplicated character from the end of the alphabet
    //   const res3 = isIsogram("zzyzx") //  .toEqual(false);

    // //  longest reported english isogra", () => {
    //   const res4 = isIsogram("subdermatoglyphic") //  .toEqual(true);

    // //  word with duplicated character in mixed case
    //   const res5 = isIsogram("Alphabet")  //  .toEqual(false);

    // //  word with duplicated character in mixed case, lowercase first
    //   const res6 = isIsogram("alphAbet")  //  .toEqual(false);

    // //  hypothetical isogrammic word with hyphen
    //   const res7 = isIsogram("thumbscrew-japingly") //  .toEqual(true);

    // //  hypothetical word with duplicated character following hyphen
    //   const res8 = isIsogram("thumbscrew-jappingly")  //  .toEqual(false);

    //  isogram with duplicated hyphen
      const res9 = isIsogram("six-year-old")  //  .toEqual(true);

    //  made-up name that is an isogram
      const res10 = isIsogram("Emily Jung Schwartzkopf") //  .toEqual(true);

    //  duplicated character in the middle
      const res11 = isIsogram("accentor")  //  .toEqual(false);

    //  same first and last characters
      const res12 = isIsogram("angola")  //  .toEqual(false);

    //  word with duplicated character and with two hyphens
      const res13 = isIsogram("up-to-date")  //  .toEqual(false);

      // -----------------------------------------

      // console.log(res0);
      // console.log(res1);
      // console.log(res2);
      // console.log(res3);
      // console.log(res4);
      // console.log(res5);
      // console.log(res6);
      // console.log(res7);
      // console.log(res8);
      console.log(res9);
      console.log(res10);
      console.log(res11);
      console.log(res12);
      console.log(res13);
      
