// go

const clean = (No) => {
  let output = No.replaceAll(/[^0-9]+/g, "");

  // Letters & Punctuation
  if (No.match(/[a-zA-Z]/gim)) throw new Error("Letters not permitted");
  if (No.match(/[^\w\-\(\)\s\.\+]/gm))
    throw new Error("Punctuations not permitted");

  // Number not right length
  if (output.length < 10) throw new Error("Must not be fewer than 10 digits");
  if (output.length > 11) throw new Error("Must not be greater than 11 digits");

  // Test & process 11 digit number
  if (output.length === 11 && output[0] !== "1")
    throw new Error("11 digits must start with 1");
  if (output.length === 11) output = output.slice(1);

  // Test 10 digit number
  if (output[0] === "0") throw new Error("Area code cannot start with zero");
  if (output[3] === "0")
    throw new Error("Exchange code cannot start with zero");
  if (output[0] === "1") throw new Error("Area code cannot start with one");
  if (output[3] === "1") throw new Error("Exchange code cannot start with one");

  return output;
};

// ----------------------------------------------

//  Phone Number

//  Cleanup user-entered phone numbers

//  cleans the number
const res0 = clean("(223) 456-7890"); //  .toEqual("2234567890");

//  cleans numbers with dots
const res1 = clean("223.456.7890"); //  .toEqual("2234567890");

//  cleans numbers with multiple spaces
const res2 = clean("223 456   7890   "); //  .toEqual("2234567890");

// //  invalid when 9 digits
// const res3 = () =>
//   clean(
//     "123456789",
//   ); /*  .toThrow(new Error("Must not be fewer than 10 digits"),);  */

// //  invalid when 11 digits does not start with a 1", () => {
// const res4 = () =>
//   clean(
//     "22234567890",
//   ); /*  .toThrow(new Error("11 digits must start with 1"),); */

// //  valid when 11 digits and starting with 1
// const res5 = clean("12234567890"); //  .toEqual("2234567890");

// //  valid when 11 digits and starting with 1 even with punctuation
// const res6 = clean("+1 (223) 456-7890"); //  .toEqual("2234567890");

// //  invalid when more than 11 digits
// const res7 = () =>
//   clean(
//     "321234567890",
//   ); /*  .toThrow(new Error("Must not be greater than 11 digits"),);  */

// //  invalid with letters
// const res8 = () =>
//   clean("523-abc-7890"); /*  .toThrow new Error("Letters not permitted"), */

// //  invalid with punctuations
// const res9 = () =>
//   clean("523-@:!-7890"); /*  .toThow new Error("Punctuations not permitted"),);  */

// //  invalid if area code starts with 0
// const res10 = () =>
//   clean(
//     "(023) 456-7890",
//   ); /*  .toThrow(new Error("Area code cannot start with zero"),);  */

// //  invalid if area code starts with 1
// const res11 = () =>
//   clean(
//     "(123) 456-7890",
//   ); /*  .toThrow(new Error("Area code cannot start with one"),); */

// //  invalid if exchange code starts with 0
// const res12 = () =>
//   clean(
//     "(223) 056-7890",
//   ); /* .toThrow(new Error("Exchange code cannot start with zero"),);  */

// //  invalid if exchange code starts with 1
// const res13 = () =>
//   clean(
//     "(223) 156-7890",
//   ); /*  .toThrow(new Error("Exchange code cannot start with one"),); */

// //  invalid if area code starts with 0 on valid 11-digit number
// const res14 = () =>
//   clean(
//     "1 (023) 456-7890",
//   ); /*  .toThrow(new Error("Area code cannot start with zero"),);  */

// //  invalid if area code starts with 1 on valid 11-digit number
// const res15 = () =>
//   clean(
//     "1 (123) 456-7890",
//   ); /*  .toThrow(new Error("Area code cannot start with one"),); */

// //  invalid if exchange code starts with 0 on valid 11-digit number
// const res16 = () =>
//   clean(
//     "1 (223) 056-7890",
//   ); /*  .toThrow(new Error("Exchange code cannot start with zero"),);  */

// //  invalid if exchange code starts with 1 on valid 11-digit number
// const res17 = () =>
//   clean(
//     "1 (223) 156-7890",
//   ); /*  .toThrow(new Error("Exchange code cannot start with one"),); */

// --------------------------------------------------

console.log(res0);
console.log(res1);
console.log(res2);
// console.log(res3());
// console.log(res4());
// console.log(res5);
// console.log(res6);
// console.log(res7());
// console.log(res8());
// console.log(res9());
// console.log(res10());
// console.log(res11());
// console.log(res12());
// console.log(res13());
// console.log(res14());
// console.log(res15());
// console.log(res16());
// console.log(res17());
