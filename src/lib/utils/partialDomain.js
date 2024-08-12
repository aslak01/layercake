/**
	If we have a domain from settings (the directive), fill in
	any null values with ones from our measured extents
	otherwise, return the measured extent
	@param {[number, number]} domain A two-value array of numbers
	@param {[number | null, number, null]} directive A two-value array of numbers that will have any nulls filled in from the `domain` array
	@returns {[number, number]} The filled in domain
*/
export default function partialDomain(domain, directive) {
	if (Array.isArray(directive) === true) {
		return [
			directive[0] === null ? domain[0] : directive[0],
			directive[1] === null ? domain[1] : directive[1]
		];
	}
	return domain;
}
