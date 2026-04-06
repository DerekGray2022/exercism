// go

// year | month | date | hour | minutes | seconds | milliseconds

const meetup = (year, month, ord, day) => {
  // const output = new Date(year, month);
  const loopEnd = new Date(year, month + 1, 0).getDate(); //  Number of days in this month

  day = day.substring(0, 3);
  month -= 1;
  let res;

  const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const ordArr = {
    teenth: 13,
    first: 1,
    second: 8,
    third: 15,
    fourth: 22,
    last: loopEnd,
  };
  const loopStart = ordArr[ord];

  if (ord === "last") {
    for (let x = loopStart; x > 0; x--) {
      let newDay = new Date(year, month, x);
      res = daysArr[newDay.getDay()] === day;
      if (res) {
        res = new Date(year, month, x);
        return res;
      }
    }
  }

  for (let x = loopStart; x < loopEnd; x++) {
    let newDay = new Date(year, month, x);
    res = daysArr[newDay.getDay()] === day;
    if (res) {
      res = new Date(year, month, x);
      return res;
    }
  }
};

// --------------------------------------------

// //   "Meetup"

//   //  "monteenth of May 2013"
//     const res0 = meetup(2013, 5, "teenth", "Monday")  //  .toEqual(new Date(2013, 4, 13));

// //  "monteenth of August 2013"
//   const res1 = meetup(2013, 8, "teenth", "Monday")  //  .toEqual(new Date(2013, 7, 19));

// //  monteenth of September 2013"
//   const res2 = meetup(2013, 9, "teenth", "Monday")  //  .toEqual(new Date(2013, 8, 16));

// //  "tuesteenth of March 2013"
//   const res3 = meetup(2013, 3, "teenth", "Tuesday") //  .toEqual(new Date(2013, 2, 19));

// //  "tuesteenth of April 2013"
//   const res4 = meetup(2013, 4, "teenth", "Tuesday") //  .toEqual(new Date(2013, 3, 16));

// //  "tuesteenth of August 2013"
//   const res5 = meetup(2013, 8, "teenth", "Tuesday") //  .toEqual(new Date(2013, 7, 13));

// //  "wednesteenth of January 2013"
//   const res6 = meetup(2013, 1, "teenth", "Wednesday") //.toEqual(new Date(2013, 0, 16),);

// //  "wednesteenth of February 2013"
//   const res7 = meetup(2013, 2, "teenth", "Wednesday") //  .toEqual(new Date(2013, 1, 13),);

// //  "wednesteenth of June 2013"
//   const res8 = meetup(2013, 6, "teenth", "Wednesday") //  .toEqual(new Date(2013, 5, 19),);

// //  "thursteenth of May 2013"
//   const res9 = meetup(2013, 5, "teenth", "Thursday")  //  .toEqual(new Date(2013, 4, 16),);

// //  "thursteenth of June 2013"
//   const res10 = meetup(2013, 6, "teenth", "Thursday")  //  .toEqual(new Date(2013, 5, 13),);

// //  "thursteenth of September 2013"
//   const res11 = meetup(2013, 9, "teenth", "Thursday")  //  .toEqual(new Date(2013, 8, 19),);

// //  "friteenth of April 2013"
//   const res12 = meetup(2013, 4, "teenth", "Friday")  //  .toEqual(new Date(2013, 3, 19));

// //  "friteenth of August 2013"
//   const res13 = meetup(2013, 8, "teenth", "Friday")  //  .toEqual(new Date(2013, 7, 16));

// //  "friteenth of September 2013"
//   const res14 = meetup(2013, 9, "teenth", "Friday")  //  .toEqual(new Date(2013, 8, 13));

// //  "saturteenth of February 2013"
//   const res15 = meetup(2013, 2, "teenth", "Saturday")  //  .toEqual(new Date(2013, 1, 16),);

// //  "saturteenth of April 2013"
//   const res16 = meetup(2013, 4, "teenth", "Saturday")  //  .toEqual(new Date(2013, 3, 13),);

// //  "saturteenth of October 2013"
//   const res17 = meetup(2013, 10, "teenth", "Saturday") //  .toEqual(new Date(2013, 9, 19),);

// //  "sunteenth of May 2013"
//   const res18 = meetup(2013, 5, "teenth", "Sunday")  //  .toEqual(new Date(2013, 4, 19));

// //  "sunteenth of June 2013"
//   const res19 = meetup(2013, 6, "teenth", "Sunday")  //  .toEqual(new Date(2013, 5, 16));

// //  "sunteenth of October 2013"
//   const res20 = meetup(2013, 10, "teenth", "Sunday") // .toEqual(new Date(2013, 9, 13));

// ----------------------------------------

// //  "first Monday of March 2013"
// const res21 = meetup(2013, 3, "first", "Monday"); //  .toEqual(new Date(2013, 2, 4));

// //  "first Monday of April 2013"
// const res22 = meetup(2013, 4, "first", "Monday"); //  .toEqual(new Date(2013, 3, 1));

// //  "first Tuesday of May 2013"
// const res23 = meetup(2013, 5, "first", "Tuesday"); //  .toEqual(new Date(2013, 4, 7));

// //  "first Tuesday of June 2013"
// const res24 = meetup(2013, 6, "first", "Tuesday"); //  .toEqual(new Date(2013, 5, 4));

// //  "first Wednesday of July 2013"
// const res25 = meetup(2013, 7, "first", "Wednesday"); //  .toEqual(new Date(2013, 6, 3));

// //  "first Wednesday of August 2013"
// const res26 = meetup(2013, 8, "first", "Wednesday"); //  .toEqual(new Date(2013, 7, 7));

// //  "first Thursday of September 2013"
// const res27 = meetup(2013, 9, "first", "Thursday"); //  .toEqual(new Date(2013, 8, 5));

// //  "first Thursday of October 2013"
// const res28 = meetup(2013, 10, "first", "Thursday"); //  .toEqual(new Date(2013, 9, 3));

// //  "first Friday of November 2013"
// const res29 = meetup(2013, 11, "first", "Friday"); //  .toEqual(new Date(2013, 10, 1));

// //  "first Friday of December 2013"
// const res30 = meetup(2013, 12, "first", "Friday"); //  .toEqual(new Date(2013, 11, 6));

// //  "first Saturday of January 2013"
// const res31 = meetup(2013, 1, "first", "Saturday"); //  .toEqual(new Date(2013, 0, 5));

// //  "first Saturday of February 2013"
// const res32 = meetup(2013, 2, "first", "Saturday"); //  .toEqual(new Date(2013, 1, 2));

// //  "first Sunday of March 2013"
// const res33 = meetup(2013, 3, "first", "Sunday"); //  .toEqual(new Date(2013, 2, 3));

// //  "first Sunday of April 2013"
// const res34 = meetup(2013, 4, "first", "Sunday"); //  .toEqual(new Date(2013, 3, 7));

// ----------------------------------------

// //  "second Monday of March 2013"
//   const res35 = meetup(2013, 3, "second", "Monday")  //  .toEqual(new Date(2013, 2, 11));

// //  "second Monday of April 2013"
//   const res36 = meetup(2013, 4, "second", "Monday")  //  .toEqual(new Date(2013, 3, 8));

// //  "second Tuesday of May 2013"
//   const res37 = meetup(2013, 5, "second", "Tuesday") //  .toEqual(new Date(2013, 4, 14));

// //  "second Tuesday of June 2013"
//   const res38 = meetup(2013, 6, "second", "Tuesday") //  .toEqual(new Date(2013, 5, 11));

// //  "second Wednesday of July 2013"
//   const res39 = meetup(2013, 7, "second", "Wednesday") //  .toEqual(new Date(2013, 6, 10),);

// //  "second Wednesday of August 2013"
//   const res40 = meetup(2013, 8, "second", "Wednesday") //  .toEqual(new Date(2013, 7, 14),)

// //  "second Thursday of September 2013"
//   const res41 = meetup(2013, 9, "second", "Thursday")  //  .toEqual(new Date(2013, 8, 12),)

// //  "second Thursday of October 2013"
//   const res42 = meetup(2013, 10, "second", "Thursday") //  .toEqual(new Date(2013, 9, 10),)

// //  "second Friday of November 2013"
//   const res43 = meetup(2013, 11, "second", "Friday") //  .toEqual(new Date(2013, 10, 8))

// //  "second Friday of December 2013"
//   const res44 = meetup(2013, 12, "second", "Friday") //  .toEqual(new Date(2013, 11, 13),)

// //  "second Saturday of January 2013"
//   const res45 = meetup(2013, 1, "second", "Saturday")  //  .toEqual(new Date(2013, 0, 12),)

// //  "second Saturday of February 2013"
//   const res46 = meetup(2013, 2, "second", "Saturday")  //  .toEqual(new Date(2013, 1, 9))

// //  "second Sunday of March 2013"
//   const res47 = meetup(2013, 3, "second", "Sunday")  //  .toEqual(new Date(2013, 2, 10))

// //  "second Sunday of April 2013"
//   const res48 = meetup(2013, 4, "second", "Sunday")  //  .toEqual(new Date(2013, 3, 14))

// ----------------------------------------

// //  "third Monday of March 2013"
//   const res49 = meetup(2013, 3, "third", "Monday") //  .toEqual(new Date(2013, 2, 18))

// //  "third Monday of April 2013"
//   const res50 = meetup(2013, 4, "third", "Monday") //  .toEqual(new Date(2013, 3, 15));

// //  "third Tuesday of May 2013"
//   const res51 = meetup(2013, 5, "third", "Tuesday")  //.toEqual(new Date(2013, 4, 21));

// //  "third Tuesday of June 2013"
//   const res52 = meetup(2013, 6, "third", "Tuesday")  //.toEqual(new Date(2013, 5, 18));

// //  "third Wednesday of July 2013"
//   const res53 = meetup(2013, 7, "third", "Wednesday")  //.toEqual(new Date(2013, 6, 17),);

// //  "third Wednesday of August 2013"
//   const res54 = meetup(2013, 8, "third", "Wednesday")  //.toEqual(new Date(2013, 7, 21),);

// //  "third Thursday of September 2013"
//   const res55 = meetup(2013, 9, "third", "Thursday") //.toEqual(new Date(2013, 8, 19));

// //  "third Thursday of October 2013"
//   const res56 = meetup(2013, 10, "third", "Thursday")  //.toEqual(new Date(2013, 9, 17),);

// //  "third Friday of November 2013"
//   const res57 = meetup(2013, 11, "third", "Friday")  //.toEqual(new Date(2013, 10, 15));

// //  "third Friday of December 2013"
//   const res58 = meetup(2013, 12, "third", "Friday")  //.toEqual(new Date(2013, 11, 20));

// //  "third Saturday of January 2013"
//   const res59 = meetup(2013, 1, "third", "Saturday") //  .toEqual(new Date(2013, 0, 19));

// //  "third Saturday of February 2013"
//   const res60 = meetup(2013, 2, "third", "Saturday") //  .toEqual(new Date(2013, 1, 16));

// //  "third Sunday of March 2013"
//   const res61 = meetup(2013, 3, "third", "Sunday") //  .toEqual(new Date(2013, 2, 17));

// //  "third Sunday of April 2013"
//   const res62 = meetup(2013, 4, "third", "Sunday") //  .toEqual(new Date(2013, 3, 21));

// ----------------------------------------

// //  "fourth Monday of March 2013"
//   const res63 = meetup(2013, 3, "fourth", "Monday")  //  .toEqual(new Date(2013, 2, 25));

// //  "fourth Monday of April 2013"
//   const res64 = meetup(2013, 4, "fourth", "Monday")  //  .toEqual(new Date(2013, 3, 22));

// //  "fourth Tuesday of May 2013"
//   const res65 = meetup(2013, 5, "fourth", "Tuesday") //  .toEqual(new Date(2013, 4, 28));

// //  "fourth Tuesday of June 2013"
//   const res66 = meetup(2013, 6, "fourth", "Tuesday") //  .toEqual(new Date(2013, 5, 25));

// //  "fourth Wednesday of July 2013"
//   const res67 = meetup(2013, 7, "fourth", "Wednesday") //  .toEqual(new Date(2013, 6, 24),);

// //  "fourth Wednesday of August 2013"
//   const res68 = meetup(2013, 8, "fourth", "Wednesday") //  .toEqual(new Date(2013, 7, 28),);

// //  "fourth Thursday of September 2013"
//   const res69 = meetup(2013, 9, "fourth", "Thursday")  //  .toEqual(new Date(2013, 8, 26),);

// //  "fourth Thursday of October 2013"
//   const res70 = meetup(2013, 10, "fourth", "Thursday") //  .toEqual(new Date(2013, 9, 24),);

// //  "fourth Friday of November 2013"
//   const res71 = meetup(2013, 11, "fourth", "Friday") //  .toEqual(new Date(2013, 10, 22),);

// //  "fourth Friday of December 2013"
//   const res72 = meetup(2013, 12, "fourth", "Friday") //  .toEqual(new Date(2013, 11, 27),);

// //  "fourth Saturday of January 2013"
//   const res73 = meetup(2013, 1, "fourth", "Saturday")  //  .toEqual(new Date(2013, 0, 26),);

// //  "fourth Saturday of February 2013"
//   const res74 = meetup(2013, 2, "fourth", "Saturday")  //  .toEqual(new Date(2013, 1, 23),);

// //  "fourth Sunday of March 2013"
//   const res75 = meetup(2013, 3, "fourth", "Sunday")  //  .toEqual(new Date(2013, 2, 24));

// //  "fourth Sunday of April 2013"
//   const res76 = meetup(2013, 4, "fourth", "Sunday")  //  .toEqual(new Date(2013, 3, 28));

// ----------------------------------------

// //  "last Monday of March 2013"
//   const res77 = meetup(2013, 3, "last", "Monday")  //  .toEqual(new Date(2013, 2, 25));

// //  "last Monday of April 2013"
//   const res78 = meetup(2013, 4, "last", "Monday")  //  .toEqual(new Date(2013, 3, 29));

// //  "last Tuesday of May 2013"
//   const res79 = meetup(2013, 5, "last", "Tuesday") //  .toEqual(new Date(2013, 4, 28));

// //  "last Tuesday of June 2013, () => {
//   const res80 = meetup(2013, 6, "last", "Tuesday") //  .toEqual(new Date(2013, 5, 25));

// //  "last Wednesday of July 2013"
//   const res81 = meetup(2013, 7, "last", "Wednesday") //  .toEqual(new Date(2013, 6, 31));

// //  "last Wednesday of August 2013"
//   const res82 = meetup(2013, 8, "last", "Wednesday") //  .toEqual(new Date(2013, 7, 28));

// //  "last Thursday of September 2013"
//   const res83 = meetup(2013, 9, "last", "Thursday")  //  .toEqual(new Date(2013, 8, 26));

// //  "last Thursday of October 2013"
//   const res84 = meetup(2013, 10, "last", "Thursday") //  .toEqual(new Date(2013, 9, 31));

// //  "last Friday of November 2013"
//   const res85 = meetup(2013, 11, "last", "Friday") //  .toEqual(new Date(2013, 10, 29));

// //  "last Friday of December 2013"
//   const res86 = meetup(2013, 12, "last", "Friday") //  .toEqual(new Date(2013, 11, 27));

// //  "last Saturday of January 2013"
//   const res87 = meetup(2013, 1, "last", "Saturday")  //  .toEqual(new Date(2013, 0, 26));

//  "last Saturday of February 2013"
  const res88 = meetup(2013, 2, "last", "Saturday")  //  .toEqual(new Date(2013, 1, 23));

// //  "last Sunday of March 2013"
//   const res89 = meetup(2013, 3, "last", "Sunday")  //  .toEqual(new Date(2013, 2, 31));

// //  "last Sunday of April 2013"
//   const res90 = meetup(2013, 4, "last", "Sunday")//  .toEqual(new Date(2013, 3, 28));

// //  "last Wednesday of February 2012"
//   const res91 = meetup(2012, 2, "last", "Wednesday") //  .toEqual(new Date(2012, 1, 29));

// //  "last Wednesday of December 2014"
//   const res92 = meetup(2014, 12, "last", "Wednesday") //  .toEqual(new Date(2014, 11, 31),);

//  "last Sunday of February 2015"
  const res93 = meetup(2015, 2, "last", "Sunday") //  .toEqual(new Date(2015, 1, 22));

// //  "first Friday of December 2012"
//   const res94 = meetup(2012, 12, "first", "Friday") //  .toEqual(new Date(2012, 11, 7));

// ------------------------------------------

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
// console.log(res12);
// console.log(res13);
// console.log(res14);
// console.log(res15);
// console.log(res16);
// console.log(res17);
// console.log(res18);
// console.log(res19);
// console.log(res20);

// ----------------------------------------

// console.log(res21);
// console.log(res22);
// console.log(res23);
// console.log(res24);
// console.log(res25);
// console.log(res26);
// console.log(res27);
// console.log(res28);
// console.log(res29);
// console.log(res30);
// console.log(res31);
// console.log(res32);
// console.log(res33);
// console.log(res34);

// ----------------------------------------

// console.log(res35);
// console.log(res36);
// console.log(res37);
// console.log(res38);
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

// ----------------------------------------

// console.log(res49);
// console.log(res50);
// console.log(res51);
// console.log(res52);
// console.log(res53);
// console.log(res54);
// console.log(res55);
// console.log(res56);
// console.log(res57);
// console.log(res58);
// console.log(res59);
// console.log(res60);
// console.log(res61);
// console.log(res62);

// ----------------------------------------

// console.log(res63);
// console.log(res64);
// console.log(res65);
// console.log(res66);
// console.log(res67);
// console.log(res68);
// console.log(res69);
// console.log(res70);
// console.log(res71);
// console.log(res72);
// console.log(res73);
// console.log(res74);
// console.log(res75);
// console.log(res76);

// ----------------------------------------

// console.log(res77);
// console.log(res78);
// console.log(res79);
// console.log(res80);
// console.log(res81);
// console.log(res82);
// console.log(res83);
// console.log(res84);
// console.log(res85);
// console.log(res86);
// console.log(res87);
console.log(res88);
// console.log(res89);
// console.log(res90);
// console.log(res91);
// console.log(res92);
console.log(res93);
// console.log(res94);