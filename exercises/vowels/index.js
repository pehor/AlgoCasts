// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	return str.replace(/[^aeiou]/ig, '').length
}


module.exports = vowels;

// function vowels(str) {
// 	return str.toLowerCase().split('').filter((c) => ['a', 'e', 'i', 'o', 'u'].includes(c)).length
// }

// function vowels(str) {
// 	const v = ['a', 'e', 'i', 'o', 'u']
// 	let count = 0
// 	for (const char of str.toLowerCase()) {
// 		if (v.includes(char)) count++
// 	}
// 	return count
// }
