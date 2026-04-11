// go

const valid = (str) => {
  let total = 0;
  // let regEx = /[\d]/g;
  // let holder = [];

  if (/[^0-9 ]/.test(str) || str.length < 2)  return false;

  str = Array.from(str.trim().replaceAll(" ", ""));
  str.reverse();

  // if (str.length < 2) return false;

  for (let x = 0; x < str.length; x++) {
    str[x] = Number(str[x]);

    if (!str[x]) continue;
    if (x % 2 === 1) str[x] *= 2;
    if (str[x] > 9) str[x] -= 9;

    total += str[x];
  }

  return total % 10 === 0 ? true : false;
};

// -------------------------------------------

//  Luhn

// //  single digit strings can not be valid
// const res0 = valid("1"); //  .toEqual(false);

// //  a single zero is invalid
// const res1 = valid("0"); //  .toEqual(false);

// //  a simple valid SIN that remains valid if reversed
// const res2 = valid("059"); //  .toEqual(true);

// //  a simple valid SIN that becomes invalid if reversed
// const res3 = valid("59"); //  .toEqual(true);

// //  a valid Canadian SIN
// const res4 = valid("055 444 285"); //  .toEqual(true);

// //  "invalid Canadian SIN
// const res5 = valid("055 444 286"); //  .toEqual(false);

// //  invalid credit card
// const res6 = valid("8273 1232 7352 0569"); //  .toEqual(false);

// //  invalid long number with an even remainder
// const res7 = valid("1 2345 6789 1234 5678 9012"); //  .toEqual(false);

// //  invalid long number with a remainder divisible by 5
// const res8 = valid("1 2345 6789 1234 5678 9013"); //  .toEqual(false);

// //  valid number with an even number of digits
// const res9 = valid("095 245 88"); //  .toEqual(true);

// //  valid number with an odd number of spaces
// const res10 = valid("234 567 891 234"); //  .toEqual(true);

// //  valid strings with a non-digit added at the end invalid
// const res11 = valid("059a"); //  .toEqual(false);

// //  valid strings with punctuation included become invalid
//   const res12 = valid("055-444-285") //  .toEqual(false);

// //  valid strings with symbols included become invalid
//   const res13 = valid("055# 444$ 285") //  .toEqual(false);

// //  single zero with space is invalid
//   const res14 = valid(" 0")  //  .toEqual(false);

// //  more than a single zero is valid
//   const res15 = valid("0000 0")  //  .toEqual(true);

// //  input digit 9 is correctly converted to output digit 9
//   const res16 = valid("091") //  .toEqual(true);

// //  very long input is valid
//   const res17 = valid("9999999999 9999999999 9999999999 9999999999")  //  .toEqual(true);

// //  valid luhn with an odd number of digits and non zero first digit
//   const res18 = valid("109") //  .toEqual(true);

// //  using ascii value for non-doubled non-digit isn't allowed
//   const res19 = valid("055b 444 285")  //  .toEqual(false);

//  using ascii value for doubled non-digit isn't allowed
const res20 = valid(":9"); //  .toEqual(false);

//  non-numeric, non-space char in the middle with a sum that's divisible by 10 isn't allowed
const res21 = valid("59%59"); //  .toEqual(false);

// ------------------------------------------

// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);
// console.log(res8);
// console.log(res9);
// console.log(res10);
// console.log(res11);
// console.log(res12);
// console.log(res13);
// console.log(res14);
// console.log(res15);
// console.log(res16)
// console.log(res17);
// console.log(res18);
// console.log(res19);
console.log(res20);
console.log(res21);
