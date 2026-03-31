// go

const answer = (req) => {
  //#region Collect useable data from req
  const regNumber = /-?\d+/g;
  const regOperator = /plus|minus|multiplied|divided/gi;

  let resNumber = req.match(regNumber);
  let resOperator = req.match(regOperator);

  let data = {
    number: resNumber,
    operator: resOperator,
  };
  //#endregion

  const numbers = data.number;
  const operators = data.operator;

  //#region Return just a number
  if (operators === null) return numbers;
  //#endregion
  

  // return data;
};

// // just a number
// const res1 = answer("What is 5?"); //  .toEqual(5);

// // just a zero
// const res2 = answer("What is 0?"); //  .toEqual(0);

// // just a negative number
// const res3 = answer("What is -123?"); //  .toEqual(-123);

// addition
const res4 = answer("What is 1 plus 1 minus 2?"); //  .toEqual(2);

// // addition with a left hand zero
// const res5 = answer("What is 0 plus 2?"); //  .toEqual(2);

// // addition with a right hand zero
// const res6 = answer("What is 3 plus 0?"); //  .toEqual(3);

// // more addition
// const res7 = answer("What is 53 plus 2?"); //  .toEqual(55);

// // addition with negative numbers
// const res8 = answer("What is -1 plus -10?"); //  .toEqual(-11);

// // large addition
// const res9 = answer("What is 123 plus 45678?"); //  .toEqual(45801);

// // subtraction
// const res10 = answer("What is 4 minus -12?"); //  .toEqual(16);

// // multiplication
// const res11 = answer("What is -3 multiplied by 25?"); //  .toEqual(-75);

// // division
// const res12 = answer("What is 33 divided by -3?"); //  .toEqual(-11);

// // multiple additions
// const res13 = answer("What is 1 plus 1 plus 1?"); //  .toEqual(3);

// // addition and subtraction
// const res14 = answer("What is 1 plus 5 minus -2?"); //  .toEqual(8);

// // multiple subtraction
// const res15 = answer("What is 20 minus 4 minus 13?"); //  .toEqual(3);

// // subtraction then addition
// const res16 = answer("What is 17 minus 6 plus 3?"); //  .toEqual(14);

// // multiple multiplication
// const res17 = answer("What is 2 multiplied by -2 multiplied by 3?"); //  .toEqual(-12);

// // addition and multiplication
// const res18 = answer("What is -3 plus 7 multiplied by -2?"); //  .toEqual(-8);

// // multiple division
// const res19 = answer("What is -12 divided by 2 divided by -3?"); //  .toEqual(2);

// // unknown operation
// const res20 = () =>
//   answer("What is 52 cubed?"); /* .toThrow(new Error("Unknown operation"), */

// // Non math question
// const res21 = () =>
//   answer(
//     "Who is the President of the United States?",
//   ); /* .toThrow(new Error("Unknown operation"), */

// // reject problem missing an operand
// const res22 = () => answer("What is 1 plus?"); //  .toThrow(new Error('Syntax error'));

// // reject problem with no operands or operators
// const res23 = () => answer("What is?"); //  .toThrow(new Error('Syntax error'));

// // reject two operations in a row
// const res24 = () =>
//   answer("What is 1 plus plus 2?"); /* .toThrow(new Error("Syntax error"), */

// // reject two numbers in a row
// const res25 = () =>
//   answer("What is 1 plus 2 1?"); /* .toThrow(new Error("Syntax error") */

// // reject postfix notation
// const res26 = () => answer("What is 1 2 plus?"); //  .toThrow(new Error("Syntax error"));

// // reject prefix notation
// const res27 = () => answer("What is plus 1 2?")  //  .toThrow(new Error("Syntax error");

// console.log(res1);
// console.log(res2);
// console.log(res3);
console.log(res4);
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
// console.log(res16);
// console.log(res17);
// console.log(res18);
// console.log(res19);
// console.log(res20());
// console.log(res21());
// console.log(res22());
// console.log(res23());
// console.log(res24());
// console.log(res25());
// console.log(res26());
// console.log(res27());
