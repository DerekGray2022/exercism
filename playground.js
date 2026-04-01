let str = "What is 1 2 plus?";
let num = str.match(/-?\d+/g);
let op = str.match(/plus|minus|multiplied|divided/gi);
let arr = [];

for (let x = 0; x < num.length; x++) {
  let temp = [];
  temp.push(num[x]);
  temp.push(str.indexOf(num[x]));
  arr.push(temp);

  if (x < num.length - 1) {
    let temp = [];
    temp.push(op[x]);
    temp.push(str.indexOf(op[x]));
    arr.push(temp);
  }
}

arr.sort(compareIndices);

console.log(arr);
console.log(num);
// console.log(num1);

// let num = eval('1 + 1');
// console.log(num);

function compareIndices(a, b) {return a[1] - b[1]};
