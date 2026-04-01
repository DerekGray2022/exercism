// go

// 00001 = wink
// 00010 = double blink
// 00100 = close your eyes
// 01000 = jump
// 10000 = Reverse the order of the operations in the secret handshake.

// function bitReverse() {
//   codeArray = codeArray.pop();
//   return codeArray;
//   codeArray = codeArray.reverse();
// }

const dec2bin = (dec) => {
  return (dec >>> 0).toString(2);
};

const commands = (num) => {
  let codeArray = [];
  let bitArray = [];
  const responses = {
    0: "wink",
    1: "double blink",
    2: "close your eyes",
    3: "jump",
    4: null
  };
  //#region 
  let bitString = dec2bin(num);
  bitArray = bitString.split("");
  bitArray.reverse();
  //#endregion

  for (let x = 0; x < bitArray.length; x++) {

    if (x === 4) {
      codeArray = codeArray.reverse();
      return codeArray;
    }

    if (bitArray[x] === "1") {
      codeArray.push(responses[x]);
    }
  }

  return codeArray;
};

// Secret Handshake
// Create A Handshake For A Number

// // wink for 1
// const res0 = commands(1); //  .toEqual(['wink']);

// // double blink for 10
// const res1 = commands(2); //  .toEqual(['double blink']);

// // close your eyes for 100
// const res2 = commands(4); //  .toEqual(['close your eyes']);

// // jump for 1000
// const res3 = commands(8); //  .toEqual(['jump']);

// // // --------------------------------------------------

// // combine two actions
// const res4 = commands(3); //  .toEqual(['wink', 'double blink']);

// // reverse two actions
// const res5 = commands(19); //  .toEqual(['double blink', 'wink']);

// // reversing one action gives the same action
// const res6 = commands(24); //  .toEqual(['jump']);

// // reversing no actions still gives no actions
// const res7 = commands(16); //  .toEqual([]);

// // all possible actions
// const res8 = commands(15); /* .toEqual(["wink", "double blink", "close your eyes", "jump"]); */

// // reverse all possible actions
// const res9 = commands(31) /* .toEqual([ "jump", "close your eyes", "double blink", "wink"]); */

// do nothing for zero
const res10 = commands(0)  //  .toEqual([]);

// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// // --------------------------------------
// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);
// console.log(res8);
// console.log(res9);
console.log(res10);
