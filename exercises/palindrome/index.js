// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return !str.split('').some((c, i) => {
	debugger
	if (c !== str[str.length-1-i]) return true
	})	
}

module.exports = palindrome;

// palindrome(' aba')
// function palindrome(str) {
// 	return str.split('').reverse().join('') === str
// }