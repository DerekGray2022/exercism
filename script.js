// go

//#region Get operators/operands
function getOps(req, reg) {
  let tempArr = [];
  let temp = req.match(reg);
  if (temp) {
    for (let x = 0; x < temp.length; x++) {
      tempArr.push([]);
      reg.test(req);
      tempArr[x].push(temp[x]);
      tempArr[x].push(reg.lastIndex - temp[x].length);
    }
    return tempArr;
  }
  return null;
}
//#endregion

//#region Switch operator strings for symbols
function switchOps(operators) {
  let op = "";
  for (let x = 0; x < operators.length; x++) {
    operators[x][0] = operators[x][0].toLowerCase();
    switch (operators[x][0]) {
      case "plus":
        op = "+";
        break;
      case "minus":
        op = "-";
        break;
      case "multiplied":
        op = "*";
        break;
      case "divided":
        op = "/";
        break;
      default:
        break;
    }
    operators[x][0] = op;
  }
}
//#endregion

//#region Sort operators/operands by index
function compareIndices(a, b) {
  return a[1] - b[1];
}
//#endregion

const answer = (req) => {
  //#region Collect useable data from req
  let eqTotal = 0;
  const regNumber = /-?\d+/g;
  const regOperator = /plus|minus|multiplied|divided/gi;
  const numbers = getOps(req, regNumber);
  let operators = getOps(req, regOperator);
  operators && switchOps(operators);
  let allOps = [...numbers, ...operators];
  allOps.sort(compareIndices);
  let eqString = ``;

  for (let x = 0; x < allOps.length; x++) {
    eqString += `${allOps[x][0]} `;
    if (x > 0 && x % 2 === 0) {
      eqString = eqString.trim();
      eqTotal = eval(eqString);
      eqString = `${String(eqTotal)} `;
    }
  }
  //#endregion

  let sortArr = [];

  //#region Throw Error on invalid req
  if (numbers === null) {
    throw new Error("Your request was invalid.");
  }
  //#endregion

  if (operators) {
    //#region Throw Error on missing operand
    if (numbers.length === operators.length) {
      throw new Error("Your request is missing an operand.");
    }
    //#endregion

    //#region Throw Error on missing operator
    if (numbers.length - operators.length > 1) {
      throw new Error("Your request is missing an operator.");
    }
    //#endregion
  }

  //#region Return just a number
  if (operators === null) return numbers[0][0];
  //#endregion

  return eqTotal;
};

// // just a number
// const res1 = answer("What is 5?"); //  .toEqual(5);

// // just a zero
// const res2 = answer("What is 0?"); //  .toEqual(0);

// // just a negative number
// const res3 = answer("What is -123?"); //  .toEqual(-123);

// // addition
// const res4 = answer("What is 1 plus 1 minus 2?"); //  .toEqual(0);

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

// addition and multiplication
const res18 = answer("What is -3 plus 7 multiplied by -2?"); //  .toEqual(-8);

// multiple division
const res19 = answer("What is -12 divided by 2 divided by -3?"); //  .toEqual(2);

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
// console.log(res16);
// console.log(res17);
console.log(res18);
console.log(res19);
// console.log(res20());  //  NOT DONE
// console.log(res21());
// console.log(res22());
// console.log(res23());
// console.log(res24());
// console.log(res25());
// console.log(res26());
// console.log(res27());
