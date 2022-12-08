const fs = require('fs');

const characterString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const priorityObj = {};
for (let i = 0; i < characterString.length; i++) {
  priorityObj[characterString.charAt(i)] = i + 1;
}

const fileData = fs.readFileSync('./day3data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return data;
});

function getIntersection(setA, setB) {
  const intersection = new Set(
    [...setA].filter((element) => setB.has(element))
  );

  return intersection.values();
}

const splitData = fileData.split('\n');

const newSplitData = splitData.map((encryptedString) => {
  const encryptedStringLength = encryptedString.length;
  const encrytedStringLengthHalf = encryptedStringLength / 2;
  return [
    encryptedString.slice(0, encrytedStringLengthHalf),
    encryptedString.slice(encrytedStringLengthHalf, encryptedStringLength),
  ];
});

function commonLetter(str1, str2, str3) {
  // First, we create an array that contains the characters from each string
  const chars = [...str1, ...str2, ...str3];

  // Then, we use the `Array.filter()` method to keep only the letters that appear in all three strings
  const common = chars.filter(
    (char) => str1.includes(char) && str2.includes(char) && str3.includes(char)
  );

  // Finally, we return the first common letter, or null if there are no common letters
  return common.length > 0 ? common[0] : null;
}

let prioritySumForThrees = 0;

for (let i = 0; i < splitData.length; i += 3) {
  const priorityLeter = commonLetter(
    splitData[i],
    splitData[i + 1],
    splitData[i + 2]
  );
  prioritySumForThrees += priorityObj[priorityLeter];
}

const priorityString = newSplitData.reduce((a, b) => {
  const firstSet = new Set(b[0].split(''));
  const secondSet = new Set(b[1].split(''));
  const commonCharacterSet = getIntersection(firstSet, secondSet);
  let commonCharacter = '';
  for (const entry of commonCharacterSet) {
    commonCharacter += entry;
  }
  return a + priorityObj[commonCharacter];
}, 0);

// console.log(priorityString);
console.log(prioritySumForThrees);
