import { scaleLinear, scaleSqrt } from 'd3-scale';

/**
 * @type {{x: d3.ScaleLinear<Numberlike,Numberlike>, y: d3.ScaleLinear<Numberlike,Numberlike>, z: d3.ScaleLinear<Numberlike,Numberlike>, r: d3.scaleSqrt}}
 */
export default {
	x: scaleLinear,
	y: scaleLinear,
	z: scaleLinear,
	r: scaleSqrt
};
