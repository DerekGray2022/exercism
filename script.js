// go

const transform = (old) => {
  let outObj = {};
  let res = Object.keys(old);

  //#region Collect letters, pair them with value & assign to outObj
  res.forEach((key) => {
    old[key].forEach((letter) => {
      letter = letter.toLowerCase();
      const out = { [letter]: Number(key) };
      Object.assign(outObj, out);
    });
  });
  //#endregion

  //#region Sort outObj by keys
  let output = Object.keys(outObj)
    .sort()
    .reduce((obj, key) => {
      obj[key] = outObj[key];
      return obj;
    }, {});
    //#endregion

  return output;
};

// -------------------------------------------------

// Transform legacy to new

// single letter
const old0 = { 1: ["A"] };
const expected0 = { a: 1 };
const res0 = transform(old0); //  .toEqual(expected0);

// single score with multiple letters
const old1 = { 1: ["A", "E", "I", "O", "U"] };
const expected1 = { a: 1, e: 1, i: 1, o: 1, u: 1 };
const res1 = transform(old1); // .toEqual(expected1);

// multiple scores with multiple letters
const old2 = { 1: ["A", "E"], 2: ["D", "G"] };
const expected2 = { a: 1, e: 1, d: 2, g: 2 };
const res2 = transform(old2); //  .toEqual(expected2);

// multiple scores with differing numbers of letters
const old3 = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
const expected3 = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};
const res3 = transform(old3); //  .toEqual(expected3);

// ------------------------------------------------

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
