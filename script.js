// go

// The list of items (and their value) that were tested are:
// 255 / x
// eggs (1)
// peanuts (2)                            127   1
// shellfish (4)                              63   3
// strawberries (8)                        31   7
// tomatoes (16)                          15   15
// chocolate (32)                            7   31
// pollen (64)                                  3   63
// cats (128)                                   1   127

// --------------------------------------------

const allergyObject = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats",
};

class Allergies {
  constructor(num) {
    this.number = num;
    this.iterator = 1;
    this.allergyArray = [];

    while (this.number > 255) this.number -= 256;

    //#region Collect allergy indices
    while (this.number > 0) {
      while (this.iterator > this.number) this.iterator /= 2;
      const condition = Math.floor(this.number / this.iterator) === 1;
      if (condition) {
        this.number -= this.iterator;
        this.allergyArray.push(this.iterator);
        this.iterator === 1 ? this.iterator = 0 : this.iterator /= 2;
      } else {
        this.iterator *= 2;
      }
    }
    //#endregion
  }

  list() {
    const listArray = [];
    for (const id of this.allergyArray) {
      listArray.push(allergyObject[id]);
    }
    listArray.reverse();

    return listArray;
  }

  allergicTo(allergy) {
    if (this.allergyArray.length > 0) {
      for (const id of this.allergyArray) {
        if (allergyObject[id] === allergy) {
          return true;
        }
      }
    }

    return false;
  }
}
// ---------------------------------------------

//  Allergies

//  testing for eggs allergy

// //  not allergic to anything
// const allergies0 = new Allergies(0);
// const res0 = allergies0.allergicTo("eggs"); //  .toEqual(false);

// //  allergic only to eggs
// const allergies1 = new Allergies(1);
// const res1 = allergies1.allergicTo("eggs"); //  .toEqual(true);

// //  allergic to eggs and something else
// const allergies2 = new Allergies(3);
// const res2 = allergies2.allergicTo("eggs"); //  .toEqual(true);

// //  allergic to something, but not eggs
// const allergies3 = new Allergies(2);
// const res3 = allergies3.allergicTo("eggs"); //  .toEqual(false);

// //  allergic to everything
// const allergies4 = new Allergies(255);
// const res4 = allergies4.allergicTo("eggs"); //  .toEqual(true);

//-----------------------------------------------

//  testing for peanuts allergy

// //  not allergic to anything
// const allergies5 = new Allergies(0);
// const res5 = allergies5.allergicTo("peanuts"); //  .toEqual(false);

// //  allergic only to peanuts
// const allergies6 = new Allergies(2);
// const res6 = allergies6.allergicTo("peanuts"); //  .toEqual(true);

// //  allergic to peanuts and something else
// const allergies7 = new Allergies(7);
// const res7 = allergies7.allergicTo("peanuts"); //  .toEqual(true);

// //  allergic to something, but not peanuts
// const allergies8 = new Allergies(5);
// const res8 = allergies8.allergicTo("peanuts"); //  .toEqual(false);

// //  allergic to everything
// const allergies9 = new Allergies(255);
// const res9 = allergies9.allergicTo("peanuts"); //  .toEqual(true);

//-----------------------------------------------

//  testing for shellfish allergy

// //  not allergic to anything
// const allergies10 = new Allergies(0);
// const res10 = allergies10.allergicTo("shellfish"); //  .toEqual(false);

// //  allergic only to shellfish
// const allergies11 = new Allergies(4);
// const res11 = allergies11.allergicTo("shellfish"); //  .toEqual(true);

// //  allergic to shellfish and something else
// const allergies12 = new Allergies(14);
// const res12 = allergies12.allergicTo("shellfish"); //  .toEqual(true);

// //  allergic to something, but not shellfish
// const allergies13 = new Allergies(10);
// const res13 = allergies13.allergicTo("shellfish"); //  .toEqual(false);

// //  allergic to everything
// const allergies14 = new Allergies(255);
// const res14 = allergies14.allergicTo("shellfish"); //  .toEqual(true);

//-----------------------------------------------

//  testing for strawberries allergy

// //  not allergic to anything
// const allergies15 = new Allergies(0);
// const res15 = allergies15.allergicTo("strawberries"); //  .toEqual(false);

// //  allergic only to strawberries
// const allergies16 = new Allergies(8);
// const res16 = allergies16.allergicTo("strawberries"); //  .toEqual(true);

// //  allergic to strawberries and something else
// const allergies17 = new Allergies(28);
// const res17 = allergies17.allergicTo("strawberries"); //  .toEqual(true);

// //  allergic to something, but not strawberries
// const allergies18 = new Allergies(20);
// const res18 = allergies18.allergicTo("strawberries"); //  .toEqual(false);

// //  allergic to everything
// const allergies19 = new Allergies(255);
// const res19 = allergies19.allergicTo("strawberries"); //  .toEqual(true);

//-----------------------------------------------

//  testing for tomatoes allergy

// //  not allergic to anything
// const allergies20 = new Allergies(0);
// const res20 = allergies20.allergicTo("tomatoes"); //  .toEqual(false);

// //  allergic only to tomatoes
// const allergies21 = new Allergies(16);
// const res21 = allergies21.allergicTo("tomatoes"); //  .toEqual(true);

// //  allergic to tomatoes and something else
// const allergies22 = new Allergies(56);
// const res22 = allergies22.allergicTo("tomatoes"); //  .toEqual(true);

// //  allergic to something, but not tomatoes
// const allergies23 = new Allergies(40);
// const res23 = allergies23.allergicTo("tomatoes"); //  .toEqual(false);

// //  allergic to everything
// const allergies24 = new Allergies(255);
// const res24 = allergies24.allergicTo("tomatoes"); //  .toEqual(true);

//-----------------------------------------------

//  testing for chocolate allergy

// //  not allergic to anything
// const allergies25 = new Allergies(0);
// const res25 = allergies25.allergicTo("chocolate"); //  .toEqual(false);

// //  allergic only to chocolate
// const allergies26 = new Allergies(32);
// const res26 = allergies26.allergicTo("chocolate"); //  .toEqual(true);

// //  allergic to chocolate and something else
// const allergies27 = new Allergies(112);
// const res27 = allergies27.allergicTo("chocolate"); //  .toEqual(true);

// //  allergic to something, but not chocolate
// const allergies28 = new Allergies(80);
// const res28 = allergies28.allergicTo("chocolate"); //  .toEqual(false);

// //  allergic to everything
// const allergies29 = new Allergies(255);
// const res29 = allergies29.allergicTo("chocolate"); //  .toEqual(true);

//-----------------------------------------------

//  testing for pollen allergy

// //  not allergic to anything
// const allergies30 = new Allergies(0);
// const res30 = allergies30.allergicTo("pollen"); //  .toEqual(false);

// //  allergic only to pollen
// const allergies31 = new Allergies(64);
// const res31 = allergies31.allergicTo("pollen"); //  .toEqual(true);

// //  allergic to pollen and something else
// const allergies32 = new Allergies(224);
// const res32 = allergies32.allergicTo("pollen"); //  .toEqual(true);

// //  allergic to something, but not pollen
// const allergies33 = new Allergies(160);
// const res33 = allergies33.allergicTo("pollen"); //  .toEqual(false);

// //  allergic to everything
// const allergies34 = new Allergies(255);
// const res34 = allergies34.allergicTo("pollen"); //  .toEqual(true);

//-----------------------------------------------

//  testing for cats allergy

// //not allergic to anything
// const allergies35 = new Allergies(0);
// const res35 = allergies35.allergicTo("cats"); //  .toEqual(false);

// //  allergic only to cats
// const allergies36 = new Allergies(128);
// const res36 = allergies36.allergicTo("cats"); //  .toEqual(true);

// //  allergic to cats and something else
// const allergies37 = new Allergies(192);
// const res37 = allergies37.allergicTo("cats"); //  .toEqual(true);

// //  "allergic to something, but not cats
// const allergies38 = new Allergies(64);
// const res38 = allergies38.allergicTo("cats"); //  .toEqual(false);

// //  allergic to everything
// const allergies39 = new Allergies(255);
// const res39 = allergies39.allergicTo("cats"); //  .toEqual(true);

//-----------------------------------------------

//  list when:

//  no allergies
  const allergies40 = new Allergies(0);
  const res40 = allergies40.list() //  .toEqual([]);

//  just eggs
  const allergies41 = new Allergies(1);
  const res41 = allergies41.list()  //  .toEqual(["eggs"]);

//  just peanuts
  const allergies42 = new Allergies(2);
  const res42 = allergies42.list() //  .toEqual(["peanuts"]);

//  just strawberries
  const allergies43 = new Allergies(8);
  const res43 = allergies43.list()  //  .toEqual(["strawberries"]);

//  eggs and peanuts
  const allergies44 = new Allergies(3);
  const res44 = allergies44.list() //  .toEqual(["eggs", "peanuts"]);

//  more than eggs but not peanuts
  const allergies45 = new Allergies(5);
  const res45 = allergies45.list() //  .toEqual(["eggs", "shellfish"]);

//  lots of stuff
  const allergies46 = new Allergies(248);
  const res46 = allergies46.list() //  .toEqual(["strawberries", "tomatoes", "chocolate", "pollen", "cats",]);

//  everything
  const allergies47 = new Allergies(255);
  const res47 = allergies47.list()  //  .toEqual(["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats",]);

//  no allergen score parts
  const allergies48 = new Allergies(509);
  const res48 = allergies48.list() //  .toEqual(["eggs", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats",]);

//  no allergen score parts without highest valid score
  const allergies49 = new Allergies(257);
  const res49 = allergies49.list() //  .toEqual(["eggs"]);

//-----------------------------------------------

// console.log(res0);
// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);

//-----------------------------------------------

// console.log(res5);
// console.log(res6);
// console.log(res7);
// console.log(res8);
// console.log(res9);

//-----------------------------------------------

// console.log(res10);
// console.log(res11);
// console.log(res12);
// console.log(res13);
// console.log(res14);

//-----------------------------------------------

// console.log(res15);
// console.log(res16);
// console.log(res17);
// console.log(res18);
// console.log(res19);

//-----------------------------------------------

// console.log(res20);
// console.log(res21);
// console.log(res22);
// console.log(res23);
// console.log(res24);

//-----------------------------------------------

// console.log(res25);
// console.log(res26);
// console.log(res27);
// console.log(res28);
// console.log(res29);

//-----------------------------------------------

// console.log(res30);
// console.log(res31);
// console.log(res32);
// console.log(res33);
// console.log(res34);

//-----------------------------------------------

// console.log(res35);
// console.log(res36);
// console.log(res37);
// console.log(res38);
// console.log(res39);

//-----------------------------------------------

console.log(res40);
console.log(res41);
console.log(res42);
console.log(res43);
console.log(res44);
console.log(res45);
console.log(res46);
console.log(res47);
console.log(res48);
console.log(res49);
