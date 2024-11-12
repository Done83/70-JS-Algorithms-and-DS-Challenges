// function isPalindrome(str) {
//   let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let reversedStr = '';
//   for (let i = formattedStr.length - 1; i >= 0; i--) {
//     reversedStr += formattedStr[i]
//   }

//   return formattedStr === reversedStr;
// }

// More fancy way to approach this function :-)
const isPalindrome = (str) => {
  let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return formattedStr === formattedStr.split('').reverse().join('');
}
module.exports = isPalindrome;
