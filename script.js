// go

class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this._scores);
  }

  get personalTopThree() {
    return [...this._scores].sort((a, b) => b - a).slice(0, 3);
  }
}

// -------------------------------------------

//  High Scores Test Suite

  //  List of scores
    const input0 = [30, 50, 20, 70];
    const res0 = new HighScores(input0).scores //  .toEqual([30, 50, 20, 70]);

  //  Latest score
    const input1 = [100, 0, 90, 30];
    const res1 = new HighScores(input1).latest //  .toEqual(30);

  //  Personal best
    const input2 = [40, 100, 70];
    const res2 = new HighScores(input2).personalBest //  .toEqual(100);

// -------------------------------------------


  //  Top 3 scores

    //  Personal top three from a list of scores
      const input3 = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
      const res3 = new HighScores(input3).personalTopThree //  .toEqual([100, 90, 70]);

    //  Personal top highest to lowest
      const input4 = [20, 10, 30];
      const res4 = new HighScores(input4).personalTopThree //  .toEqual([30, 20, 10]);

    //  Personal top when there is a tie
      const input5 = [40, 20, 40, 30];
      const res5 = new HighScores(input5).personalTopThree //  .toEqual([40, 40, 30]);

    //  Personal top when there are less than 3
      const input6 = [30, 70];
      const res6 = new HighScores(input6).personalTopThree //  .toEqual([70, 30]);

    //  Personal top when there is only one
      const input7 = [40];
      const res7 = new HighScores(input7).personalTopThree //  .toEqual([40]);

    //  Latest score after personal top scores
      const input8 = [70, 50, 20, 30];
      const highScores8 = new HighScores(input8);
      highScores8.personalTopThree;
      const res8 = highScores8.latest  //  .toEqual(30);

    //  Scores after personal top scores
      const input9 = [30, 50, 20, 70];
      const highScores9 = new HighScores(input9);
      highScores9.personalTopThree;
      const res9 = highScores9.scores  //  .toEqual(input);

    //  Latest score after personal best
      const input10 = [20, 70, 15, 25, 30];
      const highScores10 = new HighScores(input10);
      highScores10.personalBest;
      const res10 = highScores10.latest  //  .toEqual(30);

    //  Scores after personal best
      const input11 = [20, 70, 15, 25, 30];
      const highScores11 = new HighScores(input11);
      highScores11.personalBest;
      const res11 = highScores11.scores  //  .toEqual(input);

// -------------------------------------------

console.log(res0);
console.log(res1);
console.log(res2);

// -------------------------------------------


console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);
console.log(res10);
console.log(res11);
