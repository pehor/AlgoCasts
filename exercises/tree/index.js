// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data){
		this.data = data
		this.children = []
	}
	add(data) {
		this.children.push(new Node(data))
	}
	remove(data) {
		this.children = this.children.filter((item) => item.data !== data)
	}
}

class Tree {
	constructor(){
		this.root = null
	}
	traverseBF(func){
		const arr = [this.root]
		while(arr.length) {
			const node = arr.shift()
			arr.push(...node.children)
			func(node)
		}
	}
	traverseDF(func){
		const arr = [this.root]
		while(arr.length) {
			const node = arr.shift()
			arr.unshift(...node.children)
			func(node)
		}
	}
	//recursive
	// traverseBF(func, node = this.root, nodeList = []){
	// 	nodeList = nodeList.concat(node.children)
	// 	func(node)
	// 	node = nodeList.shift()
	// 	if(!node) return
	// 	this.traverseBF(func, node, nodeList)
	// }
	//recursive
	// traverseDF(func, node){
	// 	node = node || this.root
	// 	func(node)
	// 	node.children.forEach((child) => {
	// 		this.traverseDF(func, child)
	// 	})
	// }
}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.traverseBF(node => {
  letters.push(node.data);
});



module.exports = { Tree, Node };
