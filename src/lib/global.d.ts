type Numberlike = number | string;

type FunctionOrNumberlike = Numberlike | Function;

type NullishOrNumberlike = Numberlike | null | undefined;

type NullishOrFunctionOrNumberlike = FunctionOrNumberlike | null | undefined;

type Accessor = FunctionOrNumberlike | FunctionOrNumberlike[] | undefined;

type Data = Record<string | number | symbol, unknown> | Record<string | number | symbol, unknown>[];

type Dimension = FunctionOrNumberlike | FunctionOrNumberlike[];
type DomainArr = [number | null, number | null];
type Domain = FunctionOrNumberlike[] | DomainArr;
type Domainish = Domain | undefined;

type Paddingish = [number, number] | undefined;

type Range = [number, number] | Function | Numberlike[];
type Rangeish = Range | undefined;

type Extent = [number, number];
type Extents = { x?: Extent; y?: Extent; z?: Extent; r?: Extent };

type Padding = { top?: number; right?: number; bottom?: number; left?: number };

type D3Scale =
	| d3.ScaleLinear<number, number>
	| d3.ScaleLogarithmic<number, number>
	| d3.ScaleOrdinal<string, number>
	| d3.ScalePoint<string>
	| d3.ScalePower<number, number>
	| d3.ScaleQuantile<number>
	| d3.ScaleQuantize<number>
	| d3.ScaleSequential<number, number>
	| d3.ScaleTime<number, number>
	| d3.ScaleBand<string>
	| d3.ScaleRadial<number, number>
	| d3.ScaleSymLog<number, number>
	| d3.ScaleThreshold<number, number>;

type D3ScaleFunction = () => D3Scale;
