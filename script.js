// go

const getString = (word) => {
  return word.toLowerCase().split("").sort().toString().replaceAll(",", "");
  // return word;
}

const findAnagrams = (word, choices) => {
  const retArray = [];
  let controlWord = getString(word);

  choices.forEach((choice) => {
    let testWord = getString(choice);
    if (testWord === controlWord && choice.toLowerCase() !== word.toLowerCase()) {
      retArray.push(choice);
    }
  });

  return retArray;
};

// -----------------------------------------------

const areSetsEqual = (setA, setB) => {
  return setA.size === setB.size && [...setA].every((val) => setB.has(val));
};

// -----------------------------------------------

//  Anagram

//  "no matches
const expected0 = [];
const actual0 = findAnagrams("diaper", ["hello", "world", "zombies", "pants"]);
const res0 = areSetsEqual(new Set(expected0), new Set(actual0)); //  .toEqual(true);

//  detects two anagrams
  const expected1 = ["lemons", "melons"];
  const actual1 = findAnagrams("solemn", ["lemons", "cherry", "melons"]);
  const res1 = areSetsEqual(new Set(expected1), new Set(actual1)) //  .toEqual(true);

//  does not detect anagram subsets
  const expected2 = [];
  const actual2 = findAnagrams("good", ["dog", "goody"]);
  const res2 = areSetsEqual(new Set(expected2), new Set(actual2)) //  .toEqual(true);

//  detects anagram
  const expected3 = ["inlets"];
  const actual3 = findAnagrams("listen", [
    "enlists",
    "google",
    "inlets",
    "banana",
  ]);
  const res3 = areSetsEqual(new Set(expected3), new Set(actual3)) //  .toEqual(true);

//  detects three anagrams
  const expected4 = ["gallery", "regally", "largely"];
  const actual4 = findAnagrams("allergy", [
    "gallery",
    "ballerina",
    "regally",
    "clergy",
    "largely",
    "leading",
  ]);
  const res4 = areSetsEqual(new Set(expected4), new Set(actual4)) //  .toEqual(true);

//  detects multiple anagrams with different case
  const expected5 = ["Eons", "ONES"];
  const actual5 = findAnagrams("nose", ["Eons", "ONES"]);
  const res5 = areSetsEqual(new Set(expected5), new Set(actual5)) //  .toEqual(true);

//  does not detect non-anagrams with identical checksum
  const expected6 = [];
  const actual6 = findAnagrams("mass", ["last"]);
  const res6 = areSetsEqual(new Set(expected6), new Set(actual6)) //  .toEqual(true);

//  detects anagrams case-insensitively
  const expected7 = ["Carthorse"];
  const actual7 = findAnagrams("Orchestra", [
    "cashregister",
    "Carthorse",
    "radishes",
  ]);
  const res7 = areSetsEqual(new Set(expected7), new Set(actual7)) //  .toEqual(true);

//  detects anagrams using case-insensitive subject
  const expected8 = ["carthorse"];
  const actual8 = findAnagrams("Orchestra", [
    "cashregister",
    "carthorse",
    "radishes",
  ]);
  const res8 = areSetsEqual(new Set(expected8), new Set(actual8)) //  .toEqual(true);

//  detects anagrams using case-insensitive possible matches
  const expected9 = ["Carthorse"];
  const actual9 = findAnagrams("orchestra", [
    "cashregister",
    "Carthorse",
    "radishes",
  ]);
  const res9 = areSetsEqual(new Set(expected9), new Set(actual9)) //  .toEqual(true);

//  does not detect an anagram if the original word is repeated
  const expected10 = [];
  const actual10 = findAnagrams("go", ["goGoGO"]);
  const res10 = areSetsEqual(new Set(expected10), new Set(actual10)) //  .toEqual(true);

//  anagrams must use all letters exactly once
  const expected11 = [];
  const actual11 = findAnagrams("tapper", ["patter"]);
  const res11 = areSetsEqual(new Set(expected11), new Set(actual11)) //  .toEqual(true);

//  words are not anagrams of themselves
  const expected12 = [];
  const actual12 = findAnagrams("BANANA", ["BANANA"]);
  const res12 = areSetsEqual(new Set(expected12), new Set(actual12)) //  .toEqual(true);

//  words are not anagrams of themselves even if letter case is partially different
  const expected13 = [];
  const actual13 = findAnagrams("BANANA", ["Banana"]);
  const res13 = areSetsEqual(new Set(expected13), new Set(actual13)) //  .toEqual(true);

//  words are not anagrams of themselves even if letter case is completely different
  const expected14 = [];
  const actual14 = findAnagrams("BANANA", ["banana"]);
  const res14 = areSetsEqual(new Set(expected14), new Set(actual14)) //  .toEqual(true);

//  words other than themselves can be anagrams
  const expected15 = ["Silent"];
  const actual15 = findAnagrams("LISTEN", ["LISTEN", "Silent"]);
  const res15 = areSetsEqual(new Set(expected15), new Set(actual15)) //  .toEqual(true);

//  handles case of greek letters
  const expected16 = ["ΒΓΑ", "γβα"];
  const actual16 = findAnagrams("ΑΒΓ", ["ΒΓΑ", "ΒΓΔ", "γβα", "αβγ"]);
  const res16 = areSetsEqual(new Set(expected16), new Set(actual16)) //  .toEqual(true);

//  different characters may have the same bytes
  const expected17 = [];
  const actual17 = findAnagrams("a⬂", ["€a"]);
  const res17 = areSetsEqual(new Set(expected17), new Set(actual17)) //  .toEqual(true);

// -----------------------------------------------

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
