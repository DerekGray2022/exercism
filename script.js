// go

const convert = (number) => {
  let output = "";

  number % 3 === 0 && (output += "Pling");
  number % 5 === 0 && (output += "Plang");
  number % 7 === 0 && (output += "Plong");

  output === "" && (output = String(number));

  return output;
}
// -----------------------------------

// Raindrops

// the sound for 1 is 1
const res0 = convert(1) //  .toEqual('1')

// the sound for 3 is Pling
const res1 = convert(3) //  .toEqual('Pling')

// the sound for 5 is Plang
const res2 = convert(5) //  .toEqual('Plang')

// the sound for 7 is Plong
const res3 = convert(7) //  .toEqual('Plong')

// the sound for 6 is Pling as it has a factor 3
const res4 = convert(6) //  .toEqual('Pling')

// 2 to the power 3 does not make a raindrop sound as 3 is the exponent not the base
const res5 = convert(8) //  .toEqual('8')

// the sound for 9 is Pling as it has a factor 3
const res6 = convert(9) //  .toEqual('Pling')

// the sound for 10 is Plang as it has a factor 5
const res7 = convert(10)  //  .toEqual('Plang')

// the sound for 14 is Plong as it has a factor of 7ma
const res8 = convert(14)  //  .toEqual('Plong')

// the sound for 15 is PlingPlang as it has factors 3 and 5
const res9 = convert(15)  //  .toEqual('PlingPlang')

// the sound for 21 is PlingPlong as it has factors 3 and 7
 const res10 = convert(21) //  .toEqual('PlingPlong')

//  the sound for 25 is Plang as it has a factor 5
const res11 = convert(25)  //  .toEqual('Plang')

// the sound for 27 is Pling as it has a factor 3
const res12 = convert(27)  //  .toEqual('Pling')

// the sound for 35 is PlangPlong as it has factors 5 and 7
const res13 = convert(35)  //  .toEqual('PlangPlong')

// the sound for 49 is Plong as it has a factor 7
const res14 = convert(49)  //  .toEqual('Plong')

// the sound for 52 is 52
const res15 = convert(52)  //  .toEqual('52')

// the sound for 105 is PlingPlangPlong as it has factors 3, 5 and 7
const res16 = convert(105)  //  .toEqual('PlingPlangPlong')

// the sound for 3125 is Plang as it has a factor 5
const res17 = convert(3125)  //  .toEqual('Plang')

// -----------------------------------

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

