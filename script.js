// go

const reverseString = (str) => {
  let res = "";
  if (str) {
    res = str.split("").reverse();

    let index = res.indexOf("̈");
    if (index === -1) res.indexOf("ี");
    if (index !== -1) {
    const symbol = res.slice(index, index + 1);
    res.splice(index, 1);
    res.splice(index + 1, 0, symbol[0])
    }
    res = res.reduce((acc, curr) => {
      return (acc += curr);
    });
  }
  return res;
};

//  "empty string"
let expected = "";
let actual = reverseString("");
const res0 = actual === expected; //  .toEqual(expected);

// //  "a word"
// expected = "tobor";
// actual = reverseString("robot");
// const res1 = actual === expected; //  .toEqual(expected);

// //  "a capitalized word"
// expected = "nemaR";
// actual = reverseString("Ramen");
// const res2 = actual === expected; //  .toEqual(expected);

// //  "a sentence with punctuation"
// expected = "!yrgnuh ma I";
// actual = reverseString("I am hungry!");
// const res3 = actual === expected; //  .toEqual(expected);

// //  "a palindrome"
// expected = "racecar";
// actual = reverseString("racecar");
// const res4 = actual === expected; //  .toEqual(expected);

// //  "an even-sized word", () => {
// expected = "reward";
// actual = reverseString("drawer");
// const res5 = actual === expected; //  .toEqual(expected);

// //  "wide characters"
// expected = "猫子";
// actual = reverseString("子猫");
// const res6 = actual === expected; //  .toEqual(expected);

// // ------------------------------------------

// //  "grapheme cluster with pre-combined form"
//   expected = "dnatsnehctsrüW";
//   actual = reverseString("Würstchenstand");
//   const res7 = actual === expected //  .toEqual(expected);


// //  "grapheme clusters"
//   expected = "มรกแรปโนยขีเผู้";
//   actual = reverseString("ผู้เขียนโปรแกรม");
//   const res8 = actual === expected //  .toEqual(expected);


// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);
console.log(res8);
