export default class ALXCOURSE {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Constructor attributes]
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter and setter methods

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((newStudent) => typeof newStudent === 'string')) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
