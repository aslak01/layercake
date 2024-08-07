import canBeZero from './canBeZero.js';
/**
 * @typedef {(number|string)} Numberlike
 */
/**
 * @typedef {(Numberlike|Function)} FunctionOrNumberlike
 */
/**
	Make an accessor from a string, number, function or an array of the combination of any
	@param {FunctionOrNumberlike|FunctionOrNumberlike[]|undefined} acc The accessor function, key or list of them.
	@returns {Function|null} An accessor function.
*/
export default function makeAccessor(acc) {
	if (typeof acc === 'undefined') return null;
	if (!canBeZero(acc)) return null;
	if (Array.isArray(acc)) {
		return d =>
			acc.map(k => {
				return typeof k !== 'function' ? d[k] : k(d);
			});
	} else if (typeof acc !== 'function') {
		return d => d[acc];
	}
	return acc;
}
