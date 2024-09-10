// Calculate the perimeter and area of a rectangle
let length = parseFloat(prompt("Please enter the length of the rectangle:"));
let width = parseFloat(prompt("Please enter the width of the rectangle:"));

let rectangleArea = length * width;
let rectanglePerimeter = 2 * (length + width);

console.log("Rectangle:");
console.log("Area: " + rectangleArea);
console.log("Perimeter: " + rectanglePerimeter);

// Calculate the perimeter and area of a circle
let radius = parseFloat(prompt("Please enter the radius of the circle:"));

let circleArea = 3.14 * radius * radius;
let circlePerimeter = 2 * radius * 3.14;

console.log("\nCircle:");
console.log("Area: " + circleArea);
console.log("Perimeter: " + circlePerimeter);

// Calculate the perimeter and area of a trapezoid
let baseLarge = parseFloat(
  prompt("Please enter the larger base (B) of the trapezoid:")
);
let baseSmall = parseFloat(
  prompt("Please enter the smaller base (A) of the trapezoid:")
);
let height = parseFloat(
  prompt("Please enter the height (h) of the trapezoid:")
);

let area = (baseLarge + baseSmall) * (height / 2);
console.log("\nTrapezoid Area: " + area);

let side1 = parseFloat(
  prompt("Please enter the length of the first non-parallel side (L1):")
);
let side2 = parseFloat(
  prompt("Please enter the length of the second non-parallel side (L2):")
);

let perimeter = baseLarge + baseSmall + side1 + side2;
console.log("\nTrapezoid Perimeter: " + perimeter);
