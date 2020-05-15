// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	const a = stringA.toLowerCase().replace(/[^\w]/g, '')
	const b = stringB.toLowerCase().replace(/[^\w]/g, '')

	const collect = (acc, c) => {
		acc[c] = acc[c] ? acc[c] + 1 : 1
		return acc
	}
	const collectA = a.split('').reduce(collect, {})
	const collectB = b.split('').reduce(collect, {})

	if (Object.keys(collectA).length !== Object.keys(collectB).length) return false

	return Object.keys(collectA).every((key) => {
		return collectA[key] === collectB[key]
	})

}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const clean = (str) => str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('')
// 	return clean(stringA) === clean(stringB)
// }