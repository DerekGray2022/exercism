// go

export class Series {
  constructor(series) {
    this._series = series;
    if (this._series.length <= 0) throw new Error("series cannot be empty");
  }

  slices(sliceLength) {
    let output = [];

    if (sliceLength > this._series.length) throw new Error("slice length cannot be greater than series length");

    for (let x = 0; x <= this._series.length - sliceLength; x++) {
      let working = [];
      if (sliceLength < 0) throw new Error("slice length cannot be negative");
      if (sliceLength === 0) throw new Error("slice length cannot be zero");

      for (let y = x; y < x + sliceLength; y++) {
        working.push(Number(this._series[y]));
      }
      output.push(working);
    }

    return output;
  }
}

// -----------------------------------------------

//  Series

// //  slices of one from one
// const res0 = new Series("1").slices(1); //  .toEqual([[1]]);

// //  slices of one from two
// const res1 = new Series("12").slices(1); //  .toEqual([[1],  [2]]);

// //  slices of two
// const res2 = new Series("35").slices(2); //  .toEqual([[3, 5]]);

// //  slices of two overlap
// const res3 = new Series("9142").slices(2); //  .toEqual([[9, 1], [1, 4], [4, 2],]);

// // slices can include duplicates
// const res4 = new Series("777777").slices(3); //  .toEqual([[7, 7, 7], [7, 7, 7], [7, 7, 7], [7, 7, 7],]);

// //  slices of long series
// const res5 = new Series("918493904243").slices(5); //  .toEqual([ [9, 1, 8, 4, 9], [1, 8, 4, 9, 3], [8, 4, 9, 3, 9], [4, 9, 3, 9, 0], [9, 3, 9, 0, 4], [3, 9, 0, 4, 2], [9, 0, 4, 2, 4], [0, 4, 2, 4, 3],]);

// //  slice length is too large
// const res6 = () => {
//   new Series("12345").slices(6);
// }; //  .toThrow(new Error("slice length cannot be greater than series length"));

// //  slice length is way too large
// const res7 = () => {
//   new Series("12345").slices(42);
// }; //  .toThrow(new Error("slice length cannot be greater than series length"));

// //  slice length cannot be zero
// const res8 = () => {
//   new Series("12345").slices(0);
// }; //  .toThrow(new Error("slice length cannot be zero"));

// //  slice length cannot be negative
// const res9 = () => {
//   new Series("123").slices(-1);
// }; //  .toThrow(new Error("slice length cannot be negative"));

//  empty series is invalid
const res10 = () => {
  new Series("").slices(1);
}; //  .toThrow(new Error("series cannot be empty"));

// ---------------------------------------

// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6());
// console.log(res7());
// console.log(res8());
// console.log(res9());
console.log(res10());
