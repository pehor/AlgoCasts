// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
	if(max !== null && node.data > max) {
		return false
	}
	if(min !== null && node.data < min) {
		return false
	}
	if(node.left && !validate(node.left, min, node.data)) {
		return false
	}
	if(node.right && !validate(node.right, node.data, max)) {
		return false
	}
	return true
}

module.exports = validate;

//wrong
// function validate(node, min = null, max = null) {
// 	if(node.left) {
// 		if (node.left.data >= min) return false
// 		min = node.left
// 	}
	
// 	if(node.right) {
// 		if (node.right.data < max) return false
// 		max = node.right 
// 	}
// 	if(!validate(this.left, min, max)) return false
// 	if(!validate(this.right, min, max)) return false

// 	return true
// }
