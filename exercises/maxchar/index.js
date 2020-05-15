// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const counts = str.split('').reduce((acc, c) => {
      acc[c] = (!acc[c] ? 1 : acc[c]+1)
	  return acc
	}, {})
	const arrayed = Object.keys(counts).map((key) => {
		return { key: key, count: counts[key] }
	})
	return arrayed.sort((a, b) => {
	  if (a.count > b.count) return -1
	  if (a.count < b.count) return 1
	  return 0
	})[0].key
}

module.exports = maxChar;
