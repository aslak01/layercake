import isOrdinalDomain from '../helpers/isOrdinalDomain.js';
import getPadFunctions from '../helpers/getPadFunctions.js';
import findScaleName from '../helpers/findScaleName.js';
import isDate from './isDate.js';

// These scales have a discrete range so they can't be padded
const unpaddable = ['scaleThreshold', 'scaleQuantile', 'scaleQuantize', 'scaleSequentialQuantile'];

/**
 * @typedef{string|number|Date} DomainValue
 */

/**
	Returns a modified scale domain by in/decreasing
	the min/max by taking the desired difference
	in pixels and converting it to units of data.
	Returns an array that you can set as the new domain.
	Padding contributed by @veltman.
	See here for discussion of transforms: https://github.com/d3/d3-scale/issues/150
	@param {D3Scale} scale A D3 scale funcion
	@param {Number[]} padding A two-value array of numbers specifying padding in pixels
	@returns {[DomainValue, DomainValue]} The padded domain
*/
export default function padScale(scale, padding) {
	if (typeof scale.range !== 'function') {
		throw new Error('Scale method `range` must be a function');
	}
	if (typeof scale.domain !== 'function') {
		throw new Error('Scale method `domain` must be a function');
	}

	if (!Array.isArray(padding) || unpaddable.includes(findScaleName(scale))) {
		return scale.domain();
	}

	if (isOrdinalDomain(scale) === true) {
		return scale.domain();
	}

	const { lift, ground } = getPadFunctions(scale);

	const [d1, d2] = scale.domain().map(d => {
		return isDate(d) ? lift(d.getTime()) : lift(d);
	});

	const [r1, r2] = scale.range();
	const paddingLeft = padding[0] || 0;
	const paddingRight = padding[1] || 0;

	const step = (d2 - d1) / (Math.abs(r2 - r1) - paddingLeft - paddingRight); // Math.abs() to properly handle reversed scales

	return [d1 - paddingLeft * step, paddingRight * step + d2].map(d => {
		return isDate(d) ? ground(new Date(d)) : ground(d);
	});
}
