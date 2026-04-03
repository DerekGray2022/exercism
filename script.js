// go

// a + b ≥ c
// b + c ≥ a
// c + a ≥ b

class Triangle {
  constructor(...sides) {
    const [a, b, c] = [...sides];
    this.a = a;
    this.b = b;
    this.c = c;
    this.one = this.a + this.b >= this.c;
    this.two = this.b + this.c >= this.a;
    this.three = this.c + this.a >= this.b;
    this.zero = this.a === 0 || this.b === 0 || this.c === 0;
    this.output = false;

    this.isTriangle = () => {
      if (!this.one || !this.two || !this.three || this.zero) {
        this.output = false;
      }
      return this.output;
    };
  }

  get isEquilateral() {
    if (this.a === this.b && this.b === this.c) {
      this.output = true;
    } 
    this.isTriangle();
    return this.output;
  }

  get isIsosceles() {
    if (this.a === this.b || this.b === this.c || this.c === this.a) {
      this.output = true;
    }
    this.isTriangle();
    return this.output;
  }

  get isScalene() {
    if (this.a !== this.b && this.b !== this.c && this.c !== this.a) {
      this.output = true;
    }
    this.isTriangle();
    return this.output;
  }
}

// equilateral triangle

// all sides are equal
const triangle0 = new Triangle(2, 2, 2);
const res0 = triangle0.isEquilateral; //  .toBe(true);

// any side is unequal
const triangle1 = new Triangle(2, 3, 2);
const res1 = triangle1.isEquilateral; //  .toBe(false);

// no sides are equal
const triangle2 = new Triangle(5, 4, 6);
const res2 = triangle2.isEquilateral; //  .toBe(false);

// all zero sides is not a triangle
const triangle3 = new Triangle(0, 0, 0);
const res3 = triangle3.isEquilateral; //  .toBe(false);

// sides may be floats
const triangle4 = new Triangle(0.5, 0.5, 0.5);
const res4 = triangle4.isEquilateral; //  .toBe(true);

// --------------------------------------------------

// isosceles triangle

// // last two sides are equal
// const triangle5 = new Triangle(3, 4, 4);
// const res5 = triangle5.isIsosceles; //  .toBe(true);

// // first two sides are equal
// const triangle6 = new Triangle(4, 4, 3);
// const res6 = triangle6.isIsosceles; //  .toBe(true);

// // first and last sides are equal
// const triangle7 = new Triangle(4, 3, 4);
// const res7 = triangle7.isIsosceles; //  .toBe(true);

// // equilateral triangles are also isosceles
// const triangle8 = new Triangle(4, 4, 4);
// const res8 = triangle8.isIsosceles; //  .toBe(true);

// // no sides are equal
// const triangle9 = new Triangle(2, 3, 4);
// const res9 = triangle9.isIsosceles; //  .toBe(false);

// // first triangle inequality violation
// const triangle10 = new Triangle(1, 1, 3);
// const res10 = triangle10.isIsosceles; //  .toBe(false);

// // second triangle inequality violation
// const triangle11 = new Triangle(1, 3, 1);
// const res11 = triangle11.isIsosceles; //  .toBe(false);

// // third triangle inequality violation
// const triangle12 = new Triangle(3, 1, 1);
// const res12 = triangle12.isIsosceles; //  .toBe(false);

// // sides may be floats
// const triangle13 = new Triangle(0.5, 0.4, 0.5);
// const res13 = triangle13.isIsosceles; //  .toBe(true);

// -----------------------------------------

// scalene triangle

// // no sides are equal
// const triangle14 = new Triangle(5, 4, 6);
// const res14 = triangle14.isScalene; //  .toBe(true);

// // all sides are equal
// const triangle15 = new Triangle(4, 4, 4);
// const res15 = triangle15.isScalene; //  .toBe(false);

// // first and second sides are equal
// const triangle16 = new Triangle(4, 4, 3);
// const res16 = triangle16.isScalene; //  .toBe(false);

// // first and third sides are equal
// const triangle17 = new Triangle(3, 4, 3);
// const res17 = triangle17.isScalene; //  .toBe(false);

// // second and third sides are equal
// const triangle18 = new Triangle(4, 3, 3);
// const res18 = triangle18.isScalene; //  .toBe(false);

// // may not violate triangle inequality
// const triangle19 = new Triangle(7, 3, 2);
// const res19 = triangle19.isScalene; //  .toBe(false);

// // sides may be floats
// const triangle20 = new Triangle(0.5, 0.4, 0.6);
// const res20 = triangle20.isScalene; //  .toBe(true);

console.log(res0);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
// ----------------------------------------------
// console.log(res5);
// console.log(res6);
// console.log(res7);
// console.log(res8);
// console.log(res9);
// console.log(res10);
// console.log(res11);
// console.log(res12);
// console.log(res13);
// // ----------------------------------------------
// console.log(res14);
// console.log(res15);
// console.log(res16);
// console.log(res17);
// console.log(res18);
// console.log(res19);
// console.log(res20);
