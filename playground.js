// go

function triplets({ minFactor = {}, maxFactor = {}, sum }) {
  let outArray = [];
  let tempArray = [];
  let isPresent = false;

  for (let x = 1; x < sum; x++) {
    for (let y = 1; y < sum; y++) {
      for (let z = 1; z < sum; z++) {
        if (x ** 2 + y ** 2 === z ** 2 && x + y + z === sum) {
          tempArray = [x, y, z];
          tempArray.sort((a, b) => a - b);
          if (outArray.length > 0) {
            outArray.forEach((array) => {
              if (array[0] === tempArray[0]) {
                isPresent = true;
              }
            });
          } 
          !isPresent && outArray.push(tempArray);
          isPresent = false;

          // outArray.push(tempArray);
        }
      }
    }
  }

  return outArray;
}

const res = triplets({ sum: 90 });
console.log(res);
