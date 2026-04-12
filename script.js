// go

const square = (num) => {
  num = BigInt(num)
  if (num < 1 || num > 64) throw new Error("square must be between 1 and 64");

  return 2n**(num - 1n);
};

const total = () => {
  let tot = 0n;
  let x = BigInt(1);
  for (x = 1n; x <= 64n; x++) {
    tot += 2n**(x - 1n);
  }
  return tot;
};

// ------------------------------------------------

//  Grains

  //  returns the number of grains on the square

    //  grains on square 1
      const res0 = square(1).toString() //  .toEqual("1");

    //  grains on square 2
      const res1 = square(2).toString() //  .toEqual("2");

    //  grains on square 3
      const res2 = square(3).toString() //  .toEqual("4");

    //  grains on square 4
      const res3 = square(4).toString() //  .toEqual("8");

    //  grains on square 16
      const res4 = square(16).toString()  //  .toEqual("32768");

    //  grains on square 32
      const res5 = square(32).toString()  //  .toEqual("2147483648");

    //  grains on square 64
      const res6 = square(64).toString()  //  .toEqual("9223372036854775808");

    // //  square 0 raises an exception
    //   const res7 = () => square(0)  //  .toThrow(new Error("square must be between 1 and 64"),);

    // //  negative square raises an exception
    //   const res8 = () => square(-1) //  .toThrow(new Error("square must be between 1 and 64"),);

    // //  square greater than 64 raises an exception
    //   const res9 = () => square(65) //  .toThrow(new Error("square must be between 1 and 64"),);

  //  returns the total number of grains on the board
    const res10 = total().toString() //  .toEqual("18446744073709551615");

    // -------------------------------------------

    console.log(res0);
    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
    console.log(res6);
    // console.log(res7());
    // console.log(res8());
    // console.log(res9());
    console.log(res10);












