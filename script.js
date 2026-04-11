// go

const primeFactors = (no) => {
  let workNo = no;
  let workArray = [];

  if(no < 2) return workArray;

  for (let x = 2; x <= no; x++) {
    while (workNo % x === 0) {
      workArray.push(x);
      workNo /= x;
      if (workNo <= 1) return workArray;
    }  
  }
};

// -------------------------------------------------------------

//  returns prime factors for the given input number

// //  no factors
// const res0 = primeFactors(15); //  .toEqual([]));

// //  prime number
// const res1 = primeFactors(2); //  .toEqual([2])

// //  another prime number
// const res2 = primeFactors(3); //  .toEqual([3])

// //  square of a prime
//    const res3 = primeFactors(9) //  .toEqual([3, 3])

// //  product of first prime
//    const res4 = primeFactors(4) //  .toEqual([2, 2])

// //  cube of a prime
//    const res5 = primeFactors(8) //  .toEqual([2, 2, 2])

// //  product of second prime
//   const res6 = primeFactors(27) //  .toEqual([3, 3, 3])


// //  product of third prime
//   const res7 = primeFactors(625) //  .toEqual([5, 5, 5, 5])

// //  product of first prime and second prime
//   const res8 = primeFactors(6)  //  .toEqual([2, 3])

// //  product of primes and non-primes
//   const res9 = primeFactors(12) //  .toEqual([2, 2, 3])

// //  product of primes
//   const res10 = primeFactors(901255) //  .toEqual([5, 17, 23, 461])

// //  factors include a large prime
//   const res11 = primeFactors(93819012551)  //  .toEqual([11, 9539, 894119])

  //-----------------------------------------------------

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
  

  module.exports = primeFactors;
