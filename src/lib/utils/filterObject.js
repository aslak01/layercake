/**
	Remove undefined fields from an object
	@param {Record<string | number | symbol, any>} obj The object to filter
	@param {Record<string | number | symbol, any>} [comparisonObj={}] An object that, for any key, if the key is not present on that object, the key will be filtered out. Note, this ignores the value on that object
	@returns {Record<string | number | symbol, any>}
*/
export default function filterObject(obj, comparisonObj = {}) {
	return Object.fromEntries(
		Object.entries(obj).filter(([key, value]) => {
			return value !== undefined && comparisonObj[key] === undefined;
		})
	);
}
