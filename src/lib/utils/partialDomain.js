/**
	If we have a domain from settings (the directive), fill in
	any null values with ones from our measured extents
	otherwise, return the measured extent
	@param {[number, number]} domain A two-value array of numbers
	@param {[number | null, number, null][]} directive A two-value array of numbers that will have any nulls filled in from the `domain` array
	@returns {[number, number]} The filled in domain
*/
export default function partialDomain(domain, directive) {
	if (Array.isArray(directive) === true) {
		const newDirective = directive.map((d, i) => {
			if (d === null) {
				return domain[i];
			}
			return d;
		});
		return newDirective
	}
	return domain;
}
