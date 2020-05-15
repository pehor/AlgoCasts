// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	const width = 1 + 2*(n-1)
	for (let i = 0; i < n; i++) {
		const hashes = 1 + i*2
		const spaces = Math.floor((width - hashes) / 2)
		const str = `${' '.repeat(spaces)}${'#'.repeat(hashes)}${' '.repeat(spaces)}`
		console.log(str)
	}
}

module.exports = pyramid;

// function pyramid(n, row = 0) {
// 	if (row > n - 1) return
// 	width = 1 + 2*(n-1)
//     const hashes = 1 + row*2
// 	const spaces = Math.floor((width - hashes) / 2)
// 	const str = `${' '.repeat(spaces)}${'#'.repeat(hashes)}${' '.repeat(spaces)}`
// 	console.log(str)
//     pyramid(n, row + 1)
// }