/**
 * @param {string} s
 * @param {number} width
 * @param {number} height
 * @param {boolean} reverse
 * @param {boolean} percentRange
 * @returns {[number, number]}
 */
function calcBaseRange(s, width, height, reverse, percentRange) {
	let min;
	let max;
	if (percentRange === true) {
		min = 0;
		max = 100;
	} else {
		min = s === 'r' ? 1 : 0;
		max = s === 'y' ? height : s === 'r' ? 25 : width;
	}
	return reverse === true ? [max, min] : [min, max];
}

/**
 * @param {string} s
 * @param {number} width
 * @param {number} height
 * @param {boolean} reverse
 * @param {Function} range
 * @param {boolean} percentRange
 * @returns {[number, number]}
 */
export default function getDefaultRange(s, width, height, reverse, range, percentRange) {
	return !range
		? calcBaseRange(s, width, height, reverse, percentRange)
		: typeof range === 'function'
			? range({ width, height })
			: range;
}
