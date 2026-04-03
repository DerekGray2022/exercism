// go

class Pizza {
  constructor(size) {
    this._size = size;
    this._crust = "original";
  }

  getCrust() {
    return this._crust;
  }

  setCrust(crust) {
    this._crust = crust;
  }
}

const pizza1 = new Pizza("large", "stuffed");

