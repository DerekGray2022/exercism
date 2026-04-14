// go

const parse = (entry) => {
  const regEx = /[a-z']+/gi;
  let workArr = [...entry.matchAll(regEx)];
  let res = "";

  workArr.forEach(ele => {
    res += ele[0][0].toUpperCase();
  });

  return res;
};

// ---------------------------------------------

//  Acronyms are produced from

  // basic
  //  title cased phrases
    const res0 = parse("Portable Network Graphics") // .toEqual("PNG");

  // lowercase words
  //  other title cased phrases
    const res1 = parse("Ruby on Rails") //  .toEqual("ROR");

  // punctuation
  //  phrases with punctuation
    const res2 = parse("First In, First Out") //  .toEqual("FIFO");

  // all caps word
  //  phrases with all uppercase words
    const res3 = parse("GNU Image Manipulation Program")  //  .toEqual("GIMP");

  // punctuation without whitespace
  //  phrases with punctuation without whitespace
    const res4 = parse("Complementary metal-oxide semiconductor") //  .toEqual("CMOS");

  // very long abbreviation
  //  long phrases
    const res5 = parse("Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me",
      ) //  .toEqual("ROTFLSHTMDCOALM");

  // consecutive delimiters
  //  phrases with consecutive delimiters
    const res6 = parse("Something - I made up from thin air") //  .toEqual("SIMUFTA");

  // apostrophes
  //  phrases with apostrophes
    const res7 = parse("Halley's Comet")  //  .toEqual("HC");

  // underscore emphasis
  //  phrases with underscore emphasis
    const res8 = parse("The Road _Not_ Taken")  //  .toEqual("TRNT");

    // ------------------------------------------

    console.log(res0);
    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
    console.log(res6);
    console.log(res7);
    console.log(res8);
    
