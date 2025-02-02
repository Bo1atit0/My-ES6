const symbolClone = Symbol('symbolClone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [symbolClone]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[symbolClone]();
  }
}
