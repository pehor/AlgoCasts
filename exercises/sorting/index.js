// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for(i=0; i<arr.length; i++){
		for(j=0; j<arr.length-i-1; j++){
			if(arr[j] > arr[j+1]) {
				const temp = arr[j]
				arr[j]=arr[j+1]
				arr[j+1]=temp
			}
		}
	}
	return arr
}

function selectionSort(arr) {
	for(i=0; i<arr.length; i++){
		let min = arr[i]
		let minIndex = i
		for(j=i+1; j<arr.length; j++){
			if(arr[j] < min){
				minIndex = j
				min=arr[j]
			}
		}
		if(minIndex !== i){
			const temp = arr[i]
			arr[i]=arr[minIndex]
			arr[minIndex] = temp
		}
	}
	return arr
}

function mergeSort(arr) {
	if(arr.length === 1) return arr
	const center = Math.floor(arr.length/2)
	const left = arr.slice(0, center)
	const right = arr.slice(center)
	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const results = []
	while(left.length && right.length) {
		if(left[0] < right[0]) {
			results.push(left.shift())
		} else {
			results.push(right.shift())
		}
	}
	return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
