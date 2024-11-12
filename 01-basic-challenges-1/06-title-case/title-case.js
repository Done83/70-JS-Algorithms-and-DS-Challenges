function titleCase(str) {
  let words = str.toLowerCase().split(' '); // First we split a string into the array

  // Now we loop over the array of words
  for (let i = 0; i < words.length; i++) {
    // Now we change each word in array with capitalized word by accesing each words first letter and then adding rest of the word
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }
  return words.join(' ');
}

module.exports = titleCase;
