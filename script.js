// go

function countNucleotides(strand) {
  const matchArray = ["A", "C", "G", "T"];
  const regEx = /[^ACGT]/g;
  let output = ``;

  if (regEx.test(strand)) throw new Error("Invalid nucleotide in strand");
  

  matchArray.forEach((letter) => {
  const array = [...strand.matchAll(letter)];
    output += `${array.length} `;
  });

  output = output.trim();


  return output;
}

// --------------------------------------------

// count all nucleotides in a strand

// empty strand
const res0 = countNucleotides(""); //  .toEqual("0 0 0 0");

// can count one nucleotide in single-character input
const res1 = countNucleotides("G"); //  .toEqual('0 0 1 0');

// strand with repeated nucleotide
const res2 = countNucleotides("GGGGGGG"); //  .toEqual('0 0 7 0');

// strand with multiple nucleotides
const res3 = countNucleotides("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC",
); //  .toEqual("20 12 17 21");

// strand with invalid nucleotides
const res4 = () => countNucleotides("AGXXACT")  /*  .toThrow(new Error("Invalid nucleotide in strand");  */

//--------------------------------------------

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4());

