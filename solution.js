// 1
const int1 = 32;
const int2 = 50;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// 2
const int3 = 87;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log(true);
} else {
  console.log(false);
}

// 3
const a = 7;
const b = 9;
const c = 6;

console.log(Math.max(a, b, c));
console.log(Math.max(int1, int2, int3));

// 4
const str = "thon";
const pyStr = "Py";
const strStart = str.substring(0, 2);
if (strStart == pyStr) {
  console.log(str);
} else {
  console.log(pyStr + str);
}

// 5
const int1and2 = int1 + int2;

if (int1and2 >= 50 && int1and2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// 6
const int4 = 5;
const int5 = 3;

if (int4 + int5 == 8 || int4 - int5 == 8 || int5 - int4 == 8) {
  console.log(true);
} else {
  console.log(false);
}

// 7
if (int4 == 15 || int5 == 15 || int4 + int5 == 15) {
  console.log(true);
} else {
  console.log(false);
}

// 8
if (int4 % 7 == 0 || int4 % 11 == 0 || int5 % 7 == 0 || int5 % 11 == 0) {
  console.log(true);
} else {
  console.log(false);
}

// 9
if (int4 == int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}

// 10
if (int5 > 19) {
  console.log((int5 - 19) * 2);
} else {
  console.log(19 - int5);
}

// 11 BONUS
const firstName = "John";
const age = 21;

if (age < 13) {
  console.log(firstName, "is a child.");
} else if (age >= 13 && age < 20) {
  console.log(firstName, "is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log(firstName, "is a young adult.");
} else {
  console.log(firstName, "is an adult.");
}

// 12 BONUS
