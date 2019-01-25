// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
  constructor(length,width,height) {
  this.length = length;
  this.width = width;
  this.height = height;
} volume() {
  return this.length * this.width * this.height;
}
surfaceArea() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
}
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.
*/

const cuboid = new CuboidMaker(4,5,5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(edge) {
    super(edge,edge,edge);
}
}

const smalls = new CubeMaker(2);
console.log(smalls.volume());
// The formula is a^3, where a = one edge dimension (since HLW are identical).
// so, 2^3 = 8, which is the output!
// no change required, in other words.
console.log(smalls.surfaceArea());
// The formula is 6a^2, where a = one edge dimension (since HLW are identical).
// so, 6*2^2 = 24, which is the output!
// no change required, in other words.
