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

const str1 = 'Hello';
const str2 = 'World';
const str3 = 'Goodbye';

const common = commonLetter(str1, str2, str3);

console.log(common);
