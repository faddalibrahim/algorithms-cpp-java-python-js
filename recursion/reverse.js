// const reverse = (word, index = word.length - 1) => {
//   if (index === -1) return "";
//   return word[index] + reverse(word, index - 1);
// };

// my solution
const reverse = (word, index = word.length) => {
  if (index === 0) return "";
  return word[--index] + reverse(word, index);
};

// tutorial's solution
const reverse = (word) => {
  if (word === "") return "";
  return reverse(word.slice(1)) + word[0];
};

console.time("time");
console.log(reverse("apple"));

console.timeEnd("time");
