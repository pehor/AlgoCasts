// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
	let i = 1
	while (i <= n) {
		const m3 = i%3 === 0
		const m5 = i%5 === 0
		debugger

		if (m3 && m5) {
			console.log('fizzbuzz')
		} else

		if (m3 && !m5) {
			console.log('fizz')
		} else

		if (!m3 && m5) {
			console.log('buzz')
		} else {
		  console.log(i)	
		}

		i++		
	}
}

module.exports = fizzBuzz;


// function fizzBuzz(n) {
// 	let i = 1
// 	while (i <= n) {
// 		const m3 = i%3 === 0
// 		const m5 = i%5 === 0

// 		let res = m3 ? 'fizz' : ''
// 		res += m5 ? 'buzz' : ''

// 		console.log(res || i)
// 		i++
		
// 	}
// }