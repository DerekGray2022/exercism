// go

// A leap year (in the Gregorian calendar) occurs:

//     In every year that is evenly divisible by 4.
//     Unless the year is evenly divisible by 100, in which case it's only a leap year if the year is also evenly divisible by 400.

// Some examples:

//     1997 was not a leap year as it's not divisible by 4.
//     1900 was not a leap year as it's not divisible by 400.
//     2000 was a leap year!

const isLeap = (year) => {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }
  return year % 4 === 0;
};

//  "A leap year"
// "year not divisible by 4 in common year"
const res0 = isLeap(2015); //  .toBe(false);

// "year divisible by 2, not divisible by 4 in common year"
const res1 = isLeap(1970); //  .toBe(false);

// "year divisible by 4, not divisible by 100 in leap year"
const res2 = isLeap(1996); //  .toBe(true);

// "year divisible by 4 and 5 is still a leap year"
const res3 = isLeap(1960); //  .toBe(true);

// "year divisible by 100, not divisible by 400 in common year"
const res4 = isLeap(2100); //  .toBe(false);

//  "year divisible by 100 but not by 3 is still not a leap year"
const res5 = isLeap(1900); //  .toBe(false);

//  "year divisible by 400 in leap year"
const res6 = isLeap(2000); //  .toBe(true);

//  "year divisible by 400 but not by 125 is still a leap year"
const res7 = isLeap(2400); //  .toBe(true);

//  "year divisible by 200, not divisible by 400 in common year"
const res8 = isLeap(1800); //  .toBe(false);

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);

