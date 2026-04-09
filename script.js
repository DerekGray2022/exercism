// go

class Squares {
  constructor(square) {
    this._square = square;
  }

  get sumOfSquares() {
    let _sumOfSquare = 0;
    for (let x = 0; x <= this._square; x++) {
      let z = Math.pow(x, 2);
      _sumOfSquare += z;
    }

    return _sumOfSquare;
  }

  get squareOfSum() {
    let _squareOfSum = 0;
    for (let x = 0; x <= this._square; x++) {
      _squareOfSum += x;
    }

    return Math.pow(_squareOfSum, 2);
  }

  get difference() {
    return  this.squareOfSum - this.sumOfSquares;
  }
}

// ------------------------------------------------

//  difference-of-squares
const squares1 = new Squares(1);
const squares5 = new Squares(5);
const squares100 = new Squares(100);

//  Square the sum of the numbers up to the given number

//  "square of sum 1", () => {
const res0 = squares1.squareOfSum; //  .toBe(1);

//  square of sum 5
const res1 = squares5.squareOfSum; //  .toBe(225);

//  square of sum 100
const res2 = squares100.squareOfSum; //  .toBe(25502500);

// ------------------------------------------------

//  Sum the squares of the numbers up to the given number

  //  "sum of squares 1
    const res3 = squares1.sumOfSquares  //  .toBe(1);

  //  sum of squares 5
    const res4 = squares5.sumOfSquares  //  .toBe(55);

  //  sum of squares 100
    const res5 = squares100.sumOfSquares  //  .toBe(338350);

// ------------------------------------------------


//  "Subtract sum of squares from square of sums

  //  difference of squares 1
    const res6 = squares1.difference  //  .toBe(0);

  //  difference of squares 5
  const res7 = squares5.difference  //  .toBe(170);

  //  difference of squares 100
    const res8 = squares100.difference  //  .toBe(25164150);

// ------------------------------------------------


console.log(res0);
console.log(res1);
console.log(res2);

// ------------------------------------------------

console.log(res3);
console.log(res4);
console.log(res5);

// ------------------------------------------------

console.log(res6);
console.log(res7);
console.log(res8);

