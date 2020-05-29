// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next) {
		this.data = data
		this.next = next || null
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}
	insertFirst(data) {
		this.head = new Node(data, this.head)
	}
	size() {
		let node = this.head
		let counter = 0
		while(node) {
			counter++
			node = node.next
		}
		return counter
	}
	getFirst() {
		return this.head
	}
	getLast() {
		if(!this.head) return
		let node = this.head
		while(node.next) {
			node = node.next
		}
		return node
	}
	clear() {
		this.head=null
	}
	removeFirst() {
		if(!this.head) return
		this.head = this.head.next
	}
	removeLast() {
		if(!this.head) return
		if(!this.head.next) {
			this.head = null
			return
		}
		let node = this.head.next
		let prev = this.head
		while(node.next) {
			prev = node
			node = node.next
		}
		prev.next = null
	}
	insertLast(data){
		const newNode = new Node(data)
		const last = this.getLast()
		if (!last) {
			this.head = newNode
			return
		}
		last.next = newNode
	}
	getAt(index){
		let counter = 0
		let node = this.head
		while(node) {
			if (counter === index) return node
			counter++
			node = node.next
		}
		return null
	}
	removeAt(index){
		if(!this.head) return
		if(index===0) {
			this.head = this.head.next
			return
		}
		
		const prev = this.getAt(index-1)
		if (!prev) return
		if (!prev.next) return
		prev.next=prev.next.next

	}
	insertAt(data, index) {
		const newNode = new Node(data)
		if(index === 0){
			newNode.next = this.head
			this.head = newNode
			return
		}
		const prev = this.getAt(index-1)
		if(!prev || !prev.next) {
			this.insertLast(data)
			return
		}
		newNode.next = prev.next
		prev.next = newNode
	}
	forEach(func){
		let record = this.head
		let counter = 0
		while(record){
			func(record, counter)
			counter++
			record = record.next
		}
	}
	*[Symbol.iterator]() {
		let node  = this.head
		while (node) {
			yield node
			node = node.next
		}
	}

}

module.exports = { Node, LinkedList };
