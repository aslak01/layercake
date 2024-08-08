import { scaleLinear, scaleSqrt } from 'd3-scale';

/**
 * @type {{x: D3Scale, y: D3Scale, z: D3Scale, r: D3Scale}}
 */
export default {
	x: scaleLinear,
	y: scaleLinear,
	z: scaleLinear,
	r: scaleSqrt
};
