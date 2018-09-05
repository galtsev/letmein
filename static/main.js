
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _billstclair$elm_bitwise_infix$BitwiseInfix_ops = _billstclair$elm_bitwise_infix$BitwiseInfix_ops || {};
_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>>'] = F2(
	function (num, shift) {
		return num >>> shift;
	});
var _billstclair$elm_bitwise_infix$BitwiseInfix_ops = _billstclair$elm_bitwise_infix$BitwiseInfix_ops || {};
_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>'] = F2(
	function (num, shift) {
		return num >> shift;
	});
var _billstclair$elm_bitwise_infix$BitwiseInfix_ops = _billstclair$elm_bitwise_infix$BitwiseInfix_ops || {};
_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'] = F2(
	function (num, shift) {
		return num << shift;
	});
var _billstclair$elm_bitwise_infix$BitwiseInfix$lognot = _elm_lang$core$Bitwise$complement;
var _billstclair$elm_bitwise_infix$BitwiseInfix_ops = _billstclair$elm_bitwise_infix$BitwiseInfix_ops || {};
_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'] = _elm_lang$core$Bitwise$xor;
var _billstclair$elm_bitwise_infix$BitwiseInfix_ops = _billstclair$elm_bitwise_infix$BitwiseInfix_ops || {};
_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~|'] = _elm_lang$core$Bitwise$or;
var _billstclair$elm_bitwise_infix$BitwiseInfix_ops = _billstclair$elm_bitwise_infix$BitwiseInfix_ops || {};
_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'] = _elm_lang$core$Bitwise$and;

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _billstclair$elm_crypto_aes$Crypto_AES_Utility$makeWord32 = F4(
	function (b3, b2, b1, b0) {
		return ((A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'], b3, 24) + A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'], b2, 16)) + A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'], b1, 8)) + b0;
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$hexStr2Int = function (str) {
	return _elm_lang$core$String$toInt(
		A2(_elm_lang$core$Basics_ops['++'], '0x', str));
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$hexChars2Int = F2(
	function (x, y) {
		return _billstclair$elm_crypto_aes$Crypto_AES_Utility$hexStr2Int(
			_elm_lang$core$String$fromList(
				{
					ctor: '::',
					_0: x,
					_1: {
						ctor: '::',
						_0: y,
						_1: {ctor: '[]'}
					}
				}));
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$hexStr2Array = function (string) {
	var loop = F2(
		function (chars, res) {
			loop:
			while (true) {
				var _p0 = chars;
				if (_p0.ctor === '::') {
					if (_p0._1.ctor === '::') {
						var _p1 = A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$hexChars2Int, _p0._0, _p0._1._0);
						if (_p1.ctor === 'Err') {
							return _elm_lang$core$Result$Err(_p1._0);
						} else {
							var _v2 = _p0._1._1,
								_v3 = {ctor: '::', _0: _p1._0, _1: res};
							chars = _v2;
							res = _v3;
							continue loop;
						}
					} else {
						return _elm_lang$core$Result$Err('Odd length string.');
					}
				} else {
					return _elm_lang$core$Result$Ok(
						_elm_lang$core$Array$fromList(
							_elm_lang$core$List$reverse(res)));
				}
			}
		});
	return A2(
		loop,
		_elm_lang$core$String$toList(string),
		{ctor: '[]'});
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$cb = function (string) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_elm_lang$core$Array$empty,
		_billstclair$elm_crypto_aes$Crypto_AES_Utility$hexStr2Array(string));
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$rotWord32L = function (word) {
	return A2(
		_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'],
		A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'], word, 16777215),
		8) + A2(
		_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'],
		A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>'], word, 24),
		255);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$word1 = function (x) {
	return A2(
		_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'],
		A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>'], x, 16),
		65535);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$word0 = function (x) {
	return A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'], x, 65535);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$word32ArrayToWordArray = function (a) {
	var out = A2(
		_elm_lang$core$Array$repeat,
		2 * _elm_lang$core$Array$length(a),
		0);
	var f = F2(
		function (ai, _p2) {
			var _p3 = _p2;
			var _p4 = _p3._0;
			return {
				ctor: '_Tuple2',
				_0: _p4 + 2,
				_1: A3(
					_elm_lang$core$Array$set,
					_p4 + 1,
					_billstclair$elm_crypto_aes$Crypto_AES_Utility$word0(ai),
					A3(
						_elm_lang$core$Array$set,
						_p4,
						_billstclair$elm_crypto_aes$Crypto_AES_Utility$word1(ai),
						_p3._1))
			};
		});
	var _p5 = A3(
		_elm_lang$core$Array$foldl,
		f,
		{ctor: '_Tuple2', _0: 0, _1: out},
		a);
	var res = _p5._1;
	return res;
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$byte3 = function (x) {
	return A2(
		_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'],
		A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>'], x, 24),
		255);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$byte2 = function (x) {
	return A2(
		_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'],
		A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>'], x, 16),
		255);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$swapbytes = function (x) {
	return A2(
		_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~|'],
		A2(
			_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'],
			A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'], x, 255),
			8),
		A2(
			_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'],
			A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>'], x, 8),
			255));
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$makeword = F2(
	function (hi, lo) {
		return A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'], hi, 8) + lo;
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte = function (x) {
	return A2(
		_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'],
		A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~>>'], x, 8),
		255);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$byte1 = _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte;
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte = function (x) {
	return A2(_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~&'], x, 255);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$byte0 = _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte;
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$makeBytesFromWord = F3(
	function (word, offset, array) {
		return A3(
			_elm_lang$core$Array$set,
			offset,
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(word),
			A3(
				_elm_lang$core$Array$set,
				offset + 1,
				_billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(word),
				array));
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$fillByteArrayFromWords = function (words) {
	var out = A2(
		_elm_lang$core$Array$repeat,
		2 * _elm_lang$core$List$length(words),
		0);
	var f = F2(
		function (word, _p6) {
			var _p7 = _p6;
			var _p8 = _p7._0;
			return {
				ctor: '_Tuple2',
				_0: _p8 + 2,
				_1: A3(_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeBytesFromWord, word, _p8, _p7._1)
			};
		});
	var _p9 = A3(
		_elm_lang$core$List$foldl,
		f,
		{ctor: '_Tuple2', _0: 0, _1: out},
		words);
	var res = _p9._1;
	return res;
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$get = F2(
	function (idx, array) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(_elm_lang$core$Array$get, idx, array));
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$arrayRotatePairsRight = function (gin) {
	var gnumWords = _elm_lang$core$Array$length(gin);
	var loop = F2(
		function (gi, res) {
			loop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(gi, gnumWords) > -1) {
					return res;
				} else {
					var gw0 = A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, gi + 1, gin);
					var gw1 = A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, gi, gin);
					var gout = A3(
						_elm_lang$core$Array$set,
						gi,
						A2(
							_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeword,
							_billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(gw0),
							_billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(gw1)),
						A3(
							_elm_lang$core$Array$set,
							gi + 1,
							A2(
								_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeword,
								_billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(gw1),
								_billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(gw0)),
							res));
					var _v6 = gi + 2,
						_v7 = gout;
					gi = _v6;
					res = _v7;
					continue loop;
				}
			}
		});
	return A2(
		loop,
		0,
		A2(_elm_lang$core$Array$repeat, gnumWords, 0));
};
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$makeWordFromByteArray = F2(
	function (offset, array) {
		return A2(
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeword,
			A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, offset, array),
			A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, offset + 1, array));
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Utility$makeWord32FromByteArray = F2(
	function (offset, array) {
		return A4(
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeWord32,
			A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, offset, array),
			A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + offset, array),
			A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 2 + offset, array),
			A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 3 + offset, array));
	});

var _billstclair$elm_crypto_aes$Crypto_AES_Tables$zero00 = 0;
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$blockWords_ = 4;
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$table = function (lists) {
	return _elm_lang$core$Array$fromList(
		_elm_lang$core$List$concat(lists));
};
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$rcon_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$table(
	{
		ctor: '::',
		_0: {
			ctor: '::',
			_0: 16777216,
			_1: {
				ctor: '::',
				_0: 33554432,
				_1: {
					ctor: '::',
					_0: 67108864,
					_1: {
						ctor: '::',
						_0: 134217728,
						_1: {
							ctor: '::',
							_0: 268435456,
							_1: {ctor: '[]'}
						}
					}
				}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: 536870912,
				_1: {
					ctor: '::',
					_0: 1073741824,
					_1: {
						ctor: '::',
						_0: 2147483648,
						_1: {
							ctor: '::',
							_0: 452984832,
							_1: {
								ctor: '::',
								_0: 905969664,
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			_1: {ctor: '[]'}
		}
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$table(
	{
		ctor: '::',
		_0: {
			ctor: '::',
			_0: 99,
			_1: {
				ctor: '::',
				_0: 124,
				_1: {
					ctor: '::',
					_0: 119,
					_1: {
						ctor: '::',
						_0: 123,
						_1: {
							ctor: '::',
							_0: 242,
							_1: {
								ctor: '::',
								_0: 107,
								_1: {
									ctor: '::',
									_0: 111,
									_1: {
										ctor: '::',
										_0: 197,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: 48,
				_1: {
					ctor: '::',
					_0: 1,
					_1: {
						ctor: '::',
						_0: 103,
						_1: {
							ctor: '::',
							_0: 43,
							_1: {
								ctor: '::',
								_0: 254,
								_1: {
									ctor: '::',
									_0: 215,
									_1: {
										ctor: '::',
										_0: 171,
										_1: {
											ctor: '::',
											_0: 118,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: 202,
					_1: {
						ctor: '::',
						_0: 130,
						_1: {
							ctor: '::',
							_0: 201,
							_1: {
								ctor: '::',
								_0: 125,
								_1: {
									ctor: '::',
									_0: 250,
									_1: {
										ctor: '::',
										_0: 89,
										_1: {
											ctor: '::',
											_0: 71,
											_1: {
												ctor: '::',
												_0: 240,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: 173,
						_1: {
							ctor: '::',
							_0: 212,
							_1: {
								ctor: '::',
								_0: 162,
								_1: {
									ctor: '::',
									_0: 175,
									_1: {
										ctor: '::',
										_0: 156,
										_1: {
											ctor: '::',
											_0: 164,
											_1: {
												ctor: '::',
												_0: 114,
												_1: {
													ctor: '::',
													_0: 192,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: 183,
							_1: {
								ctor: '::',
								_0: 253,
								_1: {
									ctor: '::',
									_0: 147,
									_1: {
										ctor: '::',
										_0: 38,
										_1: {
											ctor: '::',
											_0: 54,
											_1: {
												ctor: '::',
												_0: 63,
												_1: {
													ctor: '::',
													_0: 247,
													_1: {
														ctor: '::',
														_0: 204,
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '::',
								_0: 52,
								_1: {
									ctor: '::',
									_0: 165,
									_1: {
										ctor: '::',
										_0: 229,
										_1: {
											ctor: '::',
											_0: 241,
											_1: {
												ctor: '::',
												_0: 113,
												_1: {
													ctor: '::',
													_0: 216,
													_1: {
														ctor: '::',
														_0: 49,
														_1: {
															ctor: '::',
															_0: 21,
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '::',
									_0: 4,
									_1: {
										ctor: '::',
										_0: 199,
										_1: {
											ctor: '::',
											_0: 35,
											_1: {
												ctor: '::',
												_0: 195,
												_1: {
													ctor: '::',
													_0: 24,
													_1: {
														ctor: '::',
														_0: 150,
														_1: {
															ctor: '::',
															_0: 5,
															_1: {
																ctor: '::',
																_0: 154,
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '::',
										_0: 7,
										_1: {
											ctor: '::',
											_0: 18,
											_1: {
												ctor: '::',
												_0: 128,
												_1: {
													ctor: '::',
													_0: 226,
													_1: {
														ctor: '::',
														_0: 235,
														_1: {
															ctor: '::',
															_0: 39,
															_1: {
																ctor: '::',
																_0: 178,
																_1: {
																	ctor: '::',
																	_0: 117,
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '::',
											_0: 9,
											_1: {
												ctor: '::',
												_0: 131,
												_1: {
													ctor: '::',
													_0: 44,
													_1: {
														ctor: '::',
														_0: 26,
														_1: {
															ctor: '::',
															_0: 27,
															_1: {
																ctor: '::',
																_0: 110,
																_1: {
																	ctor: '::',
																	_0: 90,
																	_1: {
																		ctor: '::',
																		_0: 160,
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '::',
												_0: 82,
												_1: {
													ctor: '::',
													_0: 59,
													_1: {
														ctor: '::',
														_0: 214,
														_1: {
															ctor: '::',
															_0: 179,
															_1: {
																ctor: '::',
																_0: 41,
																_1: {
																	ctor: '::',
																	_0: 227,
																	_1: {
																		ctor: '::',
																		_0: 47,
																		_1: {
																			ctor: '::',
																			_0: 132,
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '::',
													_0: 83,
													_1: {
														ctor: '::',
														_0: 209,
														_1: {
															ctor: '::',
															_0: 0,
															_1: {
																ctor: '::',
																_0: 237,
																_1: {
																	ctor: '::',
																	_0: 32,
																	_1: {
																		ctor: '::',
																		_0: 252,
																		_1: {
																			ctor: '::',
																			_0: 177,
																			_1: {
																				ctor: '::',
																				_0: 91,
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '::',
														_0: 106,
														_1: {
															ctor: '::',
															_0: 203,
															_1: {
																ctor: '::',
																_0: 190,
																_1: {
																	ctor: '::',
																	_0: 57,
																	_1: {
																		ctor: '::',
																		_0: 74,
																		_1: {
																			ctor: '::',
																			_0: 76,
																			_1: {
																				ctor: '::',
																				_0: 88,
																				_1: {
																					ctor: '::',
																					_0: 207,
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '::',
															_0: 208,
															_1: {
																ctor: '::',
																_0: 239,
																_1: {
																	ctor: '::',
																	_0: 170,
																	_1: {
																		ctor: '::',
																		_0: 251,
																		_1: {
																			ctor: '::',
																			_0: 67,
																			_1: {
																				ctor: '::',
																				_0: 77,
																				_1: {
																					ctor: '::',
																					_0: 51,
																					_1: {
																						ctor: '::',
																						_0: 133,
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}
																	}
																}
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '::',
																_0: 69,
																_1: {
																	ctor: '::',
																	_0: 249,
																	_1: {
																		ctor: '::',
																		_0: 2,
																		_1: {
																			ctor: '::',
																			_0: 127,
																			_1: {
																				ctor: '::',
																				_0: 80,
																				_1: {
																					ctor: '::',
																					_0: 60,
																					_1: {
																						ctor: '::',
																						_0: 159,
																						_1: {
																							ctor: '::',
																							_0: 168,
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '::',
																	_0: 81,
																	_1: {
																		ctor: '::',
																		_0: 163,
																		_1: {
																			ctor: '::',
																			_0: 64,
																			_1: {
																				ctor: '::',
																				_0: 143,
																				_1: {
																					ctor: '::',
																					_0: 146,
																					_1: {
																						ctor: '::',
																						_0: 157,
																						_1: {
																							ctor: '::',
																							_0: 56,
																							_1: {
																								ctor: '::',
																								_0: 245,
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '::',
																		_0: 188,
																		_1: {
																			ctor: '::',
																			_0: 182,
																			_1: {
																				ctor: '::',
																				_0: 218,
																				_1: {
																					ctor: '::',
																					_0: 33,
																					_1: {
																						ctor: '::',
																						_0: 16,
																						_1: {
																							ctor: '::',
																							_0: 255,
																							_1: {
																								ctor: '::',
																								_0: 243,
																								_1: {
																									ctor: '::',
																									_0: 210,
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '::',
																			_0: 205,
																			_1: {
																				ctor: '::',
																				_0: 12,
																				_1: {
																					ctor: '::',
																					_0: 19,
																					_1: {
																						ctor: '::',
																						_0: 236,
																						_1: {
																							ctor: '::',
																							_0: 95,
																							_1: {
																								ctor: '::',
																								_0: 151,
																								_1: {
																									ctor: '::',
																									_0: 68,
																									_1: {
																										ctor: '::',
																										_0: 23,
																										_1: {ctor: '[]'}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '::',
																				_0: 196,
																				_1: {
																					ctor: '::',
																					_0: 167,
																					_1: {
																						ctor: '::',
																						_0: 126,
																						_1: {
																							ctor: '::',
																							_0: 61,
																							_1: {
																								ctor: '::',
																								_0: 100,
																								_1: {
																									ctor: '::',
																									_0: 93,
																									_1: {
																										ctor: '::',
																										_0: 25,
																										_1: {
																											ctor: '::',
																											_0: 115,
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '::',
																					_0: 96,
																					_1: {
																						ctor: '::',
																						_0: 129,
																						_1: {
																							ctor: '::',
																							_0: 79,
																							_1: {
																								ctor: '::',
																								_0: 220,
																								_1: {
																									ctor: '::',
																									_0: 34,
																									_1: {
																										ctor: '::',
																										_0: 42,
																										_1: {
																											ctor: '::',
																											_0: 144,
																											_1: {
																												ctor: '::',
																												_0: 136,
																												_1: {ctor: '[]'}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '::',
																						_0: 70,
																						_1: {
																							ctor: '::',
																							_0: 238,
																							_1: {
																								ctor: '::',
																								_0: 184,
																								_1: {
																									ctor: '::',
																									_0: 20,
																									_1: {
																										ctor: '::',
																										_0: 222,
																										_1: {
																											ctor: '::',
																											_0: 94,
																											_1: {
																												ctor: '::',
																												_0: 11,
																												_1: {
																													ctor: '::',
																													_0: 219,
																													_1: {ctor: '[]'}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '::',
																							_0: 224,
																							_1: {
																								ctor: '::',
																								_0: 50,
																								_1: {
																									ctor: '::',
																									_0: 58,
																									_1: {
																										ctor: '::',
																										_0: 10,
																										_1: {
																											ctor: '::',
																											_0: 73,
																											_1: {
																												ctor: '::',
																												_0: 6,
																												_1: {
																													ctor: '::',
																													_0: 36,
																													_1: {
																														ctor: '::',
																														_0: 92,
																														_1: {ctor: '[]'}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '::',
																								_0: 194,
																								_1: {
																									ctor: '::',
																									_0: 211,
																									_1: {
																										ctor: '::',
																										_0: 172,
																										_1: {
																											ctor: '::',
																											_0: 98,
																											_1: {
																												ctor: '::',
																												_0: 145,
																												_1: {
																													ctor: '::',
																													_0: 149,
																													_1: {
																														ctor: '::',
																														_0: 228,
																														_1: {
																															ctor: '::',
																															_0: 121,
																															_1: {ctor: '[]'}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '::',
																									_0: 231,
																									_1: {
																										ctor: '::',
																										_0: 200,
																										_1: {
																											ctor: '::',
																											_0: 55,
																											_1: {
																												ctor: '::',
																												_0: 109,
																												_1: {
																													ctor: '::',
																													_0: 141,
																													_1: {
																														ctor: '::',
																														_0: 213,
																														_1: {
																															ctor: '::',
																															_0: 78,
																															_1: {
																																ctor: '::',
																																_0: 169,
																																_1: {ctor: '[]'}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '::',
																										_0: 108,
																										_1: {
																											ctor: '::',
																											_0: 86,
																											_1: {
																												ctor: '::',
																												_0: 244,
																												_1: {
																													ctor: '::',
																													_0: 234,
																													_1: {
																														ctor: '::',
																														_0: 101,
																														_1: {
																															ctor: '::',
																															_0: 122,
																															_1: {
																																ctor: '::',
																																_0: 174,
																																_1: {
																																	ctor: '::',
																																	_0: 8,
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '::',
																											_0: 186,
																											_1: {
																												ctor: '::',
																												_0: 120,
																												_1: {
																													ctor: '::',
																													_0: 37,
																													_1: {
																														ctor: '::',
																														_0: 46,
																														_1: {
																															ctor: '::',
																															_0: 28,
																															_1: {
																																ctor: '::',
																																_0: 166,
																																_1: {
																																	ctor: '::',
																																	_0: 180,
																																	_1: {
																																		ctor: '::',
																																		_0: 198,
																																		_1: {ctor: '[]'}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '::',
																												_0: 232,
																												_1: {
																													ctor: '::',
																													_0: 221,
																													_1: {
																														ctor: '::',
																														_0: 116,
																														_1: {
																															ctor: '::',
																															_0: 31,
																															_1: {
																																ctor: '::',
																																_0: 75,
																																_1: {
																																	ctor: '::',
																																	_0: 189,
																																	_1: {
																																		ctor: '::',
																																		_0: 139,
																																		_1: {
																																			ctor: '::',
																																			_0: 138,
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '::',
																													_0: 112,
																													_1: {
																														ctor: '::',
																														_0: 62,
																														_1: {
																															ctor: '::',
																															_0: 181,
																															_1: {
																																ctor: '::',
																																_0: 102,
																																_1: {
																																	ctor: '::',
																																	_0: 72,
																																	_1: {
																																		ctor: '::',
																																		_0: 3,
																																		_1: {
																																			ctor: '::',
																																			_0: 246,
																																			_1: {
																																				ctor: '::',
																																				_0: 14,
																																				_1: {ctor: '[]'}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '::',
																														_0: 97,
																														_1: {
																															ctor: '::',
																															_0: 53,
																															_1: {
																																ctor: '::',
																																_0: 87,
																																_1: {
																																	ctor: '::',
																																	_0: 185,
																																	_1: {
																																		ctor: '::',
																																		_0: 134,
																																		_1: {
																																			ctor: '::',
																																			_0: 193,
																																			_1: {
																																				ctor: '::',
																																				_0: 29,
																																				_1: {
																																					ctor: '::',
																																					_0: 158,
																																					_1: {ctor: '[]'}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '::',
																															_0: 225,
																															_1: {
																																ctor: '::',
																																_0: 248,
																																_1: {
																																	ctor: '::',
																																	_0: 152,
																																	_1: {
																																		ctor: '::',
																																		_0: 17,
																																		_1: {
																																			ctor: '::',
																																			_0: 105,
																																			_1: {
																																				ctor: '::',
																																				_0: 217,
																																				_1: {
																																					ctor: '::',
																																					_0: 142,
																																					_1: {
																																						ctor: '::',
																																						_0: 148,
																																						_1: {ctor: '[]'}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '::',
																																_0: 155,
																																_1: {
																																	ctor: '::',
																																	_0: 30,
																																	_1: {
																																		ctor: '::',
																																		_0: 135,
																																		_1: {
																																			ctor: '::',
																																			_0: 233,
																																			_1: {
																																				ctor: '::',
																																				_0: 206,
																																				_1: {
																																					ctor: '::',
																																					_0: 85,
																																					_1: {
																																						ctor: '::',
																																						_0: 40,
																																						_1: {
																																							ctor: '::',
																																							_0: 223,
																																							_1: {ctor: '[]'}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '::',
																																	_0: 140,
																																	_1: {
																																		ctor: '::',
																																		_0: 161,
																																		_1: {
																																			ctor: '::',
																																			_0: 137,
																																			_1: {
																																				ctor: '::',
																																				_0: 13,
																																				_1: {
																																					ctor: '::',
																																					_0: 191,
																																					_1: {
																																						ctor: '::',
																																						_0: 230,
																																						_1: {
																																							ctor: '::',
																																							_0: 66,
																																							_1: {
																																								ctor: '::',
																																								_0: 104,
																																								_1: {ctor: '[]'}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '::',
																																		_0: 65,
																																		_1: {
																																			ctor: '::',
																																			_0: 153,
																																			_1: {
																																				ctor: '::',
																																				_0: 45,
																																				_1: {
																																					ctor: '::',
																																					_0: 15,
																																					_1: {
																																						ctor: '::',
																																						_0: 176,
																																						_1: {
																																							ctor: '::',
																																							_0: 84,
																																							_1: {
																																								ctor: '::',
																																								_0: 187,
																																								_1: {
																																									ctor: '::',
																																									_0: 22,
																																									_1: {ctor: '[]'}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	},
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$genKTable = function (gin) {
	var gsize = (_elm_lang$core$Array$length(gin) / 2) | 0;
	var loop = F2(
		function (i, res) {
			loop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(i, gsize) > -1) {
					return res;
				} else {
					var idx = 2 * A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, i, _billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_);
					var _v0 = i + 1,
						_v1 = A3(
						_elm_lang$core$Array$set,
						i,
						A2(
							_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~|'],
							A2(
								_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'],
								A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, idx, gin),
								16),
							A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + idx, gin)),
						res);
					i = _v0;
					res = _v1;
					continue loop;
				}
			}
		});
	return A2(
		loop,
		0,
		A2(_elm_lang$core$Array$repeat, gsize, 0));
};
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$rsb_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$table(
	{
		ctor: '::',
		_0: {
			ctor: '::',
			_0: 82,
			_1: {
				ctor: '::',
				_0: 9,
				_1: {
					ctor: '::',
					_0: 106,
					_1: {
						ctor: '::',
						_0: 213,
						_1: {
							ctor: '::',
							_0: 48,
							_1: {
								ctor: '::',
								_0: 54,
								_1: {
									ctor: '::',
									_0: 165,
									_1: {
										ctor: '::',
										_0: 56,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: 191,
				_1: {
					ctor: '::',
					_0: 64,
					_1: {
						ctor: '::',
						_0: 163,
						_1: {
							ctor: '::',
							_0: 158,
							_1: {
								ctor: '::',
								_0: 129,
								_1: {
									ctor: '::',
									_0: 243,
									_1: {
										ctor: '::',
										_0: 215,
										_1: {
											ctor: '::',
											_0: 251,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: 124,
					_1: {
						ctor: '::',
						_0: 227,
						_1: {
							ctor: '::',
							_0: 57,
							_1: {
								ctor: '::',
								_0: 130,
								_1: {
									ctor: '::',
									_0: 155,
									_1: {
										ctor: '::',
										_0: 47,
										_1: {
											ctor: '::',
											_0: 255,
											_1: {
												ctor: '::',
												_0: 135,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: 52,
						_1: {
							ctor: '::',
							_0: 142,
							_1: {
								ctor: '::',
								_0: 67,
								_1: {
									ctor: '::',
									_0: 68,
									_1: {
										ctor: '::',
										_0: 196,
										_1: {
											ctor: '::',
											_0: 222,
											_1: {
												ctor: '::',
												_0: 233,
												_1: {
													ctor: '::',
													_0: 203,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: 84,
							_1: {
								ctor: '::',
								_0: 123,
								_1: {
									ctor: '::',
									_0: 148,
									_1: {
										ctor: '::',
										_0: 50,
										_1: {
											ctor: '::',
											_0: 166,
											_1: {
												ctor: '::',
												_0: 194,
												_1: {
													ctor: '::',
													_0: 35,
													_1: {
														ctor: '::',
														_0: 61,
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '::',
								_0: 238,
								_1: {
									ctor: '::',
									_0: 76,
									_1: {
										ctor: '::',
										_0: 149,
										_1: {
											ctor: '::',
											_0: 11,
											_1: {
												ctor: '::',
												_0: 66,
												_1: {
													ctor: '::',
													_0: 250,
													_1: {
														ctor: '::',
														_0: 195,
														_1: {
															ctor: '::',
															_0: 78,
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '::',
									_0: 8,
									_1: {
										ctor: '::',
										_0: 46,
										_1: {
											ctor: '::',
											_0: 161,
											_1: {
												ctor: '::',
												_0: 102,
												_1: {
													ctor: '::',
													_0: 40,
													_1: {
														ctor: '::',
														_0: 217,
														_1: {
															ctor: '::',
															_0: 36,
															_1: {
																ctor: '::',
																_0: 178,
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '::',
										_0: 118,
										_1: {
											ctor: '::',
											_0: 91,
											_1: {
												ctor: '::',
												_0: 162,
												_1: {
													ctor: '::',
													_0: 73,
													_1: {
														ctor: '::',
														_0: 109,
														_1: {
															ctor: '::',
															_0: 139,
															_1: {
																ctor: '::',
																_0: 209,
																_1: {
																	ctor: '::',
																	_0: 37,
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '::',
											_0: 114,
											_1: {
												ctor: '::',
												_0: 248,
												_1: {
													ctor: '::',
													_0: 246,
													_1: {
														ctor: '::',
														_0: 100,
														_1: {
															ctor: '::',
															_0: 134,
															_1: {
																ctor: '::',
																_0: 104,
																_1: {
																	ctor: '::',
																	_0: 152,
																	_1: {
																		ctor: '::',
																		_0: 22,
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '::',
												_0: 212,
												_1: {
													ctor: '::',
													_0: 164,
													_1: {
														ctor: '::',
														_0: 92,
														_1: {
															ctor: '::',
															_0: 204,
															_1: {
																ctor: '::',
																_0: 93,
																_1: {
																	ctor: '::',
																	_0: 101,
																	_1: {
																		ctor: '::',
																		_0: 182,
																		_1: {
																			ctor: '::',
																			_0: 146,
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '::',
													_0: 108,
													_1: {
														ctor: '::',
														_0: 112,
														_1: {
															ctor: '::',
															_0: 72,
															_1: {
																ctor: '::',
																_0: 80,
																_1: {
																	ctor: '::',
																	_0: 253,
																	_1: {
																		ctor: '::',
																		_0: 237,
																		_1: {
																			ctor: '::',
																			_0: 185,
																			_1: {
																				ctor: '::',
																				_0: 218,
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '::',
														_0: 94,
														_1: {
															ctor: '::',
															_0: 21,
															_1: {
																ctor: '::',
																_0: 70,
																_1: {
																	ctor: '::',
																	_0: 87,
																	_1: {
																		ctor: '::',
																		_0: 167,
																		_1: {
																			ctor: '::',
																			_0: 141,
																			_1: {
																				ctor: '::',
																				_0: 157,
																				_1: {
																					ctor: '::',
																					_0: 132,
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '::',
															_0: 144,
															_1: {
																ctor: '::',
																_0: 216,
																_1: {
																	ctor: '::',
																	_0: 171,
																	_1: {
																		ctor: '::',
																		_0: 0,
																		_1: {
																			ctor: '::',
																			_0: 140,
																			_1: {
																				ctor: '::',
																				_0: 188,
																				_1: {
																					ctor: '::',
																					_0: 211,
																					_1: {
																						ctor: '::',
																						_0: 10,
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}
																	}
																}
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '::',
																_0: 247,
																_1: {
																	ctor: '::',
																	_0: 228,
																	_1: {
																		ctor: '::',
																		_0: 88,
																		_1: {
																			ctor: '::',
																			_0: 5,
																			_1: {
																				ctor: '::',
																				_0: 184,
																				_1: {
																					ctor: '::',
																					_0: 179,
																					_1: {
																						ctor: '::',
																						_0: 69,
																						_1: {
																							ctor: '::',
																							_0: 6,
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '::',
																	_0: 208,
																	_1: {
																		ctor: '::',
																		_0: 44,
																		_1: {
																			ctor: '::',
																			_0: 30,
																			_1: {
																				ctor: '::',
																				_0: 143,
																				_1: {
																					ctor: '::',
																					_0: 202,
																					_1: {
																						ctor: '::',
																						_0: 63,
																						_1: {
																							ctor: '::',
																							_0: 15,
																							_1: {
																								ctor: '::',
																								_0: 2,
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '::',
																		_0: 193,
																		_1: {
																			ctor: '::',
																			_0: 175,
																			_1: {
																				ctor: '::',
																				_0: 189,
																				_1: {
																					ctor: '::',
																					_0: 3,
																					_1: {
																						ctor: '::',
																						_0: 1,
																						_1: {
																							ctor: '::',
																							_0: 19,
																							_1: {
																								ctor: '::',
																								_0: 138,
																								_1: {
																									ctor: '::',
																									_0: 107,
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '::',
																			_0: 58,
																			_1: {
																				ctor: '::',
																				_0: 145,
																				_1: {
																					ctor: '::',
																					_0: 17,
																					_1: {
																						ctor: '::',
																						_0: 65,
																						_1: {
																							ctor: '::',
																							_0: 79,
																							_1: {
																								ctor: '::',
																								_0: 103,
																								_1: {
																									ctor: '::',
																									_0: 220,
																									_1: {
																										ctor: '::',
																										_0: 234,
																										_1: {ctor: '[]'}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '::',
																				_0: 151,
																				_1: {
																					ctor: '::',
																					_0: 242,
																					_1: {
																						ctor: '::',
																						_0: 207,
																						_1: {
																							ctor: '::',
																							_0: 206,
																							_1: {
																								ctor: '::',
																								_0: 240,
																								_1: {
																									ctor: '::',
																									_0: 180,
																									_1: {
																										ctor: '::',
																										_0: 230,
																										_1: {
																											ctor: '::',
																											_0: 115,
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '::',
																					_0: 150,
																					_1: {
																						ctor: '::',
																						_0: 172,
																						_1: {
																							ctor: '::',
																							_0: 116,
																							_1: {
																								ctor: '::',
																								_0: 34,
																								_1: {
																									ctor: '::',
																									_0: 231,
																									_1: {
																										ctor: '::',
																										_0: 173,
																										_1: {
																											ctor: '::',
																											_0: 53,
																											_1: {
																												ctor: '::',
																												_0: 133,
																												_1: {ctor: '[]'}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '::',
																						_0: 226,
																						_1: {
																							ctor: '::',
																							_0: 249,
																							_1: {
																								ctor: '::',
																								_0: 55,
																								_1: {
																									ctor: '::',
																									_0: 232,
																									_1: {
																										ctor: '::',
																										_0: 28,
																										_1: {
																											ctor: '::',
																											_0: 117,
																											_1: {
																												ctor: '::',
																												_0: 223,
																												_1: {
																													ctor: '::',
																													_0: 110,
																													_1: {ctor: '[]'}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '::',
																							_0: 71,
																							_1: {
																								ctor: '::',
																								_0: 241,
																								_1: {
																									ctor: '::',
																									_0: 26,
																									_1: {
																										ctor: '::',
																										_0: 113,
																										_1: {
																											ctor: '::',
																											_0: 29,
																											_1: {
																												ctor: '::',
																												_0: 41,
																												_1: {
																													ctor: '::',
																													_0: 197,
																													_1: {
																														ctor: '::',
																														_0: 137,
																														_1: {ctor: '[]'}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '::',
																								_0: 111,
																								_1: {
																									ctor: '::',
																									_0: 183,
																									_1: {
																										ctor: '::',
																										_0: 98,
																										_1: {
																											ctor: '::',
																											_0: 14,
																											_1: {
																												ctor: '::',
																												_0: 170,
																												_1: {
																													ctor: '::',
																													_0: 24,
																													_1: {
																														ctor: '::',
																														_0: 190,
																														_1: {
																															ctor: '::',
																															_0: 27,
																															_1: {ctor: '[]'}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '::',
																									_0: 252,
																									_1: {
																										ctor: '::',
																										_0: 86,
																										_1: {
																											ctor: '::',
																											_0: 62,
																											_1: {
																												ctor: '::',
																												_0: 75,
																												_1: {
																													ctor: '::',
																													_0: 198,
																													_1: {
																														ctor: '::',
																														_0: 210,
																														_1: {
																															ctor: '::',
																															_0: 121,
																															_1: {
																																ctor: '::',
																																_0: 32,
																																_1: {ctor: '[]'}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '::',
																										_0: 154,
																										_1: {
																											ctor: '::',
																											_0: 219,
																											_1: {
																												ctor: '::',
																												_0: 192,
																												_1: {
																													ctor: '::',
																													_0: 254,
																													_1: {
																														ctor: '::',
																														_0: 120,
																														_1: {
																															ctor: '::',
																															_0: 205,
																															_1: {
																																ctor: '::',
																																_0: 90,
																																_1: {
																																	ctor: '::',
																																	_0: 244,
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '::',
																											_0: 31,
																											_1: {
																												ctor: '::',
																												_0: 221,
																												_1: {
																													ctor: '::',
																													_0: 168,
																													_1: {
																														ctor: '::',
																														_0: 51,
																														_1: {
																															ctor: '::',
																															_0: 136,
																															_1: {
																																ctor: '::',
																																_0: 7,
																																_1: {
																																	ctor: '::',
																																	_0: 199,
																																	_1: {
																																		ctor: '::',
																																		_0: 49,
																																		_1: {ctor: '[]'}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '::',
																												_0: 177,
																												_1: {
																													ctor: '::',
																													_0: 18,
																													_1: {
																														ctor: '::',
																														_0: 16,
																														_1: {
																															ctor: '::',
																															_0: 89,
																															_1: {
																																ctor: '::',
																																_0: 39,
																																_1: {
																																	ctor: '::',
																																	_0: 128,
																																	_1: {
																																		ctor: '::',
																																		_0: 236,
																																		_1: {
																																			ctor: '::',
																																			_0: 95,
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '::',
																													_0: 96,
																													_1: {
																														ctor: '::',
																														_0: 81,
																														_1: {
																															ctor: '::',
																															_0: 127,
																															_1: {
																																ctor: '::',
																																_0: 169,
																																_1: {
																																	ctor: '::',
																																	_0: 25,
																																	_1: {
																																		ctor: '::',
																																		_0: 181,
																																		_1: {
																																			ctor: '::',
																																			_0: 74,
																																			_1: {
																																				ctor: '::',
																																				_0: 13,
																																				_1: {ctor: '[]'}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '::',
																														_0: 45,
																														_1: {
																															ctor: '::',
																															_0: 229,
																															_1: {
																																ctor: '::',
																																_0: 122,
																																_1: {
																																	ctor: '::',
																																	_0: 159,
																																	_1: {
																																		ctor: '::',
																																		_0: 147,
																																		_1: {
																																			ctor: '::',
																																			_0: 201,
																																			_1: {
																																				ctor: '::',
																																				_0: 156,
																																				_1: {
																																					ctor: '::',
																																					_0: 239,
																																					_1: {ctor: '[]'}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '::',
																															_0: 160,
																															_1: {
																																ctor: '::',
																																_0: 224,
																																_1: {
																																	ctor: '::',
																																	_0: 59,
																																	_1: {
																																		ctor: '::',
																																		_0: 77,
																																		_1: {
																																			ctor: '::',
																																			_0: 174,
																																			_1: {
																																				ctor: '::',
																																				_0: 42,
																																				_1: {
																																					ctor: '::',
																																					_0: 245,
																																					_1: {
																																						ctor: '::',
																																						_0: 176,
																																						_1: {ctor: '[]'}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '::',
																																_0: 200,
																																_1: {
																																	ctor: '::',
																																	_0: 235,
																																	_1: {
																																		ctor: '::',
																																		_0: 187,
																																		_1: {
																																			ctor: '::',
																																			_0: 60,
																																			_1: {
																																				ctor: '::',
																																				_0: 131,
																																				_1: {
																																					ctor: '::',
																																					_0: 83,
																																					_1: {
																																						ctor: '::',
																																						_0: 153,
																																						_1: {
																																							ctor: '::',
																																							_0: 97,
																																							_1: {ctor: '[]'}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '::',
																																	_0: 23,
																																	_1: {
																																		ctor: '::',
																																		_0: 43,
																																		_1: {
																																			ctor: '::',
																																			_0: 4,
																																			_1: {
																																				ctor: '::',
																																				_0: 126,
																																				_1: {
																																					ctor: '::',
																																					_0: 186,
																																					_1: {
																																						ctor: '::',
																																						_0: 119,
																																						_1: {
																																							ctor: '::',
																																							_0: 214,
																																							_1: {
																																								ctor: '::',
																																								_0: 38,
																																								_1: {ctor: '[]'}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '::',
																																		_0: 225,
																																		_1: {
																																			ctor: '::',
																																			_0: 105,
																																			_1: {
																																				ctor: '::',
																																				_0: 20,
																																				_1: {
																																					ctor: '::',
																																					_0: 99,
																																					_1: {
																																						ctor: '::',
																																						_0: 85,
																																						_1: {
																																							ctor: '::',
																																							_0: 33,
																																							_1: {
																																								ctor: '::',
																																								_0: 12,
																																								_1: {
																																									ctor: '::',
																																									_0: 125,
																																									_1: {ctor: '[]'}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	},
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft0_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$table(
	{
		ctor: '::',
		_0: {
			ctor: '::',
			_0: 50787,
			_1: {
				ctor: '::',
				_0: 25509,
				_1: {
					ctor: '::',
					_0: 63612,
					_1: {
						ctor: '::',
						_0: 31876,
						_1: {
							ctor: '::',
							_0: 61047,
							_1: {
								ctor: '::',
								_0: 30617,
								_1: {
									ctor: '::',
									_0: 63099,
									_1: {
										ctor: '::',
										_0: 31629,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: 65522,
				_1: {
					ctor: '::',
					_0: 61965,
					_1: {
						ctor: '::',
						_0: 54891,
						_1: {
							ctor: '::',
							_0: 27581,
							_1: {
								ctor: '::',
								_0: 56943,
								_1: {
									ctor: '::',
									_0: 28593,
									_1: {
										ctor: '::',
										_0: 37317,
										_1: {
											ctor: '::',
											_0: 50516,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: 24624,
					_1: {
						ctor: '::',
						_0: 12368,
						_1: {
							ctor: '::',
							_0: 513,
							_1: {
								ctor: '::',
								_0: 259,
								_1: {
									ctor: '::',
									_0: 52839,
									_1: {
										ctor: '::',
										_0: 26537,
										_1: {
											ctor: '::',
											_0: 22059,
											_1: {
												ctor: '::',
												_0: 11133,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: 59390,
						_1: {
							ctor: '::',
							_0: 65049,
							_1: {
								ctor: '::',
								_0: 46551,
								_1: {
									ctor: '::',
									_0: 55138,
									_1: {
										ctor: '::',
										_0: 19883,
										_1: {
											ctor: '::',
											_0: 44006,
											_1: {
												ctor: '::',
												_0: 60534,
												_1: {
													ctor: '::',
													_0: 30362,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: 36810,
							_1: {
								ctor: '::',
								_0: 51781,
								_1: {
									ctor: '::',
									_0: 8066,
									_1: {
										ctor: '::',
										_0: 33437,
										_1: {
											ctor: '::',
											_0: 35273,
											_1: {
												ctor: '::',
												_0: 51520,
												_1: {
													ctor: '::',
													_0: 64125,
													_1: {
														ctor: '::',
														_0: 32135,
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '::',
								_0: 61434,
								_1: {
									ctor: '::',
									_0: 64021,
									_1: {
										ctor: '::',
										_0: 45657,
										_1: {
											ctor: '::',
											_0: 23019,
											_1: {
												ctor: '::',
												_0: 36423,
												_1: {
													ctor: '::',
													_0: 18377,
													_1: {
														ctor: '::',
														_0: 64496,
														_1: {
															ctor: '::',
															_0: 61451,
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '::',
									_0: 16813,
									_1: {
										ctor: '::',
										_0: 44524,
										_1: {
											ctor: '::',
											_0: 46036,
											_1: {
												ctor: '::',
												_0: 54375,
												_1: {
													ctor: '::',
													_0: 24482,
													_1: {
														ctor: '::',
														_0: 41725,
														_1: {
															ctor: '::',
															_0: 17839,
															_1: {
																ctor: '::',
																_0: 45034,
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '::',
										_0: 9116,
										_1: {
											ctor: '::',
											_0: 40127,
											_1: {
												ctor: '::',
												_0: 21412,
												_1: {
													ctor: '::',
													_0: 42231,
													_1: {
														ctor: '::',
														_0: 58482,
														_1: {
															ctor: '::',
															_0: 29334,
															_1: {
																ctor: '::',
																_0: 39872,
																_1: {
																	ctor: '::',
																	_0: 49243,
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '::',
											_0: 30135,
											_1: {
												ctor: '::',
												_0: 47042,
												_1: {
													ctor: '::',
													_0: 57853,
													_1: {
														ctor: '::',
														_0: 64796,
														_1: {
															ctor: '::',
															_0: 15763,
															_1: {
																ctor: '::',
																_0: 37806,
																_1: {
																	ctor: '::',
																	_0: 19494,
																	_1: {
																		ctor: '::',
																		_0: 9834,
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '::',
												_0: 27702,
												_1: {
													ctor: '::',
													_0: 13914,
													_1: {
														ctor: '::',
														_0: 32319,
														_1: {
															ctor: '::',
															_0: 16193,
															_1: {
																ctor: '::',
																_0: 62967,
																_1: {
																	ctor: '::',
																	_0: 63234,
																	_1: {
																		ctor: '::',
																		_0: 33740,
																		_1: {
																			ctor: '::',
																			_0: 52303,
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '::',
													_0: 26676,
													_1: {
														ctor: '::',
														_0: 13404,
														_1: {
															ctor: '::',
															_0: 20901,
															_1: {
																ctor: '::',
																_0: 42484,
																_1: {
																	ctor: '::',
																	_0: 53733,
																	_1: {
																		ctor: '::',
																		_0: 58676,
																		_1: {
																			ctor: '::',
																			_0: 63985,
																			_1: {
																				ctor: '::',
																				_0: 61704,
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '::',
														_0: 57969,
														_1: {
															ctor: '::',
															_0: 29075,
															_1: {
																ctor: '::',
																_0: 43992,
																_1: {
																	ctor: '::',
																	_0: 55411,
																	_1: {
																		ctor: '::',
																		_0: 25137,
																		_1: {
																			ctor: '::',
																			_0: 12627,
																			_1: {
																				ctor: '::',
																				_0: 10773,
																				_1: {
																					ctor: '::',
																					_0: 5439,
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '::',
															_0: 2052,
															_1: {
																ctor: '::',
																_0: 1036,
																_1: {
																	ctor: '::',
																	_0: 38343,
																	_1: {
																		ctor: '::',
																		_0: 51026,
																		_1: {
																			ctor: '::',
																			_0: 17955,
																			_1: {
																				ctor: '::',
																				_0: 9061,
																				_1: {
																					ctor: '::',
																					_0: 40387,
																					_1: {
																						ctor: '::',
																						_0: 50014,
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}
																	}
																}
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '::',
																_0: 12312,
																_1: {
																	ctor: '::',
																	_0: 6184,
																	_1: {
																		ctor: '::',
																		_0: 14230,
																		_1: {
																			ctor: '::',
																			_0: 38561,
																			_1: {
																				ctor: '::',
																				_0: 2565,
																				_1: {
																					ctor: '::',
																					_0: 1295,
																					_1: {
																						ctor: '::',
																						_0: 12186,
																						_1: {
																							ctor: '::',
																							_0: 39605,
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '::',
																	_0: 3591,
																	_1: {
																		ctor: '::',
																		_0: 1801,
																		_1: {
																			ctor: '::',
																			_0: 9234,
																			_1: {
																				ctor: '::',
																				_0: 4662,
																				_1: {
																					ctor: '::',
																					_0: 7040,
																					_1: {
																						ctor: '::',
																						_0: 32923,
																						_1: {
																							ctor: '::',
																							_0: 57314,
																							_1: {
																								ctor: '::',
																								_0: 57917,
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '::',
																		_0: 52715,
																		_1: {
																			ctor: '::',
																			_0: 60198,
																			_1: {
																				ctor: '::',
																				_0: 20007,
																				_1: {
																					ctor: '::',
																					_0: 10089,
																					_1: {
																						ctor: '::',
																						_0: 32690,
																						_1: {
																							ctor: '::',
																							_0: 45773,
																							_1: {
																								ctor: '::',
																								_0: 60021,
																								_1: {
																									ctor: '::',
																									_0: 30111,
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '::',
																			_0: 4617,
																			_1: {
																				ctor: '::',
																				_0: 2331,
																				_1: {
																					ctor: '::',
																					_0: 7555,
																					_1: {
																						ctor: '::',
																						_0: 33694,
																						_1: {
																							ctor: '::',
																							_0: 22572,
																							_1: {
																								ctor: '::',
																								_0: 11380,
																								_1: {
																									ctor: '::',
																									_0: 13338,
																									_1: {
																										ctor: '::',
																										_0: 6702,
																										_1: {ctor: '[]'}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '::',
																				_0: 13851,
																				_1: {
																					ctor: '::',
																					_0: 6957,
																					_1: {
																						ctor: '::',
																						_0: 56430,
																						_1: {
																							ctor: '::',
																							_0: 28338,
																							_1: {
																								ctor: '::',
																								_0: 46170,
																								_1: {
																									ctor: '::',
																									_0: 23278,
																									_1: {
																										ctor: '::',
																										_0: 23456,
																										_1: {
																											ctor: '::',
																											_0: 41211,
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '::',
																					_0: 42066,
																					_1: {
																						ctor: '::',
																						_0: 21238,
																						_1: {
																							ctor: '::',
																							_0: 30267,
																							_1: {
																								ctor: '::',
																								_0: 15181,
																								_1: {
																									ctor: '::',
																									_0: 47062,
																									_1: {
																										ctor: '::',
																										_0: 54881,
																										_1: {
																											ctor: '::',
																											_0: 32179,
																											_1: {
																												ctor: '::',
																												_0: 46030,
																												_1: {ctor: '[]'}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '::',
																						_0: 21033,
																						_1: {
																							ctor: '::',
																							_0: 10619,
																							_1: {
																								ctor: '::',
																								_0: 56803,
																								_1: {
																									ctor: '::',
																									_0: 58174,
																									_1: {
																										ctor: '::',
																										_0: 24111,
																										_1: {
																											ctor: '::',
																											_0: 12145,
																											_1: {
																												ctor: '::',
																												_0: 4996,
																												_1: {
																													ctor: '::',
																													_0: 33943,
																													_1: {ctor: '[]'}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '::',
																							_0: 42579,
																							_1: {
																								ctor: '::',
																								_0: 21493,
																								_1: {
																									ctor: '::',
																									_0: 47569,
																									_1: {
																										ctor: '::',
																										_0: 53608,
																										_1: {
																											ctor: '::',
																											_0: _billstclair$elm_crypto_aes$Crypto_AES_Tables$zero00,
																											_1: {
																												ctor: '::',
																												_0: _billstclair$elm_crypto_aes$Crypto_AES_Tables$zero00,
																												_1: {
																													ctor: '::',
																													_0: 49645,
																													_1: {
																														ctor: '::',
																														_0: 60716,
																														_1: {ctor: '[]'}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '::',
																								_0: 16416,
																								_1: {
																									ctor: '::',
																									_0: 8288,
																									_1: {
																										ctor: '::',
																										_0: 58364,
																										_1: {
																											ctor: '::',
																											_0: 64543,
																											_1: {
																												ctor: '::',
																												_0: 31153,
																												_1: {
																													ctor: '::',
																													_0: 45512,
																													_1: {
																														ctor: '::',
																														_0: 46683,
																														_1: {
																															ctor: '::',
																															_0: 23533,
																															_1: {ctor: '[]'}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '::',
																									_0: 54378,
																									_1: {
																										ctor: '::',
																										_0: 27326,
																										_1: {
																											ctor: '::',
																											_0: 36299,
																											_1: {
																												ctor: '::',
																												_0: 52038,
																												_1: {
																													ctor: '::',
																													_0: 26558,
																													_1: {
																														ctor: '::',
																														_0: 48857,
																														_1: {
																															ctor: '::',
																															_0: 29241,
																															_1: {
																																ctor: '::',
																																_0: 14667,
																																_1: {ctor: '[]'}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '::',
																										_0: 37962,
																										_1: {
																											ctor: '::',
																											_0: 19166,
																											_1: {
																												ctor: '::',
																												_0: 38988,
																												_1: {
																													ctor: '::',
																													_0: 19668,
																													_1: {
																														ctor: '::',
																														_0: 45144,
																														_1: {
																															ctor: '::',
																															_0: 22760,
																															_1: {
																																ctor: '::',
																																_0: 34255,
																																_1: {
																																	ctor: '::',
																																	_0: 53066,
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '::',
																											_0: 48080,
																											_1: {
																												ctor: '::',
																												_0: 53355,
																												_1: {
																													ctor: '::',
																													_0: 50671,
																													_1: {
																														ctor: '::',
																														_0: 61226,
																														_1: {
																															ctor: '::',
																															_0: 20394,
																															_1: {
																																ctor: '::',
																																_0: 43749,
																																_1: {
																																	ctor: '::',
																																	_0: 60923,
																																	_1: {
																																		ctor: '::',
																																		_0: 64278,
																																		_1: {ctor: '[]'}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '::',
																												_0: 34371,
																												_1: {
																													ctor: '::',
																													_0: 17349,
																													_1: {
																														ctor: '::',
																														_0: 39501,
																														_1: {
																															ctor: '::',
																															_0: 19927,
																															_1: {
																																ctor: '::',
																																_0: 26163,
																																_1: {
																																	ctor: '::',
																																	_0: 13141,
																																	_1: {
																																		ctor: '::',
																																		_0: 4485,
																																		_1: {
																																			ctor: '::',
																																			_0: 34196,
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '::',
																													_0: 35397,
																													_1: {
																														ctor: '::',
																														_0: 17871,
																														_1: {
																															ctor: '::',
																															_0: 59897,
																															_1: {
																																ctor: '::',
																																_0: 63760,
																																_1: {
																																	ctor: '::',
																																	_0: 1026,
																																	_1: {
																																		ctor: '::',
																																		_0: 518,
																																		_1: {
																																			ctor: '::',
																																			_0: 65151,
																																			_1: {
																																				ctor: '::',
																																				_0: 32641,
																																				_1: {ctor: '[]'}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '::',
																														_0: 41040,
																														_1: {
																															ctor: '::',
																															_0: 20720,
																															_1: {
																																ctor: '::',
																																_0: 30780,
																																_1: {
																																	ctor: '::',
																																	_0: 15428,
																																	_1: {
																																		ctor: '::',
																																		_0: 9631,
																																		_1: {
																																			ctor: '::',
																																			_0: 40890,
																																			_1: {
																																				ctor: '::',
																																				_0: 19368,
																																				_1: {
																																					ctor: '::',
																																					_0: 43235,
																																					_1: {ctor: '[]'}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '::',
																															_0: 41553,
																															_1: {
																																ctor: '::',
																																_0: 20979,
																																_1: {
																																	ctor: '::',
																																	_0: 23971,
																																	_1: {
																																		ctor: '::',
																																		_0: 41982,
																																		_1: {
																																			ctor: '::',
																																			_0: 32832,
																																			_1: {
																																				ctor: '::',
																																				_0: 16576,
																																				_1: {
																																					ctor: '::',
																																					_0: 1423,
																																					_1: {
																																						ctor: '::',
																																						_0: 36746,
																																						_1: {ctor: '[]'}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '::',
																																_0: 16274,
																																_1: {
																																	ctor: '::',
																																	_0: 37549,
																																	_1: {
																																		ctor: '::',
																																		_0: 8605,
																																		_1: {
																																			ctor: '::',
																																			_0: 40380,
																																			_1: {
																																				ctor: '::',
																																				_0: 28728,
																																				_1: {
																																					ctor: '::',
																																					_0: 14408,
																																					_1: {
																																						ctor: '::',
																																						_0: 61941,
																																						_1: {
																																							ctor: '::',
																																							_0: 62724,
																																							_1: {ctor: '[]'}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '::',
																																	_0: 25532,
																																	_1: {
																																		ctor: '::',
																																		_0: 48351,
																																		_1: {
																																			ctor: '::',
																																			_0: 30646,
																																			_1: {
																																				ctor: '::',
																																				_0: 46785,
																																				_1: {
																																					ctor: '::',
																																					_0: 45018,
																																					_1: {
																																						ctor: '::',
																																						_0: 55925,
																																						_1: {
																																							ctor: '::',
																																							_0: 16929,
																																							_1: {
																																								ctor: '::',
																																								_0: 8547,
																																								_1: {ctor: '[]'}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '::',
																																		_0: 8208,
																																		_1: {
																																			ctor: '::',
																																			_0: 4144,
																																			_1: {
																																				ctor: '::',
																																				_0: 58879,
																																				_1: {
																																					ctor: '::',
																																					_0: 65306,
																																					_1: {
																																						ctor: '::',
																																						_0: 65011,
																																						_1: {
																																							ctor: '::',
																																							_0: 62222,
																																							_1: {
																																								ctor: '::',
																																								_0: 49106,
																																								_1: {
																																									ctor: '::',
																																									_0: 53869,
																																									_1: {ctor: '[]'}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	},
																																	_1: {
																																		ctor: '::',
																																		_0: {
																																			ctor: '::',
																																			_0: 33229,
																																			_1: {
																																				ctor: '::',
																																				_0: 52556,
																																				_1: {
																																					ctor: '::',
																																					_0: 6156,
																																					_1: {
																																						ctor: '::',
																																						_0: 3092,
																																						_1: {
																																							ctor: '::',
																																							_0: 9747,
																																							_1: {
																																								ctor: '::',
																																								_0: 4917,
																																								_1: {
																																									ctor: '::',
																																									_0: 50156,
																																									_1: {
																																										ctor: '::',
																																										_0: 60463,
																																										_1: {ctor: '[]'}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		},
																																		_1: {
																																			ctor: '::',
																																			_0: {
																																				ctor: '::',
																																				_0: 48735,
																																				_1: {
																																					ctor: '::',
																																					_0: 24545,
																																					_1: {
																																						ctor: '::',
																																						_0: 13719,
																																						_1: {
																																							ctor: '::',
																																							_0: 38818,
																																							_1: {
																																								ctor: '::',
																																								_0: 34884,
																																								_1: {
																																									ctor: '::',
																																									_0: 17612,
																																									_1: {
																																										ctor: '::',
																																										_0: 11799,
																																										_1: {
																																											ctor: '::',
																																											_0: 5945,
																																											_1: {ctor: '[]'}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			},
																																			_1: {
																																				ctor: '::',
																																				_0: {
																																					ctor: '::',
																																					_0: 37828,
																																					_1: {
																																						ctor: '::',
																																						_0: 50263,
																																						_1: {
																																							ctor: '::',
																																							_0: 21927,
																																							_1: {
																																								ctor: '::',
																																								_0: 42994,
																																								_1: {
																																									ctor: '::',
																																									_0: 64638,
																																									_1: {
																																										ctor: '::',
																																										_0: 32386,
																																										_1: {
																																											ctor: '::',
																																											_0: 31293,
																																											_1: {
																																												ctor: '::',
																																												_0: 15687,
																																												_1: {ctor: '[]'}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				},
																																				_1: {
																																					ctor: '::',
																																					_0: {
																																						ctor: '::',
																																						_0: 51300,
																																						_1: {
																																							ctor: '::',
																																							_0: 25772,
																																							_1: {
																																								ctor: '::',
																																								_0: 47709,
																																								_1: {
																																									ctor: '::',
																																									_0: 24039,
																																									_1: {
																																										ctor: '::',
																																										_0: 12825,
																																										_1: {
																																											ctor: '::',
																																											_0: 6443,
																																											_1: {
																																												ctor: '::',
																																												_0: 58995,
																																												_1: {
																																													ctor: '::',
																																													_0: 29589,
																																													_1: {ctor: '[]'}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					},
																																					_1: {
																																						ctor: '::',
																																						_0: {
																																							ctor: '::',
																																							_0: 49248,
																																							_1: {
																																								ctor: '::',
																																								_0: 24736,
																																								_1: {
																																									ctor: '::',
																																									_0: 6529,
																																									_1: {
																																										ctor: '::',
																																										_0: 33176,
																																										_1: {
																																											ctor: '::',
																																											_0: 40527,
																																											_1: {
																																												ctor: '::',
																																												_0: 20433,
																																												_1: {
																																													ctor: '::',
																																													_0: 41948,
																																													_1: {
																																														ctor: '::',
																																														_0: 56447,
																																														_1: {ctor: '[]'}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						},
																																						_1: {
																																							ctor: '::',
																																							_0: {
																																								ctor: '::',
																																								_0: 17442,
																																								_1: {
																																									ctor: '::',
																																									_0: 8806,
																																									_1: {
																																										ctor: '::',
																																										_0: 21546,
																																										_1: {
																																											ctor: '::',
																																											_0: 10878,
																																											_1: {
																																												ctor: '::',
																																												_0: 15248,
																																												_1: {
																																													ctor: '::',
																																													_0: 37035,
																																													_1: {
																																														ctor: '::',
																																														_0: 2952,
																																														_1: {
																																															ctor: '::',
																																															_0: 34947,
																																															_1: {ctor: '[]'}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							},
																																							_1: {
																																								ctor: '::',
																																								_0: {
																																									ctor: '::',
																																									_0: 35910,
																																									_1: {
																																										ctor: '::',
																																										_0: 18122,
																																										_1: {
																																											ctor: '::',
																																											_0: 51182,
																																											_1: {
																																												ctor: '::',
																																												_0: 60969,
																																												_1: {
																																													ctor: '::',
																																													_0: 27576,
																																													_1: {
																																														ctor: '::',
																																														_0: 47315,
																																														_1: {
																																															ctor: '::',
																																															_0: 10260,
																																															_1: {
																																																ctor: '::',
																																																_0: 5180,
																																																_1: {ctor: '[]'}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								},
																																								_1: {
																																									ctor: '::',
																																									_0: {
																																										ctor: '::',
																																										_0: 42974,
																																										_1: {
																																											ctor: '::',
																																											_0: 56953,
																																											_1: {
																																												ctor: '::',
																																												_0: 48222,
																																												_1: {
																																													ctor: '::',
																																													_0: 24290,
																																													_1: {
																																														ctor: '::',
																																														_0: 5643,
																																														_1: {
																																															ctor: '::',
																																															_0: 2845,
																																															_1: {
																																																ctor: '::',
																																																_0: 44507,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 56182,
																																																	_1: {ctor: '[]'}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									},
																																									_1: {
																																										ctor: '::',
																																										_0: {
																																											ctor: '::',
																																											_0: 56288,
																																											_1: {
																																												ctor: '::',
																																												_0: 57403,
																																												_1: {
																																													ctor: '::',
																																													_0: 25650,
																																													_1: {
																																														ctor: '::',
																																														_0: 12886,
																																														_1: {
																																															ctor: '::',
																																															_0: 29754,
																																															_1: {
																																																ctor: '::',
																																																_0: 14926,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 5130,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 2590,
																																																		_1: {ctor: '[]'}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										},
																																										_1: {
																																											ctor: '::',
																																											_0: {
																																												ctor: '::',
																																												_0: 37449,
																																												_1: {
																																													ctor: '::',
																																													_0: 18907,
																																													_1: {
																																														ctor: '::',
																																														_0: 3078,
																																														_1: {
																																															ctor: '::',
																																															_0: 1546,
																																															_1: {
																																																ctor: '::',
																																																_0: 18468,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 9324,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 47196,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 23780,
																																																			_1: {ctor: '[]'}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											},
																																											_1: {
																																												ctor: '::',
																																												_0: {
																																													ctor: '::',
																																													_0: 40898,
																																													_1: {
																																														ctor: '::',
																																														_0: 49757,
																																														_1: {
																																															ctor: '::',
																																															_0: 48595,
																																															_1: {
																																																ctor: '::',
																																																_0: 54126,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 17324,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 44271,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 50274,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 25254,
																																																				_1: {ctor: '[]'}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												},
																																												_1: {
																																													ctor: '::',
																																													_0: {
																																														ctor: '::',
																																														_0: 14737,
																																														_1: {
																																															ctor: '::',
																																															_0: 37288,
																																															_1: {
																																																ctor: '::',
																																																_0: 12693,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 38308,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 54244,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 58423,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 62073,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 31115,
																																																					_1: {ctor: '[]'}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													},
																																													_1: {
																																														ctor: '::',
																																														_0: {
																																															ctor: '::',
																																															_0: 54759,
																																															_1: {
																																																ctor: '::',
																																																_0: 59186,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 35784,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 51267,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 28215,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 14169,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 55917,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 28087,
																																																						_1: {ctor: '[]'}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														},
																																														_1: {
																																															ctor: '::',
																																															_0: {
																																																ctor: '::',
																																																_0: 397,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 36236,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 45525,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 54628,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 40014,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 20178,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 18857,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 43488,
																																																							_1: {ctor: '[]'}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															},
																																															_1: {
																																																ctor: '::',
																																																_0: {
																																																	ctor: '::',
																																																	_0: 55404,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 27828,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 44118,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 22266,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 62452,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 62471,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 53226,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 59941,
																																																								_1: {ctor: '[]'}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																},
																																																_1: {
																																																	ctor: '::',
																																																	_0: {
																																																		ctor: '::',
																																																		_0: 51813,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 26031,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 62586,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 31374,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 18350,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 44777,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 4104,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 2072,
																																																									_1: {ctor: '[]'}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	},
																																																	_1: {
																																																		ctor: '::',
																																																		_0: {
																																																			ctor: '::',
																																																			_0: 28602,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 47829,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 61560,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 30856,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 18981,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 9583,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 23598,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 11890,
																																																										_1: {ctor: '[]'}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		},
																																																		_1: {
																																																			ctor: '::',
																																																			_0: {
																																																				ctor: '::',
																																																				_0: 14364,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 7204,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 22438,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 42737,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 29620,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 46279,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 38854,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 50769,
																																																											_1: {ctor: '[]'}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			},
																																																			_1: {
																																																				ctor: '::',
																																																				_0: {
																																																					ctor: '::',
																																																					_0: 52200,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 59427,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 41437,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 56700,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 59508,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 29852,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 15903,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 7969,
																																																												_1: {ctor: '[]'}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				},
																																																				_1: {
																																																					ctor: '::',
																																																					_0: {
																																																						ctor: '::',
																																																						_0: 38475,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 19421,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 25021,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 48604,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 3467,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 35718,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 3978,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 35461,
																																																													_1: {ctor: '[]'}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					},
																																																					_1: {
																																																						ctor: '::',
																																																						_0: {
																																																							ctor: '::',
																																																							_0: 57456,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 28816,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 31806,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 15938,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 29109,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 46532,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 52326,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 26282,
																																																														_1: {ctor: '[]'}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						},
																																																						_1: {
																																																							ctor: '::',
																																																							_0: {
																																																								ctor: '::',
																																																								_0: 36936,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 18648,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 1539,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 773,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 63478,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 62977,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 7182,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 3602,
																																																															_1: {ctor: '[]'}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							},
																																																							_1: {
																																																								ctor: '::',
																																																								_0: {
																																																									ctor: '::',
																																																									_0: 49761,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 24995,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 27189,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 13663,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 44631,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 22521,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 27065,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 47568,
																																																																_1: {ctor: '[]'}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								},
																																																								_1: {
																																																									ctor: '::',
																																																									_0: {
																																																										ctor: '::',
																																																										_0: 6022,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 34449,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 39361,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 49496,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 14877,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 7463,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 10142,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 40633,
																																																																	_1: {ctor: '[]'}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									},
																																																									_1: {
																																																										ctor: '::',
																																																										_0: {
																																																											ctor: '::',
																																																											_0: 55777,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 57656,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 60408,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 63507,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 11160,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 39091,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 8721,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 4403,
																																																																		_1: {ctor: '[]'}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										},
																																																										_1: {
																																																											ctor: '::',
																																																											_0: {
																																																												ctor: '::',
																																																												_0: 53865,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 27067,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 43481,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 55664,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 1934,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 36489,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 13204,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 38055,
																																																																			_1: {ctor: '[]'}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											},
																																																											_1: {
																																																												ctor: '::',
																																																												_0: {
																																																													ctor: '::',
																																																													_0: 11675,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 39862,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 15390,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 7714,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 5511,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 34706,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 51689,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 59680,
																																																																				_1: {ctor: '[]'}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												},
																																																												_1: {
																																																													ctor: '::',
																																																													_0: {
																																																														ctor: '::',
																																																														_0: 34766,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 52809,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 43605,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 22015,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 20520,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 10360,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 42463,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 57210,
																																																																					_1: {ctor: '[]'}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													},
																																																													_1: {
																																																														ctor: '::',
																																																														_0: {
																																																															ctor: '::',
																																																															_0: 908,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 35983,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 22945,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 41464,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 2441,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 35200,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 6669,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 3351,
																																																																						_1: {ctor: '[]'}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														},
																																																														_1: {
																																																															ctor: '::',
																																																															_0: {
																																																																ctor: '::',
																																																																_0: 26047,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 49114,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 55270,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 58929,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 33858,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 17094,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 53352,
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: 26808,
																																																																							_1: {ctor: '[]'}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															},
																																																															_1: {
																																																																ctor: '::',
																																																																_0: {
																																																																	ctor: '::',
																																																																	_0: 33345,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 16835,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 10649,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 39344,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 23085,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 11639,
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: 7695,
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: 3857,
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																},
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: {
																																																																		ctor: '::',
																																																																		_0: 31664,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 45259,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 43092,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 21756,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 28091,
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: 48086,
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: 11286,
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: 5690,
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	},
																																																																	_1: {ctor: '[]'}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft1_ = _billstclair$elm_crypto_aes$Crypto_AES_Utility$arrayRotatePairsRight(_billstclair$elm_crypto_aes$Crypto_AES_Tables$ft0_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft2_ = _billstclair$elm_crypto_aes$Crypto_AES_Utility$arrayRotatePairsRight(_billstclair$elm_crypto_aes$Crypto_AES_Tables$ft1_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft3_ = _billstclair$elm_crypto_aes$Crypto_AES_Utility$arrayRotatePairsRight(_billstclair$elm_crypto_aes$Crypto_AES_Tables$ft2_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt0_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$table(
	{
		ctor: '::',
		_0: {
			ctor: '::',
			_0: 20980,
			_1: {
				ctor: '::',
				_0: 42832,
				_1: {
					ctor: '::',
					_0: 32321,
					_1: {
						ctor: '::',
						_0: 25939,
						_1: {
							ctor: '::',
							_0: 6679,
							_1: {
								ctor: '::',
								_0: 42179,
								_1: {
									ctor: '::',
									_0: 14887,
									_1: {
										ctor: '::',
										_0: 24214,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: 15275,
				_1: {
					ctor: '::',
					_0: 27595,
					_1: {
						ctor: '::',
						_0: 8093,
						_1: {
							ctor: '::',
							_0: 17905,
							_1: {
								ctor: '::',
								_0: 44282,
								_1: {
									ctor: '::',
									_0: 22699,
									_1: {
										ctor: '::',
										_0: 19427,
										_1: {
											ctor: '::',
											_0: 915,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: 8240,
					_1: {
						ctor: '::',
						_0: 64085,
						_1: {
							ctor: '::',
							_0: 44406,
							_1: {
								ctor: '::',
								_0: 28150,
								_1: {
									ctor: '::',
									_0: 35020,
									_1: {
										ctor: '::',
										_0: 30353,
										_1: {
											ctor: '::',
											_0: 62722,
											_1: {
												ctor: '::',
												_0: 19493,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: 20453,
						_1: {
							ctor: '::',
							_0: 55292,
							_1: {
								ctor: '::',
								_0: 50474,
								_1: {
									ctor: '::',
									_0: 52183,
									_1: {
										ctor: '::',
										_0: 9781,
										_1: {
											ctor: '::',
											_0: 17536,
											_1: {
												ctor: '::',
												_0: 46434,
												_1: {
													ctor: '::',
													_0: 41871,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: 57009,
							_1: {
								ctor: '::',
								_0: 23113,
								_1: {
									ctor: '::',
									_0: 9658,
									_1: {
										ctor: '::',
										_0: 7015,
										_1: {
											ctor: '::',
											_0: 17898,
											_1: {
												ctor: '::',
												_0: 3736,
												_1: {
													ctor: '::',
													_0: 24062,
													_1: {
														ctor: '::',
														_0: 49377,
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '::',
								_0: 49967,
								_1: {
									ctor: '::',
									_0: 29954,
									_1: {
										ctor: '::',
										_0: 33100,
										_1: {
											ctor: '::',
											_0: 61458,
											_1: {
												ctor: '::',
												_0: 36166,
												_1: {
													ctor: '::',
													_0: 38819,
													_1: {
														ctor: '::',
														_0: 27603,
														_1: {
															ctor: '::',
															_0: 63942,
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '::',
									_0: 911,
									_1: {
										ctor: '::',
										_0: 24551,
										_1: {
											ctor: '::',
											_0: 5522,
											_1: {
												ctor: '::',
												_0: 40085,
												_1: {
													ctor: '::',
													_0: 49005,
													_1: {
														ctor: '::',
														_0: 31467,
														_1: {
															ctor: '::',
															_0: 38226,
															_1: {
																ctor: '::',
																_0: 23002,
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '::',
										_0: 54462,
										_1: {
											ctor: '::',
											_0: 33581,
											_1: {
												ctor: '::',
												_0: 22644,
												_1: {
													ctor: '::',
													_0: 8659,
													_1: {
														ctor: '::',
														_0: 18912,
														_1: {
															ctor: '::',
															_0: 26921,
															_1: {
																ctor: '::',
																_0: 36553,
																_1: {
																	ctor: '::',
																	_0: 51268,
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '::',
											_0: 30146,
											_1: {
												ctor: '::',
												_0: 35178,
												_1: {
													ctor: '::',
													_0: 62606,
													_1: {
														ctor: '::',
														_0: 31096,
														_1: {
															ctor: '::',
															_0: 39256,
															_1: {
																ctor: '::',
																_0: 15979,
																_1: {
																	ctor: '::',
																	_0: 10169,
																	_1: {
																		ctor: '::',
																		_0: 29149,
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '::',
												_0: 48865,
												_1: {
													ctor: '::',
													_0: 20406,
													_1: {
														ctor: '::',
														_0: 61576,
														_1: {
															ctor: '::',
															_0: 44311,
															_1: {
																ctor: '::',
																_0: 51488,
																_1: {
																	ctor: '::',
																	_0: 44134,
																	_1: {
																		ctor: '::',
																		_0: 32206,
																		_1: {
																			ctor: '::',
																			_0: 15028,
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '::',
													_0: 25567,
													_1: {
														ctor: '::',
														_0: 18968,
														_1: {
															ctor: '::',
															_0: 58650,
															_1: {
																ctor: '::',
																_0: 12674,
																_1: {
																	ctor: '::',
																	_0: 38737,
																	_1: {
																		ctor: '::',
																		_0: 13152,
																		_1: {
																			ctor: '::',
																			_0: 25171,
																			_1: {
																				ctor: '::',
																				_0: 32581,
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																}
															}
														}
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '::',
														_0: 45412,
														_1: {
															ctor: '::',
															_0: 30688,
															_1: {
																ctor: '::',
																_0: 47979,
																_1: {
																	ctor: '::',
																	_0: 44676,
																	_1: {
																		ctor: '::',
																		_0: 65153,
																		_1: {
																			ctor: '::',
																			_0: 40988,
																			_1: {
																				ctor: '::',
																				_0: 63752,
																				_1: {
																					ctor: '::',
																					_0: 11156,
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '::',
															_0: 28744,
															_1: {
																ctor: '::',
																_0: 26712,
																_1: {
																	ctor: '::',
																	_0: 36677,
																	_1: {
																		ctor: '::',
																		_0: 64793,
																		_1: {
																			ctor: '::',
																			_0: 38110,
																			_1: {
																				ctor: '::',
																				_0: 27783,
																				_1: {
																					ctor: '::',
																					_0: 21115,
																					_1: {
																						ctor: '::',
																						_0: 63671,
																						_1: {ctor: '[]'}
																					}
																				}
																			}
																		}
																	}
																}
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '::',
																_0: 43891,
																_1: {
																	ctor: '::',
																	_0: 54051,
																	_1: {
																		ctor: '::',
																		_0: 29259,
																		_1: {
																			ctor: '::',
																			_0: 738,
																			_1: {
																				ctor: '::',
																				_0: 58143,
																				_1: {
																					ctor: '::',
																					_0: 36695,
																					_1: {
																						ctor: '::',
																						_0: 26197,
																						_1: {
																							ctor: '::',
																							_0: 43818,
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '::',
																	_0: 45803,
																	_1: {
																		ctor: '::',
																		_0: 10247,
																		_1: {
																			ctor: '::',
																			_0: 12213,
																			_1: {
																				ctor: '::',
																				_0: 49667,
																				_1: {
																					ctor: '::',
																					_0: 34501,
																					_1: {
																						ctor: '::',
																						_0: 31642,
																						_1: {
																							ctor: '::',
																							_0: 54071,
																							_1: {
																								ctor: '::',
																								_0: 2213,
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '::',
																		_0: 12328,
																		_1: {
																			ctor: '::',
																			_0: 34802,
																			_1: {
																				ctor: '::',
																				_0: 9151,
																				_1: {
																					ctor: '::',
																					_0: 42418,
																					_1: {
																						ctor: '::',
																						_0: 515,
																						_1: {
																							ctor: '::',
																							_0: 27322,
																							_1: {
																								ctor: '::',
																								_0: 60694,
																								_1: {
																									ctor: '::',
																									_0: 33372,
																									_1: {ctor: '[]'}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '::',
																			_0: 35535,
																			_1: {
																				ctor: '::',
																				_0: 7211,
																				_1: {
																					ctor: '::',
																					_0: 42873,
																					_1: {
																						ctor: '::',
																						_0: 46226,
																						_1: {
																							ctor: '::',
																							_0: 62215,
																							_1: {
																								ctor: '::',
																								_0: 62192,
																								_1: {
																									ctor: '::',
																									_0: 20073,
																									_1: {
																										ctor: '::',
																										_0: 58017,
																										_1: {ctor: '[]'}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '::',
																				_0: 26074,
																				_1: {
																					ctor: '::',
																					_0: 62669,
																					_1: {
																						ctor: '::',
																						_0: 1541,
																						_1: {
																							ctor: '::',
																							_0: 48853,
																							_1: {
																								ctor: '::',
																								_0: 53556,
																								_1: {
																									ctor: '::',
																									_0: 25119,
																									_1: {
																										ctor: '::',
																										_0: 50342,
																										_1: {
																											ctor: '::',
																											_0: 65162,
																											_1: {ctor: '[]'}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '::',
																					_0: 13358,
																					_1: {
																						ctor: '::',
																						_0: 21405,
																						_1: {
																							ctor: '::',
																							_0: 41715,
																							_1: {
																								ctor: '::',
																								_0: 21920,
																								_1: {
																									ctor: '::',
																									_0: 1418,
																									_1: {
																										ctor: '::',
																										_0: 57650,
																										_1: {
																											ctor: '::',
																											_0: 42230,
																											_1: {
																												ctor: '::',
																												_0: 60277,
																												_1: {ctor: '[]'}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '::',
																						_0: 2947,
																						_1: {
																							ctor: '::',
																							_0: 60473,
																							_1: {
																								ctor: '::',
																								_0: 16480,
																								_1: {
																									ctor: '::',
																									_0: 61354,
																									_1: {
																										ctor: '::',
																										_0: 24177,
																										_1: {
																											ctor: '::',
																											_0: 40710,
																											_1: {
																												ctor: '::',
																												_0: 48494,
																												_1: {
																													ctor: '::',
																													_0: 4177,
																													_1: {ctor: '[]'}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '::',
																							_0: 15905,
																							_1: {
																								ctor: '::',
																								_0: 35577,
																								_1: {
																									ctor: '::',
																									_0: 38621,
																									_1: {
																										ctor: '::',
																										_0: 1597,
																										_1: {
																											ctor: '::',
																											_0: 56638,
																											_1: {
																												ctor: '::',
																												_0: 1454,
																												_1: {
																													ctor: '::',
																													_0: 19942,
																													_1: {
																														ctor: '::',
																														_0: 48454,
																														_1: {ctor: '[]'}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '::',
																								_0: 37204,
																								_1: {
																									ctor: '::',
																									_0: 36277,
																									_1: {
																										ctor: '::',
																										_0: 29124,
																										_1: {
																											ctor: '::',
																											_0: 23813,
																											_1: {
																												ctor: '::',
																												_0: 1030,
																												_1: {
																													ctor: '::',
																													_0: 54383,
																													_1: {
																														ctor: '::',
																														_0: 24656,
																														_1: {
																															ctor: '::',
																															_0: 5631,
																															_1: {ctor: '[]'}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '::',
																									_0: 6552,
																									_1: {
																										ctor: '::',
																										_0: 64292,
																										_1: {
																											ctor: '::',
																											_0: 54973,
																											_1: {
																												ctor: '::',
																												_0: 59799,
																												_1: {
																													ctor: '::',
																													_0: 35136,
																													_1: {
																														ctor: '::',
																														_0: 17356,
																														_1: {
																															ctor: '::',
																															_0: 26585,
																															_1: {
																																ctor: '::',
																																_0: 40567,
																																_1: {ctor: '[]'}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '::',
																										_0: 45288,
																										_1: {
																											ctor: '::',
																											_0: 17085,
																											_1: {
																												ctor: '::',
																												_0: 1929,
																												_1: {
																													ctor: '::',
																													_0: 35720,
																													_1: {
																														ctor: '::',
																														_0: 59161,
																														_1: {
																															ctor: '::',
																															_0: 23352,
																															_1: {
																																ctor: '::',
																																_0: 31176,
																																_1: {
																																	ctor: '::',
																																	_0: 61147,
																																	_1: {ctor: '[]'}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '::',
																											_0: 41340,
																											_1: {
																												ctor: '::',
																												_0: 2631,
																												_1: {
																													ctor: '::',
																													_0: 31810,
																													_1: {
																														ctor: '::',
																														_0: 4073,
																														_1: {
																															ctor: '::',
																															_0: 63620,
																															_1: {
																																ctor: '::',
																																_0: 7881,
																																_1: {
																																	ctor: '::',
																																	_0: _billstclair$elm_crypto_aes$Crypto_AES_Tables$zero00,
																																	_1: {
																																		ctor: '::',
																																		_0: _billstclair$elm_crypto_aes$Crypto_AES_Tables$zero00,
																																		_1: {ctor: '[]'}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '::',
																												_0: 2432,
																												_1: {
																													ctor: '::',
																													_0: 34435,
																													_1: {
																														ctor: '::',
																														_0: 12843,
																														_1: {
																															ctor: '::',
																															_0: 60744,
																															_1: {
																																ctor: '::',
																																_0: 7697,
																																_1: {
																																	ctor: '::',
																																	_0: 28844,
																																	_1: {
																																		ctor: '::',
																																		_0: 27738,
																																		_1: {
																																			ctor: '::',
																																			_0: 29262,
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '::',
																													_0: 64782,
																													_1: {
																														ctor: '::',
																														_0: 65531,
																														_1: {
																															ctor: '::',
																															_0: 3973,
																															_1: {
																																ctor: '::',
																																_0: 14422,
																																_1: {
																																	ctor: '::',
																																	_0: 15790,
																																	_1: {
																																		ctor: '::',
																																		_0: 54558,
																																		_1: {
																																			ctor: '::',
																																			_0: 13869,
																																			_1: {
																																				ctor: '::',
																																				_0: 14631,
																																				_1: {ctor: '[]'}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '::',
																														_0: 2575,
																														_1: {
																															ctor: '::',
																															_0: 55652,
																															_1: {
																																ctor: '::',
																																_0: 26716,
																																_1: {
																																	ctor: '::',
																																	_0: 42529,
																																	_1: {
																																		ctor: '::',
																																		_0: 39771,
																																		_1: {
																																			ctor: '::',
																																			_0: 21713,
																																			_1: {
																																				ctor: '::',
																																				_0: 9270,
																																				_1: {
																																					ctor: '::',
																																					_0: 11834,
																																					_1: {ctor: '[]'}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '::',
																															_0: 3082,
																															_1: {
																																ctor: '::',
																																_0: 26545,
																																_1: {
																																	ctor: '::',
																																	_0: 37719,
																																	_1: {
																																		ctor: '::',
																																		_0: 59151,
																																		_1: {
																																			ctor: '::',
																																			_0: 46318,
																																			_1: {
																																				ctor: '::',
																																				_0: 38610,
																																				_1: {
																																					ctor: '::',
																																					_0: 7067,
																																					_1: {
																																						ctor: '::',
																																						_0: 37278,
																																						_1: {ctor: '[]'}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '::',
																																_0: 32960,
																																_1: {
																																	ctor: '::',
																																	_0: 50511,
																																	_1: {
																																		ctor: '::',
																																		_0: 25052,
																																		_1: {
																																			ctor: '::',
																																			_0: 8354,
																																			_1: {
																																				ctor: '::',
																																				_0: 23159,
																																				_1: {
																																					ctor: '::',
																																					_0: 19305,
																																					_1: {
																																						ctor: '::',
																																						_0: 7186,
																																						_1: {
																																							ctor: '::',
																																							_0: 6678,
																																							_1: {ctor: '[]'}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '::',
																																	_0: 58003,
																																	_1: {
																																		ctor: '::',
																																		_0: 47626,
																																		_1: {
																																			ctor: '::',
																																			_0: 49312,
																																			_1: {
																																				ctor: '::',
																																				_0: 10981,
																																				_1: {
																																					ctor: '::',
																																					_0: 15394,
																																					_1: {
																																						ctor: '::',
																																						_0: 57411,
																																						_1: {
																																							ctor: '::',
																																							_0: 4635,
																																							_1: {
																																								ctor: '::',
																																								_0: 5917,
																																								_1: {ctor: '[]'}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '::',
																																		_0: 3593,
																																		_1: {
																																			ctor: '::',
																																			_0: 3339,
																																			_1: {
																																				ctor: '::',
																																				_0: 62091,
																																				_1: {
																																					ctor: '::',
																																					_0: 51117,
																																					_1: {
																																						ctor: '::',
																																						_0: 11702,
																																						_1: {
																																							ctor: '::',
																																							_0: 43193,
																																							_1: {
																																								ctor: '::',
																																								_0: 5150,
																																								_1: {
																																									ctor: '::',
																																									_0: 43464,
																																									_1: {ctor: '[]'}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	},
																																	_1: {
																																		ctor: '::',
																																		_0: {
																																			ctor: '::',
																																			_0: 22513,
																																			_1: {
																																				ctor: '::',
																																				_0: 6533,
																																				_1: {
																																					ctor: '::',
																																					_0: 44917,
																																					_1: {
																																						ctor: '::',
																																						_0: 1868,
																																						_1: {
																																							ctor: '::',
																																							_0: 61081,
																																							_1: {
																																								ctor: '::',
																																								_0: 56763,
																																								_1: {
																																									ctor: '::',
																																									_0: 41855,
																																									_1: {
																																										ctor: '::',
																																										_0: 24829,
																																										_1: {ctor: '[]'}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		},
																																		_1: {
																																			ctor: '::',
																																			_0: {
																																				ctor: '::',
																																				_0: 63233,
																																				_1: {
																																					ctor: '::',
																																					_0: 9887,
																																					_1: {
																																						ctor: '::',
																																						_0: 23666,
																																						_1: {
																																							ctor: '::',
																																							_0: 62908,
																																							_1: {
																																								ctor: '::',
																																								_0: 17510,
																																								_1: {
																																									ctor: '::',
																																									_0: 15301,
																																									_1: {
																																										ctor: '::',
																																										_0: 23547,
																																										_1: {
																																											ctor: '::',
																																											_0: 32308,
																																											_1: {ctor: '[]'}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			},
																																			_1: {
																																				ctor: '::',
																																				_0: {
																																					ctor: '::',
																																					_0: 35651,
																																					_1: {
																																						ctor: '::',
																																						_0: 10614,
																																						_1: {
																																							ctor: '::',
																																							_0: 52003,
																																							_1: {
																																								ctor: '::',
																																								_0: 50908,
																																								_1: {
																																									ctor: '::',
																																									_0: 46829,
																																									_1: {
																																										ctor: '::',
																																										_0: 64616,
																																										_1: {
																																											ctor: '::',
																																											_0: 47332,
																																											_1: {
																																												ctor: '::',
																																												_0: 61795,
																																												_1: {ctor: '[]'}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				},
																																				_1: {
																																					ctor: '::',
																																					_0: {
																																						ctor: '::',
																																						_0: 55089,
																																						_1: {
																																							ctor: '::',
																																							_0: 56522,
																																							_1: {
																																								ctor: '::',
																																								_0: 16995,
																																								_1: {
																																									ctor: '::',
																																									_0: 34064,
																																									_1: {
																																										ctor: '::',
																																										_0: 5015,
																																										_1: {
																																											ctor: '::',
																																											_0: 8768,
																																											_1: {
																																												ctor: '::',
																																												_0: 33990,
																																												_1: {
																																													ctor: '::',
																																													_0: 4384,
																																													_1: {ctor: '[]'}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					},
																																					_1: {
																																						ctor: '::',
																																						_0: {
																																							ctor: '::',
																																							_0: 34122,
																																							_1: {
																																								ctor: '::',
																																								_0: 9341,
																																								_1: {
																																									ctor: '::',
																																									_0: 53947,
																																									_1: {
																																										ctor: '::',
																																										_0: 15864,
																																										_1: {
																																											ctor: '::',
																																											_0: 44793,
																																											_1: {
																																												ctor: '::',
																																												_0: 12817,
																																												_1: {
																																													ctor: '::',
																																													_0: 50985,
																																													_1: {
																																														ctor: '::',
																																														_0: 41325,
																																														_1: {ctor: '[]'}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						},
																																						_1: {
																																							ctor: '::',
																																							_0: {
																																								ctor: '::',
																																								_0: 7582,
																																								_1: {
																																									ctor: '::',
																																									_0: 12107,
																																									_1: {
																																										ctor: '::',
																																										_0: 56498,
																																										_1: {
																																											ctor: '::',
																																											_0: 12531,
																																											_1: {
																																												ctor: '::',
																																												_0: 3462,
																																												_1: {
																																													ctor: '::',
																																													_0: 21228,
																																													_1: {
																																														ctor: '::',
																																														_0: 30657,
																																														_1: {
																																															ctor: '::',
																																															_0: 58320,
																																															_1: {ctor: '[]'}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							},
																																							_1: {
																																								ctor: '::',
																																								_0: {
																																									ctor: '::',
																																									_0: 11187,
																																									_1: {
																																										ctor: '::',
																																										_0: 5740,
																																										_1: {
																																											ctor: '::',
																																											_0: 43376,
																																											_1: {
																																												ctor: '::',
																																												_0: 47513,
																																												_1: {
																																													ctor: '::',
																																													_0: 4500,
																																													_1: {
																																														ctor: '::',
																																														_0: 18682,
																																														_1: {
																																															ctor: '::',
																																															_0: 18409,
																																															_1: {
																																																ctor: '::',
																																																_0: 25634,
																																																_1: {ctor: '[]'}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								},
																																								_1: {
																																									ctor: '::',
																																									_0: {
																																										ctor: '::',
																																										_0: 43260,
																																										_1: {
																																											ctor: '::',
																																											_0: 36036,
																																											_1: {
																																												ctor: '::',
																																												_0: 41200,
																																												_1: {
																																													ctor: '::',
																																													_0: 16154,
																																													_1: {
																																														ctor: '::',
																																														_0: 22141,
																																														_1: {
																																															ctor: '::',
																																															_0: 11480,
																																															_1: {
																																																ctor: '::',
																																																_0: 8755,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 37103,
																																																	_1: {ctor: '[]'}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									},
																																									_1: {
																																										ctor: '::',
																																										_0: {
																																											ctor: '::',
																																											_0: 34633,
																																											_1: {
																																												ctor: '::',
																																												_0: 20167,
																																												_1: {
																																													ctor: '::',
																																													_0: 55608,
																																													_1: {
																																														ctor: '::',
																																														_0: 53697,
																																														_1: {
																																															ctor: '::',
																																															_0: 36042,
																																															_1: {
																																																ctor: '::',
																																																_0: 41726,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 39124,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 2870,
																																																		_1: {ctor: '[]'}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										},
																																										_1: {
																																											ctor: '::',
																																											_0: {
																																												ctor: '::',
																																												_0: 42741,
																																												_1: {
																																													ctor: '::',
																																													_0: 33231,
																																													_1: {
																																														ctor: '::',
																																														_0: 42362,
																																														_1: {
																																															ctor: '::',
																																															_0: 56872,
																																															_1: {
																																																ctor: '::',
																																																_0: 55991,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 36390,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 16301,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 49060,
																																																			_1: {ctor: '[]'}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											},
																																											_1: {
																																												ctor: '::',
																																												_0: {
																																													ctor: '::',
																																													_0: 11322,
																																													_1: {
																																														ctor: '::',
																																														_0: 40420,
																																														_1: {
																																															ctor: '::',
																																															_0: 20600,
																																															_1: {
																																																ctor: '::',
																																																_0: 37389,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 27231,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 52379,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 21630,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 18018,
																																																				_1: {ctor: '[]'}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												},
																																												_1: {
																																													ctor: '::',
																																													_0: {
																																														ctor: '::',
																																														_0: 63117,
																																														_1: {
																																															ctor: '::',
																																															_0: 5058,
																																															_1: {
																																																ctor: '::',
																																																_0: 37080,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 47336,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 11833,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 63326,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 33475,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 45045,
																																																					_1: {ctor: '[]'}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													},
																																													_1: {
																																														ctor: '::',
																																														_0: {
																																															ctor: '::',
																																															_0: 40797,
																																															_1: {
																																																ctor: '::',
																																																_0: 32958,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 27088,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 37756,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 28629,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 11689,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 53029,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 4787,
																																																						_1: {ctor: '[]'}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														},
																																														_1: {
																																															ctor: '::',
																																															_0: {
																																																ctor: '::',
																																																_0: 51372,
																																																_1: {
																																																	ctor: '::',
																																																	_0: 39227,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 4120,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 32167,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 59548,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 25454,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 56123,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 47995,
																																																							_1: {ctor: '[]'}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															},
																																															_1: {
																																																ctor: '::',
																																																_0: {
																																																	ctor: '::',
																																																	_0: 52518,
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 30729,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 28249,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 6388,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 60570,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 46849,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 33615,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 39592,
																																																								_1: {ctor: '[]'}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																},
																																																_1: {
																																																	ctor: '::',
																																																	_0: {
																																																		ctor: '::',
																																																		_0: 59029,
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 28261,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 43775,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 59006,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 8636,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 53000,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 61205,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 59622,
																																																									_1: {ctor: '[]'}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	},
																																																	_1: {
																																																		ctor: '::',
																																																		_0: {
																																																			ctor: '::',
																																																			_0: 47847,
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 39897,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 19055,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 14030,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 60063,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 2516,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 10672,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 31958,
																																																										_1: {ctor: '[]'}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		},
																																																		_1: {
																																																			ctor: '::',
																																																			_0: {
																																																				ctor: '::',
																																																				_0: 12708,
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 45743,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 10815,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 9009,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 50853,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 37936,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 13730,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 26304,
																																																											_1: {ctor: '[]'}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			},
																																																			_1: {
																																																				ctor: '::',
																																																				_0: {
																																																					ctor: '::',
																																																					_0: 29774,
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 48183,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 64642,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 51878,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 57488,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 53424,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 13223,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 55317,
																																																												_1: {ctor: '[]'}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				},
																																																				_1: {
																																																					ctor: '::',
																																																					_0: {
																																																						ctor: '::',
																																																						_0: 61700,
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 38986,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 16876,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 56055,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 32717,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 20494,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 6033,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 63023,
																																																													_1: {ctor: '[]'}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					},
																																																					_1: {
																																																						ctor: '::',
																																																						_0: {
																																																							ctor: '::',
																																																							_0: 30285,
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 54925,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 17391,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 45133,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 52394,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 19796,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 58518,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 1247,
																																																														_1: {ctor: '[]'}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						},
																																																						_1: {
																																																							ctor: '::',
																																																							_0: {
																																																								ctor: '::',
																																																								_0: 40657,
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 46563,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 19562,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 34843,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 49452,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 8120,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 18021,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 20863,
																																																															_1: {ctor: '[]'}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							},
																																																							_1: {
																																																								ctor: '::',
																																																								_0: {
																																																									ctor: '::',
																																																									_0: 40286,
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 59908,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 396,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 13661,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 64135,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 29811,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 64267,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 16686,
																																																																_1: {ctor: '[]'}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								},
																																																								_1: {
																																																									ctor: '::',
																																																									_0: {
																																																										ctor: '::',
																																																										_0: 45927,
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 7514,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 37595,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 53842,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 59664,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 22067,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 28118,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 18195,
																																																																	_1: {ctor: '[]'}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									},
																																																									_1: {
																																																										ctor: '::',
																																																										_0: {
																																																											ctor: '::',
																																																											_0: 39639,
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 24972,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 14241,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 3194,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 23032,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 5262,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 60179,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 15497,
																																																																		_1: {ctor: '[]'}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										},
																																																										_1: {
																																																											ctor: '::',
																																																											_0: {
																																																												ctor: '::',
																																																												_0: 52905,
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 10222,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 46945,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 51509,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 57628,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 58861,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 31303,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 45372,
																																																																			_1: {ctor: '[]'}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											},
																																																											_1: {
																																																												ctor: '::',
																																																												_0: {
																																																													ctor: '::',
																																																													_0: 40146,
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 57177,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 22002,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 29503,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 6164,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 52857,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 29639,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 14271,
																																																																				_1: {ctor: '[]'}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												},
																																																												_1: {
																																																													ctor: '::',
																																																													_0: {
																																																														ctor: '::',
																																																														_0: 21495,
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 52714,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 24573,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 43611,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 57149,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 28436,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 30788,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 56198,
																																																																					_1: {ctor: '[]'}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													},
																																																													_1: {
																																																														ctor: '::',
																																																														_0: {
																																																															ctor: '::',
																																																															_0: 51887,
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 62337,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 47464,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 50238,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 14372,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 13356,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 49827,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 16479,
																																																																						_1: {ctor: '[]'}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														},
																																																														_1: {
																																																															ctor: '::',
																																																															_0: {
																																																																ctor: '::',
																																																																_0: 5661,
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 50034,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 48354,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 9484,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 10300,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 18827,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 65293,
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: 38209,
																																																																							_1: {ctor: '[]'}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															},
																																																															_1: {
																																																																ctor: '::',
																																																																_0: {
																																																																	ctor: '::',
																																																																	_0: 14760,
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 369,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 2060,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 46046,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 55476,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 58524,
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: 25686,
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: 49552,
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																},
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: {
																																																																		ctor: '::',
																																																																		_0: 31691,
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 33889,
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 54578,
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 46704,
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 18540,
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: 23668,
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: 53432,
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: 22338,
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	},
																																																																	_1: {ctor: '[]'}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt1_ = _billstclair$elm_crypto_aes$Crypto_AES_Utility$arrayRotatePairsRight(_billstclair$elm_crypto_aes$Crypto_AES_Tables$rt0_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt2_ = _billstclair$elm_crypto_aes$Crypto_AES_Utility$arrayRotatePairsRight(_billstclair$elm_crypto_aes$Crypto_AES_Tables$rt1_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt3_ = _billstclair$elm_crypto_aes$Crypto_AES_Utility$arrayRotatePairsRight(_billstclair$elm_crypto_aes$Crypto_AES_Tables$rt2_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$kt3_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$genKTable(_billstclair$elm_crypto_aes$Crypto_AES_Tables$rt3_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$kt2_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$genKTable(_billstclair$elm_crypto_aes$Crypto_AES_Tables$rt2_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$kt1_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$genKTable(_billstclair$elm_crypto_aes$Crypto_AES_Tables$rt1_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$kt0_ = _billstclair$elm_crypto_aes$Crypto_AES_Tables$genKTable(_billstclair$elm_crypto_aes$Crypto_AES_Tables$rt0_);
var _billstclair$elm_crypto_aes$Crypto_AES_Tables$subWord32 = function (w) {
	return A4(
		_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeWord32,
		A2(
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte3(w),
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_),
		A2(
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte2(w),
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_),
		A2(
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte1(w),
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_),
		A2(
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
			_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte0(w),
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_));
};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _billstclair$elm_crypto_aes$Crypto_AES_Block$fillByteArrayFromFourPairs = function (ws) {
	var _p0 = ws;
	var w0h = _p0._0._0;
	var w0l = _p0._0._1;
	var w1h = _p0._1._0;
	var w1l = _p0._1._1;
	var w2h = _p0._2._0;
	var w2l = _p0._2._1;
	var w3h = _p0._3._0;
	var w3l = _p0._3._1;
	return _billstclair$elm_crypto_aes$Crypto_AES_Utility$fillByteArrayFromWords(
		{
			ctor: '::',
			_0: w0h,
			_1: {
				ctor: '::',
				_0: w0l,
				_1: {
					ctor: '::',
					_0: w1h,
					_1: {
						ctor: '::',
						_0: w1l,
						_1: {
							ctor: '::',
							_0: w2h,
							_1: {
								ctor: '::',
								_0: w2l,
								_1: {
									ctor: '::',
									_0: w3h,
									_1: {
										ctor: '::',
										_0: w3l,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$loadKeys = F2(
	function (ina, keys) {
		var getOne = function (idx) {
			return A2(
				_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
				A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, idx, keys),
				A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeWordFromByteArray, 2 * idx, ina));
		};
		var f = F2(
			function (idx, res) {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: getOne(idx),
						_1: getOne(idx + 1)
					},
					_1: res
				};
			});
		var list = A3(
			_elm_lang$core$List$foldr,
			f,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: 0,
				_1: {
					ctor: '::',
					_0: 2,
					_1: {
						ctor: '::',
						_0: 4,
						_1: {
							ctor: '::',
							_0: 6,
							_1: {ctor: '[]'}
						}
					}
				}
			});
		var _p1 = list;
		if (((((_p1.ctor === '::') && (_p1._1.ctor === '::')) && (_p1._1._1.ctor === '::')) && (_p1._1._1._1.ctor === '::')) && (_p1._1._1._1._1.ctor === '[]')) {
			return {ctor: '_Tuple4', _0: _p1._0, _1: _p1._1._0, _2: _p1._1._1._0, _3: _p1._1._1._1._0};
		} else {
			return {
				ctor: '_Tuple4',
				_0: {ctor: '_Tuple2', _0: 0, _1: 0},
				_1: {ctor: '_Tuple2', _0: 0, _1: 0},
				_2: {ctor: '_Tuple2', _0: 0, _1: 0},
				_3: {ctor: '_Tuple2', _0: 0, _1: 0}
			};
		}
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$cryptor = F5(
	function (keyGetter, round, lastRound, keys, ina) {
		var keya = keyGetter(keys);
		var numRounds = keys.numRounds;
		var loop = F3(
			function (i, rkix, ws) {
				loop:
				while (true) {
					if (_elm_lang$core$Native_Utils.cmp(i, numRounds) > -1) {
						return ws;
					} else {
						var _v1 = 1 + i,
							_v2 = 8 + rkix,
							_v3 = A3(round, keya, rkix, ws);
						i = _v1;
						rkix = _v2;
						ws = _v3;
						continue loop;
					}
				}
			});
		return _billstclair$elm_crypto_aes$Crypto_AES_Block$fillByteArrayFromFourPairs(
			A3(
				lastRound,
				keya,
				8 * numRounds,
				A3(
					loop,
					1,
					8,
					A2(_billstclair$elm_crypto_aes$Crypto_AES_Block$loadKeys, ina, keya))));
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$rts_ = {ctor: '_Tuple4', _0: _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt0_, _1: _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt1_, _2: _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt2_, _3: _billstclair$elm_crypto_aes$Crypto_AES_Tables$rt3_};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$fts_ = {ctor: '_Tuple4', _0: _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft0_, _1: _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft1_, _2: _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft2_, _3: _billstclair$elm_crypto_aes$Crypto_AES_Tables$ft3_};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep = F3(
	function (sb, _p3, _p2) {
		var _p4 = _p3;
		var _p5 = _p2;
		return {
			ctor: '_Tuple2',
			_0: A2(
				_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
				A2(
					_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
					_p4._0,
					A2(
						_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'],
						A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, _p5._0, sb),
						8)),
				A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, _p5._1, sb)),
			_1: A2(
				_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
				A2(
					_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
					_p4._1,
					A2(
						_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~<<'],
						A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, _p5._2, sb),
						8)),
				A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, _p5._3, sb))
		};
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$lastFRound = F3(
	function (keys, rkix, ws) {
		var _p6 = ws;
		var w0h = _p6._0._0;
		var w0l = _p6._0._1;
		var w1h = _p6._1._0;
		var w1l = _p6._1._1;
		var w2h = _p6._2._0;
		var w2l = _p6._2._1;
		var w3h = _p6._3._0;
		var w3l = _p6._3._1;
		var x0 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3l)
			});
		var x1 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 2 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 3 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0l)
			});
		var x2 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 4 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 5 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1l)
			});
		var x3 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$fsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 6 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 7 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2l)
			});
		return {ctor: '_Tuple4', _0: x0, _1: x1, _2: x2, _3: x3};
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$lastRRound = F3(
	function (keys, rkix, ws) {
		var _p7 = ws;
		var w0h = _p7._0._0;
		var w0l = _p7._0._1;
		var w1h = _p7._1._0;
		var w1l = _p7._1._1;
		var w2h = _p7._2._0;
		var w2l = _p7._2._1;
		var w3h = _p7._3._0;
		var w3l = _p7._3._1;
		var x0 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$rsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1l)
			});
		var x1 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$rsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 2 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 3 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2l)
			});
		var x2 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$rsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 4 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 5 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3l)
			});
		var x3 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRoundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Tables$rsb_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 6 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 7 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0l)
			});
		return {ctor: '_Tuple4', _0: x0, _1: x1, _2: x2, _3: x3};
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep = F3(
	function (_p10, _p9, _p8) {
		var _p11 = _p10;
		var _p17 = _p11._3;
		var _p16 = _p11._2;
		var _p15 = _p11._1;
		var _p14 = _p11._0;
		var _p12 = _p9;
		var _p13 = _p8;
		var g3 = 2 * _p13._3;
		var g2 = 2 * _p13._2;
		var g1 = 2 * _p13._1;
		var g0 = 2 * _p13._0;
		return {
			ctor: '_Tuple2',
			_0: A2(
				_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
				A2(
					_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
					A2(
						_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
						A2(
							_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
							_p12._0,
							A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, g0, _p14)),
						A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, g1, _p15)),
					A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, g2, _p16)),
				A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, g3, _p17)),
			_1: A2(
				_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
				A2(
					_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
					A2(
						_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
						A2(
							_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
							_p12._1,
							A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + g0, _p14)),
						A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + g1, _p15)),
					A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + g2, _p16)),
				A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + g3, _p17))
		};
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$fRound = F3(
	function (keys, rkix, ws) {
		var _p18 = ws;
		var w0h = _p18._0._0;
		var w0l = _p18._0._1;
		var w1h = _p18._1._0;
		var w1l = _p18._1._1;
		var w2h = _p18._2._0;
		var w2l = _p18._2._1;
		var w3h = _p18._3._0;
		var w3l = _p18._3._1;
		var x0 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$fts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3l)
			});
		var x1 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$fts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 2 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 3 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0l)
			});
		var x2 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$fts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 4 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 5 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1l)
			});
		var x3 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$fts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 6 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 7 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2l)
			});
		return {ctor: '_Tuple4', _0: x0, _1: x1, _2: x2, _3: x3};
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$encrypt = A3(
	_billstclair$elm_crypto_aes$Crypto_AES_Block$cryptor,
	function (_) {
		return _.forwardKey;
	},
	_billstclair$elm_crypto_aes$Crypto_AES_Block$fRound,
	_billstclair$elm_crypto_aes$Crypto_AES_Block$lastFRound);
var _billstclair$elm_crypto_aes$Crypto_AES_Block$rRound = F3(
	function (keys, rkix, ws) {
		var _p19 = ws;
		var w0h = _p19._0._0;
		var w0l = _p19._0._1;
		var w1h = _p19._1._0;
		var w1l = _p19._1._1;
		var w2h = _p19._2._0;
		var w2l = _p19._2._1;
		var w3h = _p19._3._0;
		var w3l = _p19._3._1;
		var x0 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$rts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 1 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1l)
			});
		var x1 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$rts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 2 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 3 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2l)
			});
		var x2 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$rts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 4 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 5 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w2h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w1h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w0l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w3l)
			});
		var x3 = A3(
			_billstclair$elm_crypto_aes$Crypto_AES_Block$roundStep,
			_billstclair$elm_crypto_aes$Crypto_AES_Block$rts_,
			{
				ctor: '_Tuple2',
				_0: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 6 + rkix, keys),
				_1: A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, 7 + rkix, keys)
			},
			{
				ctor: '_Tuple4',
				_0: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w3h),
				_1: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w2h),
				_2: _billstclair$elm_crypto_aes$Crypto_AES_Utility$hibyte(w1l),
				_3: _billstclair$elm_crypto_aes$Crypto_AES_Utility$lobyte(w0l)
			});
		return {ctor: '_Tuple4', _0: x0, _1: x1, _2: x2, _3: x3};
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$decrypt = A3(
	_billstclair$elm_crypto_aes$Crypto_AES_Block$cryptor,
	function (_) {
		return _.reverseKey;
	},
	_billstclair$elm_crypto_aes$Crypto_AES_Block$rRound,
	_billstclair$elm_crypto_aes$Crypto_AES_Block$lastRRound);
var _billstclair$elm_crypto_aes$Crypto_AES_Block$zeroKeys = {numRounds: 0, forwardKey: _elm_lang$core$Array$empty, reverseKey: _elm_lang$core$Array$empty};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$validateKeyElements = function (rawkey) {
	var len = _elm_lang$core$Array$length(rawkey);
	var loop = function (i) {
		loop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(i, len) > -1) {
				return true;
			} else {
				var val = A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, i, rawkey);
				if ((_elm_lang$core$Native_Utils.cmp(val, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(val, 256) > -1)) {
					return false;
				} else {
					var _v9 = 1 + i;
					i = _v9;
					continue loop;
				}
			}
		}
	};
	return loop(0);
};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$prepareReverseKey = F2(
	function (fkey, numRounds) {
		var inner = F4(
			function (fix, rix, i, res) {
				inner:
				while (true) {
					if (_elm_lang$core$Native_Utils.cmp(i, 4) > -1) {
						return res;
					} else {
						var tmp = A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, fix + i, fkey);
						var out = A3(
							_elm_lang$core$Array$set,
							rix + i,
							A2(
								_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
								A2(
									_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
									A2(
										_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
										A2(
											_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
											_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte3(tmp),
											_billstclair$elm_crypto_aes$Crypto_AES_Tables$kt0_),
										A2(
											_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
											_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte2(tmp),
											_billstclair$elm_crypto_aes$Crypto_AES_Tables$kt1_)),
									A2(
										_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
										_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte1(tmp),
										_billstclair$elm_crypto_aes$Crypto_AES_Tables$kt2_)),
								A2(
									_billstclair$elm_crypto_aes$Crypto_AES_Utility$get,
									_billstclair$elm_crypto_aes$Crypto_AES_Utility$byte0(tmp),
									_billstclair$elm_crypto_aes$Crypto_AES_Tables$kt3_)),
							res);
						var _v10 = fix,
							_v11 = rix,
							_v12 = i + 1,
							_v13 = out;
						fix = _v10;
						rix = _v11;
						i = _v12;
						res = _v13;
						continue inner;
					}
				}
			});
		var numkeys = _elm_lang$core$Array$length(fkey);
		var rkey = A2(_elm_lang$core$Array$repeat, numkeys, 0);
		var loop1 = F2(
			function (i, res) {
				loop1:
				while (true) {
					if (_elm_lang$core$Native_Utils.cmp(i, 4) > -1) {
						return res;
					} else {
						var _v14 = 1 + i,
							_v15 = A3(
							_elm_lang$core$Array$set,
							(i + numkeys) - 4,
							A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, i, fkey),
							A3(
								_elm_lang$core$Array$set,
								i,
								A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, (i + numkeys) - 4, fkey),
								res));
						i = _v14;
						res = _v15;
						continue loop1;
					}
				}
			});
		var loop2 = F2(
			function (r, res) {
				loop2:
				while (true) {
					if (_elm_lang$core$Native_Utils.cmp(r, numRounds - 1) > -1) {
						return res;
					} else {
						var rix = 4 * (1 + r);
						var fix = numkeys - (4 * (2 + r));
						var _v16 = r + 1,
							_v17 = A4(inner, fix, rix, 0, res);
						r = _v16;
						res = _v17;
						continue loop2;
					}
				}
			});
		return A2(
			loop2,
			0,
			A2(loop1, 0, rkey));
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$expandKeyInternal = F3(
	function (rawkey, numWords, numRounds) {
		var size = _billstclair$elm_crypto_aes$Crypto_AES_Tables$blockWords_ * (numRounds + 1);
		var loop2 = F2(
			function (i, res) {
				loop2:
				while (true) {
					if (_elm_lang$core$Native_Utils.cmp(i, size) > -1) {
						return res;
					} else {
						var _v18 = i + 1,
							_v19 = A2(
							_elm_lang$core$Array$set,
							i,
							A2(
								_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
								A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, i - numWords, res),
								_elm_lang$core$Native_Utils.eq(
									0,
									A2(_elm_lang$core$Basics_ops['%'], i, numWords)) ? A2(
									_billstclair$elm_bitwise_infix$BitwiseInfix_ops['~^'],
									A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, ((i / numWords) | 0) - 1, _billstclair$elm_crypto_aes$Crypto_AES_Tables$rcon_),
									_billstclair$elm_crypto_aes$Crypto_AES_Tables$subWord32(
										_billstclair$elm_crypto_aes$Crypto_AES_Utility$rotWord32L(
											A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, i - 1, res)))) : (((_elm_lang$core$Native_Utils.cmp(numWords, 6) > 0) && _elm_lang$core$Native_Utils.eq(
									4,
									A2(_elm_lang$core$Basics_ops['%'], i, numWords))) ? _billstclair$elm_crypto_aes$Crypto_AES_Tables$subWord32(
									A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, i - 1, res)) : A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$get, i - 1, res))))(res);
						i = _v18;
						res = _v19;
						continue loop2;
					}
				}
			});
		var loop1 = F2(
			function (i, res) {
				loop1:
				while (true) {
					if (_elm_lang$core$Native_Utils.cmp(i, numWords) > -1) {
						return res;
					} else {
						var _v20 = 1 + i,
							_v21 = A3(
							_elm_lang$core$Array$set,
							i,
							A2(_billstclair$elm_crypto_aes$Crypto_AES_Utility$makeWord32FromByteArray, i * 4, rawkey),
							res);
						i = _v20;
						res = _v21;
						continue loop1;
					}
				}
			});
		var fkey = A2(
			loop2,
			numWords,
			A2(
				loop1,
				0,
				A2(_elm_lang$core$Array$repeat, size, 0)));
		return {
			numRounds: numRounds,
			forwardKey: _billstclair$elm_crypto_aes$Crypto_AES_Utility$word32ArrayToWordArray(fkey),
			reverseKey: _billstclair$elm_crypto_aes$Crypto_AES_Utility$word32ArrayToWordArray(
				A2(_billstclair$elm_crypto_aes$Crypto_AES_Block$prepareReverseKey, fkey, numRounds))
		};
	});
var _billstclair$elm_crypto_aes$Crypto_AES_Block$expandKey = function (rawkey) {
	var len = _elm_lang$core$Array$length(rawkey);
	var _p22 = A2(
		_elm_community$list_extra$List_Extra$find,
		function (_p20) {
			var _p21 = _p20;
			return _elm_lang$core$Native_Utils.eq(len, _p21._0);
		},
		{
			ctor: '::',
			_0: {ctor: '_Tuple3', _0: 16, _1: 4, _2: 10},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple3', _0: 24, _1: 6, _2: 12},
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple3', _0: 32, _1: 8, _2: 14},
					_1: {ctor: '[]'}
				}
			}
		});
	if (_p22.ctor === 'Nothing') {
		return _elm_lang$core$Result$Err('Invalid key size. Must be 16, 24, or 32 bytes.');
	} else {
		return _elm_lang$core$Result$Ok(
			A3(_billstclair$elm_crypto_aes$Crypto_AES_Block$expandKeyInternal, rawkey, _p22._0._1, _p22._0._2));
	}
};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$expandKeyString = function (hex) {
	var _p23 = _billstclair$elm_crypto_aes$Crypto_AES_Utility$hexStr2Array(hex);
	if (_p23.ctor === 'Err') {
		return _elm_lang$core$Result$Err(_p23._0);
	} else {
		return _billstclair$elm_crypto_aes$Crypto_AES_Block$expandKey(_p23._0);
	}
};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$expandKeyStringNow = function (string) {
	return A2(
		_elm_lang$core$Result$withDefault,
		_billstclair$elm_crypto_aes$Crypto_AES_Block$zeroKeys,
		_billstclair$elm_crypto_aes$Crypto_AES_Block$expandKeyString(string));
};
var _billstclair$elm_crypto_aes$Crypto_AES_Block$dlog = _elm_lang$core$Debug$log;
var _billstclair$elm_crypto_aes$Crypto_AES_Block$Keys = F3(
	function (a, b, c) {
		return {numRounds: a, forwardKey: b, reverseKey: c};
	});

var _billstclair$elm_crypto_aes$Crypto_AES$decrypt = F2(
	function (_p0, a) {
		var _p1 = _p0;
		return A2(_billstclair$elm_crypto_aes$Crypto_AES_Block$decrypt, _p1._0, a);
	});
var _billstclair$elm_crypto_aes$Crypto_AES$encrypt = F2(
	function (_p2, a) {
		var _p3 = _p2;
		return A2(_billstclair$elm_crypto_aes$Crypto_AES_Block$encrypt, _p3._0, a);
	});
var _billstclair$elm_crypto_aes$Crypto_AES$Keys = function (a) {
	return {ctor: 'Keys', _0: a};
};
var _billstclair$elm_crypto_aes$Crypto_AES$expandKey = function (rawkey) {
	if (_billstclair$elm_crypto_aes$Crypto_AES_Block$validateKeyElements(rawkey)) {
		var _p4 = _billstclair$elm_crypto_aes$Crypto_AES_Block$expandKey(rawkey);
		if (_p4.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				_billstclair$elm_crypto_aes$Crypto_AES$Keys(_p4._0));
		} else {
			return _elm_lang$core$Result$Err(_p4._0);
		}
	} else {
		return _elm_lang$core$Result$Err('Key elements must be between 0 and 255 inclusive.');
	}
};
var _billstclair$elm_crypto_aes$Crypto_AES$expandKeyString = function (string) {
	var _p5 = _billstclair$elm_crypto_aes$Crypto_AES_Block$expandKeyString(string);
	if (_p5.ctor === 'Ok') {
		return _elm_lang$core$Result$Ok(
			_billstclair$elm_crypto_aes$Crypto_AES$Keys(_p5._0));
	} else {
		return _elm_lang$core$Result$Err(_p5._0);
	}
};

var _billstclair$elm_crypto_string$Crypto_Strings_Types$KeyExpander = F2(
	function (a, b) {
		return {keySize: a, expander: b};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Types$Chaining = F6(
	function (a, b, c, d, e, f) {
		return {name: a, initializer: b, encryptor: c, decryptor: d, adjoiner: e, separator: f};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Types$KeyEncoding = F2(
	function (a, b) {
		return {name: a, encoder: b};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Types$Encoding = F3(
	function (a, b, c) {
		return {name: a, encoder: b, decoder: c};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Types$Encryption = F5(
	function (a, b, c, d, e) {
		return {name: a, blockSize: b, keyExpander: c, encryptor: d, decryptor: e};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Types$Config = F4(
	function (a, b, c, d) {
		return {encryption: a, keyEncoding: b, chaining: c, encoding: d};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Types$Key = function (a) {
	return {ctor: 'Key', _0: a};
};

var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$decrypt = F2(
	function (keys, block) {
		return A2(_billstclair$elm_crypto_aes$Crypto_AES$decrypt, keys, block);
	});
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$encrypt = F2(
	function (keys, block) {
		return A2(_billstclair$elm_crypto_aes$Crypto_AES$encrypt, keys, block);
	});
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$keySizeToInt = function (keySize) {
	var _p0 = keySize;
	switch (_p0.ctor) {
		case 'KeySize16':
			return 16;
		case 'KeySize24':
			return 24;
		default:
			return 32;
	}
};
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$setKeySize = F2(
	function (keySize, encryption) {
		var expander = encryption.keyExpander;
		return _elm_lang$core$Native_Utils.update(
			encryption,
			{
				keyExpander: _elm_lang$core$Native_Utils.update(
					expander,
					{
						keySize: _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$keySizeToInt(keySize)
					})
			});
	});
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$keyExpander = {keySize: 32, expander: _billstclair$elm_crypto_aes$Crypto_AES$expandKey};
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$encryption = {name: 'AES', blockSize: 16, keyExpander: _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$keyExpander, encryptor: _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$encrypt, decryptor: _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$decrypt};
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$KeySize32 = {ctor: 'KeySize32'};
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$KeySize24 = {ctor: 'KeySize24'};
var _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$KeySize16 = {ctor: 'KeySize16'};

var _elm_community$array_extra$Array_Extra$splitAt = F2(
	function (index, xs) {
		var len = _elm_lang$core$Array$length(xs);
		var _p0 = {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_Utils.cmp(index, 0) > 0,
			_1: _elm_lang$core$Native_Utils.cmp(index, len) < 0
		};
		if (_p0._0 === true) {
			if (_p0._1 === true) {
				return {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Array$slice, 0, index, xs),
					_1: A3(_elm_lang$core$Array$slice, index, len, xs)
				};
			} else {
				return {ctor: '_Tuple2', _0: xs, _1: _elm_lang$core$Array$empty};
			}
		} else {
			if (_p0._1 === true) {
				return {ctor: '_Tuple2', _0: _elm_lang$core$Array$empty, _1: xs};
			} else {
				return {ctor: '_Tuple2', _0: _elm_lang$core$Array$empty, _1: _elm_lang$core$Array$empty};
			}
		}
	});
var _elm_community$array_extra$Array_Extra$removeAt = F2(
	function (index, xs) {
		var _p1 = A2(_elm_community$array_extra$Array_Extra$splitAt, index, xs);
		var xs0 = _p1._0;
		var xs1 = _p1._1;
		var len1 = _elm_lang$core$Array$length(xs1);
		return _elm_lang$core$Native_Utils.eq(len1, 0) ? xs0 : A2(
			_elm_lang$core$Array$append,
			xs0,
			A3(_elm_lang$core$Array$slice, 1, len1, xs1));
	});
var _elm_community$array_extra$Array_Extra$resizerIndexed = F3(
	function (n, f, xs) {
		var gen = F2(
			function (m, g) {
				return A2(
					_elm_lang$core$Array$indexedMap,
					F2(
						function (i, _p2) {
							return g(i);
						}),
					A2(
						_elm_lang$core$Array$repeat,
						m,
						{ctor: '_Tuple0'}));
			});
		var l = _elm_lang$core$Array$length(xs);
		return (_elm_lang$core$Native_Utils.cmp(l, n) > 0) ? A3(_elm_lang$core$Array$slice, l - n, l, xs) : ((_elm_lang$core$Native_Utils.cmp(l, n) < 0) ? A2(
			_elm_lang$core$Array$append,
			A2(gen, n - l, f),
			xs) : xs);
	});
var _elm_community$array_extra$Array_Extra$resizelIndexed = F3(
	function (n, f, xs) {
		var gen = F2(
			function (m, g) {
				return A2(
					_elm_lang$core$Array$indexedMap,
					F2(
						function (i, _p3) {
							return g(i);
						}),
					A2(
						_elm_lang$core$Array$repeat,
						m,
						{ctor: '_Tuple0'}));
			});
		var l = _elm_lang$core$Array$length(xs);
		return (_elm_lang$core$Native_Utils.cmp(l, n) > 0) ? A3(_elm_lang$core$Array$slice, 0, n, xs) : ((_elm_lang$core$Native_Utils.cmp(l, n) < 0) ? A2(
			_elm_lang$core$Array$append,
			xs,
			A2(
				gen,
				n - l,
				function (_p4) {
					return f(
						function (i) {
							return i + l;
						}(_p4));
				})) : xs);
	});
var _elm_community$array_extra$Array_Extra$resizerRepeat = F3(
	function (n, val, xs) {
		var l = _elm_lang$core$Array$length(xs);
		return (_elm_lang$core$Native_Utils.cmp(l, n) > 0) ? A3(_elm_lang$core$Array$slice, l - n, l, xs) : ((_elm_lang$core$Native_Utils.cmp(l, n) < 0) ? A2(
			_elm_lang$core$Array$append,
			A2(_elm_lang$core$Array$repeat, n - l, val),
			xs) : xs);
	});
var _elm_community$array_extra$Array_Extra$resizelRepeat = F3(
	function (n, val, xs) {
		var l = _elm_lang$core$Array$length(xs);
		return (_elm_lang$core$Native_Utils.cmp(l, n) > 0) ? A3(_elm_lang$core$Array$slice, 0, n, xs) : ((_elm_lang$core$Native_Utils.cmp(l, n) < 0) ? A2(
			_elm_lang$core$Array$append,
			xs,
			A2(_elm_lang$core$Array$repeat, n - l, val)) : xs);
	});
var _elm_community$array_extra$Array_Extra$removeWhen = F2(
	function (pred, xs) {
		return A2(
			_elm_lang$core$Array$filter,
			function (_p5) {
				return !pred(_p5);
			},
			xs);
	});
var _elm_community$array_extra$Array_Extra$filterMap = F2(
	function (f, xs) {
		var maybePush = F3(
			function (f, mx, xs) {
				var _p6 = f(mx);
				if (_p6.ctor === 'Just') {
					return A2(_elm_lang$core$Array$push, _p6._0, xs);
				} else {
					return xs;
				}
			});
		return A3(
			_elm_lang$core$Array$foldl,
			maybePush(f),
			_elm_lang$core$Array$empty,
			xs);
	});
var _elm_community$array_extra$Array_Extra$getUnsafe = F2(
	function (n, xs) {
		var _p7 = A2(_elm_lang$core$Array$get, n, xs);
		if (_p7.ctor === 'Just') {
			return _p7._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'Array.Extra',
				{
					start: {line: 73, column: 5},
					end: {line: 78, column: 125}
				},
				_p7)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Index ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(n),
						A2(
							_elm_lang$core$Basics_ops['++'],
							' of Array with length ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_lang$core$Array$length(xs)),
								' is not reachable.')))));
		}
	});
var _elm_community$array_extra$Array_Extra$apply = F2(
	function (fs, xs) {
		var l = A2(
			_elm_lang$core$Basics$min,
			_elm_lang$core$Array$length(fs),
			_elm_lang$core$Array$length(xs));
		var fs_ = A3(_elm_lang$core$Array$slice, 0, l, fs);
		return A2(
			_elm_lang$core$Array$indexedMap,
			F2(
				function (n, f) {
					return f(
						A2(_elm_community$array_extra$Array_Extra$getUnsafe, n, xs));
				}),
			fs_);
	});
var _elm_community$array_extra$Array_Extra$map2 = F2(
	function (f, ws) {
		return _elm_community$array_extra$Array_Extra$apply(
			A2(_elm_lang$core$Array$map, f, ws));
	});
var _elm_community$array_extra$Array_Extra$zip = _elm_community$array_extra$Array_Extra$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$array_extra$Array_Extra$map3 = F3(
	function (f, ws, xs) {
		return _elm_community$array_extra$Array_Extra$apply(
			A3(_elm_community$array_extra$Array_Extra$map2, f, ws, xs));
	});
var _elm_community$array_extra$Array_Extra$zip3 = _elm_community$array_extra$Array_Extra$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$array_extra$Array_Extra$map4 = F4(
	function (f, ws, xs, ys) {
		return _elm_community$array_extra$Array_Extra$apply(
			A4(_elm_community$array_extra$Array_Extra$map3, f, ws, xs, ys));
	});
var _elm_community$array_extra$Array_Extra$zip4 = _elm_community$array_extra$Array_Extra$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$array_extra$Array_Extra$map5 = F5(
	function (f, ws, xs, ys, zs) {
		return _elm_community$array_extra$Array_Extra$apply(
			A5(_elm_community$array_extra$Array_Extra$map4, f, ws, xs, ys, zs));
	});
var _elm_community$array_extra$Array_Extra$zip5 = _elm_community$array_extra$Array_Extra$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$array_extra$Array_Extra$sliceUntil = F2(
	function (n, a) {
		return (_elm_lang$core$Native_Utils.cmp(n, 0) > -1) ? A3(_elm_lang$core$Array$slice, 0, n, a) : A3(
			_elm_lang$core$Array$slice,
			0,
			_elm_lang$core$Array$length(a) + n,
			a);
	});
var _elm_community$array_extra$Array_Extra$sliceFrom = F2(
	function (n, a) {
		return A3(
			_elm_lang$core$Array$slice,
			n,
			_elm_lang$core$Array$length(a),
			a);
	});
var _elm_community$array_extra$Array_Extra$update = F3(
	function (n, f, a) {
		var element = A2(_elm_lang$core$Array$get, n, a);
		var _p9 = element;
		if (_p9.ctor === 'Nothing') {
			return a;
		} else {
			return A3(
				_elm_lang$core$Array$set,
				n,
				f(_p9._0),
				a);
		}
	});

var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrSeparator = F2(
	function (blockSize, list) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$drop, blockSize, list),
			_1: {
				nonce: _elm_lang$core$Array$fromList(
					A2(_elm_lang$core$List$take, blockSize, list)),
				counter: A2(_elm_lang$core$Array$repeat, blockSize, 0)
			}
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrAdjoiner = F2(
	function (state, list) {
		return A2(
			_elm_lang$core$List$append,
			_elm_lang$core$Array$toList(state.nonce),
			list);
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$incrementBlock = function (block) {
	var loop = F2(
		function (idx, block) {
			loop:
			while (true) {
				var _p0 = A2(_elm_lang$core$Array$get, idx, block);
				if (_p0.ctor === 'Nothing') {
					return block;
				} else {
					var _p1 = _p0._0;
					if (_elm_lang$core$Native_Utils.eq(_p1, 255)) {
						var _v1 = idx + 1,
							_v2 = A3(_elm_lang$core$Array$set, idx, 0, block);
						idx = _v1;
						block = _v2;
						continue loop;
					} else {
						return A3(_elm_lang$core$Array$set, idx, 1 + _p1, block);
					}
				}
			}
		});
	return A2(loop, 0, block);
};
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrChainer = F4(
	function (state, _p2, key, block) {
		var _p3 = _p2;
		var counter = state.counter;
		var input = A3(_elm_community$array_extra$Array_Extra$map2, _elm_lang$core$Bitwise$xor, state.nonce, counter);
		var output = A2(_p3._0, key, input);
		var ciphertext = A3(_elm_community$array_extra$Array_Extra$map2, _elm_lang$core$Bitwise$xor, output, block);
		return {
			ctor: '_Tuple2',
			_0: ciphertext,
			_1: _elm_lang$core$Native_Utils.update(
				state,
				{
					counter: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$incrementBlock(counter)
				})
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrInitializer = F2(
	function (generator, blockSize) {
		var _p4 = generator(blockSize);
		var nonce = _p4._0;
		var randomState = _p4._1;
		return {
			ctor: '_Tuple2',
			_0: {
				nonce: nonce,
				counter: A2(_elm_lang$core$Array$repeat, blockSize, 0)
			},
			_1: randomState
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrChaining = {name: 'Counter Chaining', initializer: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrInitializer, encryptor: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrChainer, decryptor: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrChainer, adjoiner: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrAdjoiner, separator: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrSeparator};
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ecbDecryptor = F4(
	function (state, _p5, key, block) {
		var _p6 = _p5;
		return {
			ctor: '_Tuple2',
			_0: A2(_p6._1, key, block),
			_1: state
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ecbEncryptor = F4(
	function (state, _p7, key, block) {
		var _p8 = _p7;
		return {
			ctor: '_Tuple2',
			_0: A2(_p8._0, key, block),
			_1: state
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$identitySeparator = F3(
	function (state, _p9, blocks) {
		return {ctor: '_Tuple2', _0: blocks, _1: state};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$identityAdjoiner = F2(
	function (_p10, list) {
		return list;
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$emptyStateInitializer = F2(
	function (generator, _p11) {
		var _p12 = generator(0);
		var randomState = _p12._1;
		return {
			ctor: '_Tuple2',
			_0: {ctor: '_Tuple0'},
			_1: randomState
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ecbChaining = {
	name: 'Electronic Cookbook Chaining',
	initializer: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$emptyStateInitializer,
	encryptor: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ecbEncryptor,
	decryptor: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ecbDecryptor,
	adjoiner: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$identityAdjoiner,
	separator: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$identitySeparator(
		{ctor: '_Tuple0'})
};
var _billstclair$elm_crypto_string$Crypto_Strings_Chaining$CtrState = F2(
	function (a, b) {
		return {nonce: a, counter: b};
	});

var _elm_community$result_extra$Result_Extra$merge = function (r) {
	var _p0 = r;
	if (_p0.ctor === 'Ok') {
		return _p0._0;
	} else {
		return _p0._0;
	}
};
var _elm_community$result_extra$Result_Extra$orElse = F2(
	function (ra, rb) {
		var _p1 = rb;
		if (_p1.ctor === 'Err') {
			return ra;
		} else {
			return rb;
		}
	});
var _elm_community$result_extra$Result_Extra$orElseLazy = F2(
	function (fra, rb) {
		var _p2 = rb;
		if (_p2.ctor === 'Err') {
			return fra(
				{ctor: '_Tuple0'});
		} else {
			return rb;
		}
	});
var _elm_community$result_extra$Result_Extra$orLazy = F2(
	function (ra, frb) {
		var _p3 = ra;
		if (_p3.ctor === 'Err') {
			return frb(
				{ctor: '_Tuple0'});
		} else {
			return ra;
		}
	});
var _elm_community$result_extra$Result_Extra$or = F2(
	function (ra, rb) {
		var _p4 = ra;
		if (_p4.ctor === 'Err') {
			return rb;
		} else {
			return ra;
		}
	});
var _elm_community$result_extra$Result_Extra$andMap = F2(
	function (ra, rb) {
		var _p5 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p5._1.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p5._1._0);
		} else {
			return A2(_elm_lang$core$Result$map, _p5._1._0, _p5._0);
		}
	});
var _elm_community$result_extra$Result_Extra$singleton = _elm_lang$core$Result$Ok;
var _elm_community$result_extra$Result_Extra$combine = A2(
	_elm_lang$core$List$foldr,
	_elm_lang$core$Result$map2(
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			})),
	_elm_lang$core$Result$Ok(
		{ctor: '[]'}));
var _elm_community$result_extra$Result_Extra$mapBoth = F3(
	function (errFunc, okFunc, result) {
		var _p6 = result;
		if (_p6.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				okFunc(_p6._0));
		} else {
			return _elm_lang$core$Result$Err(
				errFunc(_p6._0));
		}
	});
var _elm_community$result_extra$Result_Extra$unpack = F3(
	function (errFunc, okFunc, result) {
		var _p7 = result;
		if (_p7.ctor === 'Ok') {
			return okFunc(_p7._0);
		} else {
			return errFunc(_p7._0);
		}
	});
var _elm_community$result_extra$Result_Extra$unwrap = F3(
	function (defaultValue, okFunc, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return okFunc(_p8._0);
		} else {
			return defaultValue;
		}
	});
var _elm_community$result_extra$Result_Extra$extract = F2(
	function (f, x) {
		var _p9 = x;
		if (_p9.ctor === 'Ok') {
			return _p9._0;
		} else {
			return f(_p9._0);
		}
	});
var _elm_community$result_extra$Result_Extra$isErr = function (x) {
	var _p10 = x;
	if (_p10.ctor === 'Ok') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$result_extra$Result_Extra$isOk = function (x) {
	var _p11 = x;
	if (_p11.ctor === 'Ok') {
		return true;
	} else {
		return false;
	}
};

var _waratuman$elm_coder$Coder$encodeChunk = F2(
	function (_p0, chunk) {
		var _p1 = _p0;
		var _p2 = _p1._1;
		var bits = _elm_lang$core$Basics$floor(
			_elm_lang$core$Basics$toFloat(_p1._0 * 8) / _elm_lang$core$Basics$toFloat(_p2));
		return _elm_lang$core$String$fromList(
			A2(
				_elm_lang$core$List$map,
				function (i) {
					var start = i * bits;
					var end = start + bits;
					var b = _elm_lang$core$Basics$floor(
						_elm_lang$core$Basics$toFloat(end - 1) / 8);
					var a = _elm_lang$core$Basics$floor(
						_elm_lang$core$Basics$toFloat(start) / 8);
					var aShift = (_elm_lang$core$Native_Utils.cmp(
						A2(_elm_lang$core$Basics_ops['%'], start, 8),
						8 - bits) < 0) ? (8 - A2(_elm_lang$core$Basics_ops['%'], end, 8)) : ((8 - bits) - A2(_elm_lang$core$Basics_ops['%'], start, 8));
					var bShift = _elm_lang$core$Native_Utils.eq(a, b) ? aShift : (8 - A2(_elm_lang$core$Basics_ops['%'], end, 8));
					var $byte = A2(
						_elm_lang$core$Maybe$withDefault,
						0,
						A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (x, y) {
									return (Math.pow(2, bits) - 1) & (((_elm_lang$core$Native_Utils.cmp(aShift, 0) < 0) ? (x << (0 - aShift)) : (x >>> aShift)) | (y >>> bShift));
								}),
							A2(_elm_community$list_extra$List_Extra$getAt, a, chunk),
							A2(_elm_community$list_extra$List_Extra$getAt, b, chunk)));
					return _p1._3($byte);
				},
				A2(_elm_lang$core$List$range, 0, _p2 - 1)));
	});
var _waratuman$elm_coder$Coder$encode = F2(
	function (_p3, bytes) {
		var _p4 = _p3;
		var _p7 = _p4._2;
		var _p6 = _p4._0;
		var _p5 = _p4._1;
		var data = A2(
			_elm_lang$core$Basics_ops['++'],
			bytes,
			A2(
				_elm_lang$core$List$repeat,
				(_elm_lang$core$Native_Utils.cmp(
					A2(
						_elm_lang$core$Basics_ops['%'],
						_elm_lang$core$List$length(bytes),
						_p6),
					0) > 0) ? (_p6 - A2(
					_elm_lang$core$Basics_ops['%'],
					_elm_lang$core$List$length(bytes),
					_p6)) : 0,
				0));
		var n = _elm_lang$core$Basics$ceiling(
			_elm_lang$core$Basics$toFloat(
				_elm_lang$core$List$length(bytes) * _p5) / _elm_lang$core$Basics$toFloat(_p6));
		var p = (_elm_lang$core$Native_Utils.cmp(
			A2(_elm_lang$core$Basics_ops['%'], n, _p5),
			0) > 0) ? (_p5 - A2(_elm_lang$core$Basics_ops['%'], n, _p5)) : 0;
		return A2(
			_elm_lang$core$String$append,
			A3(
				_elm_lang$core$String$slice,
				0,
				n,
				A2(
					_elm_lang$core$String$join,
					'',
					A2(
						_elm_lang$core$List$map,
						_waratuman$elm_coder$Coder$encodeChunk(
							{ctor: '_Tuple5', _0: _p6, _1: _p5, _2: _p7, _3: _p4._3, _4: _p4._4}),
						A2(_elm_community$list_extra$List_Extra$groupsOf, _p6, data)))),
			A2(_elm_lang$core$String$repeat, p, _p7));
	});
var _waratuman$elm_coder$Coder$decodeChunk = F2(
	function (_p8, chunk) {
		var _p9 = _p8;
		var bitsPerChar = _elm_lang$core$Basics$floor(
			_elm_lang$core$Basics$toFloat(_p9._0 * 8) / _elm_lang$core$Basics$toFloat(_p9._1));
		return A2(
			_elm_lang$core$Result$andThen,
			function (x) {
				return _elm_lang$core$Result$Ok(
					_elm_lang$core$Tuple$second(
						A3(
							_elm_community$list_extra$List_Extra$indexedFoldl,
							F3(
								function (charIndex, $char, _p10) {
									var _p11 = _p10;
									var _p13 = _p11._1;
									var charStart = charIndex * bitsPerChar;
									var charEnd = charStart + bitsPerChar;
									var octetIndex = _elm_lang$core$Basics$floor(
										_elm_lang$core$Basics$toFloat(charIndex) * (_elm_lang$core$Basics$toFloat(bitsPerChar) / 8));
									var octetStart = octetIndex * 8;
									var octetEnd = octetStart + 8;
									var shift = octetEnd - charEnd;
									var $byte = _p11._0 | ((_elm_lang$core$Native_Utils.cmp(shift, 0) < 0) ? ($char >>> (0 - shift)) : ($char << shift));
									var nextByte = _elm_lang$core$Native_Utils.eq(charEnd, octetEnd) ? _elm_lang$core$Maybe$Just(0) : ((_elm_lang$core$Native_Utils.cmp(charEnd, octetEnd) > 0) ? _elm_lang$core$Maybe$Just(
										255 & ((_elm_lang$core$Native_Utils.cmp(shift, 0) < 0) ? ($char << (8 + shift)) : ($char >>> (8 - shift)))) : _elm_lang$core$Maybe$Nothing);
									var _p12 = nextByte;
									if (_p12.ctor === 'Just') {
										return {
											ctor: '_Tuple2',
											_0: _p12._0,
											_1: A2(
												_elm_lang$core$Basics_ops['++'],
												_p13,
												{
													ctor: '::',
													_0: $byte,
													_1: {ctor: '[]'}
												})
										};
									} else {
										return {ctor: '_Tuple2', _0: $byte, _1: _p13};
									}
								}),
							{
								ctor: '_Tuple2',
								_0: 0,
								_1: {ctor: '[]'}
							},
							x)));
			},
			_elm_community$result_extra$Result_Extra$combine(
				A2(_elm_lang$core$List$map, _p9._4, chunk)));
	});
var _waratuman$elm_coder$Coder$decode = F2(
	function (_p14, string) {
		var _p15 = _p14;
		var _p18 = _p15._2;
		var _p17 = _p15._0;
		var _p16 = _p15._1;
		return A2(
			_elm_lang$core$Result$andThen,
			function (x) {
				var p = _elm_lang$core$Basics$ceiling(
					(_elm_lang$core$Basics$toFloat(
						_elm_lang$core$List$length(
							A2(_elm_lang$core$String$indexes, _p18, string))) * _elm_lang$core$Basics$toFloat(_p17)) / _elm_lang$core$Basics$toFloat(_p16));
				var output = _elm_lang$core$List$concat(x);
				var s = _elm_lang$core$List$length(output) - p;
				return _elm_lang$core$Result$Ok(
					A2(_elm_lang$core$List$take, s, output));
			},
			_elm_community$result_extra$Result_Extra$combine(
				A2(
					_elm_lang$core$List$map,
					_waratuman$elm_coder$Coder$decodeChunk(
						{ctor: '_Tuple5', _0: _p17, _1: _p16, _2: _p18, _3: _p15._3, _4: _p15._4}),
					A2(
						_elm_community$list_extra$List_Extra$groupsOf,
						_p16,
						_elm_lang$core$String$toList(string)))));
	});

var _waratuman$elm_coder$Base64$intToChar = function ($int) {
	var _p0 = $int;
	switch (_p0) {
		case 0:
			return _elm_lang$core$Native_Utils.chr('A');
		case 1:
			return _elm_lang$core$Native_Utils.chr('B');
		case 2:
			return _elm_lang$core$Native_Utils.chr('C');
		case 3:
			return _elm_lang$core$Native_Utils.chr('D');
		case 4:
			return _elm_lang$core$Native_Utils.chr('E');
		case 5:
			return _elm_lang$core$Native_Utils.chr('F');
		case 6:
			return _elm_lang$core$Native_Utils.chr('G');
		case 7:
			return _elm_lang$core$Native_Utils.chr('H');
		case 8:
			return _elm_lang$core$Native_Utils.chr('I');
		case 9:
			return _elm_lang$core$Native_Utils.chr('J');
		case 10:
			return _elm_lang$core$Native_Utils.chr('K');
		case 11:
			return _elm_lang$core$Native_Utils.chr('L');
		case 12:
			return _elm_lang$core$Native_Utils.chr('M');
		case 13:
			return _elm_lang$core$Native_Utils.chr('N');
		case 14:
			return _elm_lang$core$Native_Utils.chr('O');
		case 15:
			return _elm_lang$core$Native_Utils.chr('P');
		case 16:
			return _elm_lang$core$Native_Utils.chr('Q');
		case 17:
			return _elm_lang$core$Native_Utils.chr('R');
		case 18:
			return _elm_lang$core$Native_Utils.chr('S');
		case 19:
			return _elm_lang$core$Native_Utils.chr('T');
		case 20:
			return _elm_lang$core$Native_Utils.chr('U');
		case 21:
			return _elm_lang$core$Native_Utils.chr('V');
		case 22:
			return _elm_lang$core$Native_Utils.chr('W');
		case 23:
			return _elm_lang$core$Native_Utils.chr('X');
		case 24:
			return _elm_lang$core$Native_Utils.chr('Y');
		case 25:
			return _elm_lang$core$Native_Utils.chr('Z');
		case 26:
			return _elm_lang$core$Native_Utils.chr('a');
		case 27:
			return _elm_lang$core$Native_Utils.chr('b');
		case 28:
			return _elm_lang$core$Native_Utils.chr('c');
		case 29:
			return _elm_lang$core$Native_Utils.chr('d');
		case 30:
			return _elm_lang$core$Native_Utils.chr('e');
		case 31:
			return _elm_lang$core$Native_Utils.chr('f');
		case 32:
			return _elm_lang$core$Native_Utils.chr('g');
		case 33:
			return _elm_lang$core$Native_Utils.chr('h');
		case 34:
			return _elm_lang$core$Native_Utils.chr('i');
		case 35:
			return _elm_lang$core$Native_Utils.chr('j');
		case 36:
			return _elm_lang$core$Native_Utils.chr('k');
		case 37:
			return _elm_lang$core$Native_Utils.chr('l');
		case 38:
			return _elm_lang$core$Native_Utils.chr('m');
		case 39:
			return _elm_lang$core$Native_Utils.chr('n');
		case 40:
			return _elm_lang$core$Native_Utils.chr('o');
		case 41:
			return _elm_lang$core$Native_Utils.chr('p');
		case 42:
			return _elm_lang$core$Native_Utils.chr('q');
		case 43:
			return _elm_lang$core$Native_Utils.chr('r');
		case 44:
			return _elm_lang$core$Native_Utils.chr('s');
		case 45:
			return _elm_lang$core$Native_Utils.chr('t');
		case 46:
			return _elm_lang$core$Native_Utils.chr('u');
		case 47:
			return _elm_lang$core$Native_Utils.chr('v');
		case 48:
			return _elm_lang$core$Native_Utils.chr('w');
		case 49:
			return _elm_lang$core$Native_Utils.chr('x');
		case 50:
			return _elm_lang$core$Native_Utils.chr('y');
		case 51:
			return _elm_lang$core$Native_Utils.chr('z');
		case 52:
			return _elm_lang$core$Native_Utils.chr('0');
		case 53:
			return _elm_lang$core$Native_Utils.chr('1');
		case 54:
			return _elm_lang$core$Native_Utils.chr('2');
		case 55:
			return _elm_lang$core$Native_Utils.chr('3');
		case 56:
			return _elm_lang$core$Native_Utils.chr('4');
		case 57:
			return _elm_lang$core$Native_Utils.chr('5');
		case 58:
			return _elm_lang$core$Native_Utils.chr('6');
		case 59:
			return _elm_lang$core$Native_Utils.chr('7');
		case 60:
			return _elm_lang$core$Native_Utils.chr('8');
		case 61:
			return _elm_lang$core$Native_Utils.chr('9');
		case 62:
			return _elm_lang$core$Native_Utils.chr('+');
		case 63:
			return _elm_lang$core$Native_Utils.chr('/');
		default:
			return A2(
				_elm_lang$core$Native_Utils.crash(
					'Base64',
					{
						start: {line: 424, column: 13},
						end: {line: 424, column: 24}
					}),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Invalid byte value \"',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p0),
						'\" for base64')),
				_elm_lang$core$Native_Utils.chr('💣'));
	}
};
var _waratuman$elm_coder$Base64$charToInt = function ($char) {
	var _p1 = $char;
	switch (_p1.valueOf()) {
		case 'A':
			return _elm_lang$core$Result$Ok(0);
		case 'B':
			return _elm_lang$core$Result$Ok(1);
		case 'C':
			return _elm_lang$core$Result$Ok(2);
		case 'D':
			return _elm_lang$core$Result$Ok(3);
		case 'E':
			return _elm_lang$core$Result$Ok(4);
		case 'F':
			return _elm_lang$core$Result$Ok(5);
		case 'G':
			return _elm_lang$core$Result$Ok(6);
		case 'H':
			return _elm_lang$core$Result$Ok(7);
		case 'I':
			return _elm_lang$core$Result$Ok(8);
		case 'J':
			return _elm_lang$core$Result$Ok(9);
		case 'K':
			return _elm_lang$core$Result$Ok(10);
		case 'L':
			return _elm_lang$core$Result$Ok(11);
		case 'M':
			return _elm_lang$core$Result$Ok(12);
		case 'N':
			return _elm_lang$core$Result$Ok(13);
		case 'O':
			return _elm_lang$core$Result$Ok(14);
		case 'P':
			return _elm_lang$core$Result$Ok(15);
		case 'Q':
			return _elm_lang$core$Result$Ok(16);
		case 'R':
			return _elm_lang$core$Result$Ok(17);
		case 'S':
			return _elm_lang$core$Result$Ok(18);
		case 'T':
			return _elm_lang$core$Result$Ok(19);
		case 'U':
			return _elm_lang$core$Result$Ok(20);
		case 'V':
			return _elm_lang$core$Result$Ok(21);
		case 'W':
			return _elm_lang$core$Result$Ok(22);
		case 'X':
			return _elm_lang$core$Result$Ok(23);
		case 'Y':
			return _elm_lang$core$Result$Ok(24);
		case 'Z':
			return _elm_lang$core$Result$Ok(25);
		case 'a':
			return _elm_lang$core$Result$Ok(26);
		case 'b':
			return _elm_lang$core$Result$Ok(27);
		case 'c':
			return _elm_lang$core$Result$Ok(28);
		case 'd':
			return _elm_lang$core$Result$Ok(29);
		case 'e':
			return _elm_lang$core$Result$Ok(30);
		case 'f':
			return _elm_lang$core$Result$Ok(31);
		case 'g':
			return _elm_lang$core$Result$Ok(32);
		case 'h':
			return _elm_lang$core$Result$Ok(33);
		case 'i':
			return _elm_lang$core$Result$Ok(34);
		case 'j':
			return _elm_lang$core$Result$Ok(35);
		case 'k':
			return _elm_lang$core$Result$Ok(36);
		case 'l':
			return _elm_lang$core$Result$Ok(37);
		case 'm':
			return _elm_lang$core$Result$Ok(38);
		case 'n':
			return _elm_lang$core$Result$Ok(39);
		case 'o':
			return _elm_lang$core$Result$Ok(40);
		case 'p':
			return _elm_lang$core$Result$Ok(41);
		case 'q':
			return _elm_lang$core$Result$Ok(42);
		case 'r':
			return _elm_lang$core$Result$Ok(43);
		case 's':
			return _elm_lang$core$Result$Ok(44);
		case 't':
			return _elm_lang$core$Result$Ok(45);
		case 'u':
			return _elm_lang$core$Result$Ok(46);
		case 'v':
			return _elm_lang$core$Result$Ok(47);
		case 'w':
			return _elm_lang$core$Result$Ok(48);
		case 'x':
			return _elm_lang$core$Result$Ok(49);
		case 'y':
			return _elm_lang$core$Result$Ok(50);
		case 'z':
			return _elm_lang$core$Result$Ok(51);
		case '0':
			return _elm_lang$core$Result$Ok(52);
		case '1':
			return _elm_lang$core$Result$Ok(53);
		case '2':
			return _elm_lang$core$Result$Ok(54);
		case '3':
			return _elm_lang$core$Result$Ok(55);
		case '4':
			return _elm_lang$core$Result$Ok(56);
		case '5':
			return _elm_lang$core$Result$Ok(57);
		case '6':
			return _elm_lang$core$Result$Ok(58);
		case '7':
			return _elm_lang$core$Result$Ok(59);
		case '8':
			return _elm_lang$core$Result$Ok(60);
		case '9':
			return _elm_lang$core$Result$Ok(61);
		case '+':
			return _elm_lang$core$Result$Ok(62);
		case '/':
			return _elm_lang$core$Result$Ok(63);
		case '=':
			return _elm_lang$core$Result$Ok(0);
		default:
			return _elm_lang$core$Result$Err('Invalid character');
	}
};
var _waratuman$elm_coder$Base64$encode = _waratuman$elm_coder$Coder$encode(
	{ctor: '_Tuple5', _0: 3, _1: 4, _2: '=', _3: _waratuman$elm_coder$Base64$intToChar, _4: _waratuman$elm_coder$Base64$charToInt});
var _waratuman$elm_coder$Base64$decode = _waratuman$elm_coder$Coder$decode(
	{ctor: '_Tuple5', _0: 3, _1: 4, _2: '=', _3: _waratuman$elm_coder$Base64$intToChar, _4: _waratuman$elm_coder$Base64$charToInt});

var _ktonon$elm_word$Word_Bytes$fixLength = F3(
	function (byteCount, val, list) {
		var _p0 = A2(
			_elm_lang$core$Basics$compare,
			_elm_lang$core$List$length(list),
			byteCount);
		switch (_p0.ctor) {
			case 'EQ':
				return list;
			case 'LT':
				return A2(
					_elm_lang$core$List$append,
					A2(
						_elm_lang$core$List$repeat,
						byteCount - _elm_lang$core$List$length(list),
						val),
					list);
			default:
				return A2(_elm_lang$core$List$take, byteCount, list);
		}
	});
var _ktonon$elm_word$Word_Bytes$fromInt = F2(
	function (byteCount, value) {
		return (_elm_lang$core$Native_Utils.cmp(byteCount, 4) > 0) ? A2(
			_elm_lang$core$List$append,
			A2(
				_ktonon$elm_word$Word_Bytes$fromInt,
				byteCount - 4,
				(value / Math.pow(2, 32)) | 0),
			A2(_ktonon$elm_word$Word_Bytes$fromInt, 4, 4294967295 & value)) : A2(
			_elm_lang$core$List$map,
			function (i) {
				return 255 & (value >>> ((byteCount - i) * Math.pow(2, 3)));
			},
			A2(_elm_lang$core$List$range, 1, byteCount));
	});
var _ktonon$elm_word$Word_Bytes$splitUtf8 = function (x) {
	return (_elm_lang$core$Native_Utils.cmp(x, 128) < 0) ? {
		ctor: '::',
		_0: x,
		_1: {ctor: '[]'}
	} : ((_elm_lang$core$Native_Utils.cmp(x, 2048) < 0) ? {
		ctor: '::',
		_0: 192 | ((1984 & x) >>> 6),
		_1: {
			ctor: '::',
			_0: 128 | (63 & x),
			_1: {ctor: '[]'}
		}
	} : {
		ctor: '::',
		_0: 224 | ((61440 & x) >>> 12),
		_1: {
			ctor: '::',
			_0: 128 | ((4032 & x) >>> 6),
			_1: {
				ctor: '::',
				_0: 128 | (63 & x),
				_1: {ctor: '[]'}
			}
		}
	});
};
var _ktonon$elm_word$Word_Bytes$fromUTF8 = function (_p1) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function ($char, acc) {
				return A2(
					_elm_lang$core$List$append,
					acc,
					_ktonon$elm_word$Word_Bytes$splitUtf8(
						_elm_lang$core$Char$toCode($char)));
			}),
		{ctor: '[]'},
		_elm_lang$core$String$toList(_p1));
};

var _ktonon$elm_word$Word_Helpers$lowMask = function (n) {
	var _p0 = n;
	switch (_p0) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 3;
		case 3:
			return 7;
		case 4:
			return 15;
		case 5:
			return 31;
		case 6:
			return 63;
		case 7:
			return 127;
		case 8:
			return 255;
		case 9:
			return 511;
		case 10:
			return 1023;
		case 11:
			return 2047;
		case 12:
			return 4095;
		case 13:
			return 8191;
		case 14:
			return 16383;
		case 15:
			return 32767;
		case 16:
			return 65535;
		case 17:
			return 131071;
		case 18:
			return 262143;
		case 19:
			return 524287;
		case 20:
			return 1048575;
		case 21:
			return 2097151;
		case 22:
			return 4194303;
		case 23:
			return 8388607;
		case 24:
			return 16777215;
		case 25:
			return 33554431;
		case 26:
			return 67108863;
		case 27:
			return 134217727;
		case 28:
			return 268435455;
		case 29:
			return 536870911;
		case 30:
			return 1073741823;
		case 31:
			return 2147483647;
		default:
			return 4294967295;
	}
};
var _ktonon$elm_word$Word_Helpers$safeShiftRightZfBy = F2(
	function (n, val) {
		return (_elm_lang$core$Native_Utils.cmp(n, 32) > -1) ? 0 : (val >>> n);
	});
var _ktonon$elm_word$Word_Helpers$rotatedLowBits = F2(
	function (n, val) {
		return F2(
			function (x, y) {
				return x + y;
			})(
			(_ktonon$elm_word$Word_Helpers$lowMask(n) & val) << (32 - n));
	});

var _ktonon$elm_word$Word$mod32 = function (val) {
	return A2(
		_elm_lang$core$Basics_ops['%'],
		val,
		Math.pow(2, 32));
};
var _ktonon$elm_word$Word$rem32 = function (val) {
	return (val / Math.pow(2, 32)) | 0;
};
var _ktonon$elm_word$Word$dShiftRightZfBy = F2(
	function (n, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._0;
		return (_elm_lang$core$Native_Utils.cmp(n, 32) > 0) ? {
			ctor: '_Tuple2',
			_0: 0,
			_1: A2(_ktonon$elm_word$Word_Helpers$safeShiftRightZfBy, n - 32, _p2)
		} : {
			ctor: '_Tuple2',
			_0: A2(_ktonon$elm_word$Word_Helpers$safeShiftRightZfBy, n, _p2),
			_1: A2(
				F2(
					function (x, y) {
						return x + y;
					}),
				A2(_ktonon$elm_word$Word_Helpers$safeShiftRightZfBy, n, _p1._1),
				(_ktonon$elm_word$Word_Helpers$lowMask(n) & _p2) << (32 - n))
		};
	});
var _ktonon$elm_word$Word$toBytes = function (_p3) {
	return A2(
		_elm_lang$core$List$concatMap,
		function (word) {
			var _p4 = word;
			switch (_p4.ctor) {
				case 'W':
					return A2(_ktonon$elm_word$Word_Bytes$fromInt, 4, _p4._0);
				case 'D':
					return A2(
						_elm_lang$core$List$append,
						A2(_ktonon$elm_word$Word_Bytes$fromInt, 4, _p4._0),
						A2(_ktonon$elm_word$Word_Bytes$fromInt, 4, _p4._1));
				default:
					return {ctor: '[]'};
			}
		},
		_elm_lang$core$Array$toList(_p3));
};
var _ktonon$elm_word$Word$int32FromBytes = function (_p5) {
	var _p6 = _p5;
	return ((_p6._3 + (_p6._2 * Math.pow(2, 8))) + (_p6._1 * Math.pow(2, 16))) + (_p6._0 * Math.pow(2, 24));
};
var _ktonon$elm_word$Word$pad4 = function (bytes) {
	var _p7 = bytes;
	_v3_4:
	do {
		if (_p7.ctor === '::') {
			if (_p7._1.ctor === '::') {
				if (_p7._1._1.ctor === '::') {
					if (_p7._1._1._1.ctor === '::') {
						if (_p7._1._1._1._1.ctor === '[]') {
							return {ctor: '_Tuple4', _0: _p7._0, _1: _p7._1._0, _2: _p7._1._1._0, _3: _p7._1._1._1._0};
						} else {
							break _v3_4;
						}
					} else {
						return {ctor: '_Tuple4', _0: _p7._0, _1: _p7._1._0, _2: _p7._1._1._0, _3: 0};
					}
				} else {
					return {ctor: '_Tuple4', _0: _p7._0, _1: _p7._1._0, _2: 0, _3: 0};
				}
			} else {
				return {ctor: '_Tuple4', _0: _p7._0, _1: 0, _2: 0, _3: 0};
			}
		} else {
			break _v3_4;
		}
	} while(false);
	return {ctor: '_Tuple4', _0: 0, _1: 0, _2: 0, _3: 0};
};
var _ktonon$elm_word$Word$low31mask = 2147483647;
var _ktonon$elm_word$Word$carry32 = F2(
	function (x, y) {
		var _p8 = (x >>> 31) + (y >>> 31);
		switch (_p8) {
			case 0:
				return 0;
			case 2:
				return 1;
			default:
				return A2(
					F2(
						function (x, y) {
							return _elm_lang$core$Native_Utils.eq(x, y);
						}),
					1,
					A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						_ktonon$elm_word$Word$low31mask & x,
						_ktonon$elm_word$Word$low31mask & y) >>> 31) ? 1 : 0;
		}
	});
var _ktonon$elm_word$Word$sizeInBytes = function (s) {
	var _p9 = s;
	if (_p9.ctor === 'Bit32') {
		return 4;
	} else {
		return 8;
	}
};
var _ktonon$elm_word$Word$Mismatch = {ctor: 'Mismatch'};
var _ktonon$elm_word$Word$D = F2(
	function (a, b) {
		return {ctor: 'D', _0: a, _1: b};
	});
var _ktonon$elm_word$Word$W = function (a) {
	return {ctor: 'W', _0: a};
};
var _ktonon$elm_word$Word$zero = function (wordSize) {
	var _p10 = wordSize;
	if (_p10.ctor === 'Bit32') {
		return _ktonon$elm_word$Word$W(0);
	} else {
		return A2(_ktonon$elm_word$Word$D, 0, 0);
	}
};
var _ktonon$elm_word$Word$accWords = F3(
	function (wordSize, bytes, acc) {
		accWords:
		while (true) {
			var _p11 = {ctor: '_Tuple2', _0: wordSize, _1: bytes};
			_v7_2:
			do {
				if (_p11._0.ctor === 'Bit32') {
					if (_p11._1.ctor === '::') {
						if (((_p11._1._1.ctor === '::') && (_p11._1._1._1.ctor === '::')) && (_p11._1._1._1._1.ctor === '::')) {
							var _v8 = wordSize,
								_v9 = _p11._1._1._1._1._1,
								_v10 = A2(
								_elm_lang$core$Array$push,
								_ktonon$elm_word$Word$W(
									_ktonon$elm_word$Word$int32FromBytes(
										{ctor: '_Tuple4', _0: _p11._1._0, _1: _p11._1._1._0, _2: _p11._1._1._1._0, _3: _p11._1._1._1._1._0})),
								acc);
							wordSize = _v8;
							bytes = _v9;
							acc = _v10;
							continue accWords;
						} else {
							return A2(
								_elm_lang$core$Array$push,
								_ktonon$elm_word$Word$W(
									_ktonon$elm_word$Word$int32FromBytes(
										_ktonon$elm_word$Word$pad4(_p11._1))),
								acc);
						}
					} else {
						break _v7_2;
					}
				} else {
					if (_p11._1.ctor === '::') {
						if (((((((_p11._1._1.ctor === '::') && (_p11._1._1._1.ctor === '::')) && (_p11._1._1._1._1.ctor === '::')) && (_p11._1._1._1._1._1.ctor === '::')) && (_p11._1._1._1._1._1._1.ctor === '::')) && (_p11._1._1._1._1._1._1._1.ctor === '::')) && (_p11._1._1._1._1._1._1._1._1.ctor === '::')) {
							var _v11 = wordSize,
								_v12 = _p11._1._1._1._1._1._1._1._1._1,
								_v13 = A2(
								_elm_lang$core$Array$push,
								A2(
									_ktonon$elm_word$Word$D,
									_ktonon$elm_word$Word$int32FromBytes(
										{ctor: '_Tuple4', _0: _p11._1._0, _1: _p11._1._1._0, _2: _p11._1._1._1._0, _3: _p11._1._1._1._1._0}),
									_ktonon$elm_word$Word$int32FromBytes(
										{ctor: '_Tuple4', _0: _p11._1._1._1._1._1._0, _1: _p11._1._1._1._1._1._1._0, _2: _p11._1._1._1._1._1._1._1._0, _3: _p11._1._1._1._1._1._1._1._1._0})),
								acc);
							wordSize = _v11;
							bytes = _v12;
							acc = _v13;
							continue accWords;
						} else {
							var _p12 = _p11._1;
							return A2(
								_elm_lang$core$Array$push,
								A2(
									_ktonon$elm_word$Word$D,
									_ktonon$elm_word$Word$int32FromBytes(
										_ktonon$elm_word$Word$pad4(
											A2(_elm_lang$core$List$take, 4, _p12))),
									_ktonon$elm_word$Word$int32FromBytes(
										_ktonon$elm_word$Word$pad4(
											A2(_elm_lang$core$List$drop, 4, _p12)))),
								acc);
						}
					} else {
						break _v7_2;
					}
				}
			} while(false);
			return acc;
		}
	});
var _ktonon$elm_word$Word$fromBytes = F2(
	function (wordSize, bytes) {
		return A3(_ktonon$elm_word$Word$accWords, wordSize, bytes, _elm_lang$core$Array$empty);
	});
var _ktonon$elm_word$Word$fromUTF8 = function (wordSize) {
	return function (_p13) {
		return A2(
			_ktonon$elm_word$Word$fromBytes,
			wordSize,
			_ktonon$elm_word$Word_Bytes$fromUTF8(_p13));
	};
};
var _ktonon$elm_word$Word$add = F2(
	function (x, y) {
		var _p14 = {ctor: '_Tuple2', _0: x, _1: y};
		_v14_2:
		do {
			if (_p14.ctor === '_Tuple2') {
				switch (_p14._0.ctor) {
					case 'W':
						if (_p14._1.ctor === 'W') {
							return _ktonon$elm_word$Word$W(
								_ktonon$elm_word$Word$mod32(_p14._0._0 + _p14._1._0));
						} else {
							break _v14_2;
						}
					case 'D':
						if (_p14._1.ctor === 'D') {
							var _p16 = _p14._1._1;
							var _p15 = _p14._0._1;
							var zh = (_p14._0._0 + _p14._1._0) + A2(_ktonon$elm_word$Word$carry32, _p15, _p16);
							var zl = _p15 + _p16;
							return A2(
								_ktonon$elm_word$Word$D,
								_ktonon$elm_word$Word$mod32(zh),
								_ktonon$elm_word$Word$mod32(zl));
						} else {
							break _v14_2;
						}
					default:
						break _v14_2;
				}
			} else {
				break _v14_2;
			}
		} while(false);
		return _ktonon$elm_word$Word$Mismatch;
	});
var _ktonon$elm_word$Word$rotateRightBy = F2(
	function (unboundN, word) {
		var _p17 = word;
		switch (_p17.ctor) {
			case 'W':
				var _p18 = _p17._0;
				var n = A2(_elm_lang$core$Basics_ops['%'], unboundN, 32);
				return _ktonon$elm_word$Word$W(
					A3(
						_ktonon$elm_word$Word_Helpers$rotatedLowBits,
						n,
						_p18,
						A2(_ktonon$elm_word$Word_Helpers$safeShiftRightZfBy, n, _p18)));
			case 'D':
				var _p22 = _p17._1;
				var _p21 = _p17._0;
				var n = A2(_elm_lang$core$Basics_ops['%'], unboundN, 64);
				if (_elm_lang$core$Native_Utils.cmp(n, 32) > 0) {
					var n_ = n - 32;
					var _p19 = A2(
						_ktonon$elm_word$Word$dShiftRightZfBy,
						n_,
						{ctor: '_Tuple2', _0: _p22, _1: _p21});
					var zh = _p19._0;
					var zl = _p19._1;
					return A2(
						_ktonon$elm_word$Word$D,
						A3(_ktonon$elm_word$Word_Helpers$rotatedLowBits, n_, _p21, zh),
						zl);
				} else {
					var _p20 = A2(
						_ktonon$elm_word$Word$dShiftRightZfBy,
						n,
						{ctor: '_Tuple2', _0: _p21, _1: _p22});
					var zh = _p20._0;
					var zl = _p20._1;
					return A2(
						_ktonon$elm_word$Word$D,
						A3(_ktonon$elm_word$Word_Helpers$rotatedLowBits, n, _p22, zh),
						zl);
				}
			default:
				return _ktonon$elm_word$Word$Mismatch;
		}
	});
var _ktonon$elm_word$Word$rotateLeftBy = F2(
	function (n, word) {
		var _p23 = word;
		switch (_p23.ctor) {
			case 'W':
				return A2(_ktonon$elm_word$Word$rotateRightBy, 32 - n, word);
			case 'D':
				return A2(_ktonon$elm_word$Word$rotateRightBy, 64 - n, word);
			default:
				return _ktonon$elm_word$Word$Mismatch;
		}
	});
var _ktonon$elm_word$Word$shiftRightZfBy = F2(
	function (n, word) {
		var _p24 = word;
		switch (_p24.ctor) {
			case 'W':
				return _ktonon$elm_word$Word$W(
					A2(_ktonon$elm_word$Word_Helpers$safeShiftRightZfBy, n, _p24._0));
			case 'D':
				var _p25 = A2(
					_ktonon$elm_word$Word$dShiftRightZfBy,
					n,
					{ctor: '_Tuple2', _0: _p24._0, _1: _p24._1});
				var zh = _p25._0;
				var zl = _p25._1;
				return A2(_ktonon$elm_word$Word$D, zh, zl);
			default:
				return _ktonon$elm_word$Word$Mismatch;
		}
	});
var _ktonon$elm_word$Word$and = F2(
	function (x, y) {
		var _p26 = {ctor: '_Tuple2', _0: x, _1: y};
		_v18_2:
		do {
			if (_p26.ctor === '_Tuple2') {
				switch (_p26._0.ctor) {
					case 'W':
						if (_p26._1.ctor === 'W') {
							return _ktonon$elm_word$Word$W(_p26._0._0 & _p26._1._0);
						} else {
							break _v18_2;
						}
					case 'D':
						if (_p26._1.ctor === 'D') {
							return A2(_ktonon$elm_word$Word$D, _p26._0._0 & _p26._1._0, _p26._0._1 & _p26._1._1);
						} else {
							break _v18_2;
						}
					default:
						break _v18_2;
				}
			} else {
				break _v18_2;
			}
		} while(false);
		return _ktonon$elm_word$Word$Mismatch;
	});
var _ktonon$elm_word$Word$xor = F2(
	function (x, y) {
		var _p27 = {ctor: '_Tuple2', _0: x, _1: y};
		_v19_2:
		do {
			if (_p27.ctor === '_Tuple2') {
				switch (_p27._0.ctor) {
					case 'W':
						if (_p27._1.ctor === 'W') {
							return _ktonon$elm_word$Word$W(_p27._0._0 ^ _p27._1._0);
						} else {
							break _v19_2;
						}
					case 'D':
						if (_p27._1.ctor === 'D') {
							return A2(_ktonon$elm_word$Word$D, _p27._0._0 ^ _p27._1._0, _p27._0._1 ^ _p27._1._1);
						} else {
							break _v19_2;
						}
					default:
						break _v19_2;
				}
			} else {
				break _v19_2;
			}
		} while(false);
		return _ktonon$elm_word$Word$Mismatch;
	});
var _ktonon$elm_word$Word$complement = function (x) {
	var _p28 = x;
	switch (_p28.ctor) {
		case 'W':
			return _ktonon$elm_word$Word$W(~_p28._0);
		case 'D':
			return A2(_ktonon$elm_word$Word$D, ~_p28._0, ~_p28._1);
		default:
			return _ktonon$elm_word$Word$Mismatch;
	}
};
var _ktonon$elm_word$Word$Bit64 = {ctor: 'Bit64'};
var _ktonon$elm_word$Word$Bit32 = {ctor: 'Bit32'};

var _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512_256 = {ctor: 'SHA512_256'};
var _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512_224 = {ctor: 'SHA512_224'};
var _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512 = {ctor: 'SHA512'};
var _ktonon$elm_crypto$Crypto_SHA_Alg$SHA384 = {ctor: 'SHA384'};
var _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256 = {ctor: 'SHA256'};
var _ktonon$elm_crypto$Crypto_SHA_Alg$wordSize = function (alg) {
	wordSize:
	while (true) {
		var _p0 = alg;
		switch (_p0.ctor) {
			case 'SHA224':
				var _v1 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256;
				alg = _v1;
				continue wordSize;
			case 'SHA256':
				return _ktonon$elm_word$Word$Bit32;
			case 'SHA384':
				var _v2 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v2;
				continue wordSize;
			case 'SHA512':
				return _ktonon$elm_word$Word$Bit64;
			case 'SHA512_224':
				var _v3 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v3;
				continue wordSize;
			default:
				var _v4 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v4;
				continue wordSize;
		}
	}
};
var _ktonon$elm_crypto$Crypto_SHA_Alg$SHA224 = {ctor: 'SHA224'};

var _ktonon$elm_crypto$Crypto_SHA_Chunk$sizeInBytes = function (alg) {
	sizeInBytes:
	while (true) {
		var _p0 = alg;
		switch (_p0.ctor) {
			case 'SHA224':
				var _v1 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256;
				alg = _v1;
				continue sizeInBytes;
			case 'SHA256':
				return 64;
			case 'SHA384':
				var _v2 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v2;
				continue sizeInBytes;
			case 'SHA512':
				return 128;
			case 'SHA512_224':
				var _v3 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v3;
				continue sizeInBytes;
			default:
				var _v4 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v4;
				continue sizeInBytes;
		}
	}
};
var _ktonon$elm_crypto$Crypto_SHA_Chunk$sizeInWords = function (alg) {
	return A2(
		F2(
			function (x, y) {
				return (x / y) | 0;
			}),
		_ktonon$elm_crypto$Crypto_SHA_Chunk$sizeInBytes(alg),
		_ktonon$elm_word$Word$sizeInBytes(
			_ktonon$elm_crypto$Crypto_SHA_Alg$wordSize(alg)));
};
var _ktonon$elm_crypto$Crypto_SHA_Chunk$sizeInBits = function (_p1) {
	return A2(
		F2(
			function (x, y) {
				return x * y;
			}),
		8,
		_ktonon$elm_crypto$Crypto_SHA_Chunk$sizeInBytes(_p1));
};
var _ktonon$elm_crypto$Crypto_SHA_Chunk$next = F2(
	function (alg, words) {
		var n = _ktonon$elm_crypto$Crypto_SHA_Chunk$sizeInWords(alg);
		var chunk = A2(_elm_lang$core$List$take, n, words);
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$List$isEmpty(chunk) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(chunk),
			_1: A2(_elm_lang$core$List$drop, n, words)
		};
	});

var _ktonon$elm_crypto$Crypto_SHA_Preprocess$messageSizeBytes = function (alg) {
	messageSizeBytes:
	while (true) {
		var _p0 = alg;
		switch (_p0.ctor) {
			case 'SHA224':
				var _v1 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256;
				alg = _v1;
				continue messageSizeBytes;
			case 'SHA256':
				return 8;
			case 'SHA384':
				var _v2 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v2;
				continue messageSizeBytes;
			case 'SHA512':
				return 16;
			case 'SHA512_224':
				var _v3 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v3;
				continue messageSizeBytes;
			default:
				var _v4 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v4;
				continue messageSizeBytes;
		}
	}
};
var _ktonon$elm_crypto$Crypto_SHA_Preprocess$calculateK = F2(
	function (alg, l) {
		var c = _ktonon$elm_crypto$Crypto_SHA_Chunk$sizeInBits(alg);
		return A2(
			_elm_lang$core$Basics_ops['%'],
			((c - 1) - (8 * _ktonon$elm_crypto$Crypto_SHA_Preprocess$messageSizeBytes(alg))) - A2(_elm_lang$core$Basics_ops['%'], l, c),
			c);
	});
var _ktonon$elm_crypto$Crypto_SHA_Preprocess$postfix = F2(
	function (alg, messageSize) {
		return _elm_lang$core$List$concat(
			{
				ctor: '::',
				_0: {
					ctor: '::',
					_0: 128,
					_1: {ctor: '[]'}
				},
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$List$repeat,
						((A2(_ktonon$elm_crypto$Crypto_SHA_Preprocess$calculateK, alg, messageSize) - 7) / 8) | 0,
						0),
					_1: {
						ctor: '::',
						_0: A2(
							_ktonon$elm_word$Word_Bytes$fromInt,
							_ktonon$elm_crypto$Crypto_SHA_Preprocess$messageSizeBytes(alg),
							messageSize),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _ktonon$elm_crypto$Crypto_SHA_Preprocess$preprocess = F2(
	function (alg, message) {
		return A2(
			_elm_lang$core$List$append,
			message,
			A2(
				_ktonon$elm_crypto$Crypto_SHA_Preprocess$postfix,
				alg,
				8 * _elm_lang$core$List$length(message)));
	});

var _ktonon$elm_crypto$Crypto_SHA_Types$toSingleWord = function (word) {
	var _p0 = word;
	if (_p0.ctor === 'D') {
		return {
			ctor: '::',
			_0: _ktonon$elm_word$Word$W(_p0._0),
			_1: {
				ctor: '::',
				_0: _ktonon$elm_word$Word$W(_p0._1),
				_1: {ctor: '[]'}
			}
		};
	} else {
		return {
			ctor: '::',
			_0: word,
			_1: {ctor: '[]'}
		};
	}
};
var _ktonon$elm_crypto$Crypto_SHA_Types$workingVarsToWords = F2(
	function (alg, _p1) {
		var _p2 = _p1;
		var _p11 = _p2.h;
		var _p10 = _p2.g;
		var _p9 = _p2.f;
		var _p8 = _p2.e;
		var _p7 = _p2.d;
		var _p6 = _p2.c;
		var _p5 = _p2.b;
		var _p4 = _p2.a;
		var _p3 = alg;
		switch (_p3.ctor) {
			case 'SHA224':
				return _elm_lang$core$Array$fromList(
					{
						ctor: '::',
						_0: _p4,
						_1: {
							ctor: '::',
							_0: _p5,
							_1: {
								ctor: '::',
								_0: _p6,
								_1: {
									ctor: '::',
									_0: _p7,
									_1: {
										ctor: '::',
										_0: _p8,
										_1: {
											ctor: '::',
											_0: _p9,
											_1: {
												ctor: '::',
												_0: _p10,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					});
			case 'SHA256':
				return _elm_lang$core$Array$fromList(
					{
						ctor: '::',
						_0: _p4,
						_1: {
							ctor: '::',
							_0: _p5,
							_1: {
								ctor: '::',
								_0: _p6,
								_1: {
									ctor: '::',
									_0: _p7,
									_1: {
										ctor: '::',
										_0: _p8,
										_1: {
											ctor: '::',
											_0: _p9,
											_1: {
												ctor: '::',
												_0: _p10,
												_1: {
													ctor: '::',
													_0: _p11,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					});
			case 'SHA384':
				return _elm_lang$core$Array$fromList(
					{
						ctor: '::',
						_0: _p4,
						_1: {
							ctor: '::',
							_0: _p5,
							_1: {
								ctor: '::',
								_0: _p6,
								_1: {
									ctor: '::',
									_0: _p7,
									_1: {
										ctor: '::',
										_0: _p8,
										_1: {
											ctor: '::',
											_0: _p9,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					});
			case 'SHA512':
				return _elm_lang$core$Array$fromList(
					{
						ctor: '::',
						_0: _p4,
						_1: {
							ctor: '::',
							_0: _p5,
							_1: {
								ctor: '::',
								_0: _p6,
								_1: {
									ctor: '::',
									_0: _p7,
									_1: {
										ctor: '::',
										_0: _p8,
										_1: {
											ctor: '::',
											_0: _p9,
											_1: {
												ctor: '::',
												_0: _p10,
												_1: {
													ctor: '::',
													_0: _p11,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					});
			case 'SHA512_224':
				return _elm_lang$core$Array$fromList(
					A2(
						_elm_lang$core$List$take,
						7,
						A2(
							_elm_lang$core$List$concatMap,
							_ktonon$elm_crypto$Crypto_SHA_Types$toSingleWord,
							{
								ctor: '::',
								_0: _p4,
								_1: {
									ctor: '::',
									_0: _p5,
									_1: {
										ctor: '::',
										_0: _p6,
										_1: {
											ctor: '::',
											_0: _p7,
											_1: {ctor: '[]'}
										}
									}
								}
							})));
			default:
				return _elm_lang$core$Array$fromList(
					{
						ctor: '::',
						_0: _p4,
						_1: {
							ctor: '::',
							_0: _p5,
							_1: {
								ctor: '::',
								_0: _p6,
								_1: {
									ctor: '::',
									_0: _p7,
									_1: {ctor: '[]'}
								}
							}
						}
					});
		}
	});
var _ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars = F8(
	function (a, b, c, d, e, f, g, h) {
		return {a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h};
	});
var _ktonon$elm_crypto$Crypto_SHA_Types$addWorkingVars = F2(
	function (x, y) {
		return A8(
			_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
			A2(_ktonon$elm_word$Word$add, x.a, y.a),
			A2(_ktonon$elm_word$Word$add, x.b, y.b),
			A2(_ktonon$elm_word$Word$add, x.c, y.c),
			A2(_ktonon$elm_word$Word$add, x.d, y.d),
			A2(_ktonon$elm_word$Word$add, x.e, y.e),
			A2(_ktonon$elm_word$Word$add, x.f, y.f),
			A2(_ktonon$elm_word$Word$add, x.g, y.g),
			A2(_ktonon$elm_word$Word$add, x.h, y.h));
	});

var _ktonon$elm_crypto$Crypto_SHA_Constants$roundConstants = function (alg) {
	roundConstants:
	while (true) {
		var _p0 = alg;
		switch (_p0.ctor) {
			case 'SHA224':
				var _v1 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256;
				alg = _v1;
				continue roundConstants;
			case 'SHA256':
				return {
					ctor: '::',
					_0: _ktonon$elm_word$Word$W(1116352408),
					_1: {
						ctor: '::',
						_0: _ktonon$elm_word$Word$W(1899447441),
						_1: {
							ctor: '::',
							_0: _ktonon$elm_word$Word$W(3049323471),
							_1: {
								ctor: '::',
								_0: _ktonon$elm_word$Word$W(3921009573),
								_1: {
									ctor: '::',
									_0: _ktonon$elm_word$Word$W(961987163),
									_1: {
										ctor: '::',
										_0: _ktonon$elm_word$Word$W(1508970993),
										_1: {
											ctor: '::',
											_0: _ktonon$elm_word$Word$W(2453635748),
											_1: {
												ctor: '::',
												_0: _ktonon$elm_word$Word$W(2870763221),
												_1: {
													ctor: '::',
													_0: _ktonon$elm_word$Word$W(3624381080),
													_1: {
														ctor: '::',
														_0: _ktonon$elm_word$Word$W(310598401),
														_1: {
															ctor: '::',
															_0: _ktonon$elm_word$Word$W(607225278),
															_1: {
																ctor: '::',
																_0: _ktonon$elm_word$Word$W(1426881987),
																_1: {
																	ctor: '::',
																	_0: _ktonon$elm_word$Word$W(1925078388),
																	_1: {
																		ctor: '::',
																		_0: _ktonon$elm_word$Word$W(2162078206),
																		_1: {
																			ctor: '::',
																			_0: _ktonon$elm_word$Word$W(2614888103),
																			_1: {
																				ctor: '::',
																				_0: _ktonon$elm_word$Word$W(3248222580),
																				_1: {
																					ctor: '::',
																					_0: _ktonon$elm_word$Word$W(3835390401),
																					_1: {
																						ctor: '::',
																						_0: _ktonon$elm_word$Word$W(4022224774),
																						_1: {
																							ctor: '::',
																							_0: _ktonon$elm_word$Word$W(264347078),
																							_1: {
																								ctor: '::',
																								_0: _ktonon$elm_word$Word$W(604807628),
																								_1: {
																									ctor: '::',
																									_0: _ktonon$elm_word$Word$W(770255983),
																									_1: {
																										ctor: '::',
																										_0: _ktonon$elm_word$Word$W(1249150122),
																										_1: {
																											ctor: '::',
																											_0: _ktonon$elm_word$Word$W(1555081692),
																											_1: {
																												ctor: '::',
																												_0: _ktonon$elm_word$Word$W(1996064986),
																												_1: {
																													ctor: '::',
																													_0: _ktonon$elm_word$Word$W(2554220882),
																													_1: {
																														ctor: '::',
																														_0: _ktonon$elm_word$Word$W(2821834349),
																														_1: {
																															ctor: '::',
																															_0: _ktonon$elm_word$Word$W(2952996808),
																															_1: {
																																ctor: '::',
																																_0: _ktonon$elm_word$Word$W(3210313671),
																																_1: {
																																	ctor: '::',
																																	_0: _ktonon$elm_word$Word$W(3336571891),
																																	_1: {
																																		ctor: '::',
																																		_0: _ktonon$elm_word$Word$W(3584528711),
																																		_1: {
																																			ctor: '::',
																																			_0: _ktonon$elm_word$Word$W(113926993),
																																			_1: {
																																				ctor: '::',
																																				_0: _ktonon$elm_word$Word$W(338241895),
																																				_1: {
																																					ctor: '::',
																																					_0: _ktonon$elm_word$Word$W(666307205),
																																					_1: {
																																						ctor: '::',
																																						_0: _ktonon$elm_word$Word$W(773529912),
																																						_1: {
																																							ctor: '::',
																																							_0: _ktonon$elm_word$Word$W(1294757372),
																																							_1: {
																																								ctor: '::',
																																								_0: _ktonon$elm_word$Word$W(1396182291),
																																								_1: {
																																									ctor: '::',
																																									_0: _ktonon$elm_word$Word$W(1695183700),
																																									_1: {
																																										ctor: '::',
																																										_0: _ktonon$elm_word$Word$W(1986661051),
																																										_1: {
																																											ctor: '::',
																																											_0: _ktonon$elm_word$Word$W(2177026350),
																																											_1: {
																																												ctor: '::',
																																												_0: _ktonon$elm_word$Word$W(2456956037),
																																												_1: {
																																													ctor: '::',
																																													_0: _ktonon$elm_word$Word$W(2730485921),
																																													_1: {
																																														ctor: '::',
																																														_0: _ktonon$elm_word$Word$W(2820302411),
																																														_1: {
																																															ctor: '::',
																																															_0: _ktonon$elm_word$Word$W(3259730800),
																																															_1: {
																																																ctor: '::',
																																																_0: _ktonon$elm_word$Word$W(3345764771),
																																																_1: {
																																																	ctor: '::',
																																																	_0: _ktonon$elm_word$Word$W(3516065817),
																																																	_1: {
																																																		ctor: '::',
																																																		_0: _ktonon$elm_word$Word$W(3600352804),
																																																		_1: {
																																																			ctor: '::',
																																																			_0: _ktonon$elm_word$Word$W(4094571909),
																																																			_1: {
																																																				ctor: '::',
																																																				_0: _ktonon$elm_word$Word$W(275423344),
																																																				_1: {
																																																					ctor: '::',
																																																					_0: _ktonon$elm_word$Word$W(430227734),
																																																					_1: {
																																																						ctor: '::',
																																																						_0: _ktonon$elm_word$Word$W(506948616),
																																																						_1: {
																																																							ctor: '::',
																																																							_0: _ktonon$elm_word$Word$W(659060556),
																																																							_1: {
																																																								ctor: '::',
																																																								_0: _ktonon$elm_word$Word$W(883997877),
																																																								_1: {
																																																									ctor: '::',
																																																									_0: _ktonon$elm_word$Word$W(958139571),
																																																									_1: {
																																																										ctor: '::',
																																																										_0: _ktonon$elm_word$Word$W(1322822218),
																																																										_1: {
																																																											ctor: '::',
																																																											_0: _ktonon$elm_word$Word$W(1537002063),
																																																											_1: {
																																																												ctor: '::',
																																																												_0: _ktonon$elm_word$Word$W(1747873779),
																																																												_1: {
																																																													ctor: '::',
																																																													_0: _ktonon$elm_word$Word$W(1955562222),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: _ktonon$elm_word$Word$W(2024104815),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: _ktonon$elm_word$Word$W(2227730452),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: _ktonon$elm_word$Word$W(2361852424),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: _ktonon$elm_word$Word$W(2428436474),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: _ktonon$elm_word$Word$W(2756734187),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: _ktonon$elm_word$Word$W(3204031479),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: _ktonon$elm_word$Word$W(3329325298),
																																																																				_1: {ctor: '[]'}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				};
			case 'SHA384':
				var _v2 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v2;
				continue roundConstants;
			case 'SHA512':
				return {
					ctor: '::',
					_0: A2(_ktonon$elm_word$Word$D, 1116352408, 3609767458),
					_1: {
						ctor: '::',
						_0: A2(_ktonon$elm_word$Word$D, 1899447441, 602891725),
						_1: {
							ctor: '::',
							_0: A2(_ktonon$elm_word$Word$D, 3049323471, 3964484399),
							_1: {
								ctor: '::',
								_0: A2(_ktonon$elm_word$Word$D, 3921009573, 2173295548),
								_1: {
									ctor: '::',
									_0: A2(_ktonon$elm_word$Word$D, 961987163, 4081628472),
									_1: {
										ctor: '::',
										_0: A2(_ktonon$elm_word$Word$D, 1508970993, 3053834265),
										_1: {
											ctor: '::',
											_0: A2(_ktonon$elm_word$Word$D, 2453635748, 2937671579),
											_1: {
												ctor: '::',
												_0: A2(_ktonon$elm_word$Word$D, 2870763221, 3664609560),
												_1: {
													ctor: '::',
													_0: A2(_ktonon$elm_word$Word$D, 3624381080, 2734883394),
													_1: {
														ctor: '::',
														_0: A2(_ktonon$elm_word$Word$D, 310598401, 1164996542),
														_1: {
															ctor: '::',
															_0: A2(_ktonon$elm_word$Word$D, 607225278, 1323610764),
															_1: {
																ctor: '::',
																_0: A2(_ktonon$elm_word$Word$D, 1426881987, 3590304994),
																_1: {
																	ctor: '::',
																	_0: A2(_ktonon$elm_word$Word$D, 1925078388, 4068182383),
																	_1: {
																		ctor: '::',
																		_0: A2(_ktonon$elm_word$Word$D, 2162078206, 991336113),
																		_1: {
																			ctor: '::',
																			_0: A2(_ktonon$elm_word$Word$D, 2614888103, 633803317),
																			_1: {
																				ctor: '::',
																				_0: A2(_ktonon$elm_word$Word$D, 3248222580, 3479774868),
																				_1: {
																					ctor: '::',
																					_0: A2(_ktonon$elm_word$Word$D, 3835390401, 2666613458),
																					_1: {
																						ctor: '::',
																						_0: A2(_ktonon$elm_word$Word$D, 4022224774, 944711139),
																						_1: {
																							ctor: '::',
																							_0: A2(_ktonon$elm_word$Word$D, 264347078, 2341262773),
																							_1: {
																								ctor: '::',
																								_0: A2(_ktonon$elm_word$Word$D, 604807628, 2007800933),
																								_1: {
																									ctor: '::',
																									_0: A2(_ktonon$elm_word$Word$D, 770255983, 1495990901),
																									_1: {
																										ctor: '::',
																										_0: A2(_ktonon$elm_word$Word$D, 1249150122, 1856431235),
																										_1: {
																											ctor: '::',
																											_0: A2(_ktonon$elm_word$Word$D, 1555081692, 3175218132),
																											_1: {
																												ctor: '::',
																												_0: A2(_ktonon$elm_word$Word$D, 1996064986, 2198950837),
																												_1: {
																													ctor: '::',
																													_0: A2(_ktonon$elm_word$Word$D, 2554220882, 3999719339),
																													_1: {
																														ctor: '::',
																														_0: A2(_ktonon$elm_word$Word$D, 2821834349, 766784016),
																														_1: {
																															ctor: '::',
																															_0: A2(_ktonon$elm_word$Word$D, 2952996808, 2566594879),
																															_1: {
																																ctor: '::',
																																_0: A2(_ktonon$elm_word$Word$D, 3210313671, 3203337956),
																																_1: {
																																	ctor: '::',
																																	_0: A2(_ktonon$elm_word$Word$D, 3336571891, 1034457026),
																																	_1: {
																																		ctor: '::',
																																		_0: A2(_ktonon$elm_word$Word$D, 3584528711, 2466948901),
																																		_1: {
																																			ctor: '::',
																																			_0: A2(_ktonon$elm_word$Word$D, 113926993, 3758326383),
																																			_1: {
																																				ctor: '::',
																																				_0: A2(_ktonon$elm_word$Word$D, 338241895, 168717936),
																																				_1: {
																																					ctor: '::',
																																					_0: A2(_ktonon$elm_word$Word$D, 666307205, 1188179964),
																																					_1: {
																																						ctor: '::',
																																						_0: A2(_ktonon$elm_word$Word$D, 773529912, 1546045734),
																																						_1: {
																																							ctor: '::',
																																							_0: A2(_ktonon$elm_word$Word$D, 1294757372, 1522805485),
																																							_1: {
																																								ctor: '::',
																																								_0: A2(_ktonon$elm_word$Word$D, 1396182291, 2643833823),
																																								_1: {
																																									ctor: '::',
																																									_0: A2(_ktonon$elm_word$Word$D, 1695183700, 2343527390),
																																									_1: {
																																										ctor: '::',
																																										_0: A2(_ktonon$elm_word$Word$D, 1986661051, 1014477480),
																																										_1: {
																																											ctor: '::',
																																											_0: A2(_ktonon$elm_word$Word$D, 2177026350, 1206759142),
																																											_1: {
																																												ctor: '::',
																																												_0: A2(_ktonon$elm_word$Word$D, 2456956037, 344077627),
																																												_1: {
																																													ctor: '::',
																																													_0: A2(_ktonon$elm_word$Word$D, 2730485921, 1290863460),
																																													_1: {
																																														ctor: '::',
																																														_0: A2(_ktonon$elm_word$Word$D, 2820302411, 3158454273),
																																														_1: {
																																															ctor: '::',
																																															_0: A2(_ktonon$elm_word$Word$D, 3259730800, 3505952657),
																																															_1: {
																																																ctor: '::',
																																																_0: A2(_ktonon$elm_word$Word$D, 3345764771, 106217008),
																																																_1: {
																																																	ctor: '::',
																																																	_0: A2(_ktonon$elm_word$Word$D, 3516065817, 3606008344),
																																																	_1: {
																																																		ctor: '::',
																																																		_0: A2(_ktonon$elm_word$Word$D, 3600352804, 1432725776),
																																																		_1: {
																																																			ctor: '::',
																																																			_0: A2(_ktonon$elm_word$Word$D, 4094571909, 1467031594),
																																																			_1: {
																																																				ctor: '::',
																																																				_0: A2(_ktonon$elm_word$Word$D, 275423344, 851169720),
																																																				_1: {
																																																					ctor: '::',
																																																					_0: A2(_ktonon$elm_word$Word$D, 430227734, 3100823752),
																																																					_1: {
																																																						ctor: '::',
																																																						_0: A2(_ktonon$elm_word$Word$D, 506948616, 1363258195),
																																																						_1: {
																																																							ctor: '::',
																																																							_0: A2(_ktonon$elm_word$Word$D, 659060556, 3750685593),
																																																							_1: {
																																																								ctor: '::',
																																																								_0: A2(_ktonon$elm_word$Word$D, 883997877, 3785050280),
																																																								_1: {
																																																									ctor: '::',
																																																									_0: A2(_ktonon$elm_word$Word$D, 958139571, 3318307427),
																																																									_1: {
																																																										ctor: '::',
																																																										_0: A2(_ktonon$elm_word$Word$D, 1322822218, 3812723403),
																																																										_1: {
																																																											ctor: '::',
																																																											_0: A2(_ktonon$elm_word$Word$D, 1537002063, 2003034995),
																																																											_1: {
																																																												ctor: '::',
																																																												_0: A2(_ktonon$elm_word$Word$D, 1747873779, 3602036899),
																																																												_1: {
																																																													ctor: '::',
																																																													_0: A2(_ktonon$elm_word$Word$D, 1955562222, 1575990012),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: A2(_ktonon$elm_word$Word$D, 2024104815, 1125592928),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: A2(_ktonon$elm_word$Word$D, 2227730452, 2716904306),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(_ktonon$elm_word$Word$D, 2361852424, 442776044),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(_ktonon$elm_word$Word$D, 2428436474, 593698344),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: A2(_ktonon$elm_word$Word$D, 2756734187, 3733110249),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: A2(_ktonon$elm_word$Word$D, 3204031479, 2999351573),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(_ktonon$elm_word$Word$D, 3329325298, 3815920427),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(_ktonon$elm_word$Word$D, 3391569614, 3928383900),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: A2(_ktonon$elm_word$Word$D, 3515267271, 566280711),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_ktonon$elm_word$Word$D, 3940187606, 3454069534),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_ktonon$elm_word$Word$D, 4118630271, 4000239992),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_ktonon$elm_word$Word$D, 116418474, 1914138554),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_ktonon$elm_word$Word$D, 174292421, 2731055270),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_ktonon$elm_word$Word$D, 289380356, 3203993006),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_ktonon$elm_word$Word$D, 460393269, 320620315),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_ktonon$elm_word$Word$D, 685471733, 587496836),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(_ktonon$elm_word$Word$D, 852142971, 1086792851),
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_ktonon$elm_word$Word$D, 1017036298, 365543100),
																																																																															_1: {
																																																																																ctor: '::',
																																																																																_0: A2(_ktonon$elm_word$Word$D, 1126000580, 2618297676),
																																																																																_1: {
																																																																																	ctor: '::',
																																																																																	_0: A2(_ktonon$elm_word$Word$D, 1288033470, 3409855158),
																																																																																	_1: {
																																																																																		ctor: '::',
																																																																																		_0: A2(_ktonon$elm_word$Word$D, 1501505948, 4234509866),
																																																																																		_1: {
																																																																																			ctor: '::',
																																																																																			_0: A2(_ktonon$elm_word$Word$D, 1607167915, 987167468),
																																																																																			_1: {
																																																																																				ctor: '::',
																																																																																				_0: A2(_ktonon$elm_word$Word$D, 1816402316, 1246189591),
																																																																																				_1: {ctor: '[]'}
																																																																																			}
																																																																																		}
																																																																																	}
																																																																																}
																																																																															}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				};
			case 'SHA512_224':
				var _v3 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v3;
				continue roundConstants;
			default:
				var _v4 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512;
				alg = _v4;
				continue roundConstants;
		}
	}
};
var _ktonon$elm_crypto$Crypto_SHA_Constants$initialHashValues = function (alg) {
	var _p1 = alg;
	switch (_p1.ctor) {
		case 'SHA224':
			return A8(
				_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
				_ktonon$elm_word$Word$W(3238371032),
				_ktonon$elm_word$Word$W(914150663),
				_ktonon$elm_word$Word$W(812702999),
				_ktonon$elm_word$Word$W(4144912697),
				_ktonon$elm_word$Word$W(4290775857),
				_ktonon$elm_word$Word$W(1750603025),
				_ktonon$elm_word$Word$W(1694076839),
				_ktonon$elm_word$Word$W(3204075428));
		case 'SHA256':
			return A8(
				_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
				_ktonon$elm_word$Word$W(1779033703),
				_ktonon$elm_word$Word$W(3144134277),
				_ktonon$elm_word$Word$W(1013904242),
				_ktonon$elm_word$Word$W(2773480762),
				_ktonon$elm_word$Word$W(1359893119),
				_ktonon$elm_word$Word$W(2600822924),
				_ktonon$elm_word$Word$W(528734635),
				_ktonon$elm_word$Word$W(1541459225));
		case 'SHA384':
			return A8(
				_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
				A2(_ktonon$elm_word$Word$D, 3418070365, 3238371032),
				A2(_ktonon$elm_word$Word$D, 1654270250, 914150663),
				A2(_ktonon$elm_word$Word$D, 2438529370, 812702999),
				A2(_ktonon$elm_word$Word$D, 355462360, 4144912697),
				A2(_ktonon$elm_word$Word$D, 1731405415, 4290775857),
				A2(_ktonon$elm_word$Word$D, 2394180231, 1750603025),
				A2(_ktonon$elm_word$Word$D, 3675008525, 1694076839),
				A2(_ktonon$elm_word$Word$D, 1203062813, 3204075428));
		case 'SHA512':
			return A8(
				_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
				A2(_ktonon$elm_word$Word$D, 1779033703, 4089235720),
				A2(_ktonon$elm_word$Word$D, 3144134277, 2227873595),
				A2(_ktonon$elm_word$Word$D, 1013904242, 4271175723),
				A2(_ktonon$elm_word$Word$D, 2773480762, 1595750129),
				A2(_ktonon$elm_word$Word$D, 1359893119, 2917565137),
				A2(_ktonon$elm_word$Word$D, 2600822924, 725511199),
				A2(_ktonon$elm_word$Word$D, 528734635, 4215389547),
				A2(_ktonon$elm_word$Word$D, 1541459225, 327033209));
		case 'SHA512_224':
			return A8(
				_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
				A2(_ktonon$elm_word$Word$D, 2352822216, 424955298),
				A2(_ktonon$elm_word$Word$D, 1944164710, 2312950998),
				A2(_ktonon$elm_word$Word$D, 502970286, 855612546),
				A2(_ktonon$elm_word$Word$D, 1738396948, 1479516111),
				A2(_ktonon$elm_word$Word$D, 258812777, 2077511080),
				A2(_ktonon$elm_word$Word$D, 2011393907, 79989058),
				A2(_ktonon$elm_word$Word$D, 1067287976, 1780299464),
				A2(_ktonon$elm_word$Word$D, 286451373, 2446758561));
		default:
			return A8(
				_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
				A2(_ktonon$elm_word$Word$D, 573645204, 4230739756),
				A2(_ktonon$elm_word$Word$D, 2673172387, 3360449730),
				A2(_ktonon$elm_word$Word$D, 596883563, 1867755857),
				A2(_ktonon$elm_word$Word$D, 2520282905, 1497426621),
				A2(_ktonon$elm_word$Word$D, 2519219938, 2827943907),
				A2(_ktonon$elm_word$Word$D, 3193839141, 1401305490),
				A2(_ktonon$elm_word$Word$D, 721525244, 746961066),
				A2(_ktonon$elm_word$Word$D, 246885852, 2177182882));
	}
};

var _ktonon$elm_crypto$Crypto_SHA_MessageSchedule$at = function (i) {
	return function (_p0) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_ktonon$elm_word$Word$Mismatch,
			A2(_elm_lang$core$Array$get, i, _p0));
	};
};
var _ktonon$elm_crypto$Crypto_SHA_MessageSchedule$sigma1 = F2(
	function (alg, word) {
		sigma1:
		while (true) {
			var _p1 = alg;
			switch (_p1.ctor) {
				case 'SHA224':
					var _v1 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256,
						_v2 = word;
					alg = _v1;
					word = _v2;
					continue sigma1;
				case 'SHA384':
					var _v3 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v4 = word;
					alg = _v3;
					word = _v4;
					continue sigma1;
				case 'SHA256':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$shiftRightZfBy, 10, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 19, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 17, word)));
				case 'SHA512':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$shiftRightZfBy, 6, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 61, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 19, word)));
				case 'SHA512_224':
					var _v5 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v6 = word;
					alg = _v5;
					word = _v6;
					continue sigma1;
				default:
					var _v7 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v8 = word;
					alg = _v7;
					word = _v8;
					continue sigma1;
			}
		}
	});
var _ktonon$elm_crypto$Crypto_SHA_MessageSchedule$sigma0 = F2(
	function (alg, word) {
		sigma0:
		while (true) {
			var _p2 = alg;
			switch (_p2.ctor) {
				case 'SHA224':
					var _v10 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256,
						_v11 = word;
					alg = _v10;
					word = _v11;
					continue sigma0;
				case 'SHA384':
					var _v12 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v13 = word;
					alg = _v12;
					word = _v13;
					continue sigma0;
				case 'SHA256':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$shiftRightZfBy, 3, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 18, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 7, word)));
				case 'SHA512':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$shiftRightZfBy, 7, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 8, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 1, word)));
				case 'SHA512_224':
					var _v14 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v15 = word;
					alg = _v14;
					word = _v15;
					continue sigma0;
				default:
					var _v16 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v17 = word;
					alg = _v16;
					word = _v17;
					continue sigma0;
			}
		}
	});
var _ktonon$elm_crypto$Crypto_SHA_MessageSchedule$nextPart = F3(
	function (alg, i, w) {
		var i2 = A2(_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$at, i - 2, w);
		var s1 = A2(_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$sigma1, alg, i2);
		var i15 = A2(_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$at, i - 15, w);
		var s0 = A2(_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$sigma0, alg, i15);
		return A2(
			_elm_lang$core$Array$append,
			w,
			_elm_lang$core$Array$fromList(
				{
					ctor: '::',
					_0: A2(
						_ktonon$elm_word$Word$add,
						s1,
						A2(
							_ktonon$elm_word$Word$add,
							A2(_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$at, i - 7, w),
							A2(
								_ktonon$elm_word$Word$add,
								s0,
								A2(_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$at, i - 16, w)))),
					_1: {ctor: '[]'}
				}));
	});
var _ktonon$elm_crypto$Crypto_SHA_MessageSchedule$fromChunk = F2(
	function (alg, chunk) {
		var n = _elm_lang$core$List$length(
			_ktonon$elm_crypto$Crypto_SHA_Constants$roundConstants(alg));
		return A3(
			_elm_lang$core$List$foldl,
			_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$nextPart(alg),
			_elm_lang$core$Array$fromList(chunk),
			A2(_elm_lang$core$List$range, 16, n - 1));
	});

var _ktonon$elm_crypto$Crypto_SHA_Process$sum0 = F2(
	function (alg, word) {
		sum0:
		while (true) {
			var _p0 = alg;
			switch (_p0.ctor) {
				case 'SHA224':
					var _v1 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256,
						_v2 = word;
					alg = _v1;
					word = _v2;
					continue sum0;
				case 'SHA384':
					var _v3 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v4 = word;
					alg = _v3;
					word = _v4;
					continue sum0;
				case 'SHA256':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$rotateRightBy, 22, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 13, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 2, word)));
				case 'SHA512':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$rotateRightBy, 39, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 34, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 28, word)));
				case 'SHA512_224':
					var _v5 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v6 = word;
					alg = _v5;
					word = _v6;
					continue sum0;
				default:
					var _v7 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v8 = word;
					alg = _v7;
					word = _v8;
					continue sum0;
			}
		}
	});
var _ktonon$elm_crypto$Crypto_SHA_Process$sum1 = F2(
	function (alg, word) {
		sum1:
		while (true) {
			var _p1 = alg;
			switch (_p1.ctor) {
				case 'SHA224':
					var _v10 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA256,
						_v11 = word;
					alg = _v10;
					word = _v11;
					continue sum1;
				case 'SHA384':
					var _v12 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v13 = word;
					alg = _v12;
					word = _v13;
					continue sum1;
				case 'SHA256':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$rotateRightBy, 25, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 11, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 6, word)));
				case 'SHA512':
					return A2(
						_ktonon$elm_word$Word$xor,
						A2(_ktonon$elm_word$Word$rotateRightBy, 41, word),
						A2(
							_ktonon$elm_word$Word$xor,
							A2(_ktonon$elm_word$Word$rotateRightBy, 18, word),
							A2(_ktonon$elm_word$Word$rotateRightBy, 14, word)));
				case 'SHA512_224':
					var _v14 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v15 = word;
					alg = _v14;
					word = _v15;
					continue sum1;
				default:
					var _v16 = _ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
						_v17 = word;
					alg = _v16;
					word = _v17;
					continue sum1;
			}
		}
	});
var _ktonon$elm_crypto$Crypto_SHA_Process$compress = F3(
	function (alg, _p3, _p2) {
		var _p4 = _p3;
		var _p5 = _p2;
		var _p11 = _p5.g;
		var _p10 = _p5.f;
		var _p9 = _p5.e;
		var _p8 = _p5.c;
		var _p7 = _p5.b;
		var _p6 = _p5.a;
		var maj = A2(
			_ktonon$elm_word$Word$xor,
			A2(_ktonon$elm_word$Word$and, _p7, _p8),
			A2(
				_ktonon$elm_word$Word$xor,
				A2(_ktonon$elm_word$Word$and, _p6, _p8),
				A2(_ktonon$elm_word$Word$and, _p6, _p7)));
		var s0 = A2(_ktonon$elm_crypto$Crypto_SHA_Process$sum0, alg, _p6);
		var temp2 = A2(_ktonon$elm_word$Word$add, s0, maj);
		var ch = A2(
			_ktonon$elm_word$Word$xor,
			A2(
				_ktonon$elm_word$Word$and,
				_p11,
				_ktonon$elm_word$Word$complement(_p9)),
			A2(_ktonon$elm_word$Word$and, _p9, _p10));
		var s1 = A2(_ktonon$elm_crypto$Crypto_SHA_Process$sum1, alg, _p9);
		var temp1 = A2(
			_ktonon$elm_word$Word$add,
			_p4._1,
			A2(
				_ktonon$elm_word$Word$add,
				_p4._0,
				A2(
					_ktonon$elm_word$Word$add,
					ch,
					A2(_ktonon$elm_word$Word$add, s1, _p5.h))));
		return A8(
			_ktonon$elm_crypto$Crypto_SHA_Types$WorkingVars,
			A2(_ktonon$elm_word$Word$add, temp1, temp2),
			_p6,
			_p7,
			_p8,
			A2(_ktonon$elm_word$Word$add, _p5.d, temp1),
			_p9,
			_p10,
			_p11);
	});
var _ktonon$elm_crypto$Crypto_SHA_Process$compressLoop = F3(
	function (alg, workingVars, messageSchedule) {
		return A3(
			_elm_lang$core$List$foldl,
			_ktonon$elm_crypto$Crypto_SHA_Process$compress(alg),
			workingVars,
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_ktonon$elm_crypto$Crypto_SHA_Constants$roundConstants(alg),
				_elm_lang$core$Array$toList(messageSchedule)));
	});
var _ktonon$elm_crypto$Crypto_SHA_Process$chunks_ = F3(
	function (alg, words, currentHash) {
		chunks_:
		while (true) {
			var _p12 = A2(_ktonon$elm_crypto$Crypto_SHA_Chunk$next, alg, words);
			if (_p12._0.ctor === 'Nothing') {
				return currentHash;
			} else {
				var _v21 = alg,
					_v22 = _p12._1,
					_v23 = A2(
					_ktonon$elm_crypto$Crypto_SHA_Types$addWorkingVars,
					currentHash,
					A3(
						_ktonon$elm_crypto$Crypto_SHA_Process$compressLoop,
						alg,
						currentHash,
						A2(_ktonon$elm_crypto$Crypto_SHA_MessageSchedule$fromChunk, alg, _p12._0._0)));
				alg = _v21;
				words = _v22;
				currentHash = _v23;
				continue chunks_;
			}
		}
	});
var _ktonon$elm_crypto$Crypto_SHA_Process$chunks = F2(
	function (alg, words) {
		return A2(
			_ktonon$elm_crypto$Crypto_SHA_Types$workingVarsToWords,
			alg,
			A3(
				_ktonon$elm_crypto$Crypto_SHA_Process$chunks_,
				alg,
				_elm_lang$core$Array$toList(words),
				_ktonon$elm_crypto$Crypto_SHA_Constants$initialHashValues(alg)));
	});

var _ktonon$elm_crypto$Crypto_SHA$digest = function (alg) {
	return function (_p0) {
		return A2(
			_ktonon$elm_crypto$Crypto_SHA_Process$chunks,
			alg,
			A2(
				_ktonon$elm_word$Word$fromBytes,
				_ktonon$elm_crypto$Crypto_SHA_Alg$wordSize(alg),
				A2(_ktonon$elm_crypto$Crypto_SHA_Preprocess$preprocess, alg, _p0)));
	};
};

var _ktonon$elm_word$Word_Hex$toInt32 = function (_p0) {
	var _p1 = _p0;
	return ((((((_p1._7 + (_p1._6 * Math.pow(2, 4))) + (_p1._5 * Math.pow(2, 8))) + (_p1._4 * Math.pow(2, 12))) + (_p1._3 * Math.pow(2, 16))) + (_p1._2 * Math.pow(2, 20))) + (_p1._1 * Math.pow(2, 24))) + (_p1._0 * Math.pow(2, 28));
};
var _ktonon$elm_word$Word_Hex$fromArray = function (toHex) {
	return A2(
		_elm_lang$core$Array$foldl,
		F2(
			function (val, acc) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					acc,
					toHex(val));
			}),
		'');
};
var _ktonon$elm_word$Word_Hex$fromList = function (toHex) {
	return A2(
		_elm_lang$core$List$foldl,
		F2(
			function (val, acc) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					acc,
					toHex(val));
			}),
		'');
};
var _ktonon$elm_word$Word_Hex$hexFromChar = function ($char) {
	var x = _elm_lang$core$Char$toCode($char);
	return (_elm_lang$core$Native_Utils.cmp(x, 65) < 0) ? (x - 48) : ((_elm_lang$core$Native_Utils.cmp(x, 70) > 0) ? (x - 87) : (x - 55));
};
var _ktonon$elm_word$Word_Hex$accHex16 = F2(
	function (chars, acc) {
		accHex16:
		while (true) {
			var _p2 = chars;
			if (_p2.ctor === '::') {
				if (((((((((((((((_p2._1.ctor === '::') && (_p2._1._1.ctor === '::')) && (_p2._1._1._1.ctor === '::')) && (_p2._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1._1._1._1._1._1._1.ctor === '::')) && (_p2._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1.ctor === '::')) {
					var _v2 = _p2._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1,
						_v3 = A2(
						_elm_lang$core$Array$push,
						A2(
							_ktonon$elm_word$Word$D,
							_ktonon$elm_word$Word_Hex$toInt32(
								{
									ctor: '_Tuple8',
									_0: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._0),
									_1: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._0),
									_2: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._0),
									_3: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._0),
									_4: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._0),
									_5: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._0),
									_6: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._0),
									_7: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._0)
								}),
							_ktonon$elm_word$Word_Hex$toInt32(
								{
									ctor: '_Tuple8',
									_0: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._0),
									_1: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._1._0),
									_2: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._1._1._0),
									_3: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._1._1._1._0),
									_4: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._1._1._1._1._0),
									_5: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._1._1._1._1._1._0),
									_6: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._1._1._1._1._1._1._0),
									_7: _ktonon$elm_word$Word_Hex$hexFromChar(_p2._1._1._1._1._1._1._1._1._1._1._1._1._1._1._1._0)
								})),
						acc);
					chars = _v2;
					acc = _v3;
					continue accHex16;
				} else {
					return _elm_lang$core$Array$empty;
				}
			} else {
				return acc;
			}
		}
	});
var _ktonon$elm_word$Word_Hex$accHex8 = F2(
	function (chars, acc) {
		accHex8:
		while (true) {
			var _p3 = chars;
			if (_p3.ctor === '::') {
				if (((((((_p3._1.ctor === '::') && (_p3._1._1.ctor === '::')) && (_p3._1._1._1.ctor === '::')) && (_p3._1._1._1._1.ctor === '::')) && (_p3._1._1._1._1._1.ctor === '::')) && (_p3._1._1._1._1._1._1.ctor === '::')) && (_p3._1._1._1._1._1._1._1.ctor === '::')) {
					var _v5 = _p3._1._1._1._1._1._1._1._1,
						_v6 = A2(
						_elm_lang$core$Array$push,
						_ktonon$elm_word$Word$W(
							_ktonon$elm_word$Word_Hex$toInt32(
								{
									ctor: '_Tuple8',
									_0: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._0),
									_1: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._1._0),
									_2: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._1._1._0),
									_3: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._1._1._1._0),
									_4: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._1._1._1._1._0),
									_5: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._1._1._1._1._1._0),
									_6: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._1._1._1._1._1._1._0),
									_7: _ktonon$elm_word$Word_Hex$hexFromChar(_p3._1._1._1._1._1._1._1._0)
								})),
						acc);
					chars = _v5;
					acc = _v6;
					continue accHex8;
				} else {
					return _elm_lang$core$Array$empty;
				}
			} else {
				return acc;
			}
		}
	});
var _ktonon$elm_word$Word_Hex$accHex2 = F2(
	function (chars, acc) {
		accHex2:
		while (true) {
			var _p4 = chars;
			if (_p4.ctor === '::') {
				if (_p4._1.ctor === '::') {
					var _p5 = {
						ctor: '_Tuple2',
						_0: _ktonon$elm_word$Word_Hex$hexFromChar(_p4._0),
						_1: _ktonon$elm_word$Word_Hex$hexFromChar(_p4._1._0)
					};
					var x1 = _p5._0;
					var x0 = _p5._1;
					var _v8 = _p4._1._1,
						_v9 = function ($byte) {
						return A2(
							_elm_lang$core$List$append,
							acc,
							{
								ctor: '::',
								_0: $byte,
								_1: {ctor: '[]'}
							});
					}(
						(x1 * Math.pow(2, 4)) + x0);
					chars = _v8;
					acc = _v9;
					continue accHex2;
				} else {
					return {ctor: '[]'};
				}
			} else {
				return acc;
			}
		}
	});
var _ktonon$elm_word$Word_Hex$toWordArray = F2(
	function (wordSize, hex) {
		var _p6 = wordSize;
		if (_p6.ctor === 'Bit32') {
			return A2(
				_ktonon$elm_word$Word_Hex$accHex8,
				_elm_lang$core$String$toList(hex),
				_elm_lang$core$Array$empty);
		} else {
			return A2(
				_ktonon$elm_word$Word_Hex$accHex16,
				_elm_lang$core$String$toList(hex),
				_elm_lang$core$Array$empty);
		}
	});
var _ktonon$elm_word$Word_Hex$toIntList = function (hex) {
	return A2(
		_ktonon$elm_word$Word_Hex$accHex2,
		_elm_lang$core$String$toList(hex),
		{ctor: '[]'});
};
var _ktonon$elm_word$Word_Hex$toByteList = function (hex) {
	return A2(
		_ktonon$elm_word$Word_Hex$accHex2,
		_elm_lang$core$String$toList(hex),
		{ctor: '[]'});
};
var _ktonon$elm_word$Word_Hex$fromIntAccumulator = function (x) {
	return _elm_lang$core$String$cons(
		_elm_lang$core$Char$fromCode(
			(_elm_lang$core$Native_Utils.cmp(x, 10) < 0) ? (x + 48) : ((x + 97) - 10)));
};
var _ktonon$elm_word$Word_Hex$fromInt = F2(
	function (charCount, value) {
		return A3(
			_elm_lang$core$List$foldl,
			function (i) {
				return _ktonon$elm_word$Word_Hex$fromIntAccumulator(
					15 & (value >>> (i * Math.pow(2, 2))));
			},
			'',
			A2(_elm_lang$core$List$range, 0, charCount - 1));
	});
var _ktonon$elm_word$Word_Hex$fromByte = _ktonon$elm_word$Word_Hex$fromInt(2);
var _ktonon$elm_word$Word_Hex$fromByteList = _ktonon$elm_word$Word_Hex$fromList(_ktonon$elm_word$Word_Hex$fromByte);
var _ktonon$elm_word$Word_Hex$fromWord = function (word) {
	var _p7 = word;
	switch (_p7.ctor) {
		case 'W':
			return A2(_ktonon$elm_word$Word_Hex$fromInt, 8, _p7._0);
		case 'D':
			return A2(
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				A2(_ktonon$elm_word$Word_Hex$fromInt, 8, _p7._0),
				A2(_ktonon$elm_word$Word_Hex$fromInt, 8, _p7._1));
		default:
			return 'M';
	}
};
var _ktonon$elm_word$Word_Hex$fromWordArray = _ktonon$elm_word$Word_Hex$fromArray(_ktonon$elm_word$Word_Hex$fromWord);

var _ktonon$elm_crypto$Crypto_Hash$sha512_256 = function (message) {
	return _ktonon$elm_word$Word_Hex$fromWordArray(
		A2(
			_ktonon$elm_crypto$Crypto_SHA$digest,
			_ktonon$elm_crypto$Crypto_SHA_Alg$SHA512_256,
			_ktonon$elm_word$Word_Bytes$fromUTF8(message)));
};
var _ktonon$elm_crypto$Crypto_Hash$sha512_224 = function (message) {
	return _ktonon$elm_word$Word_Hex$fromWordArray(
		A2(
			_ktonon$elm_crypto$Crypto_SHA$digest,
			_ktonon$elm_crypto$Crypto_SHA_Alg$SHA512_224,
			_ktonon$elm_word$Word_Bytes$fromUTF8(message)));
};
var _ktonon$elm_crypto$Crypto_Hash$sha512 = function (message) {
	return _ktonon$elm_word$Word_Hex$fromWordArray(
		A2(
			_ktonon$elm_crypto$Crypto_SHA$digest,
			_ktonon$elm_crypto$Crypto_SHA_Alg$SHA512,
			_ktonon$elm_word$Word_Bytes$fromUTF8(message)));
};
var _ktonon$elm_crypto$Crypto_Hash$sha384 = function (message) {
	return _ktonon$elm_word$Word_Hex$fromWordArray(
		A2(
			_ktonon$elm_crypto$Crypto_SHA$digest,
			_ktonon$elm_crypto$Crypto_SHA_Alg$SHA384,
			_ktonon$elm_word$Word_Bytes$fromUTF8(message)));
};
var _ktonon$elm_crypto$Crypto_Hash$sha256 = function (message) {
	return _ktonon$elm_word$Word_Hex$fromWordArray(
		A2(
			_ktonon$elm_crypto$Crypto_SHA$digest,
			_ktonon$elm_crypto$Crypto_SHA_Alg$SHA256,
			_ktonon$elm_word$Word_Bytes$fromUTF8(message)));
};
var _ktonon$elm_crypto$Crypto_Hash$sha224 = function (message) {
	return _ktonon$elm_word$Word_Hex$fromWordArray(
		A2(
			_ktonon$elm_crypto$Crypto_SHA$digest,
			_ktonon$elm_crypto$Crypto_SHA_Alg$SHA224,
			_ktonon$elm_word$Word_Bytes$fromUTF8(message)));
};

var _rtfeldman$hex$Hex$toString = function (num) {
	return _elm_lang$core$String$fromList(
		(_elm_lang$core$Native_Utils.cmp(num, 0) < 0) ? {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: A2(
				_rtfeldman$hex$Hex$unsafePositiveToDigits,
				{ctor: '[]'},
				_elm_lang$core$Basics$negate(num))
		} : A2(
			_rtfeldman$hex$Hex$unsafePositiveToDigits,
			{ctor: '[]'},
			num));
};
var _rtfeldman$hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(num, 16) < 0) {
				return {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(num),
					_1: digits
				};
			} else {
				var _v0 = {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(
						A2(_elm_lang$core$Basics_ops['%'], num, 16)),
					_1: digits
				},
					_v1 = (num / 16) | 0;
				digits = _v0;
				num = _v1;
				continue unsafePositiveToDigits;
			}
		}
	});
var _rtfeldman$hex$Hex$unsafeToDigit = function (num) {
	var _p0 = num;
	switch (_p0) {
		case 0:
			return _elm_lang$core$Native_Utils.chr('0');
		case 1:
			return _elm_lang$core$Native_Utils.chr('1');
		case 2:
			return _elm_lang$core$Native_Utils.chr('2');
		case 3:
			return _elm_lang$core$Native_Utils.chr('3');
		case 4:
			return _elm_lang$core$Native_Utils.chr('4');
		case 5:
			return _elm_lang$core$Native_Utils.chr('5');
		case 6:
			return _elm_lang$core$Native_Utils.chr('6');
		case 7:
			return _elm_lang$core$Native_Utils.chr('7');
		case 8:
			return _elm_lang$core$Native_Utils.chr('8');
		case 9:
			return _elm_lang$core$Native_Utils.chr('9');
		case 10:
			return _elm_lang$core$Native_Utils.chr('a');
		case 11:
			return _elm_lang$core$Native_Utils.chr('b');
		case 12:
			return _elm_lang$core$Native_Utils.chr('c');
		case 13:
			return _elm_lang$core$Native_Utils.chr('d');
		case 14:
			return _elm_lang$core$Native_Utils.chr('e');
		case 15:
			return _elm_lang$core$Native_Utils.chr('f');
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Hex',
				{
					start: {line: 138, column: 5},
					end: {line: 188, column: 84}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Tried to convert ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$hex$Hex$toString(num),
						' to hexadecimal.')));
	}
};
var _rtfeldman$hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		var _p2 = chars;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Result$Ok(accumulated);
		} else {
			var recurse = function (additional) {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					position - 1,
					_p2._1,
					accumulated + (additional * Math.pow(16, position)));
			};
			var _p3 = _p2._0;
			switch (_p3.valueOf()) {
				case '0':
					return recurse(0);
				case '1':
					return recurse(1);
				case '2':
					return recurse(2);
				case '3':
					return recurse(3);
				case '4':
					return recurse(4);
				case '5':
					return recurse(5);
				case '6':
					return recurse(6);
				case '7':
					return recurse(7);
				case '8':
					return recurse(8);
				case '9':
					return recurse(9);
				case 'a':
					return recurse(10);
				case 'b':
					return recurse(11);
				case 'c':
					return recurse(12);
				case 'd':
					return recurse(13);
				case 'e':
					return recurse(14);
				case 'f':
					return recurse(15);
				default:
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p3),
							' is not a valid hexadecimal character.'));
			}
		}
	});
var _rtfeldman$hex$Hex$fromString = function (str) {
	if (_elm_lang$core$String$isEmpty(str)) {
		return _elm_lang$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var formatError = function (err) {
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(str),
					_1: {
						ctor: '::',
						_0: 'is not a valid hexadecimal string because',
						_1: {
							ctor: '::',
							_0: err,
							_1: {ctor: '[]'}
						}
					}
				});
		};
		var result = function () {
			if (A2(_elm_lang$core$String$startsWith, '-', str)) {
				var list = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					_elm_lang$core$List$tail(
						_elm_lang$core$String$toList(str)));
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Basics$negate,
					A3(
						_rtfeldman$hex$Hex$fromStringHelp,
						_elm_lang$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					_elm_lang$core$String$length(str) - 1,
					_elm_lang$core$String$toList(str),
					0);
			}
		}();
		return A2(_elm_lang$core$Result$mapError, formatError, result);
	}
};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _billstclair$elm_recovered_utf8$Recovered_UTF8$getKeyCode = F2(
	function (i, xs) {
		var _p0 = A2(_elm_lang$core$Array$get, i, xs);
		if (_p0.ctor === 'Just') {
			return _elm_lang$core$Char$toCode(_p0._0);
		} else {
			return 0;
		}
	});
var _billstclair$elm_recovered_utf8$Recovered_UTF8$strToCharArray = function (_p1) {
	return _elm_lang$core$Array$fromList(
		_elm_lang$core$String$toList(_p1));
};
var _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify = function (_p2) {
	return _elm_lang$core$String$fromChar(
		_elm_lang$core$Char$fromCode(_p2));
};
var _billstclair$elm_recovered_utf8$Recovered_UTF8$threeSingleToMulti = function (three) {
	var xs = _billstclair$elm_recovered_utf8$Recovered_UTF8$strToCharArray(three);
	var t1 = (15 & A2(_billstclair$elm_recovered_utf8$Recovered_UTF8$getKeyCode, 0, xs)) << 12;
	var t2 = (63 & A2(_billstclair$elm_recovered_utf8$Recovered_UTF8$getKeyCode, 1, xs)) << 6;
	var t3 = 63 & A2(_billstclair$elm_recovered_utf8$Recovered_UTF8$getKeyCode, 2, xs);
	return _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify(t3 | (t2 | t1));
};
var _billstclair$elm_recovered_utf8$Recovered_UTF8$twoSingleToMulti = function (two) {
	var xs = _billstclair$elm_recovered_utf8$Recovered_UTF8$strToCharArray(two);
	var t1 = (31 & A2(_billstclair$elm_recovered_utf8$Recovered_UTF8$getKeyCode, 0, xs)) << 6;
	var t2 = 63 & A2(_billstclair$elm_recovered_utf8$Recovered_UTF8$getKeyCode, 1, xs);
	return _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify(t2 | t1);
};
var _billstclair$elm_recovered_utf8$Recovered_UTF8$twoMultiToSingle = function (c) {
	var cc = _elm_lang$core$Char$toCode(c);
	var t1 = _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify(192 | (cc >> 6));
	var t2 = _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify(128 | (63 & cc));
	return A2(_elm_lang$core$Basics_ops['++'], t1, t2);
};
var _billstclair$elm_recovered_utf8$Recovered_UTF8$threeMultiToSingle = function (c) {
	var cc = _elm_lang$core$Char$toCode(c);
	var t1 = _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify(224 | (cc >> 12));
	var t2 = _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify(128 | (63 & (cc >> 6)));
	var t3 = _billstclair$elm_recovered_utf8$Recovered_UTF8$stringify(128 | (63 & cc));
	return A2(
		_elm_lang$core$Basics_ops['++'],
		t1,
		A2(_elm_lang$core$Basics_ops['++'], t2, t3));
};
var _billstclair$elm_recovered_utf8$Recovered_UTF8$unescape = F3(
	function (pattern, replacement, str) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex(pattern),
			function (_p3) {
				var _p4 = _p3;
				return A3(
					_elm_lang$core$List$foldl,
					F2(
						function (c, a) {
							return A2(_elm_lang$core$Basics_ops['++'], a, c);
						}),
					'',
					A2(
						_elm_lang$core$List$map,
						replacement,
						_elm_lang$core$String$toList(_p4.match)));
			},
			str);
	});
var _billstclair$elm_recovered_utf8$Recovered_UTF8$escape = F3(
	function (pattern, replacement, str) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex(pattern),
			function (_p5) {
				var _p6 = _p5;
				return replacement(_p6.match);
			},
			str);
	});
var _billstclair$elm_recovered_utf8$Recovered_UTF8$toSingleByte = function (str) {
	var three = '[\\u0800-\\uffff]';
	var two = '[\\u0080-\\u07ff]';
	return A3(
		_billstclair$elm_recovered_utf8$Recovered_UTF8$unescape,
		three,
		_billstclair$elm_recovered_utf8$Recovered_UTF8$threeMultiToSingle,
		A3(_billstclair$elm_recovered_utf8$Recovered_UTF8$unescape, two, _billstclair$elm_recovered_utf8$Recovered_UTF8$twoMultiToSingle, str));
};
var _billstclair$elm_recovered_utf8$Recovered_UTF8$toMultiByte = function (str) {
	var two = '[\\u00c0-\\u00df][\\u0080-\\u00bf]';
	var three = '[\\u00e0-\\u00ef][\\u0080-\\u00bf][\\u0080-\\u00bf]';
	return A3(
		_billstclair$elm_recovered_utf8$Recovered_UTF8$escape,
		two,
		_billstclair$elm_recovered_utf8$Recovered_UTF8$twoSingleToMulti,
		A3(_billstclair$elm_recovered_utf8$Recovered_UTF8$escape, three, _billstclair$elm_recovered_utf8$Recovered_UTF8$threeSingleToMulti, str));
};

var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$base64Decoder = function (string) {
	return _waratuman$elm_coder$Base64$decode(
		_elm_lang$core$String$concat(
			_elm_lang$core$String$words(string)));
};
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$splitLines = F2(
	function (lineLength, string) {
		if (_elm_lang$core$Native_Utils.cmp(lineLength, 0) < 1) {
			return string;
		} else {
			var loop = F2(
				function (tail, res) {
					loop:
					while (true) {
						if (_elm_lang$core$Native_Utils.cmp(
							_elm_lang$core$String$length(tail),
							lineLength) < 1) {
							return A2(
								_elm_lang$core$String$join,
								'\n',
								_elm_lang$core$List$reverse(
									{ctor: '::', _0: tail, _1: res}));
						} else {
							var _v0 = A2(_elm_lang$core$String$dropLeft, lineLength, tail),
								_v1 = {
								ctor: '::',
								_0: A2(_elm_lang$core$String$left, lineLength, tail),
								_1: res
							};
							tail = _v0;
							res = _v1;
							continue loop;
						}
					}
				});
			return A2(
				loop,
				string,
				{ctor: '[]'});
		}
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$base64Encoder = F2(
	function (lineLength, list) {
		return A2(
			_billstclair$elm_crypto_string$Crypto_Strings_Encoding$splitLines,
			lineLength,
			_waratuman$elm_coder$Base64$encode(list));
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$base64Encoding = function (lineLength) {
	return {
		name: 'Base64 Encoding',
		encoder: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$base64Encoder(lineLength),
		decoder: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$base64Decoder
	};
};
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$hexDecoder = F2(
	function (groupSize, string) {
		if (!_elm_lang$core$Native_Utils.eq(
			A2(
				_elm_lang$core$Basics_ops['%'],
				_elm_lang$core$String$length(string),
				groupSize),
			0)) {
			return _elm_lang$core$Result$Err(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'String length not a multiple of ',
					_elm_lang$core$Basics$toString(groupSize)));
		} else {
			var res = A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Result$withDefault(-1),
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$hex$Hex$fromString,
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$String$toLower,
						A2(
							_elm_lang$core$List$map,
							_elm_lang$core$String$fromList,
							A2(
								_elm_community$list_extra$List_Extra$greedyGroupsOf,
								groupSize,
								_elm_lang$core$String$toList(string))))));
			return A2(_elm_lang$core$List$member, -1, res) ? _elm_lang$core$Result$Err(
				A2(_elm_lang$core$Basics_ops['++'], 'Invalid hexadecimal string: ', string)) : _elm_lang$core$Result$Ok(res);
		}
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$hexEncoder = function (list) {
	return _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$map,
			A2(
				_elm_lang$core$String$padLeft,
				2,
				_elm_lang$core$Native_Utils.chr('0')),
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$String$toUpper,
				A2(_elm_lang$core$List$map, _rtfeldman$hex$Hex$toString, list))));
};
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$hexEncoding = {
	name: 'Hex Encoding',
	encoder: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$hexEncoder,
	decoder: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$hexDecoder(2)
};
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$plainTextDecoder = function (list) {
	return _billstclair$elm_recovered_utf8$Recovered_UTF8$toMultiByte(
		_elm_lang$core$String$fromList(
			A2(_elm_lang$core$List$map, _elm_lang$core$Char$fromCode, list)));
};
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$plainTextEncoder = function (string) {
	return A2(
		_elm_lang$core$List$map,
		_elm_lang$core$Char$toCode,
		_elm_lang$core$String$toList(
			_billstclair$elm_recovered_utf8$Recovered_UTF8$toSingleByte(string)));
};
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$isOdd = function (x) {
	return !_elm_lang$core$Native_Utils.eq(x, ((x / 2) | 0) * 2);
};
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$fold = F2(
	function (size, list) {
		fold:
		while (true) {
			var len = _elm_lang$core$List$length(list);
			if (_elm_lang$core$Native_Utils.eq(len, size)) {
				return list;
			} else {
				if (_elm_lang$core$Native_Utils.cmp(len, size) < 0) {
					var _v2 = size,
						_v3 = A2(_elm_lang$core$List$append, list, list);
					size = _v2;
					list = _v3;
					continue fold;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(len, size * 2) > 0) {
						var ln = ((len + 1) / 2) | 0;
						var l = _billstclair$elm_crypto_string$Crypto_Strings_Encoding$isOdd(len) ? {ctor: '::', _0: 0, _1: list} : list;
						var _v4 = size,
							_v5 = A3(
							_elm_lang$core$List$map2,
							_elm_lang$core$Bitwise$xor,
							A2(_elm_lang$core$List$take, ln, l),
							A2(_elm_lang$core$List$drop, ln, l));
						size = _v4;
						list = _v5;
						continue fold;
					} else {
						var diff = len - size;
						var r = A2(_elm_lang$core$List$drop, size, list);
						var right = A2(
							_elm_lang$core$List$append,
							r,
							A2(_elm_lang$core$List$repeat, diff, 0));
						var left = A2(_elm_lang$core$List$take, size, list);
						return A3(_elm_lang$core$List$map2, _elm_lang$core$Bitwise$xor, left, right);
					}
				}
			}
		}
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$foldedSha256KeyEncoder = F2(
	function (blockSize, string) {
		return _elm_lang$core$Array$fromList(
			A2(
				_billstclair$elm_crypto_string$Crypto_Strings_Encoding$fold,
				blockSize,
				A2(
					_elm_lang$core$Result$withDefault,
					{
						ctor: '::',
						_0: 102,
						_1: {
							ctor: '::',
							_0: 117,
							_1: {
								ctor: '::',
								_0: 99,
								_1: {
									ctor: '::',
									_0: 107,
									_1: {
										ctor: '::',
										_0: 32,
										_1: {
											ctor: '::',
											_0: 109,
											_1: {
												ctor: '::',
												_0: 101,
												_1: {
													ctor: '::',
													_0: 32,
													_1: {
														ctor: '::',
														_0: 104,
														_1: {
															ctor: '::',
															_0: 97,
															_1: {
																ctor: '::',
																_0: 114,
																_1: {
																	ctor: '::',
																	_0: 100,
																	_1: {
																		ctor: '::',
																		_0: 101,
																		_1: {
																			ctor: '::',
																			_0: 114,
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					A2(
						_billstclair$elm_crypto_string$Crypto_Strings_Encoding$hexDecoder,
						2,
						_ktonon$elm_crypto$Crypto_Hash$sha256(string)))));
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Encoding$foldedSha256KeyEncoding = {name: 'Folded SHA256 Key Encoding', encoder: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$foldedSha256KeyEncoder};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Random$onSelfMsg = F3(
	function (_p1, _p0, seed) {
		return _elm_lang$core$Task$succeed(seed);
	});
var _elm_lang$core$Random$magicNum8 = 2147483562;
var _elm_lang$core$Random$range = function (_p2) {
	return {ctor: '_Tuple2', _0: 0, _1: _elm_lang$core$Random$magicNum8};
};
var _elm_lang$core$Random$magicNum7 = 2147483399;
var _elm_lang$core$Random$magicNum6 = 2147483563;
var _elm_lang$core$Random$magicNum5 = 3791;
var _elm_lang$core$Random$magicNum4 = 40692;
var _elm_lang$core$Random$magicNum3 = 52774;
var _elm_lang$core$Random$magicNum2 = 12211;
var _elm_lang$core$Random$magicNum1 = 53668;
var _elm_lang$core$Random$magicNum0 = 40014;
var _elm_lang$core$Random$step = F2(
	function (_p3, seed) {
		var _p4 = _p3;
		return _p4._0(seed);
	});
var _elm_lang$core$Random$onEffects = F3(
	function (router, commands, seed) {
		var _p5 = commands;
		if (_p5.ctor === '[]') {
			return _elm_lang$core$Task$succeed(seed);
		} else {
			var _p6 = A2(_elm_lang$core$Random$step, _p5._0._0, seed);
			var value = _p6._0;
			var newSeed = _p6._1;
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p7) {
					return A3(_elm_lang$core$Random$onEffects, router, _p5._1, newSeed);
				},
				A2(_elm_lang$core$Platform$sendToApp, router, value));
		}
	});
var _elm_lang$core$Random$listHelp = F4(
	function (list, n, generate, seed) {
		listHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 1) < 0) {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$reverse(list),
					_1: seed
				};
			} else {
				var _p8 = generate(seed);
				var value = _p8._0;
				var newSeed = _p8._1;
				var _v2 = {ctor: '::', _0: value, _1: list},
					_v3 = n - 1,
					_v4 = generate,
					_v5 = newSeed;
				list = _v2;
				n = _v3;
				generate = _v4;
				seed = _v5;
				continue listHelp;
			}
		}
	});
var _elm_lang$core$Random$minInt = -2147483648;
var _elm_lang$core$Random$maxInt = 2147483647;
var _elm_lang$core$Random$iLogBase = F2(
	function (b, i) {
		return (_elm_lang$core$Native_Utils.cmp(i, b) < 0) ? 1 : (1 + A2(_elm_lang$core$Random$iLogBase, b, (i / b) | 0));
	});
var _elm_lang$core$Random$command = _elm_lang$core$Native_Platform.leaf('Random');
var _elm_lang$core$Random$Generator = function (a) {
	return {ctor: 'Generator', _0: a};
};
var _elm_lang$core$Random$list = F2(
	function (n, _p9) {
		var _p10 = _p9;
		return _elm_lang$core$Random$Generator(
			function (seed) {
				return A4(
					_elm_lang$core$Random$listHelp,
					{ctor: '[]'},
					n,
					_p10._0,
					seed);
			});
	});
var _elm_lang$core$Random$map = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p13 = _p12._0(seed0);
				var a = _p13._0;
				var seed1 = _p13._1;
				return {
					ctor: '_Tuple2',
					_0: func(a),
					_1: seed1
				};
			});
	});
var _elm_lang$core$Random$map2 = F3(
	function (func, _p15, _p14) {
		var _p16 = _p15;
		var _p17 = _p14;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p18 = _p16._0(seed0);
				var a = _p18._0;
				var seed1 = _p18._1;
				var _p19 = _p17._0(seed1);
				var b = _p19._0;
				var seed2 = _p19._1;
				return {
					ctor: '_Tuple2',
					_0: A2(func, a, b),
					_1: seed2
				};
			});
	});
var _elm_lang$core$Random$pair = F2(
	function (genA, genB) {
		return A3(
			_elm_lang$core$Random$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			genA,
			genB);
	});
var _elm_lang$core$Random$map3 = F4(
	function (func, _p22, _p21, _p20) {
		var _p23 = _p22;
		var _p24 = _p21;
		var _p25 = _p20;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p26 = _p23._0(seed0);
				var a = _p26._0;
				var seed1 = _p26._1;
				var _p27 = _p24._0(seed1);
				var b = _p27._0;
				var seed2 = _p27._1;
				var _p28 = _p25._0(seed2);
				var c = _p28._0;
				var seed3 = _p28._1;
				return {
					ctor: '_Tuple2',
					_0: A3(func, a, b, c),
					_1: seed3
				};
			});
	});
var _elm_lang$core$Random$map4 = F5(
	function (func, _p32, _p31, _p30, _p29) {
		var _p33 = _p32;
		var _p34 = _p31;
		var _p35 = _p30;
		var _p36 = _p29;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p37 = _p33._0(seed0);
				var a = _p37._0;
				var seed1 = _p37._1;
				var _p38 = _p34._0(seed1);
				var b = _p38._0;
				var seed2 = _p38._1;
				var _p39 = _p35._0(seed2);
				var c = _p39._0;
				var seed3 = _p39._1;
				var _p40 = _p36._0(seed3);
				var d = _p40._0;
				var seed4 = _p40._1;
				return {
					ctor: '_Tuple2',
					_0: A4(func, a, b, c, d),
					_1: seed4
				};
			});
	});
var _elm_lang$core$Random$map5 = F6(
	function (func, _p45, _p44, _p43, _p42, _p41) {
		var _p46 = _p45;
		var _p47 = _p44;
		var _p48 = _p43;
		var _p49 = _p42;
		var _p50 = _p41;
		return _elm_lang$core$Random$Generator(
			function (seed0) {
				var _p51 = _p46._0(seed0);
				var a = _p51._0;
				var seed1 = _p51._1;
				var _p52 = _p47._0(seed1);
				var b = _p52._0;
				var seed2 = _p52._1;
				var _p53 = _p48._0(seed2);
				var c = _p53._0;
				var seed3 = _p53._1;
				var _p54 = _p49._0(seed3);
				var d = _p54._0;
				var seed4 = _p54._1;
				var _p55 = _p50._0(seed4);
				var e = _p55._0;
				var seed5 = _p55._1;
				return {
					ctor: '_Tuple2',
					_0: A5(func, a, b, c, d, e),
					_1: seed5
				};
			});
	});
var _elm_lang$core$Random$andThen = F2(
	function (callback, _p56) {
		var _p57 = _p56;
		return _elm_lang$core$Random$Generator(
			function (seed) {
				var _p58 = _p57._0(seed);
				var result = _p58._0;
				var newSeed = _p58._1;
				var _p59 = callback(result);
				var genB = _p59._0;
				return genB(newSeed);
			});
	});
var _elm_lang$core$Random$State = F2(
	function (a, b) {
		return {ctor: 'State', _0: a, _1: b};
	});
var _elm_lang$core$Random$initState = function (seed) {
	var s = A2(_elm_lang$core$Basics$max, seed, 0 - seed);
	var q = (s / (_elm_lang$core$Random$magicNum6 - 1)) | 0;
	var s2 = A2(_elm_lang$core$Basics_ops['%'], q, _elm_lang$core$Random$magicNum7 - 1);
	var s1 = A2(_elm_lang$core$Basics_ops['%'], s, _elm_lang$core$Random$magicNum6 - 1);
	return A2(_elm_lang$core$Random$State, s1 + 1, s2 + 1);
};
var _elm_lang$core$Random$next = function (_p60) {
	var _p61 = _p60;
	var _p63 = _p61._1;
	var _p62 = _p61._0;
	var k2 = (_p63 / _elm_lang$core$Random$magicNum3) | 0;
	var rawState2 = (_elm_lang$core$Random$magicNum4 * (_p63 - (k2 * _elm_lang$core$Random$magicNum3))) - (k2 * _elm_lang$core$Random$magicNum5);
	var newState2 = (_elm_lang$core$Native_Utils.cmp(rawState2, 0) < 0) ? (rawState2 + _elm_lang$core$Random$magicNum7) : rawState2;
	var k1 = (_p62 / _elm_lang$core$Random$magicNum1) | 0;
	var rawState1 = (_elm_lang$core$Random$magicNum0 * (_p62 - (k1 * _elm_lang$core$Random$magicNum1))) - (k1 * _elm_lang$core$Random$magicNum2);
	var newState1 = (_elm_lang$core$Native_Utils.cmp(rawState1, 0) < 0) ? (rawState1 + _elm_lang$core$Random$magicNum6) : rawState1;
	var z = newState1 - newState2;
	var newZ = (_elm_lang$core$Native_Utils.cmp(z, 1) < 0) ? (z + _elm_lang$core$Random$magicNum8) : z;
	return {
		ctor: '_Tuple2',
		_0: newZ,
		_1: A2(_elm_lang$core$Random$State, newState1, newState2)
	};
};
var _elm_lang$core$Random$split = function (_p64) {
	var _p65 = _p64;
	var _p68 = _p65._1;
	var _p67 = _p65._0;
	var _p66 = _elm_lang$core$Tuple$second(
		_elm_lang$core$Random$next(_p65));
	var t1 = _p66._0;
	var t2 = _p66._1;
	var new_s2 = _elm_lang$core$Native_Utils.eq(_p68, 1) ? (_elm_lang$core$Random$magicNum7 - 1) : (_p68 - 1);
	var new_s1 = _elm_lang$core$Native_Utils.eq(_p67, _elm_lang$core$Random$magicNum6 - 1) ? 1 : (_p67 + 1);
	return {
		ctor: '_Tuple2',
		_0: A2(_elm_lang$core$Random$State, new_s1, t2),
		_1: A2(_elm_lang$core$Random$State, t1, new_s2)
	};
};
var _elm_lang$core$Random$Seed = function (a) {
	return {ctor: 'Seed', _0: a};
};
var _elm_lang$core$Random$int = F2(
	function (a, b) {
		return _elm_lang$core$Random$Generator(
			function (_p69) {
				var _p70 = _p69;
				var _p75 = _p70._0;
				var base = 2147483561;
				var f = F3(
					function (n, acc, state) {
						f:
						while (true) {
							var _p71 = n;
							if (_p71 === 0) {
								return {ctor: '_Tuple2', _0: acc, _1: state};
							} else {
								var _p72 = _p75.next(state);
								var x = _p72._0;
								var nextState = _p72._1;
								var _v27 = n - 1,
									_v28 = x + (acc * base),
									_v29 = nextState;
								n = _v27;
								acc = _v28;
								state = _v29;
								continue f;
							}
						}
					});
				var _p73 = (_elm_lang$core$Native_Utils.cmp(a, b) < 0) ? {ctor: '_Tuple2', _0: a, _1: b} : {ctor: '_Tuple2', _0: b, _1: a};
				var lo = _p73._0;
				var hi = _p73._1;
				var k = (hi - lo) + 1;
				var n = A2(_elm_lang$core$Random$iLogBase, base, k);
				var _p74 = A3(f, n, 1, _p75.state);
				var v = _p74._0;
				var nextState = _p74._1;
				return {
					ctor: '_Tuple2',
					_0: lo + A2(_elm_lang$core$Basics_ops['%'], v, k),
					_1: _elm_lang$core$Random$Seed(
						_elm_lang$core$Native_Utils.update(
							_p75,
							{state: nextState}))
				};
			});
	});
var _elm_lang$core$Random$bool = A2(
	_elm_lang$core$Random$map,
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		})(1),
	A2(_elm_lang$core$Random$int, 0, 1));
var _elm_lang$core$Random$float = F2(
	function (a, b) {
		return _elm_lang$core$Random$Generator(
			function (seed) {
				var _p76 = A2(
					_elm_lang$core$Random$step,
					A2(_elm_lang$core$Random$int, _elm_lang$core$Random$minInt, _elm_lang$core$Random$maxInt),
					seed);
				var number = _p76._0;
				var newSeed = _p76._1;
				var negativeOneToOne = _elm_lang$core$Basics$toFloat(number) / _elm_lang$core$Basics$toFloat(_elm_lang$core$Random$maxInt - _elm_lang$core$Random$minInt);
				var _p77 = (_elm_lang$core$Native_Utils.cmp(a, b) < 0) ? {ctor: '_Tuple2', _0: a, _1: b} : {ctor: '_Tuple2', _0: b, _1: a};
				var lo = _p77._0;
				var hi = _p77._1;
				var scaled = ((lo + hi) / 2) + ((hi - lo) * negativeOneToOne);
				return {ctor: '_Tuple2', _0: scaled, _1: newSeed};
			});
	});
var _elm_lang$core$Random$initialSeed = function (n) {
	return _elm_lang$core$Random$Seed(
		{
			state: _elm_lang$core$Random$initState(n),
			next: _elm_lang$core$Random$next,
			split: _elm_lang$core$Random$split,
			range: _elm_lang$core$Random$range
		});
};
var _elm_lang$core$Random$init = A2(
	_elm_lang$core$Task$andThen,
	function (t) {
		return _elm_lang$core$Task$succeed(
			_elm_lang$core$Random$initialSeed(
				_elm_lang$core$Basics$round(t)));
	},
	_elm_lang$core$Time$now);
var _elm_lang$core$Random$Generate = function (a) {
	return {ctor: 'Generate', _0: a};
};
var _elm_lang$core$Random$generate = F2(
	function (tagger, generator) {
		return _elm_lang$core$Random$command(
			_elm_lang$core$Random$Generate(
				A2(_elm_lang$core$Random$map, tagger, generator)));
	});
var _elm_lang$core$Random$cmdMap = F2(
	function (func, _p78) {
		var _p79 = _p78;
		return _elm_lang$core$Random$Generate(
			A2(_elm_lang$core$Random$map, func, _p79._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Random'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Random$init, onEffects: _elm_lang$core$Random$onEffects, onSelfMsg: _elm_lang$core$Random$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Random$cmdMap};

var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$stripTrailingZeroes = function (block) {
	var loop = function (idx) {
		loop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) {
				return block;
			} else {
				var _p0 = A2(_elm_lang$core$Array$get, idx, block);
				if (_p0.ctor === 'Nothing') {
					return block;
				} else {
					if (!_elm_lang$core$Native_Utils.eq(_p0._0, 0)) {
						return A3(_elm_lang$core$Array$slice, 0, 1 + idx, block);
					} else {
						var _v1 = idx - 1;
						idx = _v1;
						continue loop;
					}
				}
			}
		}
	};
	var len = _elm_lang$core$Array$length(block);
	return loop(len - 1);
};
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$marker = 128;
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$padLastBlock = F2(
	function (blockSize, blocks) {
		var loop = F2(
			function (blocks, res) {
				loop:
				while (true) {
					var _p1 = blocks;
					if (_p1.ctor === '[]') {
						return {ctor: '[]'};
					} else {
						if (_p1._1.ctor === '[]') {
							var block = _billstclair$elm_crypto_string$Crypto_Strings_Crypt$stripTrailingZeroes(_p1._0);
							var len = _elm_lang$core$Array$length(block);
							var last = A2(
								_elm_lang$core$Maybe$withDefault,
								0,
								A2(_elm_lang$core$Array$get, len - 1, block));
							var _p2 = (_elm_lang$core$Native_Utils.eq(len, blockSize) && (_elm_lang$core$Native_Utils.eq(last, 0) || _elm_lang$core$Native_Utils.eq(last, _billstclair$elm_crypto_string$Crypto_Strings_Crypt$marker))) ? {
								ctor: '_Tuple3',
								_0: _elm_lang$core$Array$fromList(
									{
										ctor: '::',
										_0: _billstclair$elm_crypto_string$Crypto_Strings_Crypt$marker,
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: block,
									_1: {ctor: '[]'}
								},
								_2: 1
							} : ((_elm_lang$core$Native_Utils.cmp(len, blockSize) < 0) ? {
								ctor: '_Tuple3',
								_0: A2(_elm_lang$core$Array$push, _billstclair$elm_crypto_string$Crypto_Strings_Crypt$marker, block),
								_1: {ctor: '[]'},
								_2: len + 1
							} : {
								ctor: '_Tuple3',
								_0: block,
								_1: {ctor: '[]'},
								_2: len
							});
							var b = _p2._0;
							var bs = _p2._1;
							var ln = _p2._2;
							var b2 = (_elm_lang$core$Native_Utils.cmp(ln, blockSize) < 0) ? A2(
								_elm_lang$core$Array$append,
								b,
								A2(_elm_lang$core$Array$repeat, blockSize - ln, 0)) : b;
							return _elm_lang$core$List$reverse(
								{
									ctor: '::',
									_0: b2,
									_1: A2(_elm_lang$core$List$append, bs, res)
								});
						} else {
							var _v3 = _p1._1,
								_v4 = {ctor: '::', _0: _p1._0, _1: res};
							blocks = _v3;
							res = _v4;
							continue loop;
						}
					}
				}
			});
		return A2(
			loop,
			blocks,
			{ctor: '[]'});
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$unpadLastBlock = function (blocks) {
	var loop = F2(
		function (blocks, res) {
			loop:
			while (true) {
				var _p3 = blocks;
				if (_p3.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					if (_p3._1.ctor === '[]') {
						var block = _billstclair$elm_crypto_string$Crypto_Strings_Crypt$stripTrailingZeroes(_p3._0);
						var len = _elm_lang$core$Array$length(block);
						var last = A2(
							_elm_lang$core$Maybe$withDefault,
							1,
							A2(_elm_lang$core$Array$get, len - 1, block));
						var b = _elm_lang$core$Native_Utils.eq(last, _billstclair$elm_crypto_string$Crypto_Strings_Crypt$marker) ? A3(_elm_lang$core$Array$slice, 0, -1, block) : block;
						return _elm_lang$core$List$reverse(
							{ctor: '::', _0: b, _1: res});
					} else {
						var _v6 = _p3._1,
							_v7 = {ctor: '::', _0: _p3._0, _1: res};
						blocks = _v6;
						res = _v7;
						continue loop;
					}
				}
			}
		});
	return A2(
		loop,
		blocks,
		{ctor: '[]'});
};
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$blocksToList = function (blocks) {
	return _elm_lang$core$List$concat(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Array$toList,
			_billstclair$elm_crypto_string$Crypto_Strings_Crypt$unpadLastBlock(blocks)));
};
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$extendArray = F3(
	function (size, fill, array) {
		var count = size - _elm_lang$core$Array$length(array);
		return (_elm_lang$core$Native_Utils.cmp(count, 0) < 1) ? array : A2(
			_elm_lang$core$Array$append,
			array,
			A2(_elm_lang$core$Array$repeat, count, fill));
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$listToBlocks = F2(
	function (blockSize, list) {
		return A2(
			_billstclair$elm_crypto_string$Crypto_Strings_Crypt$padLastBlock,
			blockSize,
			A2(
				_elm_lang$core$List$map,
				function (_p4) {
					return A3(
						_billstclair$elm_crypto_string$Crypto_Strings_Crypt$extendArray,
						blockSize,
						0,
						_elm_lang$core$Array$fromList(_p4));
				},
				A2(_elm_community$list_extra$List_Extra$greedyGroupsOf, blockSize, list)));
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$decryptList = F3(
	function (config, _p5, list) {
		var _p6 = _p5;
		var encryption = config.encryption;
		var pair = {ctor: '_Tuple2', _0: encryption.encryptor, _1: encryption.decryptor};
		var chaining = config.chaining;
		var chainer = chaining.decryptor;
		var step = F2(
			function (block, _p7) {
				var _p8 = _p7;
				var _p9 = A4(chainer, _p8._1, pair, _p6._0, block);
				var outBlock = _p9._0;
				var state2 = _p9._1;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: outBlock, _1: _p8._0},
					_1: state2
				};
			});
		var _p10 = A2(chaining.separator, encryption.blockSize, list);
		var cipherList = _p10._0;
		var state = _p10._1;
		var cipherBlocks = A2(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$listToBlocks, encryption.blockSize, cipherList);
		var _p11 = A3(
			_elm_lang$core$List$foldl,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: state
			},
			cipherBlocks);
		var plainBlocks = _p11._0;
		return _billstclair$elm_crypto_string$Crypto_Strings_Crypt$blocksToList(
			_elm_lang$core$List$reverse(plainBlocks));
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$decrypt = F3(
	function (config, key, string) {
		var _p12 = config.encoding.decoder(string);
		if (_p12.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p12._0);
		} else {
			return _elm_lang$core$Result$Ok(
				_billstclair$elm_crypto_string$Crypto_Strings_Encoding$plainTextDecoder(
					A3(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$decryptList, config, key, _p12._0)));
		}
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$encryptList = F4(
	function (config, generator, _p13, list) {
		var _p14 = _p13;
		var encryption = config.encryption;
		var pair = {ctor: '_Tuple2', _0: encryption.encryptor, _1: encryption.decryptor};
		var chaining = config.chaining;
		var chainer = chaining.encryptor;
		var step = F2(
			function (block, _p15) {
				var _p16 = _p15;
				var _p17 = A4(chainer, _p16._1, pair, _p14._0, block);
				var outBlock = _p17._0;
				var outState = _p17._1;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: outBlock, _1: _p16._0},
					_1: outState
				};
			});
		var _p18 = A2(chaining.initializer, generator, encryption.blockSize);
		var state = _p18._0;
		var randomState = _p18._1;
		var _p19 = A3(
			_elm_lang$core$List$foldl,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: state
			},
			A2(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$listToBlocks, encryption.blockSize, list));
		var cipherBlocks = _p19._0;
		var finalState = _p19._1;
		return {
			ctor: '_Tuple2',
			_0: A2(
				chaining.adjoiner,
				finalState,
				_billstclair$elm_crypto_string$Crypto_Strings_Crypt$blocksToList(
					_elm_lang$core$List$reverse(cipherBlocks))),
			_1: randomState
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$encrypt = F4(
	function (config, generator, key, plaintext) {
		return function (_p20) {
			var _p21 = _p20;
			return {
				ctor: '_Tuple2',
				_0: config.encoding.encoder(_p21._0),
				_1: _p21._1
			};
		}(
			A4(
				_billstclair$elm_crypto_string$Crypto_Strings_Crypt$encryptList,
				config,
				generator,
				key,
				_billstclair$elm_crypto_string$Crypto_Strings_Encoding$plainTextEncoder(plaintext)));
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$seedGenerator = F2(
	function (seed, blockSize) {
		var gen = A2(
			_elm_lang$core$Random$list,
			blockSize,
			A2(_elm_lang$core$Random$int, 0, 255));
		var _p22 = A2(_elm_lang$core$Random$step, gen, seed);
		var list = _p22._0;
		var sd = _p22._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Array$fromList(list),
			_1: sd
		};
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$defaultEncoding = _billstclair$elm_crypto_string$Crypto_Strings_Encoding$base64Encoding(60);
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$defaultConfig = {keyEncoding: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$foldedSha256KeyEncoding, encryption: _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$encryption, chaining: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrChaining, encoding: _billstclair$elm_crypto_string$Crypto_Strings_Crypt$defaultEncoding};
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$processKey = F2(
	function (config, string) {
		var keyEncoder = config.keyEncoding.encoder;
		var expander = config.encryption.keyExpander;
		return expander.expander(
			A2(keyEncoder, expander.keySize, string));
	});
var _billstclair$elm_crypto_string$Crypto_Strings_Crypt$expandKeyString = F2(
	function (config, passphrase) {
		var _p23 = A2(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$processKey, config, passphrase);
		if (_p23.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p23._0);
		} else {
			return _elm_lang$core$Result$Ok(
				_billstclair$elm_crypto_string$Crypto_Strings_Types$Key(_p23._0));
		}
	});

var _billstclair$elm_crypto_string$Crypto_Strings$config = {
	encryption: _billstclair$elm_crypto_string$Crypto_Strings_BlockAes$encryption,
	keyEncoding: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$foldedSha256KeyEncoding,
	chaining: _billstclair$elm_crypto_string$Crypto_Strings_Chaining$ctrChaining,
	encoding: _billstclair$elm_crypto_string$Crypto_Strings_Encoding$base64Encoding(60)
};
var _billstclair$elm_crypto_string$Crypto_Strings$encrypt = F3(
	function (seed, passphrase, plaintext) {
		var _p0 = A2(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$expandKeyString, _billstclair$elm_crypto_string$Crypto_Strings$config, passphrase);
		if (_p0.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p0._0);
		} else {
			return _elm_lang$core$Result$Ok(
				A4(
					_billstclair$elm_crypto_string$Crypto_Strings_Crypt$encrypt,
					_billstclair$elm_crypto_string$Crypto_Strings$config,
					_billstclair$elm_crypto_string$Crypto_Strings_Crypt$seedGenerator(seed),
					_p0._0,
					plaintext));
		}
	});
var _billstclair$elm_crypto_string$Crypto_Strings$justEncrypt = F3(
	function (seed, passphrase, plaintext) {
		var _p1 = A2(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$expandKeyString, _billstclair$elm_crypto_string$Crypto_Strings$config, passphrase);
		if (_p1.ctor === 'Err') {
			return '';
		} else {
			return _elm_lang$core$Tuple$first(
				A4(
					_billstclair$elm_crypto_string$Crypto_Strings_Crypt$encrypt,
					_billstclair$elm_crypto_string$Crypto_Strings$config,
					_billstclair$elm_crypto_string$Crypto_Strings_Crypt$seedGenerator(seed),
					_p1._0,
					plaintext));
		}
	});
var _billstclair$elm_crypto_string$Crypto_Strings$decrypt = F2(
	function (passphrase, ciphertext) {
		var _p2 = A2(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$expandKeyString, _billstclair$elm_crypto_string$Crypto_Strings$config, passphrase);
		if (_p2.ctor === 'Err') {
			return _elm_lang$core$Result$Err(_p2._0);
		} else {
			return A3(_billstclair$elm_crypto_string$Crypto_Strings_Crypt$decrypt, _billstclair$elm_crypto_string$Crypto_Strings$config, _p2._0, ciphertext);
		}
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _evancz$url_parser$UrlParser$toKeyValuePair = function (segment) {
	var _p0 = A2(_elm_lang$core$String$split, '=', segment);
	if (((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '[]')) {
		return A3(
			_elm_lang$core$Maybe$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_elm_lang$http$Http$decodeUri(_p0._0),
			_elm_lang$http$Http$decodeUri(_p0._1._0));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _evancz$url_parser$UrlParser$parseParams = function (queryString) {
	return _elm_lang$core$Dict$fromList(
		A2(
			_elm_lang$core$List$filterMap,
			_evancz$url_parser$UrlParser$toKeyValuePair,
			A2(
				_elm_lang$core$String$split,
				'&',
				A2(_elm_lang$core$String$dropLeft, 1, queryString))));
};
var _evancz$url_parser$UrlParser$splitUrl = function (url) {
	var _p1 = A2(_elm_lang$core$String$split, '/', url);
	if ((_p1.ctor === '::') && (_p1._0 === '')) {
		return _p1._1;
	} else {
		return _p1;
	}
};
var _evancz$url_parser$UrlParser$parseHelp = function (states) {
	parseHelp:
	while (true) {
		var _p2 = states;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p4 = _p2._0;
			var _p3 = _p4.unvisited;
			if (_p3.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p4.value);
			} else {
				if ((_p3._0 === '') && (_p3._1.ctor === '[]')) {
					return _elm_lang$core$Maybe$Just(_p4.value);
				} else {
					var _v4 = _p2._1;
					states = _v4;
					continue parseHelp;
				}
			}
		}
	}
};
var _evancz$url_parser$UrlParser$parse = F3(
	function (_p5, url, params) {
		var _p6 = _p5;
		return _evancz$url_parser$UrlParser$parseHelp(
			_p6._0(
				{
					visited: {ctor: '[]'},
					unvisited: _evancz$url_parser$UrlParser$splitUrl(url),
					params: params,
					value: _elm_lang$core$Basics$identity
				}));
	});
var _evancz$url_parser$UrlParser$parseHash = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			A2(_elm_lang$core$String$dropLeft, 1, location.hash),
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$parsePath = F2(
	function (parser, location) {
		return A3(
			_evancz$url_parser$UrlParser$parse,
			parser,
			location.pathname,
			_evancz$url_parser$UrlParser$parseParams(location.search));
	});
var _evancz$url_parser$UrlParser$intParamHelp = function (maybeValue) {
	var _p7 = maybeValue;
	if (_p7.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Result$toMaybe(
			_elm_lang$core$String$toInt(_p7._0));
	}
};
var _evancz$url_parser$UrlParser$mapHelp = F2(
	function (func, _p8) {
		var _p9 = _p8;
		return {
			visited: _p9.visited,
			unvisited: _p9.unvisited,
			params: _p9.params,
			value: func(_p9.value)
		};
	});
var _evancz$url_parser$UrlParser$State = F4(
	function (a, b, c, d) {
		return {visited: a, unvisited: b, params: c, value: d};
	});
var _evancz$url_parser$UrlParser$Parser = function (a) {
	return {ctor: 'Parser', _0: a};
};
var _evancz$url_parser$UrlParser$s = function (str) {
	return _evancz$url_parser$UrlParser$Parser(
		function (_p10) {
			var _p11 = _p10;
			var _p12 = _p11.unvisited;
			if (_p12.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p13 = _p12._0;
				return _elm_lang$core$Native_Utils.eq(_p13, str) ? {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						{ctor: '::', _0: _p13, _1: _p11.visited},
						_p12._1,
						_p11.params,
						_p11.value),
					_1: {ctor: '[]'}
				} : {ctor: '[]'};
			}
		});
};
var _evancz$url_parser$UrlParser$custom = F2(
	function (tipe, stringToSomething) {
		return _evancz$url_parser$UrlParser$Parser(
			function (_p14) {
				var _p15 = _p14;
				var _p16 = _p15.unvisited;
				if (_p16.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					var _p18 = _p16._0;
					var _p17 = stringToSomething(_p18);
					if (_p17.ctor === 'Ok') {
						return {
							ctor: '::',
							_0: A4(
								_evancz$url_parser$UrlParser$State,
								{ctor: '::', _0: _p18, _1: _p15.visited},
								_p16._1,
								_p15.params,
								_p15.value(_p17._0)),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				}
			});
	});
var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['</>'] = F2(
	function (_p20, _p19) {
		var _p21 = _p20;
		var _p22 = _p19;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p22._0,
					_p21._0(state));
			});
	});
var _evancz$url_parser$UrlParser$map = F2(
	function (subValue, _p23) {
		var _p24 = _p23;
		return _evancz$url_parser$UrlParser$Parser(
			function (_p25) {
				var _p26 = _p25;
				return A2(
					_elm_lang$core$List$map,
					_evancz$url_parser$UrlParser$mapHelp(_p26.value),
					_p24._0(
						{visited: _p26.visited, unvisited: _p26.unvisited, params: _p26.params, value: subValue}));
			});
	});
var _evancz$url_parser$UrlParser$oneOf = function (parsers) {
	return _evancz$url_parser$UrlParser$Parser(
		function (state) {
			return A2(
				_elm_lang$core$List$concatMap,
				function (_p27) {
					var _p28 = _p27;
					return _p28._0(state);
				},
				parsers);
		});
};
var _evancz$url_parser$UrlParser$top = _evancz$url_parser$UrlParser$Parser(
	function (state) {
		return {
			ctor: '::',
			_0: state,
			_1: {ctor: '[]'}
		};
	});
var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
_evancz$url_parser$UrlParser_ops['<?>'] = F2(
	function (_p30, _p29) {
		var _p31 = _p30;
		var _p32 = _p29;
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					_p32._0,
					_p31._0(state));
			});
	});
var _evancz$url_parser$UrlParser$QueryParser = function (a) {
	return {ctor: 'QueryParser', _0: a};
};
var _evancz$url_parser$UrlParser$customParam = F2(
	function (key, func) {
		return _evancz$url_parser$UrlParser$QueryParser(
			function (_p33) {
				var _p34 = _p33;
				var _p35 = _p34.params;
				return {
					ctor: '::',
					_0: A4(
						_evancz$url_parser$UrlParser$State,
						_p34.visited,
						_p34.unvisited,
						_p35,
						_p34.value(
							func(
								A2(_elm_lang$core$Dict$get, key, _p35)))),
					_1: {ctor: '[]'}
				};
			});
	});
var _evancz$url_parser$UrlParser$stringParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _elm_lang$core$Basics$identity);
};
var _evancz$url_parser$UrlParser$intParam = function (name) {
	return A2(_evancz$url_parser$UrlParser$customParam, name, _evancz$url_parser$UrlParser$intParamHelp);
};

var _krisajenkins$remotedata$RemoteData$isNotAsked = function (data) {
	var _p0 = data;
	if (_p0.ctor === 'NotAsked') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isLoading = function (data) {
	var _p1 = data;
	if (_p1.ctor === 'Loading') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isFailure = function (data) {
	var _p2 = data;
	if (_p2.ctor === 'Failure') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isSuccess = function (data) {
	var _p3 = data;
	if (_p3.ctor === 'Success') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$withDefault = F2(
	function ($default, data) {
		var _p4 = data;
		if (_p4.ctor === 'Success') {
			return _p4._0;
		} else {
			return $default;
		}
	});
var _krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {ctor: 'Success', _0: a};
};
var _krisajenkins$remotedata$RemoteData$succeed = _krisajenkins$remotedata$RemoteData$Success;
var _krisajenkins$remotedata$RemoteData$prism = {
	reverseGet: _krisajenkins$remotedata$RemoteData$Success,
	getOption: function (data) {
		var _p5 = data;
		if (_p5.ctor === 'Success') {
			return _elm_lang$core$Maybe$Just(_p5._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}
};
var _krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {ctor: 'Failure', _0: a};
};
var _krisajenkins$remotedata$RemoteData$fromMaybe = F2(
	function (error, maybe) {
		var _p6 = maybe;
		if (_p6.ctor === 'Nothing') {
			return _krisajenkins$remotedata$RemoteData$Failure(error);
		} else {
			return _krisajenkins$remotedata$RemoteData$Success(_p6._0);
		}
	});
var _krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	var _p7 = result;
	if (_p7.ctor === 'Err') {
		return _krisajenkins$remotedata$RemoteData$Failure(_p7._0);
	} else {
		return _krisajenkins$remotedata$RemoteData$Success(_p7._0);
	}
};
var _krisajenkins$remotedata$RemoteData$asCmd = _elm_lang$core$Task$attempt(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$sendRequest = _elm_lang$http$Http$send(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$fromTask = function (_p8) {
	return A2(
		_elm_lang$core$Task$onError,
		function (_p9) {
			return _elm_lang$core$Task$succeed(
				_krisajenkins$remotedata$RemoteData$Failure(_p9));
		},
		A2(_elm_lang$core$Task$map, _krisajenkins$remotedata$RemoteData$Success, _p8));
};
var _krisajenkins$remotedata$RemoteData$Loading = {ctor: 'Loading'};
var _krisajenkins$remotedata$RemoteData$NotAsked = {ctor: 'NotAsked'};
var _krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		var _p10 = data;
		switch (_p10.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(
					f(_p10._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Failure(_p10._0);
		}
	});
var _krisajenkins$remotedata$RemoteData$toMaybe = function (_p11) {
	return A2(
		_krisajenkins$remotedata$RemoteData$withDefault,
		_elm_lang$core$Maybe$Nothing,
		A2(_krisajenkins$remotedata$RemoteData$map, _elm_lang$core$Maybe$Just, _p11));
};
var _krisajenkins$remotedata$RemoteData$mapError = F2(
	function (f, data) {
		var _p12 = data;
		switch (_p12.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(_p12._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(
					f(_p12._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$mapBoth = F2(
	function (successFn, errorFn) {
		return function (_p13) {
			return A2(
				_krisajenkins$remotedata$RemoteData$mapError,
				errorFn,
				A2(_krisajenkins$remotedata$RemoteData$map, successFn, _p13));
		};
	});
var _krisajenkins$remotedata$RemoteData$andThen = F2(
	function (f, data) {
		var _p14 = data;
		switch (_p14.ctor) {
			case 'Success':
				return f(_p14._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(_p14._0);
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Loading;
		}
	});
var _krisajenkins$remotedata$RemoteData$andMap = F2(
	function (wrappedValue, wrappedFunction) {
		var _p15 = {ctor: '_Tuple2', _0: wrappedFunction, _1: wrappedValue};
		_v11_5:
		do {
			_v11_4:
			do {
				_v11_3:
				do {
					_v11_2:
					do {
						switch (_p15._0.ctor) {
							case 'Success':
								switch (_p15._1.ctor) {
									case 'Success':
										return _krisajenkins$remotedata$RemoteData$Success(
											_p15._0._0(_p15._1._0));
									case 'Failure':
										break _v11_2;
									case 'Loading':
										break _v11_4;
									default:
										return _krisajenkins$remotedata$RemoteData$NotAsked;
								}
							case 'Failure':
								return _krisajenkins$remotedata$RemoteData$Failure(_p15._0._0);
							case 'Loading':
								switch (_p15._1.ctor) {
									case 'Failure':
										break _v11_2;
									case 'Loading':
										break _v11_3;
									case 'NotAsked':
										break _v11_3;
									default:
										break _v11_3;
								}
							default:
								switch (_p15._1.ctor) {
									case 'Failure':
										break _v11_2;
									case 'Loading':
										break _v11_4;
									case 'NotAsked':
										break _v11_5;
									default:
										break _v11_5;
								}
						}
					} while(false);
					return _krisajenkins$remotedata$RemoteData$Failure(_p15._1._0);
				} while(false);
				return _krisajenkins$remotedata$RemoteData$Loading;
			} while(false);
			return _krisajenkins$remotedata$RemoteData$Loading;
		} while(false);
		return _krisajenkins$remotedata$RemoteData$NotAsked;
	});
var _krisajenkins$remotedata$RemoteData$map2 = F3(
	function (f, a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(_krisajenkins$remotedata$RemoteData$map, f, a));
	});
var _krisajenkins$remotedata$RemoteData$fromList = A2(
	_elm_lang$core$List$foldr,
	_krisajenkins$remotedata$RemoteData$map2(
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			})),
	_krisajenkins$remotedata$RemoteData$Success(
		{ctor: '[]'}));
var _krisajenkins$remotedata$RemoteData$map3 = F4(
	function (f, a, b, c) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			c,
			A2(
				_krisajenkins$remotedata$RemoteData$andMap,
				b,
				A2(_krisajenkins$remotedata$RemoteData$map, f, a)));
	});
var _krisajenkins$remotedata$RemoteData$append = F2(
	function (a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(
				_krisajenkins$remotedata$RemoteData$map,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				a));
	});
var _krisajenkins$remotedata$RemoteData$update = F2(
	function (f, remoteData) {
		var _p16 = remoteData;
		switch (_p16.ctor) {
			case 'Success':
				var _p17 = f(_p16._0);
				var first = _p17._0;
				var second = _p17._1;
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Success(first),
					_1: second
				};
			case 'NotAsked':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$NotAsked, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Loading':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$Loading, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Failure(_p16._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});

var _user$project$PwdRec$encode = function (p) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'name',
				_1: _elm_lang$core$Json_Encode$string(p.name)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'url',
					_1: _elm_lang$core$Json_Encode$string(p.url)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'password',
						_1: _elm_lang$core$Json_Encode$string(p.password)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'comment',
							_1: _elm_lang$core$Json_Encode$string(p.comment)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'group',
								_1: _elm_lang$core$Json_Encode$string(p.grp)
							},
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _user$project$PwdRec$optional = F2(
	function ($default, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Maybe$withDefault($default),
			_elm_lang$core$Json_Decode$maybe(decoder));
	});
var _user$project$PwdRec$optStr = function (fn) {
	return A2(
		_user$project$PwdRec$optional,
		'',
		A2(_elm_lang$core$Json_Decode$field, fn, _elm_lang$core$Json_Decode$string));
};
var _user$project$PwdRec$empty = {name: '', url: '', password: '', comment: '', grp: ''};
var _user$project$PwdRec$PwdRec = F5(
	function (a, b, c, d, e) {
		return {name: a, url: b, password: c, comment: d, grp: e};
	});
var _user$project$PwdRec$decoder = A6(
	_elm_lang$core$Json_Decode$map5,
	_user$project$PwdRec$PwdRec,
	A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
	_user$project$PwdRec$optStr('url'),
	_user$project$PwdRec$optStr('password'),
	_user$project$PwdRec$optStr('comment'),
	_user$project$PwdRec$optStr('group'));

var _user$project$Route$toHash = function (route) {
	var _p0 = route;
	switch (_p0.ctor) {
		case 'RtList':
			return '#';
		case 'RtNew':
			return '#new';
		case 'RtEdit':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'#item/',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$http$Http$encodeUri(_p0._0),
					'/edit'));
		case 'RtItemMenu':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'#item/',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$http$Http$encodeUri(_p0._0),
					'/actions'));
		case 'RtNotFound':
			return '#notfound';
		case 'RtMenu':
			return '#menu';
		case 'RtPasswordChangeForm':
			return '#change_pwd';
		case 'RtDownload':
			return '#download';
		default:
			return '#upload';
	}
};
var _user$project$Route$RtUpload = {ctor: 'RtUpload'};
var _user$project$Route$RtDownload = {ctor: 'RtDownload'};
var _user$project$Route$RtPasswordChangeForm = {ctor: 'RtPasswordChangeForm'};
var _user$project$Route$RtMenu = {ctor: 'RtMenu'};
var _user$project$Route$RtNotFound = function (a) {
	return {ctor: 'RtNotFound', _0: a};
};
var _user$project$Route$RtItemMenu = function (a) {
	return {ctor: 'RtItemMenu', _0: a};
};
var _user$project$Route$RtEdit = function (a) {
	return {ctor: 'RtEdit', _0: a};
};
var _user$project$Route$RtNew = {ctor: 'RtNew'};
var _user$project$Route$RtList = {ctor: 'RtList'};
var _user$project$Route$locationParser = _evancz$url_parser$UrlParser$oneOf(
	{
		ctor: '::',
		_0: A2(_evancz$url_parser$UrlParser$map, _user$project$Route$RtList, _evancz$url_parser$UrlParser$top),
		_1: {
			ctor: '::',
			_0: A2(
				_evancz$url_parser$UrlParser$map,
				_user$project$Route$RtNew,
				_evancz$url_parser$UrlParser$s('new')),
			_1: {
				ctor: '::',
				_0: A2(
					_evancz$url_parser$UrlParser$map,
					_user$project$Route$RtMenu,
					_evancz$url_parser$UrlParser$s('menu')),
				_1: {
					ctor: '::',
					_0: A2(
						_evancz$url_parser$UrlParser$map,
						_user$project$Route$RtDownload,
						_evancz$url_parser$UrlParser$s('download')),
					_1: {
						ctor: '::',
						_0: A2(
							_evancz$url_parser$UrlParser$map,
							_user$project$Route$RtUpload,
							_evancz$url_parser$UrlParser$s('upload')),
						_1: {
							ctor: '::',
							_0: A2(
								_evancz$url_parser$UrlParser$map,
								_user$project$Route$RtPasswordChangeForm,
								_evancz$url_parser$UrlParser$s('change_pwd')),
							_1: {
								ctor: '::',
								_0: A2(
									_evancz$url_parser$UrlParser$map,
									_user$project$Route$RtEdit,
									A2(
										_evancz$url_parser$UrlParser_ops['</>'],
										_evancz$url_parser$UrlParser$s('item'),
										A2(
											_evancz$url_parser$UrlParser_ops['</>'],
											A2(
												_evancz$url_parser$UrlParser$map,
												function (_p1) {
													return A2(
														_elm_lang$core$Maybe$withDefault,
														'',
														_elm_lang$http$Http$decodeUri(_p1));
												},
												_evancz$url_parser$UrlParser$string),
											_evancz$url_parser$UrlParser$s('edit')))),
								_1: {
									ctor: '::',
									_0: A2(
										_evancz$url_parser$UrlParser$map,
										_user$project$Route$RtItemMenu,
										A2(
											_evancz$url_parser$UrlParser_ops['</>'],
											_evancz$url_parser$UrlParser$s('item'),
											A2(
												_evancz$url_parser$UrlParser_ops['</>'],
												A2(
													_evancz$url_parser$UrlParser$map,
													function (_p2) {
														return A2(
															_elm_lang$core$Maybe$withDefault,
															'',
															_elm_lang$http$Http$decodeUri(_p2));
													},
													_evancz$url_parser$UrlParser$string),
												_evancz$url_parser$UrlParser$s('actions')))),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		}
	});
var _user$project$Route$parseLocation = function (loc) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_user$project$Route$RtNotFound(loc.hash),
		A2(_evancz$url_parser$UrlParser$parseHash, _user$project$Route$locationParser, loc));
};

var _user$project$Types$emptyForm = {rec: _user$project$PwdRec$empty, pwdVisible: false, err: _elm_lang$core$Maybe$Nothing};
var _user$project$Types$errToString = function (err) {
	var _p0 = err;
	if (_p0.ctor === 'NotFound') {
		return 'Not found';
	} else {
		return _p0._0;
	}
};
var _user$project$Types$EditForm = F3(
	function (a, b, c) {
		return {rec: a, pwdVisible: b, err: c};
	});
var _user$project$Types$Model = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {passwords: a, masterPassword: b, route: c, form: d, initState: e, formPassword: f, seed: g, download: h, ticks: i};
	});
var _user$project$Types$Other = function (a) {
	return {ctor: 'Other', _0: a};
};
var _user$project$Types$NotFound = {ctor: 'NotFound'};
var _user$project$Types$LoggedOut = {ctor: 'LoggedOut'};
var _user$project$Types$Ready = {ctor: 'Ready'};
var _user$project$Types$Sealed = F2(
	function (a, b) {
		return {ctor: 'Sealed', _0: a, _1: b};
	});
var _user$project$Types$LoadingFailed = function (a) {
	return {ctor: 'LoadingFailed', _0: a};
};
var _user$project$Types$Missing = {ctor: 'Missing'};
var _user$project$Types$Loading = {ctor: 'Loading'};
var _user$project$Types$emptyModel = {
	passwords: {ctor: '[]'},
	masterPassword: '',
	route: _user$project$Route$RtList,
	form: _user$project$Types$emptyForm,
	initState: _user$project$Types$Loading,
	formPassword: '',
	seed: _elm_lang$core$Random$initialSeed(0),
	download: {url: '', label: ''},
	ticks: 0
};
var _user$project$Types$FmFlipPwdVisible = {ctor: 'FmFlipPwdVisible'};
var _user$project$Types$FmComment = function (a) {
	return {ctor: 'FmComment', _0: a};
};
var _user$project$Types$FmGroup = function (a) {
	return {ctor: 'FmGroup', _0: a};
};
var _user$project$Types$FmPassword = function (a) {
	return {ctor: 'FmPassword', _0: a};
};
var _user$project$Types$FmUrl = function (a) {
	return {ctor: 'FmUrl', _0: a};
};
var _user$project$Types$FmName = function (a) {
	return {ctor: 'FmName', _0: a};
};
var _user$project$Types$Tick = function (a) {
	return {ctor: 'Tick', _0: a};
};
var _user$project$Types$Debug = function (a) {
	return {ctor: 'Debug', _0: a};
};
var _user$project$Types$FileData = function (a) {
	return {ctor: 'FileData', _0: a};
};
var _user$project$Types$UploadPasswords = {ctor: 'UploadPasswords'};
var _user$project$Types$DownloadUrlCreated = function (a) {
	return {ctor: 'DownloadUrlCreated', _0: a};
};
var _user$project$Types$PrepareDownload = {ctor: 'PrepareDownload'};
var _user$project$Types$ChangeMasterPassword = function (a) {
	return {ctor: 'ChangeMasterPassword', _0: a};
};
var _user$project$Types$DeleteItem = function (a) {
	return {ctor: 'DeleteItem', _0: a};
};
var _user$project$Types$CopyToClipboard = function (a) {
	return {ctor: 'CopyToClipboard', _0: a};
};
var _user$project$Types$SaveForm = {ctor: 'SaveForm'};
var _user$project$Types$MsgForm = function (a) {
	return {ctor: 'MsgForm', _0: a};
};
var _user$project$Types$NavigateTo = function (a) {
	return {ctor: 'NavigateTo', _0: a};
};
var _user$project$Types$RouteTo = function (a) {
	return {ctor: 'RouteTo', _0: a};
};
var _user$project$Types$TryPassword = {ctor: 'TryPassword'};
var _user$project$Types$FmLogin = function (a) {
	return {ctor: 'FmLogin', _0: a};
};
var _user$project$Types$GotSeed = function (a) {
	return {ctor: 'GotSeed', _0: a};
};
var _user$project$Types$PasswordsResponse = function (a) {
	return {ctor: 'PasswordsResponse', _0: a};
};

var _user$project$Ports$put = _elm_lang$core$Native_Platform.outgoingPort(
	'put',
	function (v) {
		return [v._0, v._1];
	});
var _user$project$Ports$get = _elm_lang$core$Native_Platform.outgoingPort(
	'get',
	function (v) {
		return v;
	});
var _user$project$Ports$getSub = _elm_lang$core$Native_Platform.incomingPort(
	'getSub',
	_elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$string),
				_1: {ctor: '[]'}
			}
		}));
var _user$project$Ports$writeClipboard = _elm_lang$core$Native_Platform.outgoingPort(
	'writeClipboard',
	function (v) {
		return v;
	});
var _user$project$Ports$makeDownloadUrl = _elm_lang$core$Native_Platform.outgoingPort(
	'makeDownloadUrl',
	function (v) {
		return v;
	});
var _user$project$Ports$gotDownloadUrl = _elm_lang$core$Native_Platform.incomingPort('gotDownloadUrl', _elm_lang$core$Json_Decode$string);
var _user$project$Ports$readFile = _elm_lang$core$Native_Platform.outgoingPort(
	'readFile',
	function (v) {
		return v;
	});
var _user$project$Ports$fileData = _elm_lang$core$Native_Platform.incomingPort('fileData', _elm_lang$core$Json_Decode$string);

var _user$project$Api$put = F3(
	function (_p0, key, value) {
		return _user$project$Ports$put(
			{ctor: '_Tuple2', _0: key, _1: value});
	});
var _user$project$Api$update = function (model) {
	var dumpRes = function (r) {
		var _p1 = r;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return _user$project$Types$errToString(_p1._0);
		}
	};
	var jsonPwds = A3(
		_billstclair$elm_crypto_string$Crypto_Strings$encrypt,
		model.seed,
		model.masterPassword,
		A2(
			_elm_lang$core$Json_Encode$encode,
			2,
			_elm_lang$core$Json_Encode$list(
				A2(_elm_lang$core$List$map, _user$project$PwdRec$encode, model.passwords))));
	var _p2 = jsonPwds;
	if (_p2.ctor === 'Ok') {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_elm_lang$core$Native_Utils.update(
				model,
				{seed: _p2._0._1}),
			{
				ctor: '::',
				_0: A3(
					_user$project$Api$put,
					function (_p3) {
						return _user$project$Types$Debug(
							dumpRes(_p3));
					},
					'passwords.json',
					_p2._0._0),
				_1: {ctor: '[]'}
			});
	} else {
		return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
	}
};
var _user$project$Api$get = F2(
	function (_p4, key) {
		return _user$project$Ports$get(key);
	});
var _user$project$Api$mapError = function (err) {
	var _p5 = err;
	switch (_p5.ctor) {
		case 'BadUrl':
			return _user$project$Types$Other(_p5._0);
		case 'Timeout':
			return _user$project$Types$Other('Timeout');
		case 'NetworkError':
			return _user$project$Types$Other('Network error');
		case 'BadStatus':
			var _p7 = _p5._0;
			var _p6 = _p7.status.code;
			if (_p6 === 404) {
				return _user$project$Types$NotFound;
			} else {
				return _user$project$Types$Other(_p7.status.message);
			}
		default:
			return _user$project$Types$Other(_p5._0);
	}
};
var _user$project$Api$getX = F2(
	function (fn, key) {
		var req = _elm_lang$http$Http$getString(
			A2(_elm_lang$core$Basics_ops['++'], 'data/', key));
		return A2(
			_elm_lang$http$Http$send,
			function (_p8) {
				return fn(
					A2(_elm_lang$core$Result$mapError, _user$project$Api$mapError, _p8));
			},
			req);
	});
var _user$project$Api$putX = F3(
	function (fn, key, value) {
		var url = A2(_elm_lang$core$Basics_ops['++'], 'data/', key);
		var req = _elm_lang$http$Http$request(
			{
				method: 'PUT',
				headers: {ctor: '[]'},
				url: url,
				body: A2(_elm_lang$http$Http$stringBody, 'application/binary', value),
				expect: _elm_lang$http$Http$expectString,
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
		return A2(
			_elm_lang$http$Http$send,
			function (_p9) {
				return fn(
					A2(_elm_lang$core$Result$mapError, _user$project$Api$mapError, _p9));
			},
			req);
	});

var _user$project$Init$init = function (location) {
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		_elm_lang$core$Native_Utils.update(
			_user$project$Types$emptyModel,
			{
				route: _user$project$Route$parseLocation(location)
			}),
		{
			ctor: '::',
			_0: A2(_user$project$Api$get, _user$project$Types$PasswordsResponse, 'passwords.json'),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Task$perform, _user$project$Types$GotSeed, _elm_lang$core$Time$now),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$Subscriptions$gotDownloadUrl = _user$project$Ports$gotDownloadUrl(_user$project$Types$DownloadUrlCreated);
var _user$project$Subscriptions$gotPasswords = function () {
	var toMsg = function (v) {
		var _p0 = v;
		if (_p0.ctor === 'Nothing') {
			return _elm_lang$core$Result$Err(_user$project$Types$NotFound);
		} else {
			return _elm_lang$core$Result$Ok(_p0._0);
		}
	};
	return _user$project$Ports$getSub(
		function (_p1) {
			return _user$project$Types$PasswordsResponse(
				toMsg(_p1));
		});
}();
var _user$project$Subscriptions$subscriptions = _elm_lang$core$Platform_Sub$batch(
	{
		ctor: '::',
		_0: _user$project$Subscriptions$gotPasswords,
		_1: {
			ctor: '::',
			_0: _user$project$Subscriptions$gotDownloadUrl,
			_1: {
				ctor: '::',
				_0: _user$project$Ports$fileData(_user$project$Types$FileData),
				_1: {ctor: '[]'}
			}
		}
	});

var _user$project$PwdForm$saveForm = function (model) {
	var updatePasswords = function (_p0) {
		var _p1 = _p0;
		return A2(
			_elm_lang$core$List$sortBy,
			function (_) {
				return _.name;
			},
			function () {
				var _p2 = model.route;
				switch (_p2.ctor) {
					case 'RtNew':
						return {ctor: '::', _0: model.form.rec, _1: model.passwords};
					case 'RtEdit':
						return A2(
							_elm_lang$core$List$map,
							function (itm) {
								return _elm_lang$core$Native_Utils.eq(itm.name, _p2._0) ? model.form.rec : itm;
							},
							model.passwords);
					default:
						return model.passwords;
				}
			}());
	};
	var invalid = function (name) {
		return A2(
			_elm_lang$core$List$any,
			function (r) {
				return _elm_lang$core$Native_Utils.eq(r.name, name);
			},
			model.passwords);
	};
	var isErr = function () {
		var name = model.form.rec.name;
		var _p3 = model.route;
		switch (_p3.ctor) {
			case 'RtNew':
				return invalid(name);
			case 'RtEdit':
				return (!_elm_lang$core$Native_Utils.eq(name, _p3._0)) && invalid(name);
			default:
				return false;
		}
	}();
	var updateForm = F2(
		function (fm, err) {
			return isErr ? _elm_lang$core$Native_Utils.update(
				fm,
				{err: err}) : fm;
		});
	if (isErr) {
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			_elm_lang$core$Native_Utils.update(
				model,
				{
					form: A2(
						updateForm,
						model.form,
						_elm_lang$core$Maybe$Just('Duplicate name'))
				}),
			{
				ctor: '::',
				_0: _elm_lang$core$Platform_Cmd$none,
				_1: {ctor: '[]'}
			});
	} else {
		var _p4 = _user$project$Api$update(
			_elm_lang$core$Native_Utils.update(
				model,
				{
					passwords: updatePasswords(
						{ctor: '_Tuple0'})
				}));
		var md = _p4._0;
		var cm = _p4._1;
		return A2(
			_elm_lang$core$Platform_Cmd_ops['!'],
			md,
			{
				ctor: '::',
				_0: cm,
				_1: {
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$newUrl(
						_user$project$Route$toHash(_user$project$Route$RtList)),
					_1: {ctor: '[]'}
				}
			});
	}
};
var _user$project$PwdForm$updateForm = F2(
	function (msg, frm) {
		var pp = function (r) {
			return _elm_lang$core$Native_Utils.update(
				frm,
				{rec: r});
		};
		var rec = frm.rec;
		var _p5 = msg;
		switch (_p5.ctor) {
			case 'FmName':
				return pp(
					_elm_lang$core$Native_Utils.update(
						rec,
						{name: _p5._0}));
			case 'FmUrl':
				return pp(
					_elm_lang$core$Native_Utils.update(
						rec,
						{url: _p5._0}));
			case 'FmPassword':
				return pp(
					_elm_lang$core$Native_Utils.update(
						rec,
						{password: _p5._0}));
			case 'FmGroup':
				return pp(
					_elm_lang$core$Native_Utils.update(
						rec,
						{grp: _p5._0}));
			case 'FmComment':
				return pp(
					_elm_lang$core$Native_Utils.update(
						rec,
						{comment: _p5._0}));
			default:
				return _elm_lang$core$Native_Utils.update(
					frm,
					{pwdVisible: !frm.pwdVisible});
		}
	});

var _user$project$Update$decrypt = F2(
	function (pwd, data) {
		return A2(
			_elm_lang$core$Result$andThen,
			_elm_lang$core$Json_Decode$decodeString(
				_elm_lang$core$Json_Decode$list(_user$project$PwdRec$decoder)),
			A2(_billstclair$elm_crypto_string$Crypto_Strings$decrypt, pwd, data));
	});
var _user$project$Update$routeChanged = F2(
	function (route, model) {
		var findRec = F2(
			function (name, lst) {
				findRec:
				while (true) {
					var _p0 = lst;
					if (_p0.ctor === '[]') {
						return _user$project$PwdRec$empty;
					} else {
						var _p1 = _p0._0;
						if (_elm_lang$core$Native_Utils.eq(_p1.name, name)) {
							return _p1;
						} else {
							var _v1 = name,
								_v2 = _p0._1;
							name = _v1;
							lst = _v2;
							continue findRec;
						}
					}
				}
			});
		var _p2 = route;
		switch (_p2.ctor) {
			case 'RtNew':
				return _elm_lang$core$Native_Utils.update(
					model,
					{form: _user$project$Types$emptyForm});
			case 'RtEdit':
				return _elm_lang$core$Native_Utils.update(
					model,
					{
						form: _elm_lang$core$Native_Utils.update(
							_user$project$Types$emptyForm,
							{
								rec: A2(findRec, _p2._0, model.passwords)
							})
					});
			case 'RtPasswordChangeForm':
				return _elm_lang$core$Native_Utils.update(
					model,
					{formPassword: ''});
			default:
				return model;
		}
	});
var _user$project$Update$navigateTo = function (r) {
	return _elm_lang$navigation$Navigation$newUrl(
		_user$project$Route$toHash(r));
};
var _user$project$Update$update = F2(
	function (msg, model_) {
		var model = function () {
			var _p3 = msg;
			if (_p3.ctor === 'Tick') {
				return model_;
			} else {
				return _elm_lang$core$Native_Utils.update(
					model_,
					{ticks: 0});
			}
		}();
		var _p4 = msg;
		switch (_p4.ctor) {
			case 'PasswordsResponse':
				var newState = function () {
					var _p5 = _p4._0;
					if (_p5.ctor === 'Err') {
						if (_p5._0.ctor === 'NotFound') {
							return _user$project$Types$Missing;
						} else {
							return _user$project$Types$LoadingFailed(_p5._0._0);
						}
					} else {
						return A2(_user$project$Types$Sealed, false, _p5._0);
					}
				}();
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{initState: newState}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'FmLogin':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{formPassword: _p4._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'TryPassword':
				var pwd = model.formPassword;
				var _p6 = model.initState;
				switch (_p6.ctor) {
					case 'Sealed':
						var _p8 = _p6._1;
						var _p7 = A2(_user$project$Update$decrypt, pwd, _p8);
						if (_p7.ctor === 'Ok') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{
										passwords: A2(
											_elm_lang$core$List$sortBy,
											function (_) {
												return _.name;
											},
											_p7._0),
										initState: _user$project$Types$Ready,
										masterPassword: pwd
									}),
								_1: _elm_lang$core$Platform_Cmd$none
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{
										initState: A2(_user$project$Types$Sealed, true, _p8),
										formPassword: ''
									}),
								_1: _elm_lang$core$Platform_Cmd$none
							};
						}
					case 'Missing':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{
									passwords: {ctor: '[]'},
									initState: _user$project$Types$Ready,
									masterPassword: pwd
								}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					default:
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'RouteTo':
				var newRoute = _user$project$Route$parseLocation(_p4._0);
				var newModel = A2(_user$project$Update$routeChanged, newRoute, model);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						newModel,
						{route: newRoute}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'NavigateTo':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _elm_lang$navigation$Navigation$newUrl(
						_user$project$Route$toHash(_p4._0))
				};
			case 'MsgForm':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							form: A2(_user$project$PwdForm$updateForm, _p4._0, model.form)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'SaveForm':
				return _user$project$PwdForm$saveForm(model);
			case 'Debug':
				return A2(
					_elm_lang$core$Debug$log,
					_p4._0,
					{ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none});
			case 'CopyToClipboard':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _user$project$Ports$writeClipboard(_p4._0)
				};
			case 'DeleteItem':
				var newPasswords = A2(
					_elm_lang$core$List$filter,
					function (r) {
						return !_elm_lang$core$Native_Utils.eq(r.name, _p4._0);
					},
					model.passwords);
				var _p9 = _user$project$Api$update(
					_elm_lang$core$Native_Utils.update(
						model,
						{passwords: newPasswords}));
				var newModel = _p9._0;
				var cmd = _p9._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					{
						ctor: '::',
						_0: cmd,
						_1: {
							ctor: '::',
							_0: _user$project$Update$navigateTo(_user$project$Route$RtList),
							_1: {ctor: '[]'}
						}
					});
			case 'GotSeed':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{
							seed: _elm_lang$core$Random$initialSeed(
								_elm_lang$core$Basics$truncate(
									_elm_lang$core$Time$inMilliseconds(_p4._0)))
						}),
					{
						ctor: '::',
						_0: _elm_lang$core$Platform_Cmd$none,
						_1: {ctor: '[]'}
					});
			case 'ChangeMasterPassword':
				var _p10 = _user$project$Api$update(
					_elm_lang$core$Native_Utils.update(
						model,
						{masterPassword: _p4._0}));
				var newModel = _p10._0;
				var cmd = _p10._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					{
						ctor: '::',
						_0: cmd,
						_1: {
							ctor: '::',
							_0: _user$project$Update$navigateTo(_user$project$Route$RtList),
							_1: {ctor: '[]'}
						}
					});
			case 'PrepareDownload':
				var jsonPwds = A2(
					_elm_lang$core$Json_Encode$encode,
					2,
					_elm_lang$core$Json_Encode$list(
						A2(_elm_lang$core$List$map, _user$project$PwdRec$encode, model.passwords)));
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _user$project$Ports$makeDownloadUrl(jsonPwds),
						_1: {ctor: '[]'}
					});
			case 'DownloadUrlCreated':
				var download = {url: _p4._0, label: 'Click here to start download'};
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_elm_lang$core$Native_Utils.update(
						model,
						{download: download}),
					{
						ctor: '::',
						_0: _user$project$Update$navigateTo(_user$project$Route$RtDownload),
						_1: {ctor: '[]'}
					});
			case 'Tick':
				var newTicks = model.ticks + 1;
				var newModel = (_elm_lang$core$Native_Utils.cmp(newTicks, 30) < 0) ? _elm_lang$core$Native_Utils.update(
					model,
					{ticks: newTicks}) : _elm_lang$core$Native_Utils.update(
					_user$project$Types$emptyModel,
					{initState: _user$project$Types$LoggedOut});
				return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
			case 'UploadPasswords':
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{
						ctor: '::',
						_0: _user$project$Ports$readFile('passwords-file'),
						_1: {ctor: '[]'}
					});
			default:
				var newPasswords = function () {
					var _p11 = A2(
						_elm_lang$core$Json_Decode$decodeString,
						_elm_lang$core$Json_Decode$list(_user$project$PwdRec$decoder),
						_p4._0);
					if (_p11.ctor === 'Ok') {
						return _p11._0;
					} else {
						return model.passwords;
					}
				}();
				var _p12 = _user$project$Api$update(
					_elm_lang$core$Native_Utils.update(
						model,
						{
							passwords: A2(
								_elm_lang$core$List$sortBy,
								function (_) {
									return _.name;
								},
								newPasswords)
						}));
				var newModel = _p12._0;
				var cmd = _p12._1;
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					newModel,
					{
						ctor: '::',
						_0: cmd,
						_1: {
							ctor: '::',
							_0: _user$project$Update$navigateTo(_user$project$Route$RtList),
							_1: {ctor: '[]'}
						}
					});
		}
	});

var _user$project$View$viewLoggedOut = A2(
	_elm_lang$html$Html$div,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text('logged out'),
		_1: {ctor: '[]'}
	});
var _user$project$View$btn = F2(
	function (label, msg) {
		return A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('btn'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(msg),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(label),
				_1: {ctor: '[]'}
			});
	});
var _user$project$View$formRow = F2(
	function (label, fld) {
		return A2(
			_elm_lang$html$Html$tr,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-row'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$td,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(label),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$td,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: fld,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$View$errMsg = function (s) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('rec err'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(s),
			_1: {ctor: '[]'}
		});
};
var _user$project$View$row = function (content) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('rec'),
			_1: {ctor: '[]'}
		},
		content);
};
var _user$project$View$viewLogin = F2(
	function (pwd, label) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('header'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('login'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _user$project$View$row(
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(label),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$table,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_user$project$View$formRow,
									'password',
									A2(
										_elm_lang$html$Html$input,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$value(pwd),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$type_('password'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onInput(_user$project$Types$FmLogin),
													_1: {ctor: '[]'}
												}
											}
										},
										{ctor: '[]'})),
								_1: {
									ctor: '::',
									_0: A2(
										_user$project$View$formRow,
										'',
										A2(_user$project$View$btn, 'login', _user$project$Types$TryPassword)),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$View$action = F2(
	function (label, msg) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(msg),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('action'),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(label),
				_1: {ctor: '[]'}
			});
	});
var _user$project$View$menuItem = F2(
	function (label, msg) {
		return _user$project$View$row(
			{
				ctor: '::',
				_0: A2(_user$project$View$action, label, msg),
				_1: {ctor: '[]'}
			});
	});
var _user$project$View$menuLink = F2(
	function (label, route) {
		return A2(
			_user$project$View$menuItem,
			label,
			_user$project$Types$NavigateTo(route));
	});
var _user$project$View$link = F2(
	function (label, route) {
		return A2(
			_elm_lang$html$Html$a,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					_user$project$Types$NavigateTo(route)),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('action'),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(label),
				_1: {ctor: '[]'}
			});
	});
var _user$project$View$backToList = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('header'),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$i,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('fa fa-arrow-left action'),
				_1: {ctor: '[]'}
			},
			{ctor: '[]'}),
		_1: {
			ctor: '::',
			_0: A2(_user$project$View$link, ' back to list', _user$project$Route$RtList),
			_1: {ctor: '[]'}
		}
	});
var _user$project$View$viewForm = function (_p0) {
	var _p1 = _p0;
	var _p7 = _p1.rec;
	var _p6 = _p1.pwdVisible;
	var errBar = function () {
		var _p2 = _p1.err;
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$html$Html$text('');
		} else {
			return _user$project$View$errMsg(_p2._0);
		}
	}();
	var $switch = A2(
		_user$project$View$action,
		_p6 ? 'Hide' : 'Show',
		_user$project$Types$MsgForm(_user$project$Types$FmFlipPwdVisible));
	var addType = function (attrs) {
		return _p6 ? attrs : {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$type_('password'),
			_1: attrs
		};
	};
	var pwdAttrs = addType(
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$value(_p7.password),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onInput(
					function (_p3) {
						return _user$project$Types$MsgForm(
							_user$project$Types$FmPassword(_p3));
					}),
				_1: {ctor: '[]'}
			}
		});
	var inp = F2(
		function (val, msg) {
			return A2(
				_elm_lang$html$Html$input,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$value(val),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onInput(
							function (_p4) {
								return _user$project$Types$MsgForm(
									msg(_p4));
							}),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'});
		});
	var tbl = A2(
		_elm_lang$html$Html$table,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_user$project$View$formRow,
				'name',
				A2(inp, _p7.name, _user$project$Types$FmName)),
			_1: {
				ctor: '::',
				_0: A2(
					_user$project$View$formRow,
					'url',
					A2(inp, _p7.url, _user$project$Types$FmUrl)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$View$formRow,
						'password',
						A2(
							_elm_lang$html$Html$span,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$input,
									pwdAttrs,
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: $switch,
									_1: {ctor: '[]'}
								}
							})),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$View$formRow,
							'group',
							A2(inp, _p7.grp, _user$project$Types$FmGroup)),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$View$formRow,
								'comment',
								A2(
									_elm_lang$html$Html$textarea,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$value(_p7.comment),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(
												function (_p5) {
													return _user$project$Types$MsgForm(
														_user$project$Types$FmComment(_p5));
												}),
											_1: {ctor: '[]'}
										}
									},
									{ctor: '[]'})),
							_1: {
								ctor: '::',
								_0: A2(
									_user$project$View$formRow,
									'',
									A2(_user$project$View$btn, 'save', _user$project$Types$SaveForm)),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$View$backToList,
			_1: {
				ctor: '::',
				_0: errBar,
				_1: {
					ctor: '::',
					_0: tbl,
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$View$viewChangeMasterPassword = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$View$backToList,
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$table,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_user$project$View$formRow,
							'new password',
							A2(
								_elm_lang$html$Html$input,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$value(model.formPassword),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$type_('password'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(_user$project$Types$FmLogin),
											_1: {ctor: '[]'}
										}
									}
								},
								{ctor: '[]'})),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$View$formRow,
								'',
								A2(
									_user$project$View$btn,
									'update',
									_user$project$Types$ChangeMasterPassword(model.formPassword))),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$View$viewDownload = function (_p8) {
	var _p9 = _p8;
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$View$backToList,
			_1: {
				ctor: '::',
				_0: _user$project$View$row(
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$href(_p9.url),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$downloadAs('passwords.json'),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p9.label),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$View$viewUpload = A2(
	_elm_lang$html$Html$div,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _user$project$View$backToList,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$table,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_user$project$View$formRow,
						'Select file',
						A2(
							_elm_lang$html$Html$input,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$type_('file'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$id('passwords-file'),
									_1: {ctor: '[]'}
								}
							},
							{ctor: '[]'})),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$View$formRow,
							'',
							A2(_user$project$View$btn, 'upload', _user$project$Types$UploadPasswords)),
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		}
	});
var _user$project$View$viewMenu = A2(
	_elm_lang$html$Html$div,
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _user$project$View$backToList,
		_1: {
			ctor: '::',
			_0: A2(_user$project$View$menuLink, 'Change master password', _user$project$Route$RtPasswordChangeForm),
			_1: {
				ctor: '::',
				_0: A2(_user$project$View$menuItem, 'Download unencrypted passwords', _user$project$Types$PrepareDownload),
				_1: {
					ctor: '::',
					_0: A2(_user$project$View$menuLink, 'Upload unencrypted passwords', _user$project$Route$RtUpload),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _user$project$View$viewItemMenu = function (rec) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _user$project$View$backToList,
			_1: {
				ctor: '::',
				_0: _user$project$View$row(
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h3,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(rec.name),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$View$menuLink,
						'Edit',
						_user$project$Route$RtEdit(rec.name)),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$View$menuItem,
							'Copy password',
							_user$project$Types$CopyToClipboard(rec.password)),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$View$menuItem,
								'Delete',
								_user$project$Types$DeleteItem(rec.name)),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _user$project$View$viewList = function (pwds) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('header'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(_user$project$View$link, 'Menu', _user$project$Route$RtMenu),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _user$project$View$row(
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$i,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('fa fa-plus action'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$View$action,
								' New',
								_user$project$Types$NavigateTo(_user$project$Route$RtNew)),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						A2(
							_elm_lang$core$List$map,
							function (r) {
								return _user$project$View$row(
									{
										ctor: '::',
										_0: A2(
											_user$project$View$link,
											r.name,
											_user$project$Route$RtItemMenu(r.name)),
										_1: {ctor: '[]'}
									});
							},
							pwds)),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$View$viewReady = function (model) {
	var findItem = F2(
		function (name, lst) {
			findItem:
			while (true) {
				var _p10 = lst;
				if (_p10.ctor === '[]') {
					return _user$project$PwdRec$empty;
				} else {
					var _p11 = _p10._0;
					if (_elm_lang$core$Native_Utils.eq(_p11.name, name)) {
						return _p11;
					} else {
						var _v4 = name,
							_v5 = _p10._1;
						name = _v4;
						lst = _v5;
						continue findItem;
					}
				}
			}
		});
	var _p12 = model.route;
	switch (_p12.ctor) {
		case 'RtList':
			return _user$project$View$viewList(model.passwords);
		case 'RtNew':
			return _user$project$View$viewForm(model.form);
		case 'RtEdit':
			return _user$project$View$viewForm(model.form);
		case 'RtItemMenu':
			return _user$project$View$viewItemMenu(
				A2(findItem, _p12._0, model.passwords));
		case 'RtNotFound':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(_elm_lang$core$Basics_ops['++'], 'Not found:', _p12._0)),
					_1: {ctor: '[]'}
				});
		case 'RtMenu':
			return _user$project$View$viewMenu;
		case 'RtPasswordChangeForm':
			return _user$project$View$viewChangeMasterPassword(model);
		case 'RtDownload':
			return _user$project$View$viewDownload(model.download);
		default:
			return _user$project$View$viewUpload;
	}
};
var _user$project$View$view = function (model) {
	var content = function () {
		var _p13 = model.initState;
		switch (_p13.ctor) {
			case 'Loading':
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Loading ...'),
						_1: {ctor: '[]'}
					});
			case 'Missing':
				return A2(_user$project$View$viewLogin, model.formPassword, 'Creating vault. Enter new password');
			case 'LoadingFailed':
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_elm_lang$core$Basics_ops['++'], 'Error loading passwords: ', _p13._0)),
						_1: {ctor: '[]'}
					});
			case 'Sealed':
				var label = _p13._0 ? 'Bad password, try again.' : 'Enter password';
				return A2(_user$project$View$viewLogin, model.formPassword, label);
			case 'Ready':
				return _user$project$View$viewReady(model);
			default:
				return _user$project$View$viewLoggedOut;
		}
	}();
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('content'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: content,
			_1: {ctor: '[]'}
		});
};

var _user$project$Main$main = A2(
	_elm_lang$navigation$Navigation$program,
	_user$project$Types$RouteTo,
	{
		init: _user$project$Init$init,
		update: _user$project$Update$update,
		view: _user$project$View$view,
		subscriptions: function (_p0) {
			return _user$project$Subscriptions$subscriptions;
		}
	})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

