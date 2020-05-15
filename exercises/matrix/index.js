// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [[1,  2,  3,  4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]]

// console.log('i ' + i + ' row ' + row + ' col ' + col + ' cyl ' + cycleLength + ' cc ' + cycleCount + ' dir ' + direction + ' isRow ' + isRow)
// console.log(res)



// Making a for loop for each side
function matrix(n) {
	const results = []
	for (let i=0; i<n; i++) {
		results.push([])
	}

	let counter = 1
	let startColumn = 0
	let endColumn = n-1
	let startRow = 0
	let endRow = n-1

	while (startColumn <= endColumn && startRow <= endRow) {
		//top row
		for (let i=startColumn; i<= endColumn; i++) {
			results[startRow][i] = counter
			counter++
		}
		startRow++

		// right column
		for (let i=startRow; i<= endRow; i++) {
			results[i][endColumn] = counter
			counter++
		}
		endColumn--

		//bottom row
		for (let i=endColumn; i>= startColumn; i--) {
			results[endRow][i] = counter
			counter++
		}
		endRow--

		//left column
		for (let i=endRow; i>= startRow; i--) {
			results[i][startColumn] = counter
			counter++
		}
		startColumn++
	}
	return results
}

// matrix(3)

module.exports = matrix;

// filling first row then moving around, switching directions/rows/columns
// function matrix(n) {
// 	console.log('called with n='+n)
// 	const res = []

// 	for (let i=0; i < n; i++) {
// 		res[i] = Array(n)
// 	}	
// 	//res[0][0] = 1

// 	for (let i=0; i < n; i++) {
// 		res[0][i] = i+1
// 	}

// 	// const res = []
// 	let cycleLength = (n-1)
// 	let cycleCount = 0
// 	let direction = 1
// 	let isRow = true
// 	let row = 1
// 	let col = n-1

// 	const allNumbers = n*n
// 	let cycles = 0

// 	for (let i=n; i < allNumbers; i++) {
// 		debugger

// 		console.log('i ' + i + ' row ' + row + ' col ' + col + ' cyl ' + cycleLength + ' cc ' + cycleCount + ' dir ' + direction + ' isRow ' + isRow)
		

// 		res[row][col] = i + 1
// 		console.log(res)

// 		cycleCount++
// 		if (cycleCount >= cycleLength) {
// 			cycles++
// 			cycleCount = 0
// 			isRow = !isRow
// 			if (cycles%2===0) {
// 				cycleLength--
// 			} else {
// 				direction = -1 * direction
// 			}
// 		}
// 		if (isRow) {
// 			row = row + direction
// 		} else {
// 			col = col + direction
// 		}
		
// 	}
	
// 	return res
// }
