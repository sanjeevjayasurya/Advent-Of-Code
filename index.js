const fs = require('fs');

const fileData = fs.readFileSync('./data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

const group = fileData.split('\n\n');

const groupDataInArray = group.map((data) => data.split('\n'));

const sumGroupDataInArray = groupDataInArray.map((array) =>
  array.reduce((a, b) => Number(a) + Number(b), 0)
);

const maximumEnergy = Math.max(...sumGroupDataInArray);

const sumOfCaloriesOfTopThreeElves = sumGroupDataInArray
  .sort((a, b) => Number(b) - Number(a))
  .slice(0, 3)
  .reduce((a, b) => Number(a) + Number(b), 0);
console.log(sumOfCaloriesOfTopThreeElves);

