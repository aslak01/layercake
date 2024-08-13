import { scaleLinear, scaleSqrt } from 'd3-scale';

/**
 * @type {{
 *	x: D3ScaleFunction,
 *	y: D3ScaleFunction,
 *	z: D3ScaleFunction,
 *	r: D3ScaleFunction
 *	}}
 */

export default {
	x: scaleLinear,
	y: scaleLinear,
	z: scaleLinear,
	r: scaleSqrt
};
