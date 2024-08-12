import canBeZero from './canBeZero.js';
/**
 * @typedef {(number|string)} Numberlike
 */
/**
 * @typedef {(Numberlike|Function)} FunctionOrNumberlike
 */
/**
	Make an accessor from a string, number, function or an array of the combination of any
	@param {FunctionOrNumberlike|FunctionOrNumberlike[]|undefined} accessor The accessor function, key or list of them.
	@returns {Function|null} An accessor function.
*/
export default function makeAccessor(accessor) {
	if (typeof accessor === 'undefined') return null;
	if (!canBeZero(accessor)) return null;
	if (Array.isArray(accessor)) {
		return d =>
			accessor.map(k => {
				return typeof k !== 'function' ? d[k] : k(d);
			});
	} else if (typeof accessor !== 'function') {
		return d => d[accessor];
	}
	return accessor;
}
