import Building from './5-building';

export default class ShyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }
  // set floors(newFloors) {
  //     if (typeof newFloors !== 'number') {
  //         throw new TypeError('Floors must be a number');
  //     }
  //     this._floors = newFloors;
  // }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
