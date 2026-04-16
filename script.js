// go

const isPaired = (input) => {
  const regEx = /[\[\]\{\}\(\)]+/gm;
  const openReg = /[\[\{\(]/g;
  const parArr = [];
  let brackets = "";

  if (input.length > 0) {
    //#region Create string of brackets
    for (let x = 0; x < input.length; x++) {
      if (input[x].match(regEx)) brackets += input[x];
    }
    //#endregion

    //#region Test for paired brackets
    for (let x = 0; x < brackets.length; x++) {
      if (brackets[x].match(openReg)) {
        parArr.unshift(brackets[x]);
        if (x === brackets.length - 1) return false;
      } 
      else if (parArr[0]) {
        if (parArr[0] === "(" && brackets[x] !== ")") return false;
        if (parArr[0] === "{" && brackets[x] !== "}") return false;
        if (parArr[0] === "[" && brackets[x] !== "]") return false;
        parArr.shift();
      }
      else {
        return false;
      }
    }
    //#endregion
  }

  return true;
};

// ---------------------------------------------

//  Matching Brackets

//  paired square brackets
const res0 = isPaired("[]"); //  .toEqual(true);

//  empty string
const res1 = isPaired(""); //  .toEqual(true);

//  unpaired brackets
const res2 = isPaired("[["); //  .toEqual(false);

//  wrong ordered brackets
const res3 = isPaired("}{"); //  .toEqual(false);

//  wrong closing bracket
const res4 = isPaired("{]"); //  .toEqual(false);

//  paired with whitespace
const res5 = isPaired("{ }"); //  .toEqual(true);

//  partially paired brackets
const res6 = isPaired("{[])"); //  .toEqual(false);

//  simple nested bracket", () => {
const res7 = isPaired("{[]}"); //  .toEqual(true);

//  several paired brackets
const res8 = isPaired("{}[]"); //  .toEqual(true);

//  paired and nested brackets
const res9 = isPaired("([{}({}[])])"); //  .toEqual(true);

//  unopened closing brackets
const res10 = isPaired("{[)][]}"); //  .toEqual(false);

//  unpaired and nested brackets
const res11 = isPaired("([{])"); //  .toEqual(false);

//  paired and wrong nested brackets
const res12 = isPaired("[({]})"); //  .toEqual(false);

//  paired and wrong nested brackets but innermost are correct
const res13 = isPaired("[({}])"); //  .toEqual(false);

//  paired and incomplete brackets
  const res14 = isPaired("{}[")  //  .toEqual(false);

//  too many closing brackets
  const res15 = isPaired("[]]")  //  .toEqual(false);

//  early unexpected brackets
  const res16 = isPaired(")()")  //  .toEqual(false);

//  early mismatched brackets
  const res17 = isPaired("{)()") //  .toEqual(false);

//  math expression
  const res18 = isPaired("(((185 + 223.85) * 15) - 543)/2")  //  .toEqual(true);

//  complex latex expression
  const res19 = isPaired("\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)",)  //  .toEqual(true);

// ---------------------------------------------

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);
console.log(res10);
console.log(res11);
console.log(res12);
console.log(res13);
console.log(res14);
console.log(res15);
console.log(res16);
console.log(res17);
console.log(res18);
console.log(res19);
