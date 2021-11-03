const isPalindrome = (word) => {
  if (word.length === 0 || word.length === 1) return true;
  if (word[0] === word[word.length - 1])
    return isPalindrome(word.slice(1, word.length - 1));

  return false;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("salad"));
console.log(isPalindrome("s"));
console.log(isPalindrome(""));
