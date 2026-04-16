// go

const largestProduct = (No, bracket) => {
  const regEx = /[^0-9]/;
  let workArr = [];
  let high = 0;

  if (bracket > No.length) throw new Error("span must not exceed string length");
  if (regEx.test(No)) throw new Error("digits input must only contain digits");
  if (bracket <= 0) throw new Error("span must not be negative");

  //#region Isolate each bracket
  for (let x = 0; x <= No.length - bracket; x++) {
    let arr = [];
    arr.push(No.slice(x, x + bracket));
    workArr.push(arr);
  }
  //#endregion

  //#region Calculate product of each bracket
  workArr.forEach(arr => {
    let total = Number(arr[0][0]);
    
    for (let x = 1; x < arr[0].length; x++) {
      total *= Number(arr[0][x]);
    }

    if (total > high) high = total;
  });
  //#endregion

  return high;
};

// ---------------------------------------

//  Largest Series Product

  //  finds the largest product if span equals length
    const res0 = largestProduct("29", 2)  //  .toEqual(18);

  //  can find the largest product of 2 with numbers in order
    const res1 = largestProduct("0123456789", 2)  //  .toEqual(72);

  //  can find the largest product of 2
    const res2 = largestProduct("576802143", 2) //  .toEqual(48);

  //  can find the largest product of 3 with numbers in order
    const res3 = largestProduct("0123456789", 3)  //  .toEqual(504);

  //  can find the largest product of 3
    const res4 = largestProduct("1027839564", 3)  //  .toEqual(270);

  //  can find the largest product of 5 with numbers in order
    const res5 = largestProduct("0123456789", 5)  //  .toEqual(15120);

  //  can get the largest product of a big number
    const res6 = largestProduct("73167176531330624919225119674426574742355349194934", 6) //  .toEqual(23520);

  //  reports zero if the only digits are zero
    const res7 = largestProduct("0000", 2)  //  .toEqual(0);

  //  reports zero if all spans include zero
    const res8 = largestProduct("99099", 3) //  .toEqual(0);

// ---------------------------------------

  // //  rejects span longer than string length
  //   const res9 = () => largestProduct("123", 4) //  .toThrow(new Error("span must not exceed string length"),);

  // //  rejects empty string and nonzero span
  //   const res10 = () => largestProduct("", 1)  //  .toThrow(new Error("span must not exceed string length"),);

  // //  rejects invalid character in digits
  //   const res11 = () => largestProduct("1234a5", 2)  //  .toThrow(new Error("digits input must only contain digits"),);

  //  rejects negative span
    const res12 = () => largestProduct("12345", -1)  //  .toThrow(new Error("span must not be negative"),);

// ---------------------------------------

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);

// ---------------------------------------

// console.log(res9());
// console.log(res10());
// console.log(res11());
console.log(res12());
