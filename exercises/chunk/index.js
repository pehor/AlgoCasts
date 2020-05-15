// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const result = []
	const wholeChunks = Math.floor(array.length / size)

	for (let i=0; i<wholeChunks; i++) {
		result.push(array.slice(i*size, (i+1)*size))
	}

	const remaining = array.length%size

	if (remaining) {
		result.push(array.slice(array.length - remaining))
	}
	return result
}

module.exports = chunk;

// function chunk(array, size) {
// 	let remainingArray = array
// 	const result = []
// 	while (remainingArray.length) {
// 		if(remainingArray.length >= size) {
// 			result.push(remainingArray.slice(0, size))
// 			remainingArray = remainingArray.slice(size)
// 		} else {
// 			result.push(remainingArray)
// 			remainingArray = []
// 		}
// 	}
// 	return result
// }