// go

const compute = (strandA, strandB) => {
  let count = 0;

  if (strandA.length !== strandB.length) {
    throw new Error("strands must be of equal length");
  }

  for (let x = 0; x < strandA.length; x++) {
    (strandA[x] !== strandB[x]) && count++;
  }

  return count;
};

// ----------------------------------------

// Hamming

// empty strands
const res0 = compute("", ""); //  .toEqual(0);

// single letter identical strands
const res1 = compute("A", "A"); //  .toEqual(0);

// single letter different strands
const res2 = compute("G", "T"); //  .toEqual(1);

// long identical strands
const res3 = compute("GGACTGAAATCTG", "GGACTGAAATCTG"); //  .toEqual(0);

// long different strands
const res4 = compute("GGACGGATTCTG", "AGGACGGATTCT"); //  .toEqual(9);

// disallow first strand longer
const res5 = () => compute("AATG", "AAA"); /*  .toThrow(
  new Error("strands must be of equal length"),
);  */

// disallow second strand longer
const res6 = () => compute("ATA", "AGTG"); /*  .toThrow(
  new Error("strands must be of equal length"),
); */

// disallow empty first strand
const res7 = () => compute("", "G"); /*  .toThrow(
  new Error("strands must be of equal length"),
);  */

// disallow empty second strand
const res8 = () => compute("G", "") /*  .toThrow(
  new Error("strands must be of equal length"),
);  */

// ----------------------------------------

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
// console.log(res5());
// console.log(res6());
// console.log(res7());
// console.log(res8());



