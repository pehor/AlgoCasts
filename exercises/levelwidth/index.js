// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let allChildrenOnLevel = [root]
	let widths = []

	while (allChildrenOnLevel.length) {
		widths.push(allChildrenOnLevel.length)	
		allChildrenOnLevel = allChildrenOnLevel.reduce((sum, curr) => {
			return sum.concat(curr.children)
		}, [])
	}
	return widths
}

//recursive
// function levelWidth(root, parents = [root], widths = [1]) {
// 	const allChildrenOnLevel = parents.reduce((sum, curr) => {
// 		return sum.concat(curr.children)
// 	}, [])
// 	if(!allChildrenOnLevel.length) return widths
// 	widths.push(allChildrenOnLevel.length)
// 	return levelWidth(root, allChildrenOnLevel, widths)
// }

module.exports = levelWidth;
