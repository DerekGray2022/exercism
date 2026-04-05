// go

class Clock {
  constructor(hrs = 0, mins = 0) {
    [this.hrs, this.mins] = this.calculateTime(hrs, mins);
  }

  calculateTime(hrs, mins){
     //#region Deal with Minutes
    let minPlus = parseInt(mins / 60);
    mins = mins % 60;

    if (mins >= -60 && mins < 0) {
      minPlus -= 1;
    }
    if (mins < 0) {
      mins = 60 + mins;
    }
    //#endregion

    //#region Deal with hours
    hrs = hrs + minPlus;
    hrs = hrs % 24;

    if (hrs < 0) {
      hrs = 24 + hrs;
    }
    if (hrs >= 24) {
      hrs = hrs % 24;
    }
    //#endregion

    return [hrs, mins]
  }

  toString() {
    //#region Compile output
    let output = ``;
    
    this.hrs < 10 && (output += `0`);
    output += `${this.hrs}:`;

    this.mins < 10 && (output += `0`);
    output += `${this.mins}`;
    //#endregion

    return output;
  }

  plus(mins) {
    this.mins += mins;
    return this;
  }

  minus(mins) {
    this.mins -= mins;
    return this;
  }

  equals(clock) {
    let a = this.toString();
    let b = clock.toString();
    
    return a === b;
  }
}

// Creating a new clock with an initial time

// // on the hour
// const res0 = new Clock(8).toString(); //  .toEqual('08:00');

// // past the hour
// const res1 = new Clock(11, 9).toString(); //  .toEqual('11:09');

// // midnight is zero hours
// const res2 = new Clock(24, 0).toString(); //  .toEqual('00:00');

// // hour rolls over
// const res3 = new Clock(25, 0).toString(); //  .toEqual('01:00');

// hour rolls over continuously
const res4 = new Clock(100, 0).toString(); //  .toEqual('04:00');

// sixty minutes is next hour
const res5 = new Clock(1, 60).toString(); //  .toEqual('02:00');

// minutes roll over
const res6 = new Clock(0, 160).toString(); //  .toEqual('02:40');

// minutes roll over continuously
const res7 = new Clock(0, 1723).toString(); //  .toEqual('04:43');

//hour and minutes roll over
const res8 = new Clock(1, 160).toString(); //  .toEqual('03:40');

// hour and minutes roll over continuously
const res9 = new Clock(201, 3001).toString(); // .toEqual('11:01');

// // hour and minutes roll over to exactly midnight
// const res10 = new Clock(72, 8640).toString(); //  .toEqual('00:00');

// // negative hour
// const res11 = new Clock(-1, 15).toString(); //  .toEqual('23:15');

// // negative hour rolls over
// const res12 = new Clock(-25, 0).toString(); //  .toEqual('23:00');

// // negative hour rolls over continuously
// const res13 = new Clock(-91, 0).toString(); //  .toEqual('05:00');

// // negative minutes
// const res14 = new Clock(1, -40).toString(); //  .toEqual('00:20');

// // negative minutes rolls over
// const res15 = new Clock(1, -160).toString(); //  .toEqual('22:20');

// // negative minutes rolls over continuously
// const res16 = new Clock(1, -4820).toString(); //  .toEqual('16:40');

// //  negative sixty minutes is previous hour
// const res20 = new Clock(2, -60).toString(); //  .toEqual("01:00");

// //  negative hour and minutes both roll over
// const res21 = new Clock(-25, -160).toString(); //  .toEqual("20:20");

// //  negative hour and minutes both roll over continuously
// const res22 = new Clock(-121, -5810).toString(); //  .toEqual("22:10");

// -----------------------------------------------------

// //  Adding minutes

  // //  add minutes
  //   const res23 = new Clock(10, 0).plus(3).toString(); //  .toEqual("10:03");

  // //  add no minutes
  //   const res24 = new Clock(6, 41).plus(0).toString() //  .toEqual("06:41");

  // //  add to next hour
  //   const res25 = new Clock(0, 45).plus(40).toString()  //  .toEqual("01:25");

  // //  add more than one hour
  //   const res26 = new Clock(10, 0).plus(61).toString()  //  .toEqual("11:01");

  // //  add more than two hours with carry
  //   const res27 = new Clock(0, 45).plus(160).toString() //  .toEqual("03:25");

  // //  add across midnight
  //   const res28 = new Clock(23, 59).plus(2).toString()  //  .toEqual("00:01");

  // //  add more than one day (1500 min = 25 hrs)
  //   const res29 = new Clock(5, 32).plus(1500).toString()  //  .toEqual("06:32");

  // //  add more than two days
  //   const res30 = new Clock(1, 1).plus(3500).toString()  //  .toEqual("11:21");

//  ----------------------------------------------------

// //  Subtract minutes

  // //  subtract minutes
  //   const res31 = new Clock(10, 3).minus(3).toString()  //  .toEqual("10:00");

  // //  subtract to previous hour
  //   const res32 = new Clock(10, 3).minus(30).toString() //  .toEqual("09:33");

  // //  subtract more than an hour
  //   const res33 = new Clock(10, 3).minus(70).toString() //  .toEqual("08:53");

  // //  subtract across midnight
  //   const res34 = new Clock(0, 3).minus(4).toString() //  .toEqual("23:59");

  // //  subtract more than two hours
  //   const res35 = new Clock(0, 0).minus(160).toString() //  .toEqual("21:20");

  // //  subtract more than two hours with borrow
  //   const res36 = new Clock(6, 15).minus(160).toString()  //  .toEqual("03:35");

  // //  subtract more than one day (1500 min = 25 hrs)
  //   const res37 = new Clock(5, 32).minus(1500).toString() //  .toEqual("04:32");

  // //  subtract more than two days
  //   const res38 = new Clock(2, 20).minus(3000).toString() //  .toEqual("00:20");

// -----------------------------------------------------

// //  Compare two clocks for equality

  // //  clocks with same time
  //   const res39 = new Clock(15, 37).equals(new Clock(15, 37)) //  .toBe(true);

  // //  clocks a minute apart
  //   const res40 = new Clock(15, 36).equals(new Clock(15, 37)) //  .toBe(false);

  // //  clocks an hour apart
  //   const res41 = new Clock(14, 37).equals(new Clock(15, 37)) //  .toBe(false);

  // // clocks with hour overflow
  //   const res42 = new Clock(10, 37).equals(new Clock(34, 37)) //  .toBe(true);

  // //  clocks with hour overflow by several days
  //   const res43 = new Clock(3, 11).equals(new Clock(99, 11))  //  .toBe(true);

  // //  clocks with negative hour
  //   const res44 = new Clock(22, 40).equals(new Clock(-2, 40)) //  .toBe(true);

  // //  clocks with negative hour that wraps
  //   const res45 = new Clock(17, 3).equals(new Clock(-31, 3))  //  .toBe(true);

  // //  clocks with negative hour that wraps multiple times
  //   const res46 = new Clock(13, 49).equals(new Clock(-83, 49))  //  .toBe(true);

  // //  clocks with minute overflow
  //   const res47 = new Clock(0, 1).equals(new Clock(0, 1441))  //  .toBe(true);

  // //  clocks with minute overflow by several days
  //   const res48 = new Clock(2, 2).equals(new Clock(2, 4322))  //  .toBe(true);

  // //  clocks with negative minute
  //   const res49 = new Clock(2, 40).equals(new Clock(3, -20))  //  .toBe(true);

  // //  clocks with negative minute that wraps
  //   const res50 = new Clock(4, 10).equals(new Clock(5, -1490))  //  .toBe(true);

  // //  clocks with negative minute that wraps multiple times
  //   const res51 = new Clock(6, 15).equals(new Clock(6, -4305))  //  .toBe(true);

  // //  clocks with negative hours and minutes
  //   const res52 = new Clock(7, 32).equals(new Clock(-12, -268)) //  .toBe(true);

  // //  clocks with negative hours and minutes that wrap
  //   const res53 = new Clock(18, 7).equals(new Clock(-54, -11513)) //  .toBe(true);

  // //  full clock and zeroed clock
  //   const res54 = new Clock(24, 0).equals(new Clock(0, 0))  //  .toBe(true);

// -----------------------------------------------------

// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);
// console.log(res10);
// console.log(res11);
// console.log(res12);
// console.log(res13);
// console.log(res14);
// console.log(res15);
// console.log(res16);
// console.log(res20);
// console.log(res21);
// console.log(res22);

// -----------------------------------------------------

// console.log(res23);
// console.log(res24);
// console.log(res25);
// console.log(res26);
// console.log(res27);
// console.log(res28);
// console.log(res29);
// console.log(res30);

// -----------------------------------------------------

// console.log(res31);
// console.log(res32);
// console.log(res33);
// console.log(res34);
// console.log(res35);
// console.log(res36);
// console.log(res37);
// console.log(res38);

// -----------------------------------------------------

// console.log(res39);
// console.log(res40);
// console.log(res41);
// console.log(res42);
// console.log(res43);
// console.log(res44);
// console.log(res45);
// console.log(res46);
// console.log(res47);
// console.log(res48);
// console.log(res49);
// console.log(res50);
// console.log(res51);
// console.log(res52);
// console.log(res53);
// console.log(res54);
