function isPalindrome(str) {
  let reverseString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }

  if (reverseString.toLowerCase() === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
