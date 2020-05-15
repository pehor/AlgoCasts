// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// recursive - memoized
function memoize (fn) {
	const cache = {}
	let hit = 0
	let miss = 0
	return function(...args) {
		debugger
		if(cache[args]){
			return cache[args]
		}
		
		const result = fn.apply(this, args)
		cache[args] = result // note that this works because the args array becomes a string when it gets saved as the key of the object
		return result

	}
}

function slowFib(n) {
	if (n < 2) {
		return n
	}

	return fib(n-1) + fib(n-2) // note we call the memoized version here
}

const fib = memoize(slowFib)


fib(5)
module.exports = fib;

// recursive - nice but exponential runtime
// function fib(n) {
// 	if (n < 2) return n
	
// 	return fib(n-1) + fib(n-2)
// }

// recursive - not nice but linear time
// function fib(n, n1 = 1, n2 = 0) {
// 	if (n === 0) return n
// 	if (n === 1) return n

// 	let curr = n1 + n2
// 	if (n>2) {
// 		n--
// 		return fib(n, curr, n1)
// 	}
// 	return curr
// }


// iterative - linear
// function fib(n) {
// 	if (n === 0) return n
// 	if (n === 1) return n

// 	let curr = 1
// 	let prev2 = 0
// 	let prev1 = 1
// 	for (let i = 2; i<=n; i++) {
// 		debugger
// 		curr = prev1 + prev2
// 		prev2 = prev1
// 		prev1 = curr
// 	}
	
// 	return curr
// }