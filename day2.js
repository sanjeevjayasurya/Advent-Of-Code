const fs = require('fs');
const shapePoint = {
  X: 1,
  Y: 2,
  Z: 3,
};
const roundPoint = {
  'A X': 3,
  'B X': 0,
  'C X': 6,
  'A Y': 6,
  'B Y': 3,
  'C Y': 0,
  'A Z': 0,
  'B Z': 6,
  'C Z': 3,
};

const shapePoint2 = {
  X: 0,
  Y: 3,
  Z: 6,
};
const roundPoint2 = {
  'A X': 3,
  'B X': 1,
  'C X': 2,
  'A Y': 1,
  'B Y': 2,
  'C Y': 3,
  'A Z': 2,
  'B Z': 3,
  'C Z': 1,
};

const fileData = fs.readFileSync(
  './rockpaperscissors.txt',
  'utf8',
  (err, data) => {
    if (err) throw err;
    return data;
  }
);
const roundData = fileData.split('\n');
const totalScore = roundData.reduce((a, b) => {
  console.log(b, roundPoint[b], shapePoint[b[2]]);
  return a + (roundPoint[b] + shapePoint[b[2]]);
}, 0);
console.log(totalScore);
