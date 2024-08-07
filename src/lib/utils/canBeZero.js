/**
	A function to help truth test values. Returns a `true` if zero.
	@template T
	@param {T} val The value to test.
	@returns {T | boolean}
*/
export default function canBeZero(val) {
	if (val === 0) {
		return true;
	}
	return val;
}
