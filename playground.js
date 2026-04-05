// go

class Clock {
  constructor(hrs, mins) {
    this.hrs = hrs ? hrs : 0;
    this.mins = mins ? mins : 0;
    this.minPlus = 0;
  }

  get Mins(){
    //#region Deal with Minutes
    this.mins = this.mins % 60;
    this.minPlus = parseInt(this.mins / 60);
    if (this.mins < 60 && this.mins > -60 && this.mins !== 0) {
      this.minPlus -= 1;
    }
    if (this.mins < 0) {
      this.mins = 60 + this.mins;
    }
    //#endregion
  }

  get Hours() {
    //#region Deal with hours
    this.hrs = this.hrs + this.minPlus;
    this.hrs = this.hrs % 24;
    if (this.hrs < 0) {
      this.hrs = 24 + this.hrs;
    }
    if (this.hrs > 24) {
      this.hrs = this.hrs % 24;
    }
    //#endregion
  }

  toString() {
    let mm = this.Mins;
    let hh = this.Hours;
  }
}

// on the hour
const res0 = new Clock(8).toString(); //  .toEqual('08:00');

console.log(res0);
