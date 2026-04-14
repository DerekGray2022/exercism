// go

class Palindromes {
  constructor() {
    this.smallest = {};
    this.largest = {};
  }
  static generate(factors) {
    this.max = factors.maxFactor;
    this.min = factors.minFactor;
    let palArray = [];
    let retArray = [];

    if (this.min > this.max) throw new Error("min must be <= max");
    

    //#region Create factors from MIN to MAX
    for (let x = this.min; x <= this.max; x++) {
      for (let y = x; y <= this.max; y++) {
        if (retArray.includes(x * y)) {
          continue;
        }
        retArray.push(x * y);
      }
    }
    //#endregion

    //#region Find Palindromic Numbers
    retArray.forEach((No) => {
      let noString = No.toString();
      let noArray = noString.split("").reverse();
      let noNo = Number(noArray.toString().replaceAll(",", ""));
      if (noNo === No) {
        palArray.push(No);
      }
    });
    //#endregion

    palArray = palArray.sort((a, b) => a - b);
    this.small(palArray);
    this.large(palArray);
    return this;
  }

  static small(palArray) {
    let factArray = [];
    let minimum = palArray[0];
    let tA = [];

    for (let x = this.min; x <= minimum; x++) {
      for (let y = x; y <= minimum; y++) {
        if (x * y === minimum) {
          tA.push(x, y);
          factArray.push(tA);
          tA = [];
        }
      }
    }

    !minimum && (minimum = null);

    this.smallest = {
      value: minimum,
      factors: factArray,
    };
    return this.smallest;
  }

  static large(palArray) {
    let factArray = [];
    let maximum = palArray[palArray.length - 1];
    let tA = [];

    for (let x = this.min; x <= this.max; x++) {
      for (let y = x; y <= this.max; y++) {
        if (x * y === maximum) {
          tA.push(x, y);
          factArray.push(tA);
          tA = [];
        }
      }
    }

    !maximum && (maximum = null);

    this.largest = {
      value: maximum,
      factors: factArray,
    };
    return this.largest;
  }
}

// --------------------------------------------

function sortFactors(factors) {
  return factors.map((f) => f.sort()).sort();
}

// --------------------------------------------

//  Palindromes

// //  smallest palindrome from single digit factors
// const palindromes0 = Palindromes.generate({ maxFactor: 9, minFactor: 1 });
// const smallest0 = palindromes0.smallest;
// const expected0 = { value: 1, factors: [[1, 1]] };
// const res0 = smallest0.value //  .toEqual(expected.value);
// const res0a = sortFactors(smallest0.factors)  //  .toEqual(expected.factors);

  // //  largest palindrome from single digit factors
  //   const palindromes1 = Palindromes.generate({ maxFactor: 9, minFactor: 1 });
  //   const largest1 = palindromes1.largest;
  //   const expected1 = { value: 9, factors: [[1, 9], [3, 3],],};
  //   const res1 = largest1.value  //  .toEqual(expected.value);
  //   const res1a = sortFactors(largest1.factors) //  .toEqual(expected.factors);

  // //  smallest palindrome from double digit factors
  //   const palindromes2 = Palindromes.generate({ maxFactor: 99, minFactor: 10 });
  //   const smallest2 = palindromes2.smallest;
  //   const expected2 = { value: 121, factors: [[11, 11]] };
  //   const res2 = smallest2.value //  .toEqual(expected.value);
  //   const res2a = sortFactors(smallest2.factors) //  .toEqual(expected.factors);

  // //  largest palindrome from double digit factors
  //   const palindromes3 = Palindromes.generate({ maxFactor: 99, minFactor: 10 });
  //   const largest3 = palindromes3.largest;
  //   const expected3 = { value: 9009, factors: [[91, 99]] };
  //   const res3 = largest3.value  //  .toEqual(expected.value);
  //   const res3a = sortFactors(largest3.factors) //  .toEqual(expected.factors);

  // //  smallest palindrome from triple digit factors
  //   const palindromes4 = Palindromes.generate({maxFactor: 999, minFactor: 100,});
  //   const smallest4 = palindromes4.smallest;
  //   const expected4 = { value: 10201, factors: [[101, 101]] };
  //   const res4 = smallest4.value //  .toEqual(expected.value);
  //   const res4a = sortFactors(smallest4.factors)  //  .toEqual(expected.factors);

  // //  largest palindrome from triple digit factors
  //   const palindromes5 = Palindromes.generate({maxFactor: 999, minFactor: 100,});
  //   const largest5 = palindromes5.largest;
  //   const expected5 = { value: 906609, factors: [[913, 993]] };
  //   const res5 = largest5.value  //  .toEqual(expected.value);
  //   const res5a = sortFactors(largest5.factors) //  .toEqual(expected.factors);

  // //  smallest palindrome from four digit factors
  //   const palindromes6 = Palindromes.generate({maxFactor: 9999, minFactor: 1000,});
  //   const smallest6 = palindromes6.smallest;
  //   const expected6 = { value: 1002001, factors: [[1001, 1001]] };
  //   const res6 =smallest6.value //  .toEqual(expected.value);
  //   const res6a = sortFactors(smallest6.factors)  //  .toEqual(expected.factors);

//   // This test doesn't run on our online test runner because it will time-out

//   // with most implementations. It's up to you to test your solution locally.

//   // largest palindrome from four digit factors
//       const palindromes7 = Palindromes.generate({maxFactor: 9999, minFactor: 1000,});
//       const largest7 = palindromes7.largest;
//       const expected7 = { value: 99000099, factors: [[9901, 9999]] };
//       const res7 = largest7.value  //  .toEqual(expected.value);
//       const res7a = sortFactors(largest7.factors) //  .toEqual(expected.factors);

  // //  empty result for smallest if no palindrome in range
  //   const palindromes8 = Palindromes.generate({maxFactor: 1003, minFactor: 1002,});
  //   const smallest8 = palindromes8.smallest;
  //   const res8 = smallest8.value //  .toBe(null);
  //   const res8a = smallest8.factors //  .toEqual([]);

  // //  empty result for largest if no palindrome in range
  //   const palindromes9 = Palindromes.generate({ maxFactor: 15, minFactor: 15 });
  //   const largest9 = palindromes9.largest;
  //   const res9 = largest9.value  //  .toBe(null);
  //   const res9a = largest9.factors  //  .toEqual([]);

  // //  error for smallest if min is more than max
  //     const palindromes10 = Palindromes.generate({maxFactor: 1, minFactor: 10000,});
  //     const res10 = palindromes10.smallest; //  .toThrow(new Error("min must be <= max"));

  // //  error for largest if min is more than max
  //     const palindromes11 = Palindromes.generate({ maxFactor: 1, minFactor: 2 });
  //     const res11 = palindromes11.largest;  // .toThrow(new Error("min must be <= max"));

// //  smallest product does not use the smallest factor
//   const palindromes12 = Palindromes.generate({maxFactor: 4000, minFactor: 3215,});
//   const smallest12 = palindromes12.smallest;
//   const expected12 = { value: 10988901, factors: [[3297, 3333]] };
//   const res12 = smallest12.value //  .toEqual(expected.value);
//   const res12a = sortFactors(smallest12.factors)  //  .toEqual(expected.factors);

// ----------------------------------------------

// console.log(res0);
// console.log(res0a);
// console.log(res1);
// console.log(res1a);
// console.log(res2);
// console.log(res2a);
// console.log(res3);
// console.log(res3a);
// console.log(res4);
// console.log(res4a);
// console.log(res5);
// console.log(res5a);
// console.log(res6);
// console.log(res6a);
// console.log(res7);
// console.log(res7a);
// console.log(res8);
// console.log(res8a);
// console.log(res9);
// console.log(res9a);
// console.log(res10);
// console.log(res11);
// console.log(res12);
// console.log(res12a);
