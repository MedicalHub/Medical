o3v = {};
// gl-matrix 1.0.0 - https://github.com/toji/gl-matrix/blob/master/LICENSE.md
var MatrixArray = typeof Float32Array !== "undefined" ? Float32Array : Array,
	glMatrixArrayType = MatrixArray,
	vec3 = {},
	mat3 = {},
	mat4 = {},
	quat4 = {};
vec3.create = function (a) {
	var b = new MatrixArray(3);
	a && (b[0] = a[0], b[1] = a[1], b[2] = a[2]);
	return b
};
vec3.set = function (a, b) {
	b[0] = a[0];
	b[1] = a[1];
	b[2] = a[2];
	return b
};
vec3.add = function (a, b, c) {
	if (!c || a === c) return a[0] += b[0], a[1] += b[1], a[2] += b[2], a;
	c[0] = a[0] + b[0];
	c[1] = a[1] + b[1];
	c[2] = a[2] + b[2];
	return c
};
vec3.subtract = function (a, b, c) {
	if (!c || a === c) return a[0] -= b[0], a[1] -= b[1], a[2] -= b[2], a;
	c[0] = a[0] - b[0];
	c[1] = a[1] - b[1];
	c[2] = a[2] - b[2];
	return c
};
vec3.negate = function (a, b) {
	b || (b = a);
	b[0] = -a[0];
	b[1] = -a[1];
	b[2] = -a[2];
	return b
};
vec3.scale = function (a, b, c) {
	if (!c || a === c) return a[0] *= b, a[1] *= b, a[2] *= b, a;
	c[0] = a[0] * b;
	c[1] = a[1] * b;
	c[2] = a[2] * b;
	return c
};
vec3.normalize = function (a, b) {
	b || (b = a);
	var c = a[0],
		d = a[1],
		e = a[2],
		g = Math.sqrt(c * c + d * d + e * e);
	if (g) {
		if (g === 1) return b[0] = c, b[1] = d, b[2] = e, b
	} else return b[0] = 0, b[1] = 0, b[2] = 0, b;
	g = 1 / g;
	b[0] = c * g;
	b[1] = d * g;
	b[2] = e * g;
	return b
};
vec3.cross = function (a, b, c) {
	c || (c = a);
	var d = a[0],
		e = a[1],
		a = a[2],
		g = b[0],
		f = b[1],
		b = b[2];
	c[0] = e * b - a * f;
	c[1] = a * g - d * b;
	c[2] = d * f - e * g;
	return c
};
vec3.length = function (a) {
	var b = a[0],
		c = a[1],
		a = a[2];
	return Math.sqrt(b * b + c * c + a * a)
};
vec3.dot = function (a, b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
};
vec3.direction = function (a, b, c) {
	c || (c = a);
	var d = a[0] - b[0],
		e = a[1] - b[1],
		a = a[2] - b[2],
		b = Math.sqrt(d * d + e * e + a * a);
	if (!b) return c[0] = 0, c[1] = 0, c[2] = 0, c;
	b = 1 / b;
	c[0] = d * b;
	c[1] = e * b;
	c[2] = a * b;
	return c
};
vec3.lerp = function (a, b, c, d) {
	d || (d = a);
	d[0] = a[0] + c * (b[0] - a[0]);
	d[1] = a[1] + c * (b[1] - a[1]);
	d[2] = a[2] + c * (b[2] - a[2]);
	return d
};
vec3.str = function (a) {
	return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
};
mat3.create = function (a) {
	var b = new MatrixArray(9);
	a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8]);
	return b
};
mat3.set = function (a, b) {
	b[0] = a[0];
	b[1] = a[1];
	b[2] = a[2];
	b[3] = a[3];
	b[4] = a[4];
	b[5] = a[5];
	b[6] = a[6];
	b[7] = a[7];
	b[8] = a[8];
	return b
};
mat3.identity = function (a) {
	a[0] = 1;
	a[1] = 0;
	a[2] = 0;
	a[3] = 0;
	a[4] = 1;
	a[5] = 0;
	a[6] = 0;
	a[7] = 0;
	a[8] = 1;
	return a
};
mat3.transpose = function (a, b) {
	if (!b || a === b) {
		var c = a[1],
			d = a[2],
			e = a[5];
		a[1] = a[3];
		a[2] = a[6];
		a[3] = c;
		a[5] = a[7];
		a[6] = d;
		a[7] = e;
		return a
	}
	b[0] = a[0];
	b[1] = a[3];
	b[2] = a[6];
	b[3] = a[1];
	b[4] = a[4];
	b[5] = a[7];
	b[6] = a[2];
	b[7] = a[5];
	b[8] = a[8];
	return b
};
mat3.toMat4 = function (a, b) {
	b || (b = mat4.create());
	b[15] = 1;
	b[14] = 0;
	b[13] = 0;
	b[12] = 0;
	b[11] = 0;
	b[10] = a[8];
	b[9] = a[7];
	b[8] = a[6];
	b[7] = 0;
	b[6] = a[5];
	b[5] = a[4];
	b[4] = a[3];
	b[3] = 0;
	b[2] = a[2];
	b[1] = a[1];
	b[0] = a[0];
	return b
};
mat3.str = function (a) {
	return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + "]"
};
mat4.create = function (a) {
	var b = new MatrixArray(16);
	a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]);
	return b
};
mat4.set = function (a, b) {
	b[0] = a[0];
	b[1] = a[1];
	b[2] = a[2];
	b[3] = a[3];
	b[4] = a[4];
	b[5] = a[5];
	b[6] = a[6];
	b[7] = a[7];
	b[8] = a[8];
	b[9] = a[9];
	b[10] = a[10];
	b[11] = a[11];
	b[12] = a[12];
	b[13] = a[13];
	b[14] = a[14];
	b[15] = a[15];
	return b
};
mat4.identity = function (a) {
	a[0] = 1;
	a[1] = 0;
	a[2] = 0;
	a[3] = 0;
	a[4] = 0;
	a[5] = 1;
	a[6] = 0;
	a[7] = 0;
	a[8] = 0;
	a[9] = 0;
	a[10] = 1;
	a[11] = 0;
	a[12] = 0;
	a[13] = 0;
	a[14] = 0;
	a[15] = 1;
	return a
};
mat4.transpose = function (a, b) {
	if (!b || a === b) {
		var c = a[1],
			d = a[2],
			e = a[3],
			g = a[6],
			f = a[7],
			h = a[11];
		a[1] = a[4];
		a[2] = a[8];
		a[3] = a[12];
		a[4] = c;
		a[6] = a[9];
		a[7] = a[13];
		a[8] = d;
		a[9] = g;
		a[11] = a[14];
		a[12] = e;
		a[13] = f;
		a[14] = h;
		return a
	}
	b[0] = a[0];
	b[1] = a[4];
	b[2] = a[8];
	b[3] = a[12];
	b[4] = a[1];
	b[5] = a[5];
	b[6] = a[9];
	b[7] = a[13];
	b[8] = a[2];
	b[9] = a[6];
	b[10] = a[10];
	b[11] = a[14];
	b[12] = a[3];
	b[13] = a[7];
	b[14] = a[11];
	b[15] = a[15];
	return b
};
mat4.determinant = function (a) {
	var b = a[0],
		c = a[1],
		d = a[2],
		e = a[3],
		g = a[4],
		f = a[5],
		h = a[6],
		j = a[7],
		i = a[8],
		k = a[9],
		l = a[10],
		n = a[11],
		o = a[12],
		m = a[13],
		p = a[14],
		a = a[15];
	return o * k * h * e - i * m * h * e - o * f * l * e + g * m * l * e + i * f * p * e - g * k * p * e - o * k * d * j + i * m * d * j + o * c * l * j - b * m * l * j - i * c * p * j + b * k * p * j + o * f * d * n - g * m * d * n - o * c * h * n + b * m * h * n + g * c * p * n - b * f * p * n - i * f * d * a + g * k * d * a + i * c * h * a - b * k * h * a - g * c * l * a + b * f * l * a
};
mat4.inverse = function (a, b) {
	b || (b = a);
	var c = a[0],
		d = a[1],
		e = a[2],
		g = a[3],
		f = a[4],
		h = a[5],
		j = a[6],
		i = a[7],
		k = a[8],
		l = a[9],
		n = a[10],
		o = a[11],
		m = a[12],
		p = a[13],
		r = a[14],
		s = a[15],
		A = c * h - d * f,
		B = c * j - e * f,
		t = c * i - g * f,
		u = d * j - e * h,
		v = d * i - g * h,
		w = e * i - g * j,
		x = k * p - l * m,
		y = k * r - n * m,
		z = k * s - o * m,
		C = l * r - n * p,
		D = l * s - o * p,
		E = n * s - o * r,
		q = 1 / (A * E - B * D + t * C + u * z - v * y + w * x);
	b[0] = (h * E - j * D + i * C) * q;
	b[1] = (-d * E + e * D - g * C) * q;
	b[2] = (p * w - r * v + s * u) * q;
	b[3] = (-l * w + n * v - o * u) * q;
	b[4] = (-f * E + j * z - i * y) * q;
	b[5] = (c * E - e * z + g * y) * q;
	b[6] = (-m * w + r * t - s * B) * q;
	b[7] = (k * w - n * t + o * B) * q;
	b[8] = (f * D - h * z + i * x) * q;
	b[9] = (-c * D + d * z - g * x) * q;
	b[10] = (m * v - p * t + s * A) * q;
	b[11] = (-k * v + l * t - o * A) * q;
	b[12] = (-f * C + h * y - j * x) * q;
	b[13] = (c * C - d * y + e * x) * q;
	b[14] = (-m * u + p * B - r * A) * q;
	b[15] = (k * u - l * B + n * A) * q;
	return b
};
mat4.toRotationMat = function (a, b) {
	b || (b = mat4.create());
	b[0] = a[0];
	b[1] = a[1];
	b[2] = a[2];
	b[3] = a[3];
	b[4] = a[4];
	b[5] = a[5];
	b[6] = a[6];
	b[7] = a[7];
	b[8] = a[8];
	b[9] = a[9];
	b[10] = a[10];
	b[11] = a[11];
	b[12] = 0;
	b[13] = 0;
	b[14] = 0;
	b[15] = 1;
	return b
};
mat4.toMat3 = function (a, b) {
	b || (b = mat3.create());
	b[0] = a[0];
	b[1] = a[1];
	b[2] = a[2];
	b[3] = a[4];
	b[4] = a[5];
	b[5] = a[6];
	b[6] = a[8];
	b[7] = a[9];
	b[8] = a[10];
	return b
};
mat4.toInverseMat3 = function (a, b) {
	var c = a[0],
		d = a[1],
		e = a[2],
		g = a[4],
		f = a[5],
		h = a[6],
		j = a[8],
		i = a[9],
		k = a[10],
		l = k * f - h * i,
		n = -k * g + h * j,
		o = i * g - f * j,
		m = c * l + d * n + e * o;
	if (!m) return null;
	m = 1 / m;
	b || (b = mat3.create());
	b[0] = l * m;
	b[1] = (-k * d + e * i) * m;
	b[2] = (h * d - e * f) * m;
	b[3] = n * m;
	b[4] = (k * c - e * j) * m;
	b[5] = (-h * c + e * g) * m;
	b[6] = o * m;
	b[7] = (-i * c + d * j) * m;
	b[8] = (f * c - d * g) * m;
	return b
};
mat4.multiply = function (a, b, c) {
	c || (c = a);
	var d = a[0],
		e = a[1],
		g = a[2],
		f = a[3],
		h = a[4],
		j = a[5],
		i = a[6],
		k = a[7],
		l = a[8],
		n = a[9],
		o = a[10],
		m = a[11],
		p = a[12],
		r = a[13],
		s = a[14],
		a = a[15],
		A = b[0],
		B = b[1],
		t = b[2],
		u = b[3],
		v = b[4],
		w = b[5],
		x = b[6],
		y = b[7],
		z = b[8],
		C = b[9],
		D = b[10],
		E = b[11],
		q = b[12],
		F = b[13],
		G = b[14],
		b = b[15];
	c[0] = A * d + B * h + t * l + u * p;
	c[1] = A * e + B * j + t * n + u * r;
	c[2] = A * g + B * i + t * o + u * s;
	c[3] = A * f + B * k + t * m + u * a;
	c[4] = v * d + w * h + x * l + y * p;
	c[5] = v * e + w * j + x * n + y * r;
	c[6] = v * g + w * i + x * o + y * s;
	c[7] = v * f + w * k + x * m + y * a;
	c[8] = z * d + C * h + D * l + E * p;
	c[9] = z * e + C * j + D * n + E * r;
	c[10] = z * g + C *
		i + D * o + E * s;
	c[11] = z * f + C * k + D * m + E * a;
	c[12] = q * d + F * h + G * l + b * p;
	c[13] = q * e + F * j + G * n + b * r;
	c[14] = q * g + F * i + G * o + b * s;
	c[15] = q * f + F * k + G * m + b * a;
	return c
};
mat4.multiplyVec3 = function (a, b, c) {
	c || (c = b);
	var d = b[0],
		e = b[1],
		b = b[2];
	c[0] = a[0] * d + a[4] * e + a[8] * b + a[12];
	c[1] = a[1] * d + a[5] * e + a[9] * b + a[13];
	c[2] = a[2] * d + a[6] * e + a[10] * b + a[14];
	return c
};
mat4.multiplyVec4 = function (a, b, c) {
	c || (c = b);
	var d = b[0],
		e = b[1],
		g = b[2],
		b = b[3];
	c[0] = a[0] * d + a[4] * e + a[8] * g + a[12] * b;
	c[1] = a[1] * d + a[5] * e + a[9] * g + a[13] * b;
	c[2] = a[2] * d + a[6] * e + a[10] * g + a[14] * b;
	c[3] = a[3] * d + a[7] * e + a[11] * g + a[15] * b;
	return c
};
mat4.translate = function (a, b, c) {
	var d = b[0],
		e = b[1],
		b = b[2],
		g, f, h, j, i, k, l, n, o, m, p, r;
	if (!c || a === c) return a[12] = a[0] * d + a[4] * e + a[8] * b + a[12], a[13] = a[1] * d + a[5] * e + a[9] * b + a[13], a[14] = a[2] * d + a[6] * e + a[10] * b + a[14], a[15] = a[3] * d + a[7] * e + a[11] * b + a[15], a;
	g = a[0];
	f = a[1];
	h = a[2];
	j = a[3];
	i = a[4];
	k = a[5];
	l = a[6];
	n = a[7];
	o = a[8];
	m = a[9];
	p = a[10];
	r = a[11];
	c[0] = g;
	c[1] = f;
	c[2] = h;
	c[3] = j;
	c[4] = i;
	c[5] = k;
	c[6] = l;
	c[7] = n;
	c[8] = o;
	c[9] = m;
	c[10] = p;
	c[11] = r;
	c[12] = g * d + i * e + o * b + a[12];
	c[13] = f * d + k * e + m * b + a[13];
	c[14] = h * d + l * e + p * b + a[14];
	c[15] = j * d + n * e + r * b + a[15];
	return c
};
mat4.scale = function (a, b, c) {
	var d = b[0],
		e = b[1],
		b = b[2];
	if (!c || a === c) return a[0] *= d, a[1] *= d, a[2] *= d, a[3] *= d, a[4] *= e, a[5] *= e, a[6] *= e, a[7] *= e, a[8] *= b, a[9] *= b, a[10] *= b, a[11] *= b, a;
	c[0] = a[0] * d;
	c[1] = a[1] * d;
	c[2] = a[2] * d;
	c[3] = a[3] * d;
	c[4] = a[4] * e;
	c[5] = a[5] * e;
	c[6] = a[6] * e;
	c[7] = a[7] * e;
	c[8] = a[8] * b;
	c[9] = a[9] * b;
	c[10] = a[10] * b;
	c[11] = a[11] * b;
	c[12] = a[12];
	c[13] = a[13];
	c[14] = a[14];
	c[15] = a[15];
	return c
};
mat4.rotate = function (a, b, c, d) {
	var e = c[0],
		g = c[1],
		c = c[2],
		f = Math.sqrt(e * e + g * g + c * c),
		h, j, i, k, l, n, o, m, p, r, s, A, B, t, u, v, w, x, y, z;
	if (!f) return null;
	f !== 1 && (f = 1 / f, e *= f, g *= f, c *= f);
	h = Math.sin(b);
	j = Math.cos(b);
	i = 1 - j;
	b = a[0];
	f = a[1];
	k = a[2];
	l = a[3];
	n = a[4];
	o = a[5];
	m = a[6];
	p = a[7];
	r = a[8];
	s = a[9];
	A = a[10];
	B = a[11];
	t = e * e * i + j;
	u = g * e * i + c * h;
	v = c * e * i - g * h;
	w = e * g * i - c * h;
	x = g * g * i + j;
	y = c * g * i + e * h;
	z = e * c * i + g * h;
	e = g * c * i - e * h;
	g = c * c * i + j;
	d ? a !== d && (d[12] = a[12], d[13] = a[13], d[14] = a[14], d[15] = a[15]) : d = a;
	d[0] = b * t + n * u + r * v;
	d[1] = f * t + o * u + s * v;
	d[2] = k * t + m * u + A *
		v;
	d[3] = l * t + p * u + B * v;
	d[4] = b * w + n * x + r * y;
	d[5] = f * w + o * x + s * y;
	d[6] = k * w + m * x + A * y;
	d[7] = l * w + p * x + B * y;
	d[8] = b * z + n * e + r * g;
	d[9] = f * z + o * e + s * g;
	d[10] = k * z + m * e + A * g;
	d[11] = l * z + p * e + B * g;
	return d
};
mat4.rotateX = function (a, b, c) {
	var d = Math.sin(b),
		b = Math.cos(b),
		e = a[4],
		g = a[5],
		f = a[6],
		h = a[7],
		j = a[8],
		i = a[9],
		k = a[10],
		l = a[11];
	c ? a !== c && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
	c[4] = e * b + j * d;
	c[5] = g * b + i * d;
	c[6] = f * b + k * d;
	c[7] = h * b + l * d;
	c[8] = e * -d + j * b;
	c[9] = g * -d + i * b;
	c[10] = f * -d + k * b;
	c[11] = h * -d + l * b;
	return c
};
mat4.rotateY = function (a, b, c) {
	var d = Math.sin(b),
		b = Math.cos(b),
		e = a[0],
		g = a[1],
		f = a[2],
		h = a[3],
		j = a[8],
		i = a[9],
		k = a[10],
		l = a[11];
	c ? a !== c && (c[4] = a[4], c[5] = a[5], c[6] = a[6], c[7] = a[7], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
	c[0] = e * b + j * -d;
	c[1] = g * b + i * -d;
	c[2] = f * b + k * -d;
	c[3] = h * b + l * -d;
	c[8] = e * d + j * b;
	c[9] = g * d + i * b;
	c[10] = f * d + k * b;
	c[11] = h * d + l * b;
	return c
};
mat4.rotateZ = function (a, b, c) {
	var d = Math.sin(b),
		b = Math.cos(b),
		e = a[0],
		g = a[1],
		f = a[2],
		h = a[3],
		j = a[4],
		i = a[5],
		k = a[6],
		l = a[7];
	c ? a !== c && (c[8] = a[8], c[9] = a[9], c[10] = a[10], c[11] = a[11], c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
	c[0] = e * b + j * d;
	c[1] = g * b + i * d;
	c[2] = f * b + k * d;
	c[3] = h * b + l * d;
	c[4] = e * -d + j * b;
	c[5] = g * -d + i * b;
	c[6] = f * -d + k * b;
	c[7] = h * -d + l * b;
	return c
};
mat4.frustum = function (a, b, c, d, e, g, f) {
	f || (f = mat4.create());
	var h = b - a,
		j = d - c,
		i = g - e;
	f[0] = e * 2 / h;
	f[1] = 0;
	f[2] = 0;
	f[3] = 0;
	f[4] = 0;
	f[5] = e * 2 / j;
	f[6] = 0;
	f[7] = 0;
	f[8] = (b + a) / h;
	f[9] = (d + c) / j;
	f[10] = -(g + e) / i;
	f[11] = -1;
	f[12] = 0;
	f[13] = 0;
	f[14] = -(g * e * 2) / i;
	f[15] = 0;
	return f
};
mat4.perspective = function (a, b, c, d, e) {
	a = c * Math.tan(a * Math.PI / 360);
	b *= a;
	return mat4.frustum(-b, b, -a, a, c, d, e)
};
mat4.ortho = function (a, b, c, d, e, g, f) {
	f || (f = mat4.create());
	var h = b - a,
		j = d - c,
		i = g - e;
	f[0] = 2 / h;
	f[1] = 0;
	f[2] = 0;
	f[3] = 0;
	f[4] = 0;
	f[5] = 2 / j;
	f[6] = 0;
	f[7] = 0;
	f[8] = 0;
	f[9] = 0;
	f[10] = -2 / i;
	f[11] = 0;
	f[12] = -(a + b) / h;
	f[13] = -(d + c) / j;
	f[14] = -(g + e) / i;
	f[15] = 1;
	return f
};
mat4.lookAt = function (a, b, c, d) {
	d || (d = mat4.create());
	var e, g, f, h, j, i, k, l, n = a[0],
		o = a[1],
		a = a[2];
	g = c[0];
	f = c[1];
	e = c[2];
	c = b[1];
	i = b[2];
	if (n === b[0] && o === c && a === i) return mat4.identity(d);
	c = n - b[0];
	i = o - b[1];
	k = a - b[2];
	l = 1 / Math.sqrt(c * c + i * i + k * k);
	c *= l;
	i *= l;
	k *= l;
	b = f * k - e * i;
	e = e * c - g * k;
	g = g * i - f * c;
	(l = Math.sqrt(b * b + e * e + g * g)) ? (l = 1 / l, b *= l, e *= l, g *= l) : g = e = b = 0;
	f = i * g - k * e;
	h = k * b - c * g;
	j = c * e - i * b;
	(l = Math.sqrt(f * f + h * h + j * j)) ? (l = 1 / l, f *= l, h *= l, j *= l) : j = h = f = 0;
	d[0] = b;
	d[1] = f;
	d[2] = c;
	d[3] = 0;
	d[4] = e;
	d[5] = h;
	d[6] = i;
	d[7] = 0;
	d[8] = g;
	d[9] = j;
	d[10] = k;
	d[11] =
		0;
	d[12] = -(b * n + e * o + g * a);
	d[13] = -(f * n + h * o + j * a);
	d[14] = -(c * n + i * o + k * a);
	d[15] = 1;
	return d
};
mat4.str = function (a) {
	return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
};
quat4.create = function (a) {
	var b = new MatrixArray(4);
	a && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]);
	return b
};
quat4.set = function (a, b) {
	b[0] = a[0];
	b[1] = a[1];
	b[2] = a[2];
	b[3] = a[3];
	return b
};
quat4.calculateW = function (a, b) {
	var c = a[0],
		d = a[1],
		e = a[2];
	if (!b || a === b) return a[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e)), a;
	b[0] = c;
	b[1] = d;
	b[2] = e;
	b[3] = -Math.sqrt(Math.abs(1 - c * c - d * d - e * e));
	return b
};
quat4.inverse = function (a, b) {
	if (!b || a === b) return a[0] *= -1, a[1] *= -1, a[2] *= -1, a;
	b[0] = -a[0];
	b[1] = -a[1];
	b[2] = -a[2];
	b[3] = a[3];
	return b
};
quat4.length = function (a) {
	var b = a[0],
		c = a[1],
		d = a[2],
		a = a[3];
	return Math.sqrt(b * b + c * c + d * d + a * a)
};
quat4.normalize = function (a, b) {
	b || (b = a);
	var c = a[0],
		d = a[1],
		e = a[2],
		g = a[3],
		f = Math.sqrt(c * c + d * d + e * e + g * g);
	if (f === 0) return b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 0, b;
	f = 1 / f;
	b[0] = c * f;
	b[1] = d * f;
	b[2] = e * f;
	b[3] = g * f;
	return b
};
quat4.multiply = function (a, b, c) {
	c || (c = a);
	var d = a[0],
		e = a[1],
		g = a[2],
		a = a[3],
		f = b[0],
		h = b[1],
		j = b[2],
		b = b[3];
	c[0] = d * b + a * f + e * j - g * h;
	c[1] = e * b + a * h + g * f - d * j;
	c[2] = g * b + a * j + d * h - e * f;
	c[3] = a * b - d * f - e * h - g * j;
	return c
};
quat4.multiplyVec3 = function (a, b, c) {
	c || (c = b);
	var d = b[0],
		e = b[1],
		g = b[2],
		b = a[0],
		f = a[1],
		h = a[2],
		a = a[3],
		j = a * d + f * g - h * e,
		i = a * e + h * d - b * g,
		k = a * g + b * e - f * d,
		d = -b * d - f * e - h * g;
	c[0] = j * a + d * -b + i * -h - k * -f;
	c[1] = i * a + d * -f + k * -b - j * -h;
	c[2] = k * a + d * -h + j * -f - i * -b;
	return c
};
quat4.toMat3 = function (a, b) {
	b || (b = mat3.create());
	var c = a[0],
		d = a[1],
		e = a[2],
		g = a[3],
		f = c + c,
		h = d + d,
		j = e + e,
		i = c * f,
		k = c * h;
	c *= j;
	var l = d * h;
	d *= j;
	e *= j;
	f *= g;
	h *= g;
	g *= j;
	b[0] = 1 - (l + e);
	b[1] = k + g;
	b[2] = c - h;
	b[3] = k - g;
	b[4] = 1 - (i + e);
	b[5] = d + f;
	b[6] = c + h;
	b[7] = d - f;
	b[8] = 1 - (i + l);
	return b
};
quat4.toMat4 = function (a, b) {
	b || (b = mat4.create());
	var c = a[0],
		d = a[1],
		e = a[2],
		g = a[3],
		f = c + c,
		h = d + d,
		j = e + e,
		i = c * f,
		k = c * h;
	c *= j;
	var l = d * h;
	d *= j;
	e *= j;
	f *= g;
	h *= g;
	g *= j;
	b[0] = 1 - (l + e);
	b[1] = k + g;
	b[2] = c - h;
	b[3] = 0;
	b[4] = k - g;
	b[5] = 1 - (i + e);
	b[6] = d + f;
	b[7] = 0;
	b[8] = c + h;
	b[9] = d - f;
	b[10] = 1 - (i + l);
	b[11] = 0;
	b[12] = 0;
	b[13] = 0;
	b[14] = 0;
	b[15] = 1;
	return b
};
quat4.slerp = function (a, b, c, d) {
	d || (d = a);
	var e = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3],
		g, f;
	if (Math.abs(e) >= 1) return d !== a && (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3]), d;
	g = Math.acos(e);
	f = Math.sqrt(1 - e * e);
	if (Math.abs(f) < 0.001) return d[0] = a[0] * 0.5 + b[0] * 0.5, d[1] = a[1] * 0.5 + b[1] * 0.5, d[2] = a[2] * 0.5 + b[2] * 0.5, d[3] = a[3] * 0.5 + b[3] * 0.5, d;
	e = Math.sin((1 - c) * g) / f;
	c = Math.sin(c * g) / f;
	d[0] = a[0] * e + b[0] * c;
	d[1] = a[1] * e + b[1] * c;
	d[2] = a[2] * e + b[2] * c;
	d[3] = a[3] * e + b[3] * c;
	return d
};
quat4.str = function (a) {
	return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
};
'use strict';

// Utility wrapper around WebGL. Perserves WebGL semantics, so it
// isn't too object-oriented.

function createContextFromCanvas(canvas) {
	var context = canvas.getContext('experimental-webgl');
	// Automatically use debug wrapper context, if available.
	return typeof WebGLDebugUtils !== 'undefined' ?
		WebGLDebugUtils.makeDebugContext(context, function (err, funcName, args) {
			throw WebGLDebugUtils.glEnumToString(err) + " by " + funcName;
		}) : context;
};

function Shader(gl, source, shaderType) {
	this.gl_ = gl;
	this.handle_ = gl.createShader(shaderType);
	gl.shaderSource(this.handle_, source);
	gl.compileShader(this.handle_);
	if (!gl.getShaderParameter(this.handle_, gl.COMPILE_STATUS)) {
		throw this.info();
	}
}

Shader.prototype.info = function () {
	return this.gl_.getShaderInfoLog(this.handle_);
}

Shader.prototype.type = function () {
	return this.gl_.getShaderParameter(this.handle_, this.gl_.SHADER_TYPE);
}

function vertexShader(gl, source) {
	return new Shader(gl, source, gl.VERTEX_SHADER);
}

function fragmentShader(gl, source) {
	return new Shader(gl, source, gl.FRAGMENT_SHADER);
}

function Program(gl, shaders) {
	this.gl_ = gl;
	this.handle_ = gl.createProgram();
	shaders.forEach(function (shader) {
		gl.attachShader(this.handle_, shader.handle_);
	}, this);
	gl.linkProgram(this.handle_);
	if (!gl.getProgramParameter(this.handle_, gl.LINK_STATUS)) {
		throw this.info();
	}

	var numActiveAttribs = gl.getProgramParameter(this.handle_,
		gl.ACTIVE_ATTRIBUTES);
	this.attribs = [];
	this.set_attrib = {};
	for (var i = 0; i < numActiveAttribs; i++) {
		var active_attrib = gl.getActiveAttrib(this.handle_, i);
		var loc = gl.getAttribLocation(this.handle_, active_attrib.name);
		this.attribs[loc] = active_attrib;
		this.set_attrib[active_attrib.name] = loc;
	}

	var numActiveUniforms = gl.getProgramParameter(this.handle_,
		gl.ACTIVE_UNIFORMS);
	this.uniforms = [];
	this.set_uniform = {};
	for (var j = 0; j < numActiveUniforms; j++) {
		var active_uniform = gl.getActiveUniform(this.handle_, j);
		this.uniforms[j] = active_uniform;
		this.set_uniform[active_uniform.name] = gl.getUniformLocation(
			this.handle_, active_uniform.name);
	}

	this.enabledVertexAttribArrays_ = {};
};

Program.prototype.info = function () {
	return this.gl_.getProgramInfoLog(this.handle_);
};

Program.prototype.use = function () {
	this.gl_.useProgram(this.handle_);
};

Program.prototype.enableVertexAttribArrays = function (attribArrays) {
	for (var i = 0; i < attribArrays.length; ++i) {
		this.enabledVertexAttribArrays_[attribArrays[i]] = true;
		var loc = this.set_attrib[attribArrays[i]];
		if (loc !== undefined) {
			this.gl_.enableVertexAttribArray(loc);
		}
	}
};

Program.prototype.disableVertexAttribArrays = function (attribArrays) {
	for (var i = 0; i < attribArrays.length; ++i) {
		this.enabledVertexAttribArrays_[attribArrays[i]] = false;
		var loc = this.set_attrib[attribArrays[i]];
		if (loc !== undefined) {
			this.gl_.disableVertexAttribArray(loc);
		}
	}
};

Program.prototype.vertexAttribPointers = function (attribArrays) {
	// Only use the enabled ones.
	var numAttribs = attribArrays.length;
	for (var i = 0; i < numAttribs; ++i) {
		var params = attribArrays[i];
		var loc = this.set_attrib[params.name];
		if (this.enabledVertexAttribArrays_[params.name]) {
			var typeBytes = 4; // TODO: 4 assumes gl.FLOAT, use params.type
			this.gl_.vertexAttribPointer(loc, params.size, this.gl_.FLOAT, !!params.normalized, typeBytes * params.stride,
				typeBytes * params.offset);
		}
	}
};

// TODO: seems like texture ought to be a class...

function textureFromArray(gl, width, height, array, opt_texture) {
	var opt_texture = opt_texture || gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, opt_texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, width, height, 0,
		gl.RGB, gl.UNSIGNED_BYTE, array);
	return opt_texture;
}

function textureFromImage(gl, image, opt_texture) {
	// TODO: texture formats. Color, MIP-mapping, etc.
	opt_texture = opt_texture || gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, opt_texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
		gl.LINEAR_MIPMAP_LINEAR);
	gl.generateMipmap(gl.TEXTURE_2D);
	return opt_texture;
}

var TEXTURE_CACHE = {};

function textureFromUrl(gl, url, opt_callback) {
	var cached_texture = TEXTURE_CACHE[url];
	if (cached_texture) {
		return cached_texture;
	}

	var texture = gl.createTexture();
	var image = new Image;
	image.onload = function () {
		textureFromImage(gl, image, texture);
		opt_callback && opt_callback(gl, texture);
	};
	image.onerror = function () {
		textureFromArray(gl, 1, 1, new Uint8Array([255, 255, 255]), texture);
		opt_callback && opt_callback(gl, texture);
	};
	image.src = url;

	TEXTURE_CACHE[url] = texture;
	return texture;
}

function attribBufferData(gl, attribArray) {
	var attribBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, attribBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, attribArray, gl.STATIC_DRAW);
	return attribBuffer;
}

function indexBufferData(gl, indexArray) {
	var indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexArray, gl.STATIC_DRAW);
	return indexBuffer;
}

function addToDisplayList(displayList, begin, end) {
	var back = displayList.length - 1;
	var lastEnd = displayList[back];
	if (begin === lastEnd) {
		displayList[back] = end;
	} else {
		displayList.push(begin, end);
	}
}

// TODO: names/lengths don't really belong here; they probably belong
// with the displayList stuff.
function Mesh(gl, attribArray, indexArray, attribArrays, texture,
	opt_names, opt_lengths, opt_bboxen, opt_startColorIndex) {
	this.gl_ = gl;
	this.attribArrays_ = attribArrays; // TODO: rename to vertex format!
	this.numIndices_ = indexArray.length;
	this.texture_ = texture || null;

	if (opt_bboxen) {
		this.bboxen_ = attribBufferData(gl, opt_bboxen);
	}

	this.vbo_ = attribBufferData(gl, attribArray);
	this.ibo_ = indexBufferData(gl, indexArray);

	this.names_ = opt_names || [];
	this.lengths_ = opt_lengths || [];
	this.starts_ = []; // TODO: typed array?

	var numLengths = this.lengths_.length;
	var start = 0;
	for (var i = 0; i < numLengths; ++i) {
		this.starts_[i] = start;
		start += this.lengths_[i];
	}

	if (opt_startColorIndex !== undefined) {
		// TODO(dkogan): Fix this array length calculating hack.
		var arrayLen = -1;
		for (var i = 0; i < numLengths; i++) {
			var startIndex = this.starts_[i];
			var length = this.lengths_[i];
			for (var j = startIndex; j < startIndex + length; j++) {
				if (indexArray[j] >= arrayLen) {
					arrayLen = indexArray[j] + 1;
				}
			}
		}

		var colorArray = new Float32Array(arrayLen);
		for (var i = 0; i < numLengths; i++) {
			var startIndex = this.starts_[i];
			var length = this.lengths_[i];
			for (var j = startIndex; j < startIndex + length; j++) {
				colorArray[indexArray[j]] = opt_startColorIndex + i;
			}
		}
		this.cbo_ = attribBufferData(gl, colorArray);
	}
}

Mesh.prototype.bind = function (program, opt_forId) {
	var gl = this.gl_;
	if (!opt_forId) {
		gl.bindTexture(gl.TEXTURE_2D, this.texture_);
	}

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibo_);
	gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo_);

	program.vertexAttribPointers(this.attribArrays_);

	// TODO(wonchun): Do this the right way.
	if (opt_forId) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.cbo_);
		gl.vertexAttribPointer(program.set_attrib['a_colorIndex'],
			1, gl.FLOAT, false, 4, 0);
	}
};

Mesh.prototype.draw = function (opt_length, opt_offset) {
	if (opt_length === 0) return;

	opt_length = opt_length || this.numIndices_;
	opt_offset = opt_offset || 0;
	var gl = this.gl_;
	gl.drawElements(gl.TRIANGLES, opt_length, gl.UNSIGNED_SHORT, 2 * opt_offset);
};

Mesh.prototype.drawList = function (displayList) {
	var numDraws = displayList.length;
	for (var i = 0; i < numDraws; i += 2) {
		var drawStart = displayList[i];
		var drawLength = displayList[i + 1] - drawStart;
		this.draw(drawLength, drawStart);
	}
};

Mesh.prototype.bindAndDraw = function (program, opt_forId) {
	this.bind(program, opt_forId);
	this.draw();
};
'use strict';

// Contains objects like:
// name: {
//   materials: { 'material_name': { ... } ... },
//   decodeParams: {
//     decodeOffsets: [ ... ],
//     decodeScales: [ ... ],
//   },
//   urls: {
//     'url': [
//       { material: 'material_name',
//         attribRange: [#, #],
//         indexRange: [#, #],
//         names: [ 'object names' ... ],
//         lengths: [#, #, # ... ]
//       }
//     ],
//     ...
//   }
// }
MODELS = {};

var DEFAULT_ATTRIB_ARRAYS = [
	{
		name: "a_position",
		size: 3,
		stride: 8,
		offset: 0
  },
	{
		name: "a_texcoord",
		size: 2,
		stride: 8,
		offset: 3
  },
	{
		name: "a_normal",
		size: 3,
		stride: 8,
		offset: 5
  },
	{
		name: "a_colorIndex",
		size: 1,
		stride: 1,
		offset: 0
  }
];

var BBOX_ATTRIB_ARRAYS = [
	{
		name: "a_position",
		size: 3,
		stride: 6,
		offset: 0
  },
	{
		name: "a_radius",
		size: 3,
		stride: 6,
		offset: 3
  }
];

var DEFAULT_DECODE_PARAMS = {
	decodeOffsets: [-4095, -4095, -4095, 0, 0, -511, -511, -511],
	decodeScales: [1 / 8191, 1 / 8191, 1 / 8191, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023]
};

// TODO: will it be an optimization to specialize this method at
// runtime for different combinations of stride, decodeOffset and
// decodeScale?
function decompressAttribsInner_(str, inputStart, inputEnd,
	output, outputStart, stride,
	decodeOffset, decodeScale) {
	var prev = 0;
	for (var j = inputStart; j < inputEnd; j++) {
		var code = str.charCodeAt(j);
		prev += (code >> 1) ^ (-(code & 1));
		output[outputStart] = decodeScale * (prev + decodeOffset);
		outputStart += stride;
	}
}

function decompressIndices_(str, inputStart, numIndices,
	output, outputStart) {
	var highest = 0;
	for (var i = 0; i < numIndices; i++) {
		var code = str.charCodeAt(inputStart++);
		output[outputStart++] = highest - code;
		if (code == 0) {
			highest++;
		}
	}
}

function decompressAABBs_(str, inputStart, numBBoxen,
	decodeOffsets, decodeScales) {
	var numFloats = 6 * numBBoxen;
	var inputEnd = inputStart + numFloats;
	var bboxen = new Float32Array(numFloats);
	var outputStart = 0;
	for (var i = inputStart; i < inputEnd; i += 6) {
		var minX = str.charCodeAt(i + 0) + decodeOffsets[0];
		var minY = str.charCodeAt(i + 1) + decodeOffsets[1];
		var minZ = str.charCodeAt(i + 2) + decodeOffsets[2];
		var diaX = str.charCodeAt(i + 3) + 1;
		var diaY = str.charCodeAt(i + 4) + 1;
		var diaZ = str.charCodeAt(i + 5) + 1;
		bboxen[outputStart++] = decodeScales[0] * minX;
		bboxen[outputStart++] = decodeScales[1] * minY;
		bboxen[outputStart++] = decodeScales[2] * minZ;
		bboxen[outputStart++] = decodeScales[0] * (minX + diaX);
		bboxen[outputStart++] = decodeScales[1] * (minY + diaY);
		bboxen[outputStart++] = decodeScales[2] * (minZ + diaZ);
	}
	return bboxen;
}

function decompressMesh(str, meshParams, decodeParams, callback) {
	// Extract conversion parameters from attribArrays.
	var stride = decodeParams.decodeScales.length;
	var decodeOffsets = decodeParams.decodeOffsets;
	var decodeScales = decodeParams.decodeScales;
	var attribStart = meshParams.attribRange[0];
	var numVerts = meshParams.attribRange[1];

	// Decode attributes.
	var inputOffset = attribStart;
	var attribsOut = new Float32Array(stride * numVerts);
	for (var j = 0; j < stride; j++) {
		var end = inputOffset + numVerts;
		var decodeScale = decodeScales[j];
		if (decodeScale) {
			// Assume if decodeScale is never set, simply ignore the
			// attribute.
			decompressAttribsInner_(str, inputOffset, end,
				attribsOut, j, stride,
				decodeOffsets[j], decodeScale);
		}
		inputOffset = end;
	}

	var indexStart = meshParams.indexRange[0];
	var numIndices = 3 * meshParams.indexRange[1];
	var indicesOut = new Uint16Array(numIndices);
	decompressIndices_(str, inputOffset, numIndices, indicesOut, 0);

	// Decode bboxen.
	var bboxen = undefined;
	var bboxOffset = meshParams.bboxes;
	if (bboxOffset) {
		bboxen = decompressAABBs_(str, bboxOffset, meshParams.names.length,
			decodeOffsets, decodeScales);
	}
	callback(attribsOut, indicesOut, bboxen, meshParams);
}

function downloadMesh(path, meshEntry, decodeParams, callback) {
	var idx = 0;

	function onprogress(req, e) {
		while (idx < meshEntry.length) {
			var meshParams = meshEntry[idx];
			var meshEnd = meshParams.bboxes + 6 * meshParams.names.length;
			if (req.responseText.length < meshEnd) break;

			decompressMesh(req.responseText, meshParams, decodeParams, callback);
			++idx;
		}
	};
	getHttpRequest(path, function (req, e) {
		if (req.status === 200 || req.status === 0) {
			onprogress(req, e);
		}
		// TODO: handle errors.
	}, onprogress);
}

function downloadMeshes(path, meshUrlMap, decodeParams, callback) {
	for (var url in meshUrlMap) {
		var meshEntry = meshUrlMap[url];
		downloadMesh(path + url, meshEntry, decodeParams, callback);
	}
}

function downloadModel(path, model, partialCallback, fullCallback) {
	var model = MODELS[model];
	var pendingCount = 0;
	o3v.util.forEach(
		model.urls,
		function (meshEntry) {
			pendingCount += meshEntry.length;
		});
	var callback = function (attribs, indices, bboxen, meshEntiy) {
		if (partialCallback !== undefined) {
			partialCallback(attribs, indices, bboxen, meshEntiy);
		}
		pendingCount = pendingCount - 1;
		if (pendingCount == 0 && fullCallback !== undefined) {
			fullCallback();
		}
	};

	downloadMeshes(path, model.urls, model.decodeParams, callback);
}
'use strict';

/**
 * Computes a 4-by-4 camera look-at transformation. This is the
 * inverse of lookAt The transformation generated is an
 * orthogonal rotation matrix with translation component.
 * @param {(!tdl.fast.Vector3|!tdl.fast.Vector4)} eye The position
 *     of the eye.
 * @param {(!tdl.fast.Vector3|!tdl.fast.Vector4)} target The
 *     position meant to be viewed.
 * @param {(!tdl.fast.Vector3|!tdl.fast.Vector4)} up A vector
 *     pointing up.
 * @return {!tdl.fast.Matrix4} The camera look-at matrix.
 */
o3v.cameraLookAt = function (dst, eye, target, up) {
	var t0 = new Float32Array(3);
	var t1 = new Float32Array(3);
	var t2 = new Float32Array(3);

	var vz = o3v.normalize(t0, o3v.subVector(t0, eye, target));
	var vx = o3v.normalize(t1, o3v.cross(t1, up, vz));
	var vy = o3v.cross(t2, vz, vx);

	dst[0] = vx[0];
	dst[1] = vx[1];
	dst[2] = vx[2];
	dst[3] = 0;
	dst[4] = vy[0];
	dst[5] = vy[1];
	dst[6] = vy[2];
	dst[7] = 0;
	dst[8] = vz[0];
	dst[9] = vz[1];
	dst[10] = vz[2];
	dst[11] = 0;
	dst[12] = eye[0];
	dst[13] = eye[1];
	dst[14] = eye[2];
	dst[15] = 1;

	return dst;
};

/**
 * Subtracts two vectors.
 * @param {!tdl.fast.Vector} dst vector.
 * @param {!tdl.fast.Vector} a Operand vector.
 * @param {!tdl.fast.Vector} b Operand vector.
 */
o3v.subVector = function (dst, a, b) {
	var aLength = a.length;
	for (var i = 0; i < aLength; ++i)
		dst[i] = a[i] - b[i];
	return dst;
};

/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {!tdl.math.Vector} dst vector.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector} b Operand vector.
 * @return {!tdl.math.Vector} The vector a cross b.
 */
o3v.cross = function (dst, a, b) {
	dst[0] = a[1] * b[2] - a[2] * b[1];
	dst[1] = a[2] * b[0] - a[0] * b[2];
	dst[2] = a[0] * b[1] - a[1] * b[0];
	return dst;
};

/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {!tdl.fast.Vector} dst vector.
 * @param {!tdl.fast.Vector} a The vector.
 * @return {!tdl.fast.Vector} The normalized vector.
 */
o3v.normalize = function (dst, a) {
	var n = 0.0;
	var aLength = a.length;
	for (var i = 0; i < aLength; ++i)
		n += a[i] * a[i];
	n = Math.sqrt(n);
	if (n > 0.00001) {
		for (var i = 0; i < aLength; ++i)
			dst[i] = a[i] / n;
	} else {
		for (var i = 0; i < aLength; ++i)
			dst[i] = 0;
	}
	return dst;
};

Renderer = function (canvas, textureFromMaterialFunction) {
	getHttpRequest('scripts/shaders.txt', this.onloadShaders.bind(this));

	this.canvas_ = canvas;
	this.textureFromMaterialFunction_ = textureFromMaterialFunction;

	var gl = createContextFromCanvas(canvas);
	this.gl_ = gl;

	// Camera.
	this.zNear_ = Math.sqrt(3);
	this.model_ = mat4.identity(mat4.create());
	this.view_ = mat4.identity(mat4.create());
	this.proj_ = mat4.create();
	this.mvp_ = mat4.create();

	// Meshes.
	this.meshes_ = [];

	// WebGL
	gl.clearColor(0, 0, 0, 0);
	gl.enable(gl.CULL_FACE);
	gl.enable(gl.DEPTH_TEST);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

	// Set up viewport.
	this.handleResize();
	mat4.translate(this.view_, [0, 0, -1]);

	// Set up for off-screen surface for entity identification.
	this.selectionFbo_ = {
		width: 0,
		height: 0
	};

	this.forceColored_ = false;
};

Renderer.prototype.onloadShaders = function (req) {
	// TODO: error handling.
	var shaders = {};
	req.responseText.split('/** ').forEach(function (shader) {
		var name_and_body = shader.split(' **/');
		shaders[name_and_body[0]] = name_and_body[1];
	});

	var gl = this.gl_;

	// Set up program for rendering.
	var simpleVsrc = shaders['shader_vertex'];
	var simpleFsrc = shaders['shader_fragment'];
	this.normProgram_ = new Program(gl, [vertexShader(gl, simpleVsrc),
                                       fragmentShader(gl, simpleFsrc)]);

	// Set up program for selection.
	var idVsrc = shaders['shader_vertex_id'];
	var idFsrc = shaders['shader_fragment_id'];
	this.idProgram_ = new Program(gl, [vertexShader(gl, idVsrc),
                                     fragmentShader(gl, idFsrc)]);

	this.shadersLoaded_ = true;
};

Renderer.prototype.handleResize = function () {
	this.canvas_.width = this.canvas_.clientWidth;
	this.canvas_.height = this.canvas_.clientHeight;
	this.gl_.viewport(0, 0, this.canvas_.width, this.canvas_.height);
};

Renderer.prototype.drawAll_ = function (opt_forId) {
	var numMeshes = this.meshes_.length;
	for (var i = 0; i < numMeshes; i++) {
		this.meshes_[i].bindAndDraw(this.program_, opt_forId);
	}
};

Renderer.prototype.drawLists_ = function (displayLists, opt_forId) {
	var numLists = displayLists.length;
	for (var i = 0; i < numLists; i++) {
		var displayList = displayLists[i];
		var mesh = this.meshes_[i];
		mesh.bind(this.program_, opt_forId);
		mesh.drawList(displayList);
	}
};

// Update matrices and then redisplay.
Renderer.prototype.postRedisplayWithCamera = function (camera) {
	mat4.perspective(
		camera.fov,
		this.canvas_.clientWidth / this.canvas_.clientHeight,
		1, 1000,
		this.proj_);

	o3v.cameraLookAt(this.view_, camera.eye, camera.target, camera.up);
	mat4.inverse(this.view_);
	var vpMatrix = new Float32Array(16);
	mat4.multiply(this.proj_, this.view_, vpMatrix);
	mat4.multiply(vpMatrix, this.model_, this.mvp_);

	this.postRedisplay();
};

Renderer.prototype.postRedisplay = function () {
	var self = this;
	if (!this.frameStart_) {
		this.frameStart_ = Date.now();
		window.requestAnimFrame(function () {
			self.draw_();
			self.frameStart_ = 0;
		}, this.canvas_);
	}
};

Renderer.prototype.ready = function () {
	return this.shadersLoaded_ && (this.frameStart_ === 0);
};

Renderer.prototype.createOffscreenSurface_ = function (width, height) {
	var gl = this.gl_;
	if (!this.selectionFbo_.framebuffer)
		this.selectionFbo_.framebuffer = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.selectionFbo_.framebuffer);

	if (!this.selectionFbo_.colorTexture) {
		this.selectionFbo_.colorTexture = gl.createTexture();

		gl.bindTexture(gl.TEXTURE_2D, this.selectionFbo_.colorTexture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	}

	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0,
		gl.RGBA, gl.UNSIGNED_BYTE, null);

	if (!this.selectionFbo_.renderbuffer) {
		this.selectionFbo_.renderbuffer = gl.createRenderbuffer();
		gl.bindRenderbuffer(gl.RENDERBUFFER, this.selectionFbo_.renderbuffer);
		gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16,
			width, height);
		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
			gl.TEXTURE_2D, this.selectionFbo_.colorTexture, 0);
		gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT,
			gl.RENDERBUFFER,
			this.selectionFbo_.renderbuffer);
	}

	var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
	if (status != gl.FRAMEBUFFER_COMPLETE) {
		o3v.log.error('Incomplete off-screen framebuffer');
		this.selectionFbo_.framebuffer = null;
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};

// Identify the mesh clicked.
Renderer.prototype.identify = function (x, y) {
	var gl = this.gl_;

	if (this.selectionFbo_.width != this.canvas_['clientWidth'] ||
		this.selectionFbo_.height != this.canvas_['clientHeight']) {
		this.createOffscreenSurface_(this.canvas_['clientWidth'],
			this.canvas_['clientHeight']);
		if (!this.selectionFbo_.framebuffer) {
			o3v.log.error('Unable to identify without valid off-screen buffer.');
			return null;
		}
		var selectionSurfaceSize =
			this.canvas_['clientWidth'] * this.canvas_['clientHeight'] * 4;
		this.selectionFbo_.selectionSurfaceArray =
			new Uint8Array(selectionSurfaceSize);
		this.selectionFbo_.width = this.canvas_['clientWidth'];
		this.selectionFbo_.height = this.canvas_['clientHeight'];
	}

	gl.bindFramebuffer(gl.FRAMEBUFFER, this.selectionFbo_.framebuffer);

	this.draw_(true);

	gl.readPixels(0, 0, this.selectionFbo_.width, this.selectionFbo_.height,
		gl.RGBA, gl.UNSIGNED_BYTE,
		this.selectionFbo_.selectionSurfaceArray);

	gl.bindFramebuffer(gl.FRAMEBUFFER, null);

	var tolerancePx = 10;
	var value = this.findPixelInRect_(
		x, y, tolerancePx, this.selectionFbo_.width, this.selectionFbo_.height,
		this.selectionFbo_.selectionSurfaceArray);

	value = Math.floor(value / this.selectionColorScale_);
	if (value != 0) {
		return this.colorToName_[value];
	} else {
		return null;
	}
};

Renderer.prototype.findPixelInRect_ =
	function (sx, sy, windowSize, width, height, data) {
		// Check center.
		var value = this.getPixel_(sx, sy, width, height, data);
		if (value != 0) return value;

		// Walk growing rectangle edges.
		for (var d = 1; d <= windowSize / 2; ++d) {
			for (var y = sy - d; y <= sy + d; ++y) {
				if (y < 0) continue;
				if (y >= height) break;

				value = this.getPixel_(sx - d, y, width, height, data);
				if (value != 0) return value;
				value = this.getPixel_(sx + d, y, width, height, data);
				if (value != 0) return value;
			}
			for (var x = sx - d + 1; x <= sx + d - 1; ++x) {
				if (x < 0) continue;
				if (x >= width) break;

				value = this.getPixel_(x, sy - d, width, height, data);
				if (value != 0) return value;
				value = this.getPixel_(x, sy + d, width, height, data);
				if (value != 0) return value;
			}
		}
		return 0;
	};

Renderer.prototype.getPixel_ = function (sx, sy, width, height, data) {
	if (sx < 0 || sx >= width || sy < 0 || sy >= height)
		return 0;

	var startByte = ((height - 1 - sy) * width + sx) * 4;
	var red = data[startByte + 0];
	var green = data[startByte + 1];
	var blue = data[startByte + 2];
	return blue + green * 256 + red * 256 * 256;
};

Renderer.prototype.draw_ = function (opt_forId) {
	if (!this.shadersLoaded_)
		return;

	if (this.forceColored_) {
		opt_forId = true; // colorcoded
	}

	if (opt_forId) {
		// Flat, one-color-per mesh program used for identification.
		this.program_ = this.idProgram_;
	} else {
		// Normal program used for rendering.
		this.program_ = this.normProgram_;
	}

	this.program_.use();

	if (opt_forId) {
		this.program_.enableVertexAttribArrays(['a_position',
                                            'a_colorIndex']);
		this.program_.disableVertexAttribArrays(['a_normal',
                                             'a_texcoord']);
	} else {
		this.program_.enableVertexAttribArrays(['a_position',
                                            'a_texcoord',
                                            'a_normal']);
		this.program_.disableVertexAttribArrays(['a_colorIndex']);
	}

	var gl = this.gl_;

	if (opt_forId) {
		this.selectionColorScale_ =
			Math.floor((256 * 256 * 256 - 1) / this.maxColorIndex_);
		gl.uniform1f(this.program_.set_uniform.u_colorScale,
			this.selectionColorScale_);
		//gl.colorMask(true, true, true, true);
	} else {
		//gl.colorMask(true, true, true, false);
	}

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

	gl.uniformMatrix4fv(this.program_.set_uniform.u_mvp, false, this.mvp_);
	gl.uniformMatrix3fv(this.program_.set_uniform.u_model, false,
		mat4.toMat3(this.model_));

	gl.uniform1f(this.program_.set_uniform.u_opacity, 1.0);
	if (this.opacityLists_ !== undefined) {
		var meshes = this.meshes_;

		// Draw opaque lists. (Really should only be one, at position zero.)
		for (var i = 0; i < this.opacityLists_.length; i++) {
			var opacity = this.opacityLists_[i].opacity;
			if (opacity == 1) {
				this.drawLists_(this.opacityLists_[i].drawLists, opt_forId);
			}
		}

		// Draw transluscent layers.
		gl.enable(gl.BLEND);
		for (var i = 0; i < this.opacityLists_.length; i++) {
			var opacity = this.opacityLists_[i].opacity;
			if (opacity != 0 && opacity != 1) {
				gl.uniform1f(this.program_.set_uniform.u_opacity, opacity);
				this.drawLists_(this.opacityLists_[i].drawLists, opt_forId);
			}
		}
		gl.disable(gl.BLEND);

	} else {
		this.drawAll_(opt_forId);
	}
};

Renderer.prototype.updateMeshInfo = function () {
	this.entityToMeshInfo_ = {};

	for (var i = 0; i < this.meshes_.length; i++) {
		var mesh = this.meshes_[i];
		for (var j = 0; j < mesh.names_.length; j++) {

			var name = mesh.names_[j];
			var meshInfo = {};
			meshInfo.index = i;
			meshInfo.start = mesh.starts_[j];
			meshInfo.end = mesh.starts_[j] + mesh.lengths_[j];

			if (this.entityToMeshInfo_[name] !== undefined) {
				o3v.log.info('multiple meshes for \'', name, '\': ',
					this.entityToMeshInfo_[name], meshInfo);
				this.entityToMeshInfo_[name].push(meshInfo);
			} else {
				this.entityToMeshInfo_[name] = [meshInfo];
			}
		}
	}
};

Renderer.prototype.updateOpacity = function (opacityInfo) {
	// TODO(dkogan): Special-case all-opaque case for speed.

	// this.opacityLists is:
	// [ { opacity: <opacity>,
	//     drawLists: [ [ <start 0 in mesh 0>, <length 0 in mesh 0>,
	//                    <start 1 in mesh 0>, <length 1 in mesh 0>...],
	//                  [ <start 0 in mesh 1>, <length 0 in mesh 1>...
	//                ] } ]

	this.opacityLists_ = [];
	o3v.util.forEach(
		opacityInfo,
		function (entities, opacity) {
			opacityInfo = {};
			opacityInfo.opacity = parseFloat(opacity);
			opacityInfo.drawLists = [];
			for (var i = 0; i < this.meshes_.length; i++) {
				opacityInfo.drawLists[i] = [];
			}
			o3v.util.forEach(
				entities,
				function (unused_true, entityId) {
					for (var i = 0; i < this.entityToMeshInfo_[entityId].length; i++) {
						var meshInfo = this.entityToMeshInfo_[entityId][i];
						opacityInfo.drawLists[meshInfo.index].push(meshInfo.start);
						opacityInfo.drawLists[meshInfo.index].push(meshInfo.end);
					}
				}, this);
			this.opacityLists_.push(opacityInfo);
		}, this);
	this.opacityLists_.sort(function (a, b) {
		return b.opacity > a.opacity;
	});
};

Renderer.prototype.onMeshLoad =
	function (attribArray, indexArray, bboxes, meshEntry) {
		var texture = this.textureFromMaterialFunction_(this.gl_, meshEntry.material,
			this.postRedisplay.bind(
				this));

		// Set color for meshes, and record the mapping of color to name.
		var startColorIndex = this.maxColorIndex_;
		for (var i = 0; i < meshEntry.names.length; i++) {
			this.colorToName_[startColorIndex + i] = meshEntry.names[i];
		}
		this.maxColorIndex_ += meshEntry.lengths.length;

		this.meshes_.push(
			new Mesh(this.gl_, attribArray, indexArray, DEFAULT_ATTRIB_ARRAYS,
				texture, meshEntry.names, meshEntry.lengths, bboxes,
				startColorIndex));
	};

Renderer.prototype.reset = function () {
	this.meshes_ = [];
	this.postRedisplay();
	this.maxColorIndex_ = 1;
	this.colorToName_ = {};
	this.opacityLists_ = [];
};

Renderer.prototype.getViewportCoords = function (modelCoords) {
	var modelCoords = [modelCoords[0],
                     modelCoords[1],
                     modelCoords[2],
                     1];

	var screenCoords = mat4.create();

	mat4.multiply(this.mvp_, modelCoords, screenCoords);

	var x = screenCoords[0] / screenCoords[3];
	var y = screenCoords[1] / screenCoords[3];

	x = (x + 1) * this.canvas_.width / 2;
	y = (2 - (y + 1)) * this.canvas_.height / 2;

	return [x, y];
};

Renderer.prototype.toggleColored = function () {
	this.forceColored_ = !this.forceColored_;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview WebGL utility functions
 */
o3v.webGLUtil = {
	/**
	 * Tests whether the browser supports WebGL.
	 * @param {Element} canvasEl A canvas element in the current document.
	 * @return {boolean} True iff browser supports WebGL.
	 */
	browserSupportsWebGL: function (canvasEl) {
		try {
			if (!canvasEl) {
				return false;
			}
			if (!window.WebGLRenderingContext) {
				return false;
			}
			var gl = canvasEl.getContext('webgl');
			if (!gl) {
				gl = canvasEl.getContext('experimental-webgl');
			}
			if (!gl) {
				return false;
			}
			return true;
		} catch (err) {
			return false;
		}
	}
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utility functions and miscellaneous items.
 */

/**
 * Debug mode
 */
o3v.LOG_NONE = 0;
o3v.LOG_ERROR = 1;
o3v.LOG_WARNING = 2;
o3v.LOG_INFO = 3;

o3v.LOG_LEVEL = o3v.LOG_INFO;

/**
 * Basic logging
 */
o3v.log = {
	info: function () {
		if (o3v.LOG_LEVEL >= o3v.LOG_INFO && window['console'] !== undefined) {
			var newArgs = ['INFO: '];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i + 1] = arguments[i];
			}
			window['console'].log.apply(window['console'], newArgs);
		}
	},
	warning: function () {
		if (o3v.LOG_LEVEL >= o3v.LOG_WARNING && window['console'] !== undefined) {
			var newArgs = ['WARNING: '];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i + 1] = arguments[i];
			}
			window['console'].log.apply(window['console'], newArgs);
		}
	},
	error: function () {
		if (o3v.LOG_LEVEL >= o3v.LOG_ERROR && window['console'] !== undefined) {
			var newArgs = ['ERROR: '];
			for (var i = 0; i < arguments.length; i++) {
				newArgs[i + 1] = arguments[i];
			}
			window['console'].log.apply(window['console'], newArgs);
		}
	}
};

/**
 * UI settings
 */
o3v.uiSettings = {
	ZINDEX_VIEWER: 0,
	ZINDEX_MAINUI_STATUS_LOWER: 1,
	ZINDEX_MAINUI_STATUS_UPPER: 2,
	ZINDEX_MAINUI: 3
};

/**
 * Enum for handedness
 * @enum {number}
 * @private
 */
var HANDEDNESS_ = {
	LEFT: 0,
	RIGHT: 1
};

/**
 * Grows a bounding box to encompass another bounding box. If
 * original is undefined, it is created as a copy of addition.
 * If original is defined, it's modified in place.
 * @param {Array|Float32Array} original Original bounding box.
 * @param {Array|Float32Array} addition Bounding box to add to original.
 * @return {Array|Float32Array} original (modified in place as well).
 */
o3v.growBBox = function (original, addition) {
	if (original === undefined) {
		return addition.slice(0);
	} else {
		if (original[0] > addition[0]) {
			original[0] = addition[0];
		}
		if (original[1] > addition[1]) {
			original[1] = addition[1];
		}
		if (original[2] > addition[2]) {
			original[2] = addition[2];
		}
		if (original[3] < addition[3]) {
			original[3] = addition[3];
		}
		if (original[4] < addition[4]) {
			original[4] = addition[4];
		}
		if (original[5] < addition[5]) {
			original[5] = addition[5];
		}
		return original;
	}
};

// General utilities.
o3v.util = {};

o3v.util.isEmpty = function (obj) {
	return (Object.keys(obj).length === 0);
};

o3v.util.isArray = function (val) {
	return (Object.prototype.toString.call(val) === '[object Array]');
};

o3v.util.cloneObject = function (obj) {
	// Shallow copy. For deep, change to $.extend(true, {}, obj).
	return $.extend({}, obj);
};

o3v.util.extendObject = function (target, var_args) {
	return $.extend(target, var_args);
};

o3v.util.objectContains = function (obj, val) {
	for (var key in obj) {
		if (obj[key] == val) {
			return true;
		}
	}
	return false;
};

o3v.util.getObjectCount = function (obj) {
	return Object.keys(obj).length;
};

o3v.util.forEach = function (obj, f, opt_obj) {
	for (var key in obj) {
		f.call(opt_obj, obj[key], key, obj);
	}
};

o3v.util.createSet = function (var_args) {
	var argLength = arguments.length;
	if (argLength == 1 && o3v.util.isArray(arguments[0])) {
		return o3v.util.createSet.apply(null, arguments[0]);
	}

	var rv = {};
	for (var i = 0; i < argLength; i++) {
		rv[arguments[i]] = true;
	}
	return rv;
};

o3v.util.setIfUndefined = function (obj, key, value) {
	return key in obj ? obj[key] : (obj[key] = value);
};

o3v.util.isDef = function (val) {
	return typeof val != 'undefined';
};

////////////////////////////////////////////////////////////////////////////////
// goog.math.Bezier, imported from Google Closure.

goog = {};
goog.math = {};

/**
 * Object representing a cubic bezier curve.
 * @param {number} x0 X coordinate of the start point.
 * @param {number} y0 Y coordinate of the start point.
 * @param {number} x1 X coordinate of the first control point.
 * @param {number} y1 Y coordinate of the first control point.
 * @param {number} x2 X coordinate of the second control point.
 * @param {number} y2 Y coordinate of the second control point.
 * @param {number} x3 X coordinate of the end point.
 * @param {number} y3 Y coordinate of the end point.
 * @constructor
 */
goog.math.Bezier = function (x0, y0, x1, y1, x2, y2, x3, y3) {
	/**
	 * X coordinate of the first point.
	 * @type {number}
	 */
	this.x0 = x0;

	/**
	 * Y coordinate of the first point.
	 * @type {number}
	 */
	this.y0 = y0;

	/**
	 * X coordinate of the first control point.
	 * @type {number}
	 */
	this.x1 = x1;

	/**
	 * Y coordinate of the first control point.
	 * @type {number}
	 */
	this.y1 = y1;

	/**
	 * X coordinate of the second control point.
	 * @type {number}
	 */
	this.x2 = x2;

	/**
	 * Y coordinate of the second control point.
	 * @type {number}
	 */
	this.y2 = y2;

	/**
	 * X coordinate of the end point.
	 * @type {number}
	 */
	this.x3 = x3;

	/**
	 * Y coordinate of the end point.
	 * @type {number}
	 */
	this.y3 = y3;
};


/**
 * Constant used to approximate ellipses.
 * See: http://canvaspaint.org/blog/2006/12/ellipse/
 * @type {number}
 */
goog.math.Bezier.KAPPA = 4 * (Math.sqrt(2) - 1) / 3;


/**
 * @return {!goog.math.Bezier} A copy of this curve.
 */
goog.math.Bezier.prototype.clone = function () {
	return new goog.math.Bezier(this.x0, this.y0, this.x1, this.y1, this.x2,
		this.y2, this.x3, this.y3);
};


/**
 * Test if the given curve is exactly the same as this one.
 * @param {goog.math.Bezier} other The other curve.
 * @return {boolean} Whether the given curve is the same as this one.
 */
goog.math.Bezier.prototype.equals = function (other) {
	return this.x0 == other.x0 && this.y0 == other.y0 && this.x1 == other.x1 &&
		this.y1 == other.y1 && this.x2 == other.x2 && this.y2 == other.y2 &&
		this.x3 == other.x3 && this.y3 == other.y3;
};


/**
 * Modifies the curve in place to progress in the opposite direction.
 */
goog.math.Bezier.prototype.flip = function () {
	var temp = this.x0;
	this.x0 = this.x3;
	this.x3 = temp;
	temp = this.y0;
	this.y0 = this.y3;
	this.y3 = temp;

	temp = this.x1;
	this.x1 = this.x2;
	this.x2 = temp;
	temp = this.y1;
	this.y1 = this.y2;
	this.y2 = temp;
};


/**
 * Computes the curve at a point between 0 and 1.
 * @param {number} t The point on the curve to find.
 * @return {!goog.math.Coordinate} The computed coordinate.
 */
goog.math.Bezier.prototype.getPoint = function (t) {
	// Special case start and end
	if (t == 0) {
		return new goog.math.Coordinate(this.x0, this.y0);
	} else if (t == 1) {
		return new goog.math.Coordinate(this.x3, this.y3);
	}

	// Step one - from 4 points to 3
	var ix0 = goog.math.lerp(this.x0, this.x1, t);
	var iy0 = goog.math.lerp(this.y0, this.y1, t);

	var ix1 = goog.math.lerp(this.x1, this.x2, t);
	var iy1 = goog.math.lerp(this.y1, this.y2, t);

	var ix2 = goog.math.lerp(this.x2, this.x3, t);
	var iy2 = goog.math.lerp(this.y2, this.y3, t);

	// Step two - from 3 points to 2
	ix0 = goog.math.lerp(ix0, ix1, t);
	iy0 = goog.math.lerp(iy0, iy1, t);

	ix1 = goog.math.lerp(ix1, ix2, t);
	iy1 = goog.math.lerp(iy1, iy2, t);

	// Final step - last point
	return new goog.math.Coordinate(goog.math.lerp(ix0, ix1, t),
		goog.math.lerp(iy0, iy1, t));
};


/**
 * Changes this curve in place to be the portion of itself from [t, 1].
 * @param {number} t The start of the desired portion of the curve.
 */
goog.math.Bezier.prototype.subdivideLeft = function (t) {
	if (t == 1) {
		return;
	}

	// Step one - from 4 points to 3
	var ix0 = goog.math.lerp(this.x0, this.x1, t);
	var iy0 = goog.math.lerp(this.y0, this.y1, t);

	var ix1 = goog.math.lerp(this.x1, this.x2, t);
	var iy1 = goog.math.lerp(this.y1, this.y2, t);

	var ix2 = goog.math.lerp(this.x2, this.x3, t);
	var iy2 = goog.math.lerp(this.y2, this.y3, t);

	// Collect our new x1 and y1
	this.x1 = ix0;
	this.y1 = iy0;

	// Step two - from 3 points to 2
	ix0 = goog.math.lerp(ix0, ix1, t);
	iy0 = goog.math.lerp(iy0, iy1, t);

	ix1 = goog.math.lerp(ix1, ix2, t);
	iy1 = goog.math.lerp(iy1, iy2, t);

	// Collect our new x2 and y2
	this.x2 = ix0;
	this.y2 = iy0;

	// Final step - last point
	this.x3 = goog.math.lerp(ix0, ix1, t);
	this.y3 = goog.math.lerp(iy0, iy1, t);
};


/**
 * Changes this curve in place to be the portion of itself from [0, t].
 * @param {number} t The end of the desired portion of the curve.
 */
goog.math.Bezier.prototype.subdivideRight = function (t) {
	this.flip();
	this.subdivideLeft(1 - t);
	this.flip();
};


/**
 * Changes this curve in place to be the portion of itself from [s, t].
 * @param {number} s The start of the desired portion of the curve.
 * @param {number} t The end of the desired portion of the curve.
 */
goog.math.Bezier.prototype.subdivide = function (s, t) {
	this.subdivideRight(s);
	this.subdivideLeft((t - s) / (1 - s));
};


/**
 * Computes the position t of a point on the curve given its x coordinate.
 * That is, for an input xVal, finds t s.t. getPoint(t).x = xVal.
 * As such, the following should always be true up to some small epsilon:
 * t ~ solvePositionFromXValue(getPoint(t).x) for t in [0, 1].
 * @param {number} xVal The x coordinate of the point to find on the curve.
 * @return {number} The position t.
 */
goog.math.Bezier.prototype.solvePositionFromXValue = function (xVal) {
	// Desired precision on the computation.
	var epsilon = 1e-6;

	// Initial estimate of t using linear interpolation.
	var t = (xVal - this.x0) / (this.x3 - this.x0);
	if (t <= 0) {
		return 0;
	} else if (t >= 1) {
		return 1;
	}

	// Try gradient descent to solve for t. If it works, it is very fast.
	var tMin = 0;
	var tMax = 1;
	for (var i = 0; i < 8; i++) {
		var value = this.getPoint(t).x;
		var derivative = (this.getPoint(t + epsilon).x - value) / epsilon;
		if (Math.abs(value - xVal) < epsilon) {
			return t;
		} else if (Math.abs(derivative) < epsilon) {
			break;
		} else {
			if (value < xVal) {
				tMin = t;
			} else {
				tMax = t;
			}
			t -= (value - xVal) / derivative;
		}
	}

	// If the gradient descent got stuck in a local minimum, e.g. because
	// the derivative was close to 0, use a Dichotomy refinement instead.
	// We limit the number of interations to 8.
	for (var i = 0; Math.abs(value - xVal) > epsilon && i < 8; i++) {
		if (value < xVal) {
			tMin = t;
			t = (t + tMax) / 2;
		} else {
			tMax = t;
			t = (t + tMin) / 2;
		}
		value = this.getPoint(t).x;
	}
	return t;
};

/**
 * Computes the y coordinate of a point on the curve given its x coordinate.
 * @param {number} xVal The x coordinate of the point on the curve.
 * @return {number} The y coordinate of the point on the curve.
 */
goog.math.Bezier.prototype.solveYValueFromXValue = function (xVal) {
	return this.getPoint(this.solvePositionFromXValue(xVal)).y;
};

/**
 * Class for representing coordinates and positions.
 * @param {number=} opt_x Left, defaults to 0.
 * @param {number=} opt_y Top, defaults to 0.
 * @constructor
 */
goog.math.Coordinate = function (opt_x, opt_y) {
	/**
	 * X-value
	 * @type {number}
	 */
	this.x = o3v.util.isDef(opt_x) ? opt_x : 0;

	/**
	 * Y-value
	 * @type {number}
	 */
	this.y = o3v.util.isDef(opt_y) ? opt_y : 0;
};


/**
 * Returns a new copy of the coordinate.
 * @return {!goog.math.Coordinate} A clone of this coordinate.
 */
goog.math.Coordinate.prototype.clone = function () {
	return new goog.math.Coordinate(this.x, this.y);
};


if (goog.DEBUG) {
	/**
	 * Returns a nice string representing the coordinate.
	 * @return {string} In the form (50, 73).
	 */
	goog.math.Coordinate.prototype.toString = function () {
		return '(' + this.x + ', ' + this.y + ')';
	};
}


/**
 * Compares coordinates for equality.
 * @param {goog.math.Coordinate} a A Coordinate.
 * @param {goog.math.Coordinate} b A Coordinate.
 * @return {boolean} True iff the coordinates are equal, or if both are null.
 */
goog.math.Coordinate.equals = function (a, b) {
	if (a == b) {
		return true;
	}
	if (!a || !b) {
		return false;
	}
	return a.x == b.x && a.y == b.y;
};


/**
 * Returns the distance between two coordinates.
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {number} The distance between {@code a} and {@code b}.
 */
goog.math.Coordinate.distance = function (a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	return Math.sqrt(dx * dx + dy * dy);
};


/**
 * Returns the squared distance between two coordinates. Squared distances can
 * be used for comparisons when the actual value is not required.
 *
 * Performance note: eliminating the square root is an optimization often used
 * in lower-level languages, but the speed difference is not nearly as
 * pronounced in JavaScript (only a few percent.)
 *
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {number} The squared distance between {@code a} and {@code b}.
 */
goog.math.Coordinate.squaredDistance = function (a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	return dx * dx + dy * dy;
};


/**
 * Returns the difference between two coordinates as a new
 * goog.math.Coordinate.
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {!goog.math.Coordinate} A Coordinate representing the difference
 *     between {@code a} and {@code b}.
 */
goog.math.Coordinate.difference = function (a, b) {
	return new goog.math.Coordinate(a.x - b.x, a.y - b.y);
};


/**
 * Returns the sum of two coordinates as a new goog.math.Coordinate.
 * @param {!goog.math.Coordinate} a A Coordinate.
 * @param {!goog.math.Coordinate} b A Coordinate.
 * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two
 *     coordinates.
 */
goog.math.Coordinate.sum = function (a, b) {
	return new goog.math.Coordinate(a.x + b.x, a.y + b.y);
};

/**
 * Performs linear interpolation between values a and b. Returns the value
 * between a and b proportional to x (when x is between 0 and 1. When x is
 * outside this range, the return value is a linear extrapolation).
 * @param {number} a
 * @param {number} b
 * @param {number} x The proportion between a and b
 * @return {number} The interpolated value between a and b
 */
goog.math.lerp = function (a, b, x) {
	return a + x * (b - a);
};

// Shim layer with setTimeout fallback, adapted from:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback, unused_dom) {
		window.setTimeout(callback, 16); // 16ms ~ 60Hz
	};

// XMLHttpRequest stuff for loader.js.
function getHttpRequest(url, onload, opt_onprogress) {
		console.log(url);
		var req = new XMLHttpRequest();
		req.onload = function (e) {
			onload(req, e);
		};
		if (opt_onprogress) {
			req.onprogress = function (e) {
				opt_onprogress(req, e);
			};
		}
		req.open('GET', url, true);
		req.send(null);
	}
	// Copyright 2011 Google Inc. All Rights Reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//     http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

/**
 * @fileoverview Information about the models that open-3d-viewer will display.
 */

/* ====================================================================== */
/*                        ADD YOUR MODELS HERE                            */
/* ====================================================================== */

o3v.MODELS = [
	{
		name: 'adult_female.obj',
		scriptName: 'female.js',
		modelPath: 'models/female/',
		metadataFile: 'entity_metadata.json',
		texturePath: 'models/common/',
		numLayers: 8
  }
  , {
		name: 'Bessie.obj',
		scriptName: 'cow_anatomy.js',
		modelPath: 'models/cow_anatomy/',
		metadataFile: 'entity_metadata.json',
		texturePath: 'models/common/',
		numLayers: 5
  }
];
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Entity database.
 */
/**
 * Temporary storage for information about entities and their relationships.
 * @param {Object} json Json data from server.
 * @constructor
 */
o3v.EntityMetadata = function (json) {
	/**
	 * Logger.
	 * @type {Object.<string, Function>}
	 * @private
	 */
	this.log_ = o3v.log;

	/**
	 * Map of entity id to entity metadata.
	 * @type {Object.<number, Object>}
	 * @private
	 */
	this.entities_ = {};

	/**
	 * Map of external id to id.
	 * @type {Object.<string, number>}
	 * @private
	 */
	this.externalIdToId_ = {};

	/**
	 * Set of layer ids.
	 * @type {Object.<number, boolean>}
	 * @private
	 */
	this.layers_ = {};

	/**
	 * Map of layer name to entity id.
	 * @type {Object.<string, number>}
	 * @private
	 */
	this.layerNameToId_ = {};

	/**
	 * Sublayers: indexed by layer entity id, array of arrays of entity ids.
	 * @type {Object.<number, Array.<Array.<number>>>}
	 * @private
	 */
	this.sublayers_ = {};

	/**
	 * Symmetry information - pair id to symmetry info.
	 * @type {Object.<number, Object>}
	 * @private
	 */
	this.symmetries_ = {};

	/**
	 * Set of entity ids that are hidden from search and selection.
	 * @type {Object.<number, boolean>}
	 * @private
	 */
	this.hidden_ = {};

	this.loadEntities_(json);
	this.loadDag_(json);
	this.loadLayers_(json);

	this.log_.info('loaded entity metadata: ', json);
};


/**
 * Generates a readable name from an external id.
 * This badly needs to be moved to the pipeline.
 * @param {string} stringId Id (e.g. 'r_lower_subclavian_artery').
 * @return {string} Name (e.g. 'lower subclavian artery').
 * @private
 */
o3v.makeName = function (stringId) {
	return stringId.replace(/_/g, ' ').replace(/^r /, '').replace(/^l /, '');
};

/**
 * Loads entity data from json.
 * @param {Object} json Json data from server.
 * @private
 */
o3v.EntityMetadata.prototype.loadEntities_ = function (json) {
	// Load leafs.
	json['leafs'].forEach(
		function (entityInfo) {
			this.loadEntity_(entityInfo, true);
		}, this);

	// Load non-leafs.
	json['nodes'].forEach(
		function (entityInfo) {
			this.loadEntity_(entityInfo, false);
		}, this);

	// Load hidden.
	json['hidden'].forEach(
		function (entityId) {
			this.hidden_[entityId] = true;
		}, this);

	// Load symmetries.
	json['symmetries'].forEach(this.computeSymmetryObject_, this);

	// Load names.
	/**
	 * Set of entities with overridden names.
	 * @type {Object.<number, boolean>}
	 * @private
	 */
	this.entitiesWithOverriddenNames_ = {};
	json['names'].forEach(this.computeName_, this);
};

/**
 * Loads one entity.
 * @param {Array.<number|string>} entityInfo Data about entity from json.
 * @param {boolean} isLeaf True if this is a leaf entity.
 * @private
 */
o3v.EntityMetadata.prototype.loadEntity_ = function (entityInfo, isLeaf) {
	var entityId = +entityInfo[0];
	var externalId = '' + entityInfo[1];
	// TODO(dkogan): This logic needs to move into the data pipeline.
	var entityNames = [o3v.makeName(externalId)];
	var entity = {};
	entity.externalId = externalId;
	entity.names = entityNames;
	entity.parentIds = {};

	this.entities_[entityId] = entity;
	if (isLeaf) { // We don't want the externalid -> id map for nonleafs
		this.externalIdToId_[externalId] = entityId;
	}
};

/**
 * Loads the dag of parent/child relationships between entities.
 * @param {Object} json Json data from server.
 * @private
 */
o3v.EntityMetadata.prototype.loadDag_ = function (json) {
	json['dag'].forEach(
		function (groupInfo) {
			var parentId = groupInfo[0];
			var childIds = groupInfo[1];
			// All children are under one parent id.
			this.entities_[parentId].childIds = o3v.util.createSet(childIds);
			childIds.forEach(
				function (childId) {
					this.entities_[childId].parentIds[parentId] = true;
				}, this);
		}, this);
};

/**
 * Loads layer and sublayer data.
 * @param {Object} json Json data from server.
 * @private
 */
o3v.EntityMetadata.prototype.loadLayers_ = function (json) {
	// Load layers.
	json['layers'].forEach(
		function (layerId) {
			this.layers_[layerId] = true;
			this.layerNameToId_[this.getEntity(layerId).name] = layerId;
		}, this);

	var entitiesAccountedFor = {};

	// Load sublayers.
	// this.subLayers = Object.<number, Array.<Array.<number>>>
	//   layerId -> [ [entityId, entityId], [entityId, entityId] ...]
	//   The sublayers are sorted from innermost to outermost.
	json['sublayers'].forEach(
		function (layer) {
			var layerId = layer[0];
			var sublayers = layer[1];
			var sublayerArray = [];
			sublayers.forEach(
				function (sublayer) {
					var depth = sublayer[0];
					var entityIds = sublayer[1];
					sublayerArray[depth] = [];
					entityIds.forEach(
						function (entityId) {
							sublayerArray[depth].push(entityId);
							entitiesAccountedFor[entityId] = true;
						}, this);
				}, this);
			this.sublayers_[layerId] = sublayerArray;
		}, this);

	// If, for some reason, there are sublayers with gaps, fill in those
	// gaps with empty sets.
	o3v.util.forEach(this.sublayers_, function (sublayerArray) {
		for (var i = 0; i < sublayerArray.length; i++) {
			if (sublayerArray[i] === undefined) {
				sublayerArray[i] = [];
			}
		}
	}, this);

	// Complete sublayers by calculating any leftover entities
	// and putting them in the default (top) layer.
	o3v.util.forEach(this.layers_, function (unused_true, layerId) {
		if (this.sublayers_[layerId] === undefined) {
			this.sublayers_[layerId] = [];
		}
		var sublayerArray = this.sublayers_[layerId];
		sublayerArray[sublayerArray.length] = [];
	}, this);
	o3v.util.forEach(
		this.entities_,
		function (entity, entityId) {
			// If this a new leaf entity, it needs to be assigned to a layer.
			if (entitiesAccountedFor[entityId] === undefined &&
				entity.childIds === undefined) {
				var layerId = this.getLayerId(entityId);
				if (!layerId) {
					this.log_.warning('Failed to find layer for leaf entity ',
						entityId, ' ', entity.names[0]);
				} else {
					var sublayerArray = this.sublayers_[layerId];
					sublayerArray[sublayerArray.length - 1].push(
						parseInt(entityId));
				}
			}
		}, this);
};

/**
 * Gets the layer id of an entity.
 * @param {number} The entity id.
 * @return {number} The layer id or 0 if none.
 */
o3v.EntityMetadata.prototype.getLayerId = function (entityId) {
	var entity = this.entities_[entityId];
	var layerId = 0;
	// Inefficient (because no short-circuiting) but easy.
	o3v.util.forEach(
		entity.parentIds,
		function (true_unused, parentId) {
			if (this.layers_[parentId] !== undefined) {
				layerId = parentId;
			} else {
				var parentLayerId = this.getLayerId(parentId);
				if (parentLayerId != 0) {
					layerId = parentLayerId;
				}
			}
		}, this);
	return layerId;
};

/**
 * Maps an external id to an internal id.
 * @param {string} externalId External id.
 * @return {number} The internal id.
 */
o3v.EntityMetadata.prototype.externalIdToId = function (externalId) {
	// TODO(dkogan): This lower case should not be necessary once the pipeline
	// does the right thing.
	return this.externalIdToId_[externalId.toLowerCase()];
};

/**
 * Gets an entity object by id.
 * @param {number} entityId The id of the entity.
 * @return {Object} The entity.
 */
o3v.EntityMetadata.prototype.getEntity = function (entityId) {
	return this.entities_[entityId];
};

/**
 * Gets the layers.
 * @return {Object.<number, boolean>} Set of layer entity ids.
 */
o3v.EntityMetadata.prototype.getLayers = function () {
	return this.layers_;
};

/**
 * Gets the sublayers. See definition of EntityMetadata.sublayers_ for
 * structure explanation.
 * @return {Object.<number, Array.<Array.<number>>>} Sublayer object.
 */
o3v.EntityMetadata.prototype.getSublayers = function () {
	return this.sublayers_;
};

/**
 * Gets symmetry information.
 * @return {Object.<number, Object>} Map of pair id to symmetry info.
 */
o3v.EntityMetadata.prototype.getSymmetries = function () {
	return this.symmetries_;
};

/**
 * Gets the hidden entities.
 * @return {Object.<number, boolean>} Set of hidden entity ids.
 */
o3v.EntityMetadata.prototype.getHidden = function () {
	return this.hidden_;
};

/**
 * Computes and stores a single symmetry object.
 * This sets this.symmetries_.
 * @param {Array.<number|string>} symmetryJson Json data for the symmetry.
 *        Structure: [<pairId>, <leftId>, <rightId>, <singularName>].
 * @private
 */
o3v.EntityMetadata.prototype.computeSymmetryObject_ = function (symmetryJson) {
	var pairId = symmetryJson[0];
	var symmetryObj = {};
	symmetryObj.childIds = [];
	symmetryObj.childIds[HANDEDNESS_.LEFT] = symmetryJson[1];
	symmetryObj.childIds[HANDEDNESS_.RIGHT] = symmetryJson[2];
	symmetryObj.singularName = o3v.makeName('' + symmetryJson[3]);

	this.symmetries_[pairId] = symmetryObj;
};

/**
 * Stores a name associated with an entity.
 * @param {Array.<number|string>} nameTuple Tuple of (entityId, name).
 * @private
 */
o3v.EntityMetadata.prototype.computeName_ = function (nameTuple) {
	var entityId = +nameTuple[0];
	var name = nameTuple[1];
	if (!this.entitiesWithOverriddenNames_[entityId]) {
		// First override clobbers existing name.
		this.entities_[entityId].names = [name];
		this.entitiesWithOverriddenNames_[entityId] = true;
	} else {
		this.entities_[entityId].names.push(name);
	}
};


/**
 * Storage for entity information associated with a particular model.
 * @param {Object} json Json data from server for this model.
 * @param {o3v.EntityMetadata} metadata Global metadata.
 * @constructor
 */
o3v.EntityModel = function (json, metadata) {
	// TODO(wonchun): This should be constructed out of models, not out of json.
	// TODO(dkogan): Much of this code needs to be pushed back earlier into the
	//               data pipeline. The symmetry code is especially bad.
	this.log_ = o3v.log;

	/**
	 * Map of entity id to entity metadata.
	 * @type {Object.<number, Object>}
	 * @private
	 */
	this.entities_ = {};

	/**
	 * Map of external id to id.
	 * @type {Object.<string, number>}
	 * @private
	 */
	this.externalIdToId_ = {};

	/**
	 * Map of search term to array of entity ids.
	 * @type {Object.<string, Array.<number>>}
	 * @private
	 */
	this.searchToEntityIds_ = {};

	/**
	 * Matcher for search.
	 * @type {Object}
	 * @private
	 */
	this.searchMatcher_ = null;

	/**
	 * Root of the entity DAG (there must only be one).
	 * @type {number}
	 * @private
	 */
	this.rootId_;

	/**
	 * Array of layer names.
	 * @type Array.<String>
	 * @private
	 */
	this.layerNames_ = [];

	/**
	 * Map of layer name to entity id.
	 * @type {Object.<string, number>}
	 * @private
	 */
	this.layerNameToId_ = {};

	/**
	 * Set of entity ids that are unselectable.
	 * @type {Object.<number, boolean>}
	 * @private
	 */
	this.unselectable_ = o3v.util.cloneObject(metadata.getHidden());

	this.loadLeafEntities_(json, metadata);
	this.nonSearchableEntityIds_ = o3v.util.cloneObject(metadata.getHidden());
	this.computeDagAndSymmetries_(metadata);
	this.computeRoot_();
	this.computeSplits_();
	this.computeLayers_(metadata);
	this.computeSearches_(metadata);

	/**
	 * Sublayers: indexed by layer entity id, array of arrays of entity ids.
	 * @type {Object.<number, Array.<Array.<number>>>}view
	 * @private
	 */
	this.sublayers_ = this.loadSublayers_(metadata.getSublayers());
};

/**
 * Maximum number of entities into which a group entity is allowed to split. If
 * it's not possible to split under this number, entity is considered
 * unsplittable.
 * @type {number}
 * @const
 * @private
 */
o3v.EntityModel.MAX_SPLIT_COUNT_ = 25;

/**
 * Loads sublayers from metadata.
 * This is just postprocessing to remove any entities not in this model.
 * @param {Object.<number, Array.<Array.<number>>>} sublayers
 * @return {Object.<number, Array.<Array.<number>>>} sublayers
 */
o3v.EntityModel.prototype.loadSublayers_ = function (sublayers) {

	var newSublayers = {};

	o3v.util.forEach(
		sublayers,
		function (sublayer, layerId) {
			newSublayers[layerId] = [];
			sublayer.forEach(
				function (sublayerArray) {
					newSublayers[layerId][newSublayers[layerId].length] = [];
					sublayerArray.forEach(
						function (entityId) {
							if (this.entities_[entityId] !== undefined) {
								newSublayers[layerId][newSublayers[layerId].length - 1]
									.push(entityId);
							}
						}, this);
				}, this);
		}, this);

	return newSublayers;
};

/**
 * Loads leaf entities from json and metadata.
 * This sets this.entities_ and this.externalIdToId_ for leaf entities.
 * @param {Object} json Json data for this model.
 * @param {o3v.EntityMetadata} metadata Overall metadata.
 * @private
 */
o3v.EntityModel.prototype.loadLeafEntities_ = function (json, metadata) {
	// Generate list of initial entities.
	for (var url in json.urls) {
		var urlItems = json.urls[url].length;
		for (var i = 0; i < urlItems; ++i) {
			json.urls[url][i].names.forEach(
				function (externalId) {
					var entityId = metadata.externalIdToId(externalId);
					var entityMetadata = metadata.getEntity(entityId);
					if (!entityId) {
						this.log_.error('Missing leaf geometry ', externalId,
							' in metadata.');
					} else {
						var entity = {};
						entity.name = entityMetadata.names[0];
						// TODO(dkogan): This field only used for symmetry calculation -
						// really should move that to the data pipeline somewhere as a
						// boolean.
						entity.externalId = externalId;

						// TODO(dkogan): Make parents & children just pointers.
						entity.parentIds = entityMetadata.parentIds;

						this.entities_[entityId] = entity;
						this.externalIdToId_[externalId] = entityId;
					}
				}, this);
		}
	}
};

/**
 * Computes the entity hierarchy DAG and fills in any symmetries. The DAG
 * represents how entities and groups of entities relate to one another: e.g.
 * 'cervical vertebrae' belong to the groups 'spine' and 'skeleton'.
 * This sets this.entities_ for groups, and sets parentIds and childIds on the
 * entities.
 * @param {o3v.EntityMetadata} metadata Overall metadata.
 * @private
 */
o3v.EntityModel.prototype.computeDagAndSymmetries_ = function (metadata) {
	var symmetries = metadata.getSymmetries();

	// Generate a lookup table for group entities which known to be symmetric.
	// The left and right children of group entities are generated in the
	// pipeline.
	var entityIdToHandedness = {};
	o3v.util.forEach(symmetries, function (pair, pairId) {
		o3v.util.forEach(HANDEDNESS_, function (handedness) {
			var childId = pair.childIds[handedness];
			this.nonSearchableEntityIds_[childId] = true;
			entityIdToHandedness[childId] = handedness;
		}, this);
	}, this);

	// Function to get handedness given an entity. Group entity handedness is
	// known from metadata (entityIdToHandedness); leaf entity handedness in
	// determined by the prefix of the external id.
	var getHandedness = function (entityId, entity) {
		if (o3v.util.objectContains(entityIdToHandedness, entityId)) {
			return entityIdToHandedness[entityId];
		} else if (entity.externalId && entity.externalId.match(/^l_/i)) {
			return HANDEDNESS_.LEFT;
		} else if (entity.externalId && entity.externalId.match(/^r_/i)) {
			return HANDEDNESS_.RIGHT;
		} else {
			this.log_.error('paired entity of unknown handedness ', entityId,
				' ', entity.name);
		}
	};

	// Queue of entities to process. Every entity is processed to set the parent
	// child connections.
	// Any entity created in the process of dag generation or symmetry
	// generation gets added to the queue and processed in turn.
	var queue = Object.keys(this.entities_).map(
		function (entityId) {
			return +entityId;
		});
	while (queue.length) {
		var childId = queue.shift();
		var child = this.entities_[childId];
		var modifiedParentIds = {}; // Updated parent ids for this child.
		for (var parentId in child.parentIds) {
			parentId = +parentId;
			// If no entity for parentId exists, create an entity. This is how the
			// DAG is grown (from the bottom up).
			if (!this.entities_[parentId]) {
				var parentMetadata = metadata.getEntity(parentId);
				var parent = {};
				parent.name = parentMetadata.names[0];
				parent.parentIds = parentMetadata.parentIds;
				parent.childIds = o3v.util.createSet();
				this.entities_[parentId] = parent;
				if (symmetries[parentId]) {
					// If parent is symmetric, create its left and right children along
					// with it. One of these children becomes the parent of the child
					// entity. For example 'left thumb' becomes the child of 'hand' and
					// 'left hand', and 'left hand' is the child of 'hand'.
					var symmetry = symmetries[parentId];
					o3v.util.forEach(HANDEDNESS_, function (handedness) {
						var subParentId = symmetry.childIds[handedness];
						var subParent = {};
						subParent.name = symmetry.singularName;
						subParent.parentIds = o3v.util.createSet();
						subParent.parentIds[parentId] = true;
						subParent.childIds = o3v.util.createSet();

						parent.childIds[subParentId] = true;

						this.entities_[subParentId] = subParent;

						// New subParent needs to be processed.
						queue.push(subParentId);
					}, this);
				}
				// New parent needs to be processed.
				queue.push(parentId);
			}
			// Now that the parent is guaranteed to exist, hook up the child to it.
			var parent = this.entities_[parentId];
			if (symmetries[parentId] && !parent.childIds[childId]) {
				// This is the child of a symmetric entity.
				if (symmetries[childId]) {
					// This entity itself is symmetric, so the following connections
					// need to be made:
					// a -> b
					// a -> left_a          * done prior to this code executing
					// a -> right_a         * done prior to this code executing
					// b -> left_b          * done prior to this code executing
					// b -> right_b         * done prior to this code executing
					// left_a -> left_b
					// right_a -> right_b
					var parentSymmetry = symmetries[parentId];
					var childSymmetry = symmetries[childId];

					// a -> b
					modifiedParentIds[parentId] = true;
					parent.childIds[childId] = true;

					// left_a -> left_b && right_a -> right_b
					o3v.util.forEach(HANDEDNESS_, function (handedness) {
						var subParentId = parentSymmetry.childIds[handedness];
						var subChildId = childSymmetry.childIds[handedness];
						var subParent = this.entities_[subParentId];
						var subChild = this.entities_[subChildId];
						subParent.childIds[subChildId] = true;
						subChild.parentIds[subParentId] = true;
					}, this);
				} else {
					// This entity is not symmetric, which means it
					// belongs under either the left or right child of its parent.
					var handedness = getHandedness(childId, child);
					var symmetry = symmetries[parentId];
					var subParentId = symmetry.childIds[handedness];
					var subParent = this.entities_[subParentId];

					if (subParent) {
						subParent.childIds[childId] = true;
						modifiedParentIds[subParentId] = true;
					} else {
						this.log_.error('no subparent for ', parent.name,
							' -> ', child.name);
					}
				}
			} else {
				// Regular parent->child; not symmetric.
				parent.childIds[childId] = true;
				modifiedParentIds[parentId] = true;
			}
		}
		// Incorporate changes due to symmetries.
		child.parentIds = modifiedParentIds;
	}
};

/**
 * Computes the root entity and verifies there is only one.
 * This sets this.rootId_.
 * @private
 */
o3v.EntityModel.prototype.computeRoot_ = function () {
	// Compute root node.
	o3v.util.forEach(
		this.entities_,
		function (entity, entityId) {
			if (o3v.util.isEmpty(entity.parentIds)) {
				if (!this.rootId_) {
					this.rootId_ = entityId;
				} else {
					this.log_.error('MULTIPLE ROOTS', this.rootId_, ' ', entityId,
						' ', this.entities_[this.rootId_].name,
						' ', this.entities_[entityId].name);
				}
			}
		}, this);
};

/**
 * Computes bounding boxes and their centers for all entities.
 * This sets bbox and ctr on all the entities.
 * This must get called before bboxes are read.
 * @param {Object.<string, Array.<number>> leafBboxesByExternalId
 * @private
 */
o3v.EntityModel.prototype.computeBboxes = function (leafBboxesByExternalId) {
	var leafIds = this.getLeafIds(this.rootId_);
	o3v.util.forEach(
		leafIds,
		function (unused_true, entityId) {
			var entity = this.entities_[entityId];
			entity.bbox = leafBboxesByExternalId[entity.externalId];
		}, this);

	var dirty = leafIds; // dirty = need to propagate change up
	var queue = Object.keys(leafIds);
	while (queue.length) {
		var nodeId = queue.shift();
		if (dirty[nodeId]) {
			delete dirty[nodeId];
			var node = this.entities_[nodeId];
			o3v.util.forEach(
				node.parentIds,
				function (unused_true, parentId) {
					var parent = this.entities_[parentId];
					if (node.bbox !== undefined) {
						parent.bbox = o3v.growBBox(parent.bbox, node.bbox);
						dirty[parentId] = true;
						queue.push(parentId);
					} else {
						o3v.log.error('error adding ', node.name, ' to ', parent.name);
					}
				}, this);
		}
	}

	// Compute bbox centers.
	o3v.util.forEach(
		this.entities_,
		function (entity) {
			if (entity.bbox !== undefined) {
				entity.ctr = [];
				entity.ctr[0] = 0.5 * (entity.bbox[0] + entity.bbox[3]);
				entity.ctr[1] = 0.5 * (entity.bbox[1] + entity.bbox[4]);
				entity.ctr[2] = 0.5 * (entity.bbox[2] + entity.bbox[5]);
			} else {
				o3v.log.error('no bbox or center for entity', entity);
			}
		});
};

/**
 * Computes the set of entityIds that best splits this group entity. It returns
 * null if the entity is unsplittable, or if it's impossible to split it into
 * fewer than MAX_SPLIT_COUNT_ subentities.
 * Note: Both the entity and entity id are passed in to simplify the recursion.
 * @param {Object} entity Entity.
 * @param {number} entityId Entity id.
 * @return {Object.<number, boolean>?} Set of entity ids.
 * @private
 */
o3v.EntityModel.prototype.computeOneSplit_ = function (entity, entityId) {
	if (!entity.childIds) {
		return null;
	}

	var split = {};

	// If this is a synonym, delegate.
	if (o3v.util.getObjectCount(entity.childIds) == 1) {
		var childId = +(Object.keys(entity.childIds)[0]);
		return this.computeOneSplit_(this.getEntity(childId), childId);
	}

	var leafIds = this.getLeafIds(entityId);

	// Generate child groups.
	var childGroupIdToGroupLeafIds = {};
	for (var childId in entity.childIds) {
		if (!this.unselectable_[childId]) {
			var childLeafIds = this.getLeafIds(+childId);
			if (childLeafIds && o3v.util.getObjectCount(childLeafIds) > 1) {
				childGroupIdToGroupLeafIds[childId] = childLeafIds;
			}
		}
	}

	// Sort child groups by number of subelements.
	var childGroupIds = Object.keys(childGroupIdToGroupLeafIds);
	childGroupIds.sort(function (a, b) {
		return (o3v.util.getObjectCount(childGroupIdToGroupLeafIds[b]) - o3v.util.getObjectCount(childGroupIdToGroupLeafIds[a]));
	});

	// Add useful child groups to split.
	childGroupIds.forEach(
		function (childGroupId) {
			var useful = false;
			var childLeafIds = childGroupIdToGroupLeafIds[childGroupId];
			for (var childLeafId in childLeafIds) {
				if (leafIds[childLeafId]) {
					useful = true;
					break;
				}
			}
			if (useful) {
				split[childGroupId] = true;
				for (var childLeafId in childLeafIds) {
					delete leafIds[childLeafId];
				}
			}
		});

	// Add any individual leafs unaccounted for.
	for (var leafId in leafIds) {
		if (!this.unselectable_[leafId]) {
			split[leafId] = true;
		}
	}

	if (o3v.util.getObjectCount(split) <= 1) {
		// Leaf entity or group - unsplittable.
		return null;
	} else if (o3v.util.getObjectCount(split) <= o3v.EntityModel.MAX_SPLIT_COUNT_) {
		return split;
	} else {
		this.log_.warning('entity ', entity.name, ' splits into too many: ',
			o3v.util.getObjectCount(split), ' ', split);
		if (o3v.debug) {
			return split;
		} else {
			return null;
		}
	}
};

/**
 * Computes the best split (where possible) for group entities.
 * This sets split_ on this.entities_.
 * @private
 */
o3v.EntityModel.prototype.computeSplits_ = function () {
	// TODO(dkogan): This needs to go into the pipeline, but requires that
	// the pipeline be model-specific.
	o3v.util.forEach(this.entities_, function (entity, entityId) {
		if (!this.unselectable_[entityId]) {
			var split = this.computeOneSplit_(entity, entityId);
			if (split) {
				entity.split_ = split;
			}
		}
	}, this);
};

/**
 * Propagates layer information down to leaf entities. If entityId is leaf, the
 * layer is set on that leaf. Otherwise, the function is called recursively on
 * all the entity's children.
 * @param {number} layerId Entity id of the layer to propagate.
 * @param {number} entityId Entity id to propagate through.
 * @private
 */
o3v.EntityModel.prototype.propagateLayerDown_ = function (layerId, entityId) {
	var entity = this.entities_[entityId];
	if (!entity.layers) {
		entity.layers = {};
	}
	if (!entity.childIds) {
		entity.layers[layerId] = true;
	} else {
		// TODO(dkogan): Implement without recursion. Should be okay for now.
		for (var childId in entity.childIds) {
			this.propagateLayerDown_(layerId, +childId);
		}
	}
};

/**
 * Propagates layer information up through the tree. The layer is set on both
 * the current entity, and all its ancestors (recursively).
 * @param {number} layerId Entity id of the layer to propagate.
 * @param {number} entityId Entity id to propagate through.
 * @private
 */
o3v.EntityModel.prototype.propagateLayerUp_ = function (layerId, entityId) {
	var entity = this.entities_[entityId];
	if (!entity.layers) {
		entity.layers = {};
	}
	entity.layers[layerId] = true;
	// TODO(dkogan): Implement without recursion. Should be okay for now.
	for (var parentId in entity.parentIds) {
		this.propagateLayerUp_(layerId, +parentId);
	}
};

/**
 * Computes layer information on all entities. Leaf entities are analogous
 * to render groups, and must be in exactly one layer. All other entities are
 * considered to be in every layer in which one of their children is. Thus,
 * the root entity is in every layer, and 'elbow' may be in 'muscle' and
 * 'skeleton' layers.
 * This sets layers on this.entities_.
 * @param {o3v.EntityMetadata} metadata Metadata.
 * @private
 */
o3v.EntityModel.prototype.computeLayers_ = function (metadata) {
	// Compute initial layers.
	Object.keys(metadata.getLayers()).forEach(
		function (layerId) {
			// Use external ids for layers, not names.
			// TODO(dkogan): We should split up layers and groups
			// to avoid this kind of hack.
			if (this.entities_[layerId]) {
				var layerName = metadata.getEntity(layerId).externalId;
				this.layerNames_.push(layerName);
				this.entities_[layerId].externalId = layerName;
				this.layerNameToId_[layerName] = layerId;
			}
		}, this);

	// Pass layer info to the child nodes.
	Object.keys(metadata.getLayers()).forEach(
		function (layerId) {
			if (this.entities_[layerId]) {
				this.propagateLayerDown_(layerId, layerId);
			}
		}, this);

	// Sanity check - any leaf entity must be in exactly one layer.
	o3v.util.forEach(this.entities_, function (entity) {
		if (!entity.childIds && (!entity.layers || o3v.util.getObjectCount(entity.layers) != 1)) {
			this.log_.error('leaf entity not in one layer: ', entity.name);
		}
	}, this);

	// Propagate layer info up through the tree.
	o3v.util.forEach(this.entities_, function (entity, entityId) {
		if (!entity.childIds) {
			this.propagateLayerUp_(
				Object.keys(entity.layers)[0], entityId);
		}
	}, this);

	// Turn layers into arrays for easier processing.
	o3v.util.forEach(
		this.entities_,
		function (entity) {
			if (!o3v.util.isEmpty(entity.layers)) {
				entity.layers = Object.keys(entity.layers);
			}
		});
};

/**
 * Computes layer information on all entities. Leaf entities are analogous
 * to render groups, and must be in exactly one layer. All other entities are
 * considered to be in every layer in which one of their children is. Thus,
 * the root entity is in every layer, and 'elbow' may be in 'muscle' and
 * 'skeleton' layers.
 * This sets this.searchMatcher_ and this.searchToEntityIds_.
 * @param {o3v.EntityMetadata} metadata Metadata.
 * @private
 */
o3v.EntityModel.prototype.computeSearches_ = function (metadata) {
	var symmetries = metadata.getSymmetries();

	// Compute search table.
	for (var entityId in this.entities_) {
		entityId = +entityId;
		if (!this.nonSearchableEntityIds_[entityId]) {
			var names = metadata.getEntity(entityId).names.slice(0);
			// Use singular form as the primarywhen searching, for aesthetics.
			if (symmetries[entityId]) {
				names[0] = symmetries[entityId].singularName;
			}
			// TODO(dkogan): Expand this to be able to handle 'left lung'.
			names.forEach(
				function (name) {
					o3v.util.setIfUndefined(this.searchToEntityIds_, name, []);
					this.searchToEntityIds_[name].push(entityId);
				}, this);
		}
	}

	var searches = Object.keys(this.searchToEntityIds_);
	searches.sort(function (a, b) {
		return a.length - b.length;
	});

	this.autocompleteList_ = searches;
};

/**
 * Get a selectable entity by traversing the DAG up. This function tries to find
 * the smallest group of entities that includes the current entity, and is
 * selectable. In many cases, this is just the current entity. Note that no
 * guarantee is made about whether this is actually the smallst group - this
 * function is heuristical.
 * @param {number} entityId Entity id to start from.
 * @return {number} Entity id of the group.
 * @private
 */
// TODO(dkogan): Extend this function to generically unexplode entities.
// TODO(dkogan): Move this calculation into the pipeline.
o3v.EntityModel.prototype.getSelectable_ = function (entityId) {
	if (!this.unselectable_[entityId]) {
		return entityId;
	} else {
		// Recurse on parent id with fewest children.
		var parentIds = Object.keys(this.entities_[entityId].parentIds);

		var minCount = o3v.util.getObjectCount(this.getRootEntity().childIds) + 1;
		var minParentId = -1;
		parentIds.forEach(
			function (parentId) {
				var parent = this.entities_[parentId];
				var count = o3v.util.getObjectCount(parent.childIds);
				if (count < minCount) {
					minCount = count;
					minParentId = parentId;
				}
			}, this);
		if (minParentId == -1) {
			this.log_.error('Unable to find entity id under click.');
			return this.rootId_;
		} else {
			return this.getSelectable_(minParentId);
		}
	}
};

/**
 * Maps an external id to an internal id.
 * @param {string} externalId External id.
 * @return {number} The internal id.
 */
o3v.EntityModel.prototype.externalIdToId = function (externalId) {
	return this.getSelectable_(this.externalIdToId_[externalId]);
};

/**
 * Gets an entity object by id.
 * @param {number} entityId The id of the entity.
 * @return {Object} The entity.
 */
o3v.EntityModel.prototype.getEntity = function (entityId) {
	return this.entities_[entityId];
};

/**
 * Gets the root entity. (Entity, not just entity id.)
 * @return {Object} The root entity.
 */
o3v.EntityModel.prototype.getRootEntity = function () {
	return this.entities_[this.rootId_];
};

/**
 * Gets the set of leaf entities in any subtree.
 * @param {number} entityId The root of the subtree.
 * @return {Object.<number, boolean>} Set of leaf entity ids.
 */
o3v.EntityModel.prototype.getLeafIds = function (entityId) {
	var leafIds = {};
	var entity = this.entities_[entityId];
	if (!entity.childIds) {
		leafIds[entityId] = true;
		return leafIds;
	} else {
		for (var childId in entity.childIds) {
			o3v.util.extendObject(leafIds, this.getLeafIds(+childId));
		}
		return leafIds;
	}
};

/**
 * Checks to see if entity is splittable.
 * @param {number} entityId The entity to try to split.
 * @return {boolean} True if entity is splittable.
 */
o3v.EntityModel.prototype.isSplittable = function (entityId) {
	return !!this.getEntity(entityId).split_;
};

/**
 * Gets the minimal split of the entity. Returns undefined if no split is
 * possible.
 * @param {number} entityId The entity id to split.
 * @return {Object.<number, boolean>?} Entity ids into which to split.
 */
o3v.EntityModel.prototype.getSplit = function (entityId) {
	return this.getEntity(entityId).split_;
};

/** Gets layer names.
 * @return Array.<string> Layer names
 */
o3v.EntityModel.prototype.getLayerNames = function () {
	return this.layerNames_;
};

/**
 * Maps a layer name to id.
 * @param {string} layerName Name of the layer.
 * @return {number} Entity id of the layer.
 */
o3v.EntityModel.prototype.layerNameToId = function (layerName) {
	return this.layerNameToId_[layerName];
};

/**
 * Maps a search term to a set of matching entity ids.
 * @param {string} search The search term.
 * @return {Object.<number, boolean>?} Matching entity ids.
 */
o3v.EntityModel.prototype.searchToEntityIds = function (search) {
	return this.searchToEntityIds_[search];
};

/**
 * Gets the search matcher for this model.
 * @return {Array.<string>} Array of search strings.
 */
o3v.EntityModel.prototype.getAutocompleteList = function () {
	return this.autocompleteList_;
};

/**
 * Gets sublayer information. For explanation of datastructure, see
 * sublayers_ member in EntityMetadata.
 * @return {Object.<number, Array.<Array.<number>>>} Sublayers.
 */
o3v.EntityModel.prototype.getSublayers = function () {
	return this.sublayers_;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview This object keeps track of the model currently loaded.
 *               On initialization, loads model 0 in o3v.MODELS.
 */
o3v.ContentManager = function () {
	this.models_ = o3v.MODELS;
	this.metadata_ = null;
	this.currentModel_ = -1; // Force it to cycle to the first model.

	// metadata caches.
	this.scriptsLoaded_ = {}; // e.g. adult_female.js
	this.metadataLoaded_ = {}; // e.g. entity_metadata.json
};

o3v.ContentManager.prototype.nextModel = function (loadModelInfoCallback,
	loadMeshCallback,
	loadModelCallback,
	loadMetadataCallback) {
	this.currentModel_ = (this.currentModel_ + 1) % this.models_.length;

	loadModelInfoCallback(this.models_[this.currentModel_]);

	this.loadModel_(this.models_[this.currentModel_],
		loadMeshCallback, loadModelCallback, loadMetadataCallback);
};

o3v.ContentManager.prototype.getCurrentModelInfo = function () {
	return this.models_[this.currentModel_];
};

o3v.ContentManager.prototype.loadModel_ =
	function (modelInfo,
		loadMeshCallback, // After each mesh
		loadModelCallback, // After all meshes
		loadMetadataCallback // After metadata
	) {
		// First, load javascript.
		var scriptPath = modelInfo.modelPath + modelInfo.scriptName;
		if (this.scriptsLoaded_[scriptPath]) {
			this.loadModelAfterScript_(modelInfo, loadMeshCallback, loadModelCallback,
				loadMetadataCallback);
		} else {
			$.getScript(scriptPath, function () {
				this.scriptsLoaded_[scriptPath] = true;
				this.loadModelAfterScript_(modelInfo, loadMeshCallback,
					loadModelCallback,
					loadMetadataCallback);

			}.bind(this));
		}
	};

o3v.ContentManager.prototype.loadModelAfterScript_ =
	function (modelInfo,
		loadMeshCallback, // After each mesh
		loadModelCallback, // After all meshes
		loadMetadataCallback // After metadata
	) {
		// Call out to webgl loader.
		downloadModel(modelInfo.modelPath, modelInfo.name, loadMeshCallback,
			loadModelCallback);

		// Load metadata.
		this.loadMetadata_(modelInfo.modelPath + modelInfo.metadataFile,
			MODELS[modelInfo.name],
			loadMetadataCallback);
	};

o3v.ContentManager.prototype.loadMetadata_ = function (metadataPath,
	modelMetadata,
	callback) {
	console.log("inside loadMetadata_");
	var cached_metadata = this.metadataLoaded_[metadataPath];
	if (cached_metadata) {
		this.metadata_ = cached_metadata;
		callback();
		console.log("inside loadMetadata_ cached");
	} else {
		var self = this;
		console.log("Metadata_ not cached" + metadataPath);

		function onload(req) {
			// TODO: error handling.
			console.log("inside loadMetadata_ not cached onload success");
			var metadata = new o3v.EntityMetadata(JSON.parse(req.responseText));
			self.metadata_ = new o3v.EntityModel(modelMetadata, metadata);
			self.metadataLoaded_[metadataPath] = this.metadata_;
			console.log(metadata);
			callback();
		};

		getHttpRequest(metadataPath, onload);
	}
};

o3v.ContentManager.prototype.getMetadata = function () {
	return this.metadata_;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Generic opacity slider manager - allows for multiple clients
 *               to control the opacity of layers.
 */
o3v.LayerOpacityManager = function () {
	// If not null, an array of opacities sorted by outside-first.
	this.layerOpacities_ = null;

	// Functions to call on change.
	this.callbacks = [];
};

o3v.LayerOpacityManager.prototype.init = function (numLayers) {
	this.layerOpacities_ = [];
	for (var i = 0; i < numLayers; ++i) {
		this.layerOpacities_.push(1.0);
	}
};

o3v.LayerOpacityManager.prototype.getLayerOpacities = function () {
	return this.layerOpacities_;
};

o3v.LayerOpacityManager.prototype.setLayerOpacity =
	function (layer, value, from) {
		this.layerOpacities_[layer] = value;
		this.updateAllBut(from);
	};

o3v.LayerOpacityManager.prototype.setLayerOpacities = function (values, from) {
	this.layerOpacities_ = values.slice(); // makes copy
	this.updateAllBut(from);
};

o3v.LayerOpacityManager.prototype.addView = function (callback) {
	var numViews = this.callbacks.length;
	for (var i = 0; i < numViews; ++i) {
		if (this.callbacks[i] == callback) {
			return;
		}
	}
	this.callbacks.push(callback);
};

o3v.LayerOpacityManager.prototype.updateAllBut = function (from) {
	var numViews = this.callbacks.length;
	for (var i = 0; i < numViews; ++i) {
		var callback = this.callbacks[i];
		if (callback != from) {
			callback();
		}
	}
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Code to make and keep track of hash changes.
 */

/**
 * History object. Tracks history using the url hash tag, enables restoring
 * deep links into the application, and navigating using back/forward.
 * @param {Window!} win Window object. Passed in so it can be mocked out in
 *                     test.
 * @constructor
 */
o3v.History = function (win) {
	/**
	 * Window object. Used for timeouts, and to set the hash.
	 * @type {Window}
	 * @private
	 */
	this.window_ = win;

	/**
	 * Registry of callabacks to save and restore state.
	 * { '<component>' : [ <getStateCallback>, <restoreStateCallback> ] }
	 * @type {Object.<string,Array.<Function>>}
	 * @private
	 */
	this.registry_ = {};
};

/**
 * Index of function to get state in the callback registry.
 * @type {number}
 * @const
 * @private
 */
o3v.History.GET_STATE_ = 0;

/**
 * Index of function to restore state in the callback registry.
 * @type {number}
 * @const
 * @private
 */
o3v.History.RESTORE_STATE_ = 1;

/**
 * Time for which the state needs to remain static prior to being recorded.
 * @type {number}
 * @const
 * @private
 */
o3v.History.UPDATE_DELAY_MS_ = 1 * 1000;

/**
 * Timeout used to buffer sequences of state changes.
 * @type {number|undefined}
 * @private
 */
o3v.History.prototype.timeout_;

/**
 * This is set to indicate that the next navigation event is to be ignored.
 * Used when this object itself is the one setting the history.
 * @type {boolean}
 * @private
 */
o3v.History.prototype.suppressed_ = false;

/**
 * Begins history tracking. In most cases, this should be called after all
 * calls to register(). Exception is if you want to temporarily register a
 * component.
 */
o3v.History.prototype.start = function () {
	$(this.window_).bind('hashchange', function (a) {
		this.restoreState_(this.window_.location.hash);
	}.bind(this));

	// Initial restore.
	this.restoreState_(this.window_.location.hash);
};

/**
 * Clears the hash, thus completely resetting the view to initial state.
 */
o3v.History.prototype.reset = function () {
	// Clear any pending updates to the URL.
	if (this.timeout_) {
		this.window_.clearTimeout(this.timeout_);
	}
	this.window_.location.hash = '';
};

/**
 * Registers a component for history storage.
 * @param {string} id A unique id for your component. Shorter is better.
 * @param {function() : string } getStateCallback A function that returns a
 *                               string that represents the component's state.
 * @param {function(string) : * } restoreStateCallback A function that takes
 *                                a string representing state and restores the
 *                                component's state.
 */
o3v.History.prototype.register = function (
	id, getStateCallback, restoreStateCallback) {
	if (this.registry_[id] !== undefined) {
		o3v.log.error('id ', id, ' already registered in history');
	}
	this.registry_[id] = [getStateCallback, restoreStateCallback];
};

/**
 * Removes a component from history storage.
 * @param {string} id Id of the component to unregister.
 */
o3v.History.prototype.unregister = function (id) {
	delete this.registry_[id];
};

/**
 * Call this to indicate a state change. If opt_immediate is not set, this
 * starts a timeout which waits for the state to become stable. This prevents
 * a sequence of updates from creating a large number of history updates.
 * @param {boolean=} opt_immediate If true, force the state to update
 *                   immediately.
 */
o3v.History.prototype.update = function (opt_immediate) {
	if (this.timeout_) {
		this.window_.clearTimeout(this.timeout_);
	}
	var state = this.generateState_();

	var updateFunction = function () {
		var newState = this.generateState_();
		if (newState == state) {
			// State has stabilized, so record it in the history.
			if (this.window_.location.hash != state) {
				this.suppressed_ = true;
				o3v.log.info('history saving state: ' + state);
				this.window_.location.hash = state;
			}
		} else {
			// State has not stabilized, try waiting again.
			this.update();
		}
	}.bind(this);
	if (opt_immediate) {
		this.timeout_ = undefined;
		updateFunction();
	} else {
		this.timeout_ = this.window_.setTimeout(updateFunction,
			o3v.History.UPDATE_DELAY_MS_);
	}
};

/**
 * Encodes a string for url inclusion. This is basically encodeURIComponent
 * with some changes to make the kinds of urls we generate more readable.
 * Specifically, it does not encode plus, colon, comma and semicolon.
 * @param {string} decoded String to be encoded.
 * @return {string} The encoded string.
 * @private
 */
o3v.History.prototype.encode_ = function (decoded) {
	var encoded = encodeURIComponent(decoded);
	// Undo confusing and unnecessary encoding.
	encoded = encoded.replace(/%2B/g, '+');
	encoded = encoded.replace(/%3A/g, ':');
	encoded = encoded.replace(/%2C/g, ',');
	encoded = encoded.replace(/%3B/g, ';');
	return encoded;
};

/**
 * Decodes a string from url inclusion. This is the reverse of encode_
 * and obeys the same exceptions.
 * @param {string} encoded String to be decoded.
 * @return {string} The decoded string.
 * @private
 */
o3v.History.prototype.decode_ = function (encoded) {
	// Any future additions - note that this is done in reverse order from
	// encode_.
	encoded = encoded.replace(/;/g, '%3B');
	encoded = encoded.replace(/,/g, '%2C');
	encoded = encoded.replace(/:/g, '%3A');
	encoded = encoded.replace(/\+/g, '%2B');
	var decoded = decodeURIComponent(encoded);
	return decoded;
};

/**
 * Generates the current state by querying each registered component.
 * @return {string} The current state, properly encoded for a url.
 * @private
 */
o3v.History.prototype.generateState_ = function () {
	var state = [];
	for (var id in this.registry_) {
		var componentState = this.registry_[id][o3v.History.GET_STATE_]();
		state.push(id + '=' + this.encode_(componentState));
	}
	return state.join('&');
};

/**
 * Restores the current state by calling each registered component.
 * Note: This first calls restoreState on each component with ''
 *       to reset to baseline. The components need to properly handle
 *       the double call this can incur.
 * @param {string} state The current state, url-encoded.
 * @private
 */
o3v.History.prototype.restoreState_ = function (state) {
	try {
		if (this.suppressed_) {
			this.suppressed_ = false;
			return;
		}
		o3v.log.info('history restoring state: ' + state);
		// Reset the states.
		for (var id in this.registry_) {
			this.registry_[id][o3v.History.RESTORE_STATE_]('');
		}
		// Restore any component that has a state.
		state = state.replace(/^#/, '');
		var tokens = state.split('&');
		for (var tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
			var tuple = tokens[tokenIndex].split('=');
			if (tuple.length == 2) {
				var id = tuple[0];
				if (this.registry_[id]) {
					var componentState = this.decode_(tuple[1]);
					this.registry_[id][o3v.History.RESTORE_STATE_](componentState);
				}
			}
		}
	} catch (err) {
		// Ignore all errors - these might be caused by
		// legacy urls.
		o3v.log_.warning('history restoring state', err);
	}
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Layer controls for main UI of open-3d-viewer.
 */
// TODO(arthurb): Objectify.
o3v.LayersUI = function (layerOpacityManager) {
	this.layerOpacityManager_ = layerOpacityManager;

	this.singleSlider_ = new o3v.LayersUI.SingleSlider(layerOpacityManager);
	this.multiSlider_ = new o3v.LayersUI.MultiSlider(layerOpacityManager);
	this.icons_ = new o3v.LayersUI.Icons(layerOpacityManager);
	this.sliderToggle_ = new o3v.LayersUI.SliderToggle(this.singleSlider_,
		this.multiSlider_);
};

o3v.LayersUI.ICON_WIDTH = 45;
o3v.LayersUI.ICON_HEIGHT = 47;

/*
 * Builds all slider UI.
 */
o3v.LayersUI.prototype.buildAll = function (putBelow, numLayers, iconFile) {
	this.singleSlider_.build(putBelow, numLayers);
	this.multiSlider_.build(putBelow, numLayers);
	this.icons_.build(putBelow, numLayers, iconFile);
	this.sliderToggle_.build(this.icons_.getLastIcon());
};

/*
 * A slider with one handle. Moving the slider from one end to the other
 * transitions the model from 100% transparent (i.e., invisible) to 100%
 * opaque.
 */
o3v.LayersUI.SingleSlider = function (layerOpacityManager) {
	this.layerOpacityManager_ = layerOpacityManager;

	this.updateCallback_ = this.update.bind(this);

	this.slider = null;
	this.range = 10000;
	this.numLayers = 0;
	this.HANDLE_WIDTH = 51;
};

o3v.LayersUI.SingleSlider.prototype.build = function (putBelow, numLayers) {
	this.numLayers = numLayers;
	if (this.slider) {
		this.slider.remove();
	}

	this.slider = $('<div>').appendTo('body').slider({
		orientation: 'vertical',
		range: 'min',
		min: 0,
		max: this.range,
		value: this.range,
		slide: function (event, ui) {
			this.setOpacitiesFromFraction(ui.value / this.range);
		}.bind(this),
		stop: function () {
			document.activeElement.blur(); // take focus off slider handle
		}
	}).css({
		'position': 'absolute',
		'border': 'none',
		'border-left': '2px solid #92e497',
		'border-right': '2px solid #92e497',
		'border-radius': 0,
		'background': 'none',
		'width': o3v.LayersUI.ICON_WIDTH + 'px',
		'height': (this.numLayers * o3v.LayersUI.ICON_HEIGHT) + 'px',
		'z-index': o3v.uiSettings.ZINDEX_MAINUI
	}).position({
		my: 'top',
		at: 'bottom',
		of: putBelow,
		collision: 'none'
	});

	var sliderNodes = this.slider.get(0).childNodes;
	var sliderBgStyle = sliderNodes[0].style;
	sliderBgStyle.background = 'none';
	var sliderHandleStyle = sliderNodes[1].style;
	sliderHandleStyle.width = this.HANDLE_WIDTH + 'px';
	sliderHandleStyle.opacity = 0.7;
	sliderHandleStyle.outlineStyle = 'none';

	this.setOpacitiesFromFraction(1.0);

	this.layerOpacityManager_.addView(this.updateCallback_);
};

o3v.LayersUI.SingleSlider.prototype.setOpacitiesFromFraction =
	function (fraction) {
		var scaled = fraction * this.numLayers;
		var opacities = [];
		for (var i = 0; i < this.numLayers; ++i) {
			if (scaled <= i) {
				opacities.push(0.0);
			} else if (scaled >= i + 1) {
				opacities.push(1.0);
			} else {
				opacities.push(scaled - i);
			}
		}
		this.layerOpacityManager_.setLayerOpacities(opacities, this.updateCallback_);
	};

o3v.LayersUI.SingleSlider.prototype.show = function (show) {
	this.slider.css({
		'visibility': show ? 'visible' : 'hidden'
	});
};

o3v.LayersUI.SingleSlider.prototype.update = function () {
	var opacities = this.layerOpacityManager_.getLayerOpacities();
	var numLayers = opacities.length;
	var fraction = 0;
	for (var i = numLayers - 1; i > -1; --i) {
		if (opacities[i] > 0) {
			fraction = (i + opacities[i]) / numLayers;
			break;
		}
	}
	this.slider.slider('value', fraction * this.range);
};

/*
 * A collection of sliders, one handle per layer. Moving each slider from one
 * end to the other transitions just that layer from 100% transparent (i.e.
 * invisible) to 100% opaque.
 */
o3v.LayersUI.MultiSlider = function (layerOpacityManager) {
	this.layerOpacityManager_ = layerOpacityManager;

	this.updateCallback_ = this.update.bind(this);

	this.sliders = null;
	this.range = 10000;
	this.numLayers = 0;
	this.HANDLE_HEIGHT = 43;
};

o3v.LayersUI.MultiSlider.prototype.build = function (putBelow, numLayers) {
	if (this.sliders) {
		for (var i = 0; i < this.numLayers; ++i) {
			this.sliders[i].remove();
		}
	}
	this.sliders = [];

	this.numLayers = numLayers;
	for (i = 0; i < this.numLayers; ++i) {
		var newSlider = $('<div>').appendTo('body').slider({
			orientation: 'horizontal',
			range: 'min',
			min: 0,
			max: this.range,
			value: this.range,
			slide: function (event, ui) {
				var layer = (this.sliders.length - 1) - $(event.target).data('id');
				this.layerOpacityManager_.setLayerOpacity(
					layer, ui.value / this.range, this.updateCallback_);
			}.bind(this),
			stop: function () {
				document.activeElement.blur(); // take focus off slider handle
			}
		}).css({
			'position': 'absolute',
			'border': 'none',
			'border-left': '2px solid #92e497',
			'border-right': '2px solid #92e497',
			'border-radius': 0,
			'background': 'none',
			'visibility': 'hidden',
			'width': o3v.LayersUI.ICON_WIDTH + 'px',
			'height': o3v.LayersUI.ICON_HEIGHT + 'px',
			'z-index': o3v.uiSettings.ZINDEX_MAINUI
		}).position({
			my: 'top',
			at: 'bottom',
			of: i === 0 ? putBelow : this.sliders[i - 1],
			collision: 'none'
		}).data('id', i);

		this.sliders.push(newSlider);
		var sliderNodes = newSlider.get(0).childNodes;
		var sliderBgStyle = sliderNodes[0].style;
		sliderBgStyle.background = 'none';
		var sliderHandleStyle = sliderNodes[1].style;
		sliderHandleStyle.height = this.HANDLE_HEIGHT + 'px';
		sliderHandleStyle.opacity = 0.7;
		sliderHandleStyle.outlineStyle = 'none';
	}

	this.layerOpacityManager_.addView(this.updateCallback_);
};

o3v.LayersUI.MultiSlider.prototype.show = function (show) {
	var numSliders = this.sliders.length;
	for (var i = 0; i < numSliders; ++i) {
		this.sliders[i].css({
			'visibility': show ? 'visible' : 'hidden'
		});
	}
};

o3v.LayersUI.MultiSlider.prototype.update = function () {
	var opacities = this.layerOpacityManager_.getLayerOpacities();
	var numSliders = this.sliders.length;
	for (var i = 0; i < numSliders; ++i) {
		var layer = (numSliders - 1) - i;
		this.sliders[i].slider('value', opacities[layer] * this.range);
	}
};

/*
 * A stack of decorative icons that sit under the layer sliders and change
 * opacity as the layers do.
 */
o3v.LayersUI.Icons = function (layerOpacityManager) {
	this.layerOpacityManager_ = layerOpacityManager;

	this.updateCallback_ = this.update.bind(this);

	this.activeIcons = [];
	this.inactiveIcons = [];
	this.lastIcon = null;
};

o3v.LayersUI.Icons.prototype.getLastIcon = function () {
	return this.lastIcon;
};

o3v.LayersUI.Icons.prototype.build = function (putBelow, numLayers, iconFile) {
	if (this.activeIcons) {
		var numIcons = this.activeIcons.length;
		for (var i = 0; i < numIcons; ++i) {
			this.activeIcons[i].remove();
			this.inactiveIcons[i].remove();
		}
		this.activeIcons = [];
		this.inactiveIcons = [];
	}

	for (i = 0; i < numLayers; ++i) {
		var offsetTop = i * o3v.LayersUI.ICON_HEIGHT;

		var inactiveIcon = $('<div>').appendTo('body').css({
			'position': 'absolute',
			'width': o3v.LayersUI.ICON_WIDTH + 'px',
			'height': o3v.LayersUI.ICON_HEIGHT + 'px',
			'background-image': 'url(' + iconFile + ')',
			'background-position': '0px -' + offsetTop + 'px',
			'z-index': o3v.uiSettings.ZINDEX_MAINUI_STATUS_LOWER
		});
		this.inactiveIcons.push(inactiveIcon);
		inactiveIcon.position({
			my: 'top',
			at: 'bottom',
			of: i === 0 ? putBelow : this.inactiveIcons[i - 1],
			collision: 'none'
		});

		var activeIcon = $('<div>').appendTo('body').css({
			'position': 'absolute',
			'width': o3v.LayersUI.ICON_WIDTH + 'px',
			'height': o3v.LayersUI.ICON_HEIGHT + 'px',
			'background-image': 'url(' + iconFile + ')',
			'background-position': '-' + o3v.LayersUI.ICON_WIDTH + 'px -' + offsetTop + 'px',
			'z-index': o3v.uiSettings.ZINDEX_MAINUI_STATUS_UPPER
		});
		this.activeIcons.push(activeIcon);
		activeIcon.position({
			my: 'top',
			at: 'bottom',
			of: i === 0 ? putBelow : this.activeIcons[i - 1],
			collision: 'none'
		});
	}

	this.lastIcon = this.activeIcons[this.activeIcons.length - 1];
	this.layerOpacityManager_.addView(this.updateCallback_);
};

/*
 * Updates icons based on layer opacities.
 */
o3v.LayersUI.Icons.prototype.update = function () {
	var opacities = this.layerOpacityManager_.getLayerOpacities();
	var numIcons = this.activeIcons.length;
	for (var i = 0; i < numIcons; ++i) {
		var layer = (numIcons - 1) - i;
		this.activeIcons[i].get(0).style.opacity = opacities[layer];
	}
};

/*
 * A button that switches between single- and multiple-slider modes.
 */
o3v.LayersUI.SliderToggle = function (singleSlider, multiSlider) {
	this.button = null;
	this.single = true;

	this.singleSlider_ = singleSlider;
	this.multiSlider_ = multiSlider;
};

o3v.LayersUI.SliderToggle.prototype.build = function (lastIcon) {
	if (this.button) {
		this.button.remove();
	}

	this.button = $('<div>').appendTo('body').css({
		'position': 'absolute',
		'width': '45px',
		'height': '50px',
		'border-left': '2px solid #92e497',
		'border-bottom-left-radius': '16px',
		'border-bottom-right-radius': '16px',
		'border-bottom': '2px solid #92e497',
		'border-right': '2px solid #92e497',
		'border-top': '1px solid #c2ffb7',
		'background-position': 'center center',
		'background-repeat': 'no-repeat',
		'background-color': '#fff',
		'z-index': o3v.uiSettings.ZINDEX_MAINUI_STATUS_UPPER
	}).position({
		my: 'top',
		at: 'bottom',
		of: lastIcon,
		collision: 'none'
	}).click(this.toggleSliders.bind(this));

	this.setArt();
};

o3v.LayersUI.SliderToggle.prototype.setArt = function () {
	this.button.css({
		'background-image': this.single ? 'url(img/toggle_single_slider.png)' : 'url(img/toggle_multiple_sliders.png)'
	});
};

o3v.LayersUI.SliderToggle.prototype.toggleSliders = function () {
	this.single = !this.single;
	this.setArt();

	this.singleSlider_.show(this.single);
	this.multiSlider_.show(!this.single);
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Platform-specific gestures for open-3d-viewer.
 */

o3v.Gestures = function () {
	this.isMac_ = navigator.platform &&
		(navigator.platform.indexOf('Mac') == 0);
};

// Reports whether a click should be treated as a "hide" gesture.
// On Windows and other non-Mac platforms, we use ctrl-click for hide. On Mac,
// we use command-click, because ctrl-click brings up a context menu.
o3v.Gestures.prototype.isHideClick = function (controlKeyDown, metaKeyDown) {
	if (controlKeyDown && !this.isMac_) return true;
	if (metaKeyDown && this.isMac_) return true;
	return false;
}; // Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Code to make and keep track of selections.
 */

// changeCallback: function to call when anything has changed.
//                 after this is called, should repeatedly call
//                 recalculate until it stops returning true.
o3v.SelectManager = function (changeCallback) {
	this.changeCallback_ = changeCallback;

	// map of selected layer name -> refcount of entities in layer
	this.layerSelectionRefcount_ = {};

	// Includes pending.
	// Map of entityId -> entity
	// TODO(dkogan): Generalize to arbitrary number of groups and
	// behaviors.
	this.selectedEntities_ = {};
	this.pinnedEntities_ = {};
	this.hiddenEntities_ = {};

	// Map of entity -> opacity interpolant
	// If an entity is in this map, then it is being changed
	// (being hidden/selected/pinned/unhidden/unselected)
	this.interpolants_ = {};
	// Predefined storage for current and other layer interpolants.
	this.CURRENT_LAYER_INTERPOLANT = -1;
	this.OTHER_LAYER_INTERPOLANT = -2;

	// The interpolants behave as follows:
	// 0 = same opacity as would be otherwise.
	// 1 = completely visibile
	// -1 = completely hidden
	// TODO(wonchun): work out some math/libraries to combine these. Figure
	// out associativity properties.

	// Layer with selection behavior varies depending on how many layers have
	// selections in them.
	this.CURRENT_LAYER_OPACITY_MAX_MODIFIER = -0.8; // 20% opaque.
	this.CURRENT_LAYER_OPACITY_MODIFIER_STEP = 0.1;
	this.CURRENT_LAYER_OPACITY_MIN_MODIFIER = -0.9; // 10% opaque.
	this.OTHER_LAYER_OPACITY_DEMOTION = 0.15;

	this.PINNED_ENTITY_OPACITY_MODIFIER = 1.0;
	this.SELECTED_ENTITY_OPACITY_MODIFIER = 1.0;
	this.HIDDEN_ENTITY_OPACITY_MODIFIER = -1.0;
	this.NEUTRAL_OPACITY_MODIFIER = 0;

	// Modes for explicit UI of selecting multiple / hiding / etc.
	this.mode_ = 0;
	this.MODE_NORMAL = 0;
	this.MODE_PIN = 1;
	this.MODE_HIDE = 2;
};

//////////////////////////////////////////////////////////////////////
// INITIALIZATION METHODS
//////////////////////////////////////////////////////////////////////

o3v.SelectManager.prototype.reset = function (entityStore) {
	this.reset_();
	this.mode_ = this.MODE_NORMAL;
	// TODO(dkogan): Reinstate history.
	//this.history = history;
	//this.history.register('sel', this.getState, this.restoreState);

	this.entityStore_ = entityStore;
};

o3v.SelectManager.prototype.getState = function () {
	// Note that selection is stored last intentionally, because otherwise,
	// it would get clobbered by pinning / hiding.
	return ('p:' + Object.keys(this.pinnedEntities_).join(',') +
		';h:' + Object.keys(this.hiddenEntities_).join(',') +
		';s:' + Object.keys(this.selectedEntities_).join(',') +
		';c:' + this.getSelectedLayerOpacityModifier() +
		';o:' + this.getOtherLayerOpacityModifier());
};

o3v.SelectManager.prototype.restoreState = function (state) {
	this.reset_();
	if (state) {
		var tuples = state.split(';');
		for (var tupleIndex in tuples) {
			var tuple = tuples[tupleIndex].split(':');
			if (tuple[0] == 's') {
				this.selectMultiple(tuple[1].split(','), true);
			} else if (tuple[0] == 'p') {
				this.pinMultiple(tuple[1].split(','), true);
			} else if (tuple[0] == 'h') {
				this.hideMultiple(tuple[1].split(','), true);
			} else if (tuple[0] == 'c') {
				this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
					parseFloat(tuple[1]), 1);
			} else if (tuple[0] == 'o') {
				this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
					parseFloat(tuple[1]), 1);
			}
		}
	}
	this.signalChange_(true);
};

///////////////////////////////////////////////////////////////////////////
// Helper methods.
///////////////////////////////////////////////////////////////////////////

// Resets without generating a history event.
o3v.SelectManager.prototype.reset_ = function () {
	this.clearHidden(true);
	this.clearPinned(true);
	this.clearSelected(true);
	this.interpolants_[this.CURRENT_LAYER_INTERPOLANT] =
		new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
	this.interpolants_[this.OTHER_LAYER_INTERPOLANT] =
		new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
};

// Returns true if this is a selectable entity.
o3v.SelectManager.prototype.entityAllowed_ = function (entityId) {
	if (!entityId || !this.entityStore_.getEntity(entityId)) {
		return false;
	} else {
		return true;
	}
};

o3v.SelectManager.prototype.calculateSelectedLayerOpacityModifier_ =
	function () {
		// Demote selected layer opacity by number of selected layers.
		var mod = (this.CURRENT_LAYER_OPACITY_MAX_MODIFIER +
			this.CURRENT_LAYER_OPACITY_MODIFIER_STEP);
		for (var layer in this.layerSelectionRefcount_) {
			if (this.layerSelectionRefcount_[layer])
				mod -= this.CURRENT_LAYER_OPACITY_MODIFIER_STEP;
		}
		if (mod < this.CURRENT_LAYER_OPACITY_MIN_MODIFIER) {
			mod = this.CURRENT_LAYER_OPACITY_MIN_MODIFIER;
		}
		return mod;
	};

// Update opacities to reflect a change in the selection
// mode of an entity.
// Selected trumps Pinned trumps Hidden.
o3v.SelectManager.prototype.setFutureOpacities_ =
	function (entityId, priorOpacityModifier) {
		if (this.selectedEntities_[entityId]) {
			this.setFuture_(entityId, this.SELECTED_ENTITY_OPACITY_MODIFIER,
				priorOpacityModifier);
		} else if (this.pinnedEntities_[entityId]) {
			this.setFuture_(entityId, this.PINNED_ENTITY_OPACITY_MODIFIER,
				priorOpacityModifier);
		} else if (this.hiddenEntities_[entityId]) {
			this.setFuture_(entityId, this.HIDDEN_ENTITY_OPACITY_MODIFIER,
				priorOpacityModifier);
		} else {
			this.setFuture_(entityId, this.NEUTRAL_OPACITY_MODIFIER,
				priorOpacityModifier);
		}
		this.setFutureLayerOpacities_();
	};

// Set future layer opacities based on existence of selection.
o3v.SelectManager.prototype.setFutureLayerOpacities_ = function () {
	if (this.haveSelected()) {
		var selectedLayerOpacityModifier =
			this.calculateSelectedLayerOpacityModifier_();
		var hiddenLayerOpacityModifier =
			Math.max(selectedLayerOpacityModifier -
				this.OTHER_LAYER_OPACITY_DEMOTION, -1);

		this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
			selectedLayerOpacityModifier,
			this.getEntityOpacityModifier(
				this.CURRENT_LAYER_INTERPOLANT));
		this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
			hiddenLayerOpacityModifier,
			this.getEntityOpacityModifier(
				this.OTHER_LAYER_INTERPOLANT));

	} else {
		this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
			this.NEUTRAL_OPACITY_MODIFIER,
			this.getEntityOpacityModifier(
				this.CURRENT_LAYER_INTERPOLANT));
		this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
			this.NEUTRAL_OPACITY_MODIFIER,
			this.getEntityOpacityModifier(
				this.OTHER_LAYER_INTERPOLANT));
	}
};

// Sets the future opacity modifier for an entity.
o3v.SelectManager.prototype.setFuture_ =
	function (entityId, futureValue, priorOpacityModifier) {
		if (!this.interpolants_[entityId]) {
			this.interpolants_[entityId] = new o3v.Interpolant(
				priorOpacityModifier);
		}
		this.interpolants_[entityId].setFuture(futureValue);
	};

// Indicate to the outside world (renderer and history manager)
// that something has changed inside select.js.
o3v.SelectManager.prototype.signalChange_ = function (opt_skipHistory) {
	this.changeCallback_();
	if (!opt_skipHistory) {
		// TODO(dkogan): Reinstate history.
		//this.history.update();
	}
};

o3v.SelectManager.prototype.selectEntity_ = function (entityId) {
	var entity = this.entityStore_.getEntity(entityId);
	if (entity && !this.selectedEntities_[entityId]) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

		// Bump refcount in associated layer.
		entity.layers.forEach(
			function (layer) {
				o3v.util.setIfUndefined(
					this.layerSelectionRefcount_, layer, 0);
				this.layerSelectionRefcount_[layer] ++;
			}, this);

		// Select entity
		this.selectedEntities_[entityId] = entity;

		// Set opacities.
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.unselectEntity_ = function (entityId) {
	var entity = this.selectedEntities_[entityId];
	if (entity) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

		entity.layers.forEach(
			function (layer) {
				this.layerSelectionRefcount_[layer] --;
			}, this);
		delete this.selectedEntities_[entityId];
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.hideEntity_ = function (entityId) {
	var entity = this.entityStore_.getEntity(entityId);
	if (entity && !this.hiddenEntities_[entityId]) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		this.hiddenEntities_[entityId] = entity;
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.unhideEntity_ = function (entityId) {
	var entity = this.hiddenEntities_[entityId];
	if (entity) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		delete this.hiddenEntities_[entityId];
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.pinEntity_ = function (entityId) {
	var entity = this.entityStore_.getEntity(entityId);
	if (entity && !this.pinnedEntities_[entityId]) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		this.pinnedEntities_[entityId] = entity;
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.unpinEntity_ = function (entityId) {
	var entity = this.pinnedEntities_[entityId];
	if (entity) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		delete this.pinnedEntities_[entityId];
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

//////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
//////////////////////////////////////////////////////////////////////

// Returns -1 for hidden, 0 for default, 1 for visible, and values in between
// for transitional states.
o3v.SelectManager.prototype.getEntityOpacityModifier = function (entityId) {
	if (this.interpolants_[entityId]) {
		return this.interpolants_[entityId].getPresent();
	} else if (this.hiddenEntities_[entityId]) {
		return this.HIDDEN_ENTITY_OPACITY_MODIFIER;
	} else if (this.selectedEntities_[entityId]) {
		return this.SELECTED_ENTITY_OPACITY_MODIFIER;
	} else if (this.pinnedEntities_[entityId]) {
		return this.PINNED_ENTITY_OPACITY_MODIFIER;
	} else {
		return this.NEUTRAL_OPACITY_MODIFIER;
	}
};

o3v.SelectManager.prototype.getSelectedLayerOpacityModifier = function () {
	return this.getEntityOpacityModifier(this.CURRENT_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.getOtherLayerOpacityModifier = function () {
	return this.getEntityOpacityModifier(this.OTHER_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.haveSelected = function () {
	return !o3v.util.isEmpty(this.selectedEntities_);
};

o3v.SelectManager.prototype.havePinned = function () {
	return !o3v.util.isEmpty(this.pinnedEntities_);
};

o3v.SelectManager.prototype.haveHidden = function () {
	return !o3v.util.isEmpty(this.hiddenEntities_);
};

o3v.SelectManager.prototype.getLayersWithSelected = function () {
	var layers = {};
	o3v.util.forEach(this.layerSelectionRefcount_, function (count, layer) {
		if (count > 0) {
			layers[layer] = true;
		}
	});
	return layers;
};

o3v.SelectManager.prototype.getLayersWithPinned = function () {
	var layers = {};
	var pinned = this.getPinned();
	o3v.util.forEach(this.getPinned(), function (entity, entityId) {
		entity.layers.forEach(
			function (layer) {
				layers[layer] = true;
			});
	});
	return layers;
};

o3v.SelectManager.prototype.getPinned = function () {
	return this.pinnedEntities_;
};

o3v.SelectManager.prototype.getSelected = function () {
	return this.selectedEntities_;
};

o3v.SelectManager.prototype.getHidden = function () {
	return this.hiddenEntities_;
};

//////////////////////////////////////////////////////////////////////
// HIDE
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.hide = function (entityId, opt_skipHistory) {
	this.hideMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.hideMultiple =
	function (entityIds, opt_skipHistory) {
		entityIds.forEach(
			function (entityId) {
				if (this.entityAllowed_(entityId)) {
					// Hidden is not allowed to be selected or pinned.
					this.unselect(entityId, opt_skipHistory);
					this.unpin(entityId, opt_skipHistory);
					this.hideEntity_(entityId);
				}
			}, this);
		this.signalChange_(opt_skipHistory);
	};
o3v.SelectManager.prototype.unhide = function (entityId, opt_skipHistory) {
	this.unhideEntity_(entityId);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearHidden = function (opt_skipHistory) {
	if (!opt_skipHistory) {
		o3v.Analytics.trackPage('/ui/clear-hidden');
	}
	for (var entityId in this.hiddenEntities_) {
		this.unhideEntity_(entityId);
	}
	this.signalChange_(opt_skipHistory);
};

//////////////////////////////////////////////////////////////////////
// SELECT
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.select = function (entityId, opt_skipHistory) {
	this.selectMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.selectMultiple =
	function (entityIds, opt_skipHistory) {
		this.clearSelected(false, true); // Only allowing a single selection.
		entityIds.forEach(
			function (entityId) {
				if (this.entityAllowed_(entityId)) {
					this.selectEntity_(entityId);
				}
			}, this);
		this.signalChange_(opt_skipHistory);
	};
o3v.SelectManager.prototype.unselect = function (entityId, opt_skipHistory) {
	this.unselectEntity_(entityId);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearSelected = function (opt_skipHistory,
	opt_noSignal) {
	for (var entity in this.selectedEntities_) {
		this.unselectEntity_(entity);
	}
	if (!opt_noSignal) {
		this.signalChange_(opt_skipHistory);
	}
};

//////////////////////////////////////////////////////////////////////
// PIN
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pin = function (entityId, opt_skipHistory) {
	this.pinMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.pinMultiple = function (entityIds, opt_skipHistory) {
	entityIds.forEach(
		function (entityId) {
			if (this.entityAllowed_(entityId)) {
				// Pinned is not allowed to be selected or hidden.
				this.unhide(entityId, opt_skipHistory);
				this.unselect(entityId, opt_skipHistory);
				this.pinEntity_(entityId, opt_skipHistory);
			}
		}, this);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unpin = function (entityId, opt_skipHistory) {
	this.unpinEntity_(entityId);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.togglePin = function (entityId) {
	if (this.pinnedEntities_[entityId]) {
		this.unpin(entityId);
	} else {
		this.pin(entityId);
	}
};
o3v.SelectManager.prototype.togglePinMultiple = function (entityIds) {
	entityIds.forEach(
		function (entityId) {
			this.togglePin(entityId);
		}, this);
};
o3v.SelectManager.prototype.clearPinned = function (opt_skipHistory) {
	if (!opt_skipHistory) {
		o3v.Analytics.trackPage('/ui/clear-pinned');
	}
	for (var entity in this.pinnedEntities_) {
		this.unpinEntity_(entity);
	}
	this.signalChange_(opt_skipHistory);
};

///////////////////////////////////////////////////////////////////////////
// Undifferentiated Selection.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pickMultiple = function (entityIds) {
	if (this.mode_ == this.MODE_PIN) {
		this.togglePinMultiple(entityIds);
	} else if (this.mode_ == this.MODE_HIDE) {
		this.hideMultiple(entityIds);
	} else {
		if (entityIds.length == 1 && this.selectedEntities_[entityIds] &&
			o3v.util.getObjectCount(this.selectedEntities_) == 1) {
			// This is a pick of the currently selected entity, so deselect it.
			this.clearSelected();
		} else {
			this.selectMultiple(entityIds);
		}
	}
};

//////////////////////////////////////////////////////////////////////
// Expand
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.expandSelected = function (entityId) {
	var newSelected = {};
	// NOTE(dkogan): These are two different types of maps, but that's okay
	// because we're just using their keys.
	o3v.util.extendObject(newSelected,
		this.entityStore_.getSplit(entityId));
	o3v.util.extendObject(newSelected, this.getSelected());
	delete newSelected[entityId];
	this.selectMultiple(
		Object.keys(newSelected));
};

o3v.SelectManager.prototype.expandPinned = function (entityId) {
	this.unpin(entityId);
	this.pinMultiple(
		Object.keys(this.entityStore_.getSplit(entityId)));
};

///////////////////////////////////////////////////////////////////////////
// Mode control.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.setMode = function (mode) {
	this.mode_ = mode;
};

///////////////////////////////////////////////////////////////////////////
// Render interface.
///////////////////////////////////////////////////////////////////////////

// Callback from rendering. Returns true if something has changed.
o3v.SelectManager.prototype.recalculate = function () {
	var updates = false;
	var garbage = [];
	// TODO(wonchun): use Interpolant registration to handle stuff
	// like this. Dynamic interoplant insert/remove require a bit
	// more logic (like that below). Also consider using a "freelist" of
	// interpolators to avoid GC churn.
	// Updates interpolant state, and marks defunct interpolators.
	for (var entityId in this.interpolants_) {
		var interpolant = this.interpolants_[entityId];
		var more_updates = interpolant.tween();
		updates |= more_updates;
		// Is this an interpolant we can reclaim?
		if (entityId != this.CURRENT_LAYER_INTERPOLANT &&
			entityId != this.OTHER_LAYER_INTERPOLANT &&
			!more_updates) {
			// TODO(wonchun): is it possible to simply delete this here?
			garbage.push(entityId);
		}
	}

	// Sweeps defunct interpolators.
	garbage.forEach(function (entityId) {
		delete this.interpolants_[entityId];
	}, this);

	return updates;
};

o3v.SelectManager.prototype.clearSelection = function () {
	this.clearHidden(true);
	this.clearPinned(true);
	this.clearSelected(true);
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Javascript to render labels for selected objects.
 */

o3v.Label = function (inputHandler, selectManager, renderInterface,
	canvas, labelContainer, navigator, gestures) {
	// Map of entityId -> { type -> <id>,
	//                      dom -> <dom element> }
	this.currentLabels_ = {};

	this.navigator_ = navigator;
	this.gestures_ = gestures;

	// Label types
	this.types_ = {};
	this.types_[o3v.Label.TYPE_SELECT_] = {
		className: 'label_select'
	};
	this.types_[o3v.Label.TYPE_SELECT_EXPANDABLE_] = {
		className: 'label_select_expandable'
	};
	this.types_[o3v.Label.TYPE_PIN_] = {
		className: 'label_pin'
	};
	this.types_[o3v.Label.TYPE_PIN_EXPANDABLE_] = {
		className: 'label_pin_expandable'
	};

	this.inputHandler_ = inputHandler; // For creating label click handlers.
	this.selectManager_ = selectManager; // For calculating what to label.
	this.renderInterface_ = renderInterface; // For calculating label coords.
	this.canvas_ = canvas; // For adjusting labels into the visible area.

	this.labelContainer_ = labelContainer; // Div that contains the labels.

	this.showBoundingBox_ = false;
};

o3v.Label.TYPE_SELECT_ = 0;
o3v.Label.TYPE_SELECT_EXPANDABLE_ = 1;
o3v.Label.TYPE_PIN_ = 2;
o3v.Label.TYPE_PIN_EXPANDABLE_ = 3;

// Width of icons in px.
o3v.Label.EXPAND_ICON_WIDTH_ = 18;
o3v.Label.PIN_ICON_WIDTH_ = 18;
o3v.Label.CLOSE_ICON_WIDTH_ = 18;

// Toggle bounding box disaly.
o3v.Label.prototype.toggleBoundingBox = function () {
	this.showBoundingBox_ = !this.showBoundingBox_;

	var corner = 0;
	for (var corner = 0; corner < 8; corner++) {
		$('#r' + corner)[0].style.left = '-100px';
		$('#r' + corner)[0].style.top = '-100px';
	}
};

// Reset entity store.
o3v.Label.prototype.reset = function (entityStore) {
	this.entityStore_ = entityStore;
};

// Helper to unregister click handler.
o3v.Label.prototype.unregisterLabel_ = function (labelInfo) {
	this.inputHandler_.unregisterHandler(this.inputHandler_.CLICK, labelInfo.dom);
	$(labelInfo.dom).remove();
};

// Remove all labels.
o3v.Label.prototype.clearLabels = function () {
	o3v.util.forEach(this.currentLabels_,
		this.inputHandler.unregisterLabel_.bind(this));
	this.currentLabels_ = {};
};

// Update label display.
o3v.Label.prototype.refresh = function () {
	// Get new labels.
	var newLabels = {};

	// Selected style overrides pinned style for the duration of selection.
	for (var entityId in this.selectManager_.getPinned()) {
		newLabels[entityId] = (
			this.entityStore_.isSplittable(entityId) ? {
				type: o3v.Label.TYPE_PIN_EXPANDABLE_
			} : {
				type: o3v.Label.TYPE_PIN_
			});
	}
	for (var entityId in this.selectManager_.getSelected()) {
		newLabels[entityId] = (
			this.entityStore_.isSplittable(entityId) ? {
				type: o3v.Label.TYPE_SELECT_EXPANDABLE_
			} : {
				type: o3v.Label.TYPE_SELECT_
			});
	}

	// Find labels that need to be deleted and delete them.
	var labelsToDelete = [];
	o3v.util.forEach(this.currentLabels_, function (labelInfo, entityId) {
		if (!newLabels[entityId] ||
			newLabels[entityId].type != labelInfo.type) {
			labelsToDelete.push(entityId);
		}
	}, this);
	labelsToDelete.forEach(function (entityId) {
		this.unregisterLabel_(this.currentLabels_[entityId]);
		delete this.currentLabels_[entityId];
	}, this);

	// Adjust position of labels that need to be adjusted.
	o3v.util.forEach(this.currentLabels_, function (labelInfo, entityId) {
		var coords = this.getCoords_(entityId);
		var label = labelInfo.dom;
		// Set position, taking into account size.
		label.style.left = (
			'' + Math.round(coords[0] - label.offsetWidth / 2) + 'px');
		label.style.top = (
			'' + Math.round(coords[1] - label.offsetHeight / 2) + 'px');
	}, this);

	// Find labels that need to be added and add them.
	o3v.util.forEach(newLabels, function (labelInfo, entityId) {
		if (!this.currentLabels_[entityId]) {
			var coords = this.getCoords_(entityId);
			var text = this.entityStore_.getEntity(entityId).name;
			var className = this.types_[labelInfo.type].className;

			var label = $('<div>').addClass(className).text(text)
				.appendTo(this.labelContainer_).get(0);

			// Set position, taking into account size.
			label.style.left = (
				'' + Math.round(coords[0] - label.offsetWidth / 2) + 'px');
			label.style.top = (
				'' + Math.round(coords[1] - label.offsetHeight / 2) + 'px');

			// Register click handler.
			this.inputHandler_.registerHandler(
				o3v.InputHandler.CLICK, label,
				this.makeHandler_(entityId, label, labelInfo.type).bind(this),
				true);

			// Save this entity in the list of labeled entities.
			this.currentLabels_[entityId] = {
				type: labelInfo.type,
				dom: label
			};
		}
	}, this);
};

// The handler is somewhat complicated by the fact that there are potentially
// three areas to click (label, "+" expander, "x" closer) and the label can be
// clicked with modifiers.
o3v.Label.prototype.makeHandler_ = function (entityId, label, type) {
	if (type == o3v.Label.TYPE_SELECT_ ||
		type == o3v.Label.TYPE_SELECT_EXPANDABLE_) {
		return function (clientX, clientY, modifiers) {
			var labelRect = label.getBoundingClientRect();
			if ((type == o3v.Label.TYPE_SELECT_EXPANDABLE_) &&
				(clientX - labelRect.left < o3v.Label.EXPAND_ICON_WIDTH_)) {
				this.selectManager_.expandSelected(entityId);
			} else if (clientX > (labelRect.right - o3v.Label.CLOSE_ICON_WIDTH_)) {
				this.selectManager_.unselect(entityId);
			} else if (clientX > (labelRect.right -
					(o3v.Label.PIN_ICON_WIDTH_ +
						o3v.Label.CLOSE_ICON_WIDTH_))) {
				this.selectManager_.pin(entityId);
			} else if (modifiers[o3v.InputHandler.SHIFT]) {
				this.selectManager_.pin(entityId);
			} else if (this.gestures_.isHideClick(
					modifiers[o3v.InputHandler.CONTROL],
					modifiers[o3v.InputHandler.META])) {
				this.selectManager_.hide(entityId);
			} else if (o3v.util.getObjectCount(this.selectManager_.getSelected()) > 1) {
				this.selectManager_.select(entityId);
			} else {
				this.selectManager_.clearSelected();
			}
			if (this.selectManager_.haveSelected()) {
				this.navigator_.goToBBox(
					this.navigator_.unifyBoundingBoxes(
						this.selectManager_.getSelected()),
					true);
			} else {
				this.navigator_.resetNavParameters();
			}
		};
	} else {
		// PIN
		return function (clientX, clientY, modifiers) {
			var labelRect = label.getBoundingClientRect();
			if ((type == o3v.Label.TYPE_PIN_EXPANDABLE_) &&
				(clientX - labelRect.left < o3v.Label.EXPAND_ICON_WIDTH_)) {
				this.selectManager_.expandPinned(entityId);
			} else if (this.gestures_.isHideClick(
					modifiers[o3v.InputHandler.CONTROL],
					modifiers[o3v.InputHandler.META])) {
				this.selectManager_.hide(entityId);
			} else if (modifiers[o3v.InputHandler.SHIFT]) {
				this.selectManager_.unpin(entityId);
			} else {
				if (clientX > (labelRect.right - o3v.Label.CLOSE_ICON_WIDTH_)) {
					this.selectManager_.unpin(entityId);
				} else {
					this.selectManager_.select(entityId);
					if (this.selectManager_.haveSelected()) {
						this.navigator_.goToBBox(
							this.navigator_.unifyBoundingBoxes(
								this.selectManager_.getSelected()),
							true);
					} else {
						this.navigator_.resetNavParameters();
					}
				}
			}
		};
	}
};

o3v.Label.prototype.getCoords_ = function (entityId) {
	var entity = this.selectManager_.entityStore_.getEntity(entityId);
	var coords = this.renderInterface_.getViewportCoords(entity.ctr);

	// Move to avoid obscuring.
	var xs = [entity.bbox[0], entity.bbox[3]];
	var ys = [entity.bbox[1], entity.bbox[4]];
	var zs = [entity.bbox[2], entity.bbox[5]];

	var corner = 0;
	for (var xIndex in xs) {
		for (var yIndex in ys) {
			for (var zIndex in zs) {
				var corner3d = [xs[xIndex], ys[yIndex], zs[zIndex]];
				var corner2d = this.renderInterface_.getViewportCoords(corner3d);
				coords[1] = Math.max(coords[1], corner2d[1]);

				if (this.showBoundingBox_) {
					$('#r' + corner)[0].style.left = Math.round(corner2d[0]) + 'px';
					$('#r' + corner)[0].style.top = Math.round(corner2d[1]) + 'px';
					corner++;
				}
			}
		}
	}
	// Push the label down completely out of the bounding box.
	// (close enough).
	coords[1] += 20;
	// Bring it back into view if it's too far down.
	var maxHeight = this.canvas_['clientHeight'] - 75;
	if (coords[1] > maxHeight) {
		coords[1] = maxHeight;
	}
	// And if it's too far left or right.
	// TODO(arthurb): This should be based on the actual label width.
	coords[0] = Math.max(75, coords[0]);
	coords[0] = Math.min(this.canvas_['clientWidth'] - 75,
		coords[0]);

	return coords;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Navigational controls for main UI of open-3d-viewer.
 */
o3v.navUI = function (reset, move, zoom) {
	homeBtn = null;
	upBtn = null;
	leftBtn = null;
	rightBtn = null;
	downBtn = null;
	zoomIn = null;
	zoomOut = null;

	this.reset_ = reset;
	this.move_ = move;
	this.zoom_ = zoom;

	var navBtnStyles = {
		'position': 'absolute',
		'width': '20px',
		'height': '20px',
		'z-index': o3v.uiSettings.ZINDEX_MAINUI
	};

	this.navHome = $('<div>').appendTo('body').css(navBtnStyles).css({
		'left': '30px',
		'top': '84px'
	}).button({
		icons: {
			primary: 'ui-icon-home'
		},
		text: false
	}).click(function () {
		this.reset_();
	}.bind(this));
	var homeEl = this.navHome.get(0);
	this.navUp = $('<div>').appendTo('body').css(navBtnStyles).button({
		icons: {
			primary: 'ui-icon-triangle-1-n'
		},
		text: false
	}).position({
		my: 'bottom',
		at: 'top',
		of: homeEl,
		collision: 'none'
	}).click(function () {
		this.move_(0, -o3v.navUI.MOVE_FACTOR);
	}.bind(this));
	this.navLeft = $('<div>').appendTo('body').css(navBtnStyles).button({
		icons: {
			primary: 'ui-icon-triangle-1-w'
		},
		text: false
	}).position({
		my: 'right',
		at: 'left',
		of: homeEl,
		collision: 'none'
	}).click(function () {
		this.move_(-o3v.navUI.MOVE_FACTOR, 0);
	}.bind(this));
	this.navRight = $('<div>').appendTo('body').css(navBtnStyles).button({
		icons: {
			primary: 'ui-icon-triangle-1-e'
		},
		text: false
	}).position({
		my: 'left',
		at: 'right',
		of: homeEl,
		collision: 'none'
	}).click(function () {
		this.move_(o3v.navUI.MOVE_FACTOR, 0);
	}.bind(this));
	this.navDown = $('<div>').appendTo('body').css(navBtnStyles).button({
		icons: {
			primary: 'ui-icon-triangle-1-s'
		},
		text: false
	}).position({
		my: 'top',
		at: 'bottom',
		of: homeEl,
		collision: 'none'
	}).click(function () {
		this.move_(0, o3v.navUI.MOVE_FACTOR);
	}.bind(this));
	this.navZoomIn = $('<div>').appendTo('body').css(navBtnStyles).button({
		icons: {
			primary: 'ui-icon-plus'
		},
		text: false
	}).position({
		my: 'top',
		at: 'bottom',
		of: this.navDown.get(0),
		offset: '0 16',
		collision: 'none'
	}).click(function () {
		this.zoom_(0, o3v.navUI.ZOOM_FACTOR);
	}.bind(this));
	this.navZoomOut = $('<div>').appendTo('body').css(navBtnStyles).button({
		icons: {
			primary: 'ui-icon-minus'
		},
		text: false
	}).position({
		my: 'top',
		at: 'bottom',
		of: this.navZoomIn.get(0),
		collision: 'none'
	}).click(function () {
		this.zoom_(0, -o3v.navUI.ZOOM_FACTOR);
	}.bind(this));
};

o3v.navUI.MOVE_FACTOR = 10;
o3v.navUI.ZOOM_FACTOR = 50;
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview JavaScript to navigate.
 */

// TODO(dkogan): Replace this with generic functions in the mat4 namespace.
o3v.math = {};
/**
 * Subtracts two vectors.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector | Float32Array} b Operand vector.
 * @return {!tdl.math.Vector} The difference of a and b.
 */
o3v.math.subVector = function (a, b) {
	var r = [];
	var aLength = a.length;
	for (var i = 0; i < aLength; ++i)
		r[i] = a[i] - b[i];
	return r;
};
/**
 * Converts degrees to radians.
 * @param {number} degrees A value in degrees.
 * @return {number} the value in radians.
 */
o3v.math.degToRad = function (degrees) {
	return degrees * Math.PI / 180;
};

/**
 * Computes the dot product of two vectors; assumes that a and b have
 * the same dimension.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector} b Operand vector.
 * @return {number} The dot product of a and b.
 */
o3v.math.dot = function (a, b) {
	var r = 0.0;
	var aLength = a.length;
	for (var i = 0; i < aLength; ++i)
		r += a[i] * b[i];
	return r;
};
/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {!tdl.math.Vector} a Operand vector.
 * @param {!tdl.math.Vector} b Operand vector.
 * @return {!tdl.math.Vector} The vector a cross b.
 */
o3v.math.cross = function (a, b) {
	return [a[1] * b[2] - a[2] * b[1],
          a[2] * b[0] - a[0] * b[2],
          a[0] * b[1] - a[1] * b[0]];
};
/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {!tdl.math.Vector} a The vector.
 * @return {!tdl.math.Vector} The normalized vector.
 */
o3v.math.normalize = function (a) {
	var r = [];
	var n = 0.0;
	var aLength = a.length;
	for (var i = 0; i < aLength; ++i)
		n += a[i] * a[i];
	n = Math.sqrt(n);
	if (n > 0.00001) {
		for (var i = 0; i < aLength; ++i)
			r[i] = a[i] / n;
	} else {
		r = [0, 0, 0];
	}
	return r;
};

o3v.Navigator = function (changeCallback, canvas, history) {
	this.changeCallback_ = changeCallback;
	this.canvas_ = canvas;
	this.rootBbox_ = null;

	this.camera = {};
	this.originCamera = {};

	// When to start doing capsule top rotation
	this.rotationStartPercent = 0.01;
	this.entityCapsule = false;

	this.interpolants = [];
	this.dolly = {};
	this.theta = {};
	this.phi = 0;

	// Constants for reducing the deltas for movement
	this.rotationReduction = 0.01;
	this.zoomReduction = 0.05;
	this.verticalReduction = 0.1;

	// Constants for limits on movement
	this.verticalAdjustmentPercent = 0.9;
	this.verticalAdjustment = 100; // set in setNavParameters
	this.vertMaxLimit = {}; // set in setNavParameters, init 150
	this.vertMinLimit = {}; // set in setNavParameters, init 0
	this.zoomNearLimit = -10; //0.1;        // set in setNavParameters
	this.zoomFarLimit = 250; // set in setNavParameters
	this.startPan = 0.1;
	this.center = [0, 0, 0]; // set in setNavParameters, init 0,0,0
	this.cameraTargetX = {};
	this.cameraTargetY = {};
	this.cameraTargetZ = {};
	this.z_dist = 0;

	// variables for making default views look good
	this.sagittalPlane = 0;
	this.coronalPlane = -1;
	this.artisticOffset = .2;
	this.lengthRatioComparison = .75;

	// variables for dealing with varying sized entities
	this.minimumCapsuleHeight = 3;
	this.minZoomValue = 10.0;
	this.maxZoomValue = 100.0;
	this.zoomAmplificationFactor = 1.5;
	this.zoomPercent = 0.75;

	// Math constants
	// TODO(dkogan): Pull these out into the class instead of per-object.
	this.M_PI = Math.PI;
	this.M_2PI = 2 * Math.PI;

	// Initialize.
	this.theta = new o3v.Interpolant(Math.PI / 2, this.interpolants);
	this.dolly.x = new o3v.Interpolant(0.0, this.interpolants);
	this.dolly.y = new o3v.Interpolant(120.0, this.interpolants);
	this.dolly.z = new o3v.Interpolant(160.0, this.interpolants);

	this.initializeCamera();

	// Register with history.
	this.state_ = '';
	this.history = history;
	this.history.register('nav',
		this.getState.bind(this), this.restoreState.bind(this));
};

o3v.Navigator.prototype.getCamera = function () {
	return this.camera;
};

o3v.Navigator.prototype.setOriginCameraAndModelRoot = function (rootBbox) {
	// Save the original camera for reset and for offsets with calculations
	var cx = 0.5 * (rootBbox[3] + rootBbox[0]);
	var cy = 0.5 * (rootBbox[4] + rootBbox[1]);
	var cz = 0.5 * (rootBbox[5] + rootBbox[2]);
	// A reasonable z value for eye because we need a default.
	this.camera = {
		eye: new Float32Array([cx, cy, 160]),
		target: new Float32Array([cx, cy, cz]),
		up: new Float32Array([0, 1, 0]),
		fov: 40
	};
	this.resetModel(rootBbox);
};

o3v.Navigator.prototype.resetModel = function (rootBbox) {
	this.rootBbox_ = rootBbox;
	this.resetNavParameters();
};

// Resets the camera to the original position
o3v.Navigator.prototype.reset = function (addToHistory) {
	var nav_vals = this.calculateNavigateValues(this.rootBbox_);
	this.doNavigate(nav_vals.x, nav_vals.y, nav_vals.z, addToHistory);
	this.resetNavParameters();
};

o3v.Navigator.prototype.initializeCamera = function () {
	this.vertMaxLimit = new o3v.Interpolant(150.0, this.interpolants);
	this.vertMinLimit = new o3v.Interpolant(0.0, this.interpolants);
	this.cameraTargetX = new o3v.Interpolant(0.0, this.interpolants);
	this.cameraTargetY = new o3v.Interpolant(0.0, this.interpolants);
	this.cameraTargetZ = new o3v.Interpolant(0.0, this.interpolants);
	this.setOriginCameraAndModelRoot([-200, -200, -200, -200, -200, -200]);
};

o3v.Navigator.prototype.setNavParametersToBbox = function (bbox) {
	var center = new Float32Array(3);
	center[0] = 0.5 * (bbox[0] + bbox[3]);
	center[1] = 0.5 * (bbox[1] + bbox[4]);
	center[2] = 0.5 * (bbox[2] + bbox[5]);
	this.setNavParameters(bbox[4],
		bbox[1],
		this.zoomNearLimit,
		this.zoomFarLimit,
		center,
		0);
};

// Puts in the camera default parameters for the full body
o3v.Navigator.prototype.resetNavParameters = function () {
	var bbox = this.rootBbox_;
	if (!bbox) {
		return;
	}
	this.setNavParametersToBbox(bbox);
	this.changeCallback_(true);
};

o3v.Navigator.prototype.setNavParameters = function (verticalMaxLimit_input,
	verticalMinLimit_input,
	zoomNearLimit_input,
	zoomFarLimit_input,
	center_input,
	z_dist_input) {
	var vMaxLimit = verticalMaxLimit_input;
	var vMinLimit = verticalMinLimit_input;
	var span = verticalMaxLimit_input - verticalMinLimit_input;
	if (span < this.minimumCapsuleHeight) {
		var difference = (this.minimumCapsuleHeight - span) / 2;
		vMaxLimit = vMaxLimit + difference;
		vMinLimit = vMinLimit - difference;
	}
	this.vertMaxLimit.setFuture(vMaxLimit);
	this.vertMinLimit.setFuture(vMinLimit);
	this.verticalAdjustment = (this.verticalAdjustmentPercent *
		(verticalMaxLimit_input - verticalMinLimit_input));
	this.zoomNearLimit = zoomNearLimit_input;
	this.zoomFarLimit = zoomFarLimit_input;
	var cx = center_input[0];
	var cy = center_input[1];
	var cz = center_input[2];
	this.cameraTargetX.setFuture(cx);
	this.cameraTargetY.setFuture(cy);
	this.cameraTargetZ.setFuture(cz);
	this.center = center_input;
	this.z_dist = z_dist_input;
};

// Returns string representing current state.
o3v.Navigator.prototype.getState = function () {
	return this.state_;
};

// Restores state.
o3v.Navigator.prototype.restoreState = function (state) {
	if (state) {
		var tuple = state.split(',');
		this.doNavigate(parseFloat(tuple[0]),
			parseFloat(tuple[1]),
			parseFloat(tuple[2]), false);
	} else {
		this.reset(false);
	}
};

o3v.Navigator.prototype.projectedMinMax = function (bbox, projectionVector) {
	var verts = [[bbox[0], bbox[1], bbox[2]],
               [bbox[0], bbox[4], bbox[2]],
               [bbox[0], bbox[1], bbox[5]],
               [bbox[0], bbox[4], bbox[5]],
               [bbox[3], bbox[1], bbox[2]],
               [bbox[3], bbox[4], bbox[2]],
               [bbox[3], bbox[1], bbox[5]],
               [bbox[3], bbox[4], bbox[5]]];

	var proj = [];
	for (var v = 0; v < 8; v++) {
		var vertVector = o3v.math.subVector(verts[v], this.camera.eye);
		proj[v] = o3v.math.dot(projectionVector, vertVector);
	}

	var maxVal = -Number.MAX_VALUE;
	var minVal = Number.MAX_VALUE;
	for (var v = 0; v < 8; v++) {
		maxVal = Math.max(maxVal, proj[v]);
		minVal = Math.min(minVal, proj[v]);
	}

	return maxVal - minVal;
};

o3v.Navigator.prototype.unifyBoundingBoxes = function (entityIdToEntity) {
	var bbox;
	o3v.log.info('focusing on entities', entityIdToEntity);
	o3v.util.forEach(entityIdToEntity, function (entity) {
		bbox = o3v.growBBox(bbox, entity.bbox);
	});
	return bbox;
};

o3v.Navigator.prototype.focusOnEntities = function (entityIdToEntity) {
	var bbox;
	if (o3v.util.isEmpty(entityIdToEntity)) {
		o3v.log.info('focusOnEntities empty; resetting view');
		this.resetNavParameters();
	} else {
		o3v.log.info('focusing on entities', entityIdToEntity);

		bbox = this.unifyBoundingBoxes(entityIdToEntity);
		this.setNavParametersToBbox(bbox);
	}
	return bbox;
};

o3v.Navigator.prototype.goToBBox = function (bbox, opt_verticalOnly) {
	var nav_vals = this.calculateNavigateValues(bbox, opt_verticalOnly);
	this.doNavigate(nav_vals.x, nav_vals.y, nav_vals.z, false);
};

o3v.Navigator.prototype.calculateNavigateValues = function (bbox, opt_verticalOnly) {
	// lengths
	var dx = bbox[0] - bbox[3];
	var dy = bbox[1] - bbox[4];
	var dz = bbox[2] - bbox[5];

	// centers
	o3v.log.info('center', this.center);
	var cx = 0.5 * (bbox[0] + bbox[3]);
	var cy = 0.5 * (bbox[1] + bbox[4]);
	var cz = 0.5 * (bbox[2] + bbox[5]);

	var dYAxis = Math.sqrt(cx * cx + cz * cz);

	// axes: x goes right
	//       y goes up
	//       z toward viewer

	// x = angle around the y axis
	// y = height
	// z = zoom
	var x = Math.atan2(dx, dz);
	var lengthRatio = dx / dz;
	o3v.log.info('ratio: ', lengthRatio);
	o3v.log.info('cz: ', cz);
	if (lengthRatio > this.lengthRatioComparison) {
		// We are greater in the x direction so look head on
		x = Math.PI / 2;
		// if we're behind, look from behind
		if (cz < this.coronalPlane) {
			x = -Math.PI / 2;
		}
	} else {
		x = 0;
		if (cx < this.sagittalPlane) {
			x = Math.PI;
		}
	}
	//determine the artistic offset
	if ((lengthRatio > 1 && cx > this.sagittalPlane) ||
		(lengthRatio < 1 && cx < this.sagittalPlane)) {
		x -= this.artisticOffset;
	} else {
		x += this.artisticOffset;
	}

	// ideal Y
	var projectedHeight = this.projectedMinMax(bbox, this.camera.up);
	var y_angle = this.zoomPercent * o3v.math.degToRad(this.camera.fov);
	var zy_dist = projectedHeight / Math.tan(y_angle);

	// ideal X
	var sideVector = o3v.math.cross(this.camera.up,
		o3v.math.subVector(this.camera.eye,
			this.camera.target));
	sideVector = o3v.math.normalize(sideVector);
	var projectedWidth = this.projectedMinMax(bbox, sideVector);
	var x_angle = this.zoomPercent * o3v.math.degToRad(
		this.camera.fov *
		this.canvas_['clientWidth'] / this.canvas_['clientHeight']);

	var zx_dist = projectedWidth / Math.tan(x_angle);

	var z_dist = Math.max(zy_dist, zx_dist);

	// Normalize between 0 and 1
	var normalizedZoom = ((z_dist - this.minZoomValue) /
		(this.maxZoomValue - this.minZoomValue));
	normalizedZoom = Math.max(0, Math.min(1, normalizedZoom));

	// Renormalize to account for the disired zoom factor for small entities
	var reNormalizedZoom = ((normalizedZoom *
			(1 - 1 / this.zoomAmplificationFactor)) +
		1 / this.zoomAmplificationFactor);

	// Divide by the renormalized value to take into account small entities
	var clampedZoom = Math.max(this.minZoomValue, z_dist);
	var finalZoom = clampedZoom / reNormalizedZoom;

	var y_value = cy;
	var zoom_radius = dYAxis + finalZoom;

	// TODO(dkogan|rlp): Make this hack cleaner.
	if (opt_verticalOnly) {
		x = this.theta.getFuture();
		zoom_radius = this.dolly.z.getFuture();
	}

	return {
		x: x,
		y: y_value,
		z: zoom_radius
	};
};

// Clamps a value between -absLimit and absLimit. Useful for clamping rotation
// in two different directions
o3v.Navigator.prototype.absClamp = function (value, absLimit) {
	var val = value;
	if (val > absLimit)
		val = absLimit;
	else if (val < -absLimit)
		val = -absLimit;
	return val;
};

// The opposite of absClamp: if the current value is between -absLimit and
// absLimit then it returns the newValue. Useful for ignoring a value until
// it reaches a certain threshold.
o3v.Navigator.prototype.absLimit = function (value, absLimit, newValue) {
	if (value < absLimit && value > -absLimit)
		return newValue;
	return value;
};

o3v.Navigator.prototype.recalculate = function () {
	var anyUpdates = o3v.Interpolant.tweenAll(this.interpolants);
	// Camera rotates and translates around the body. Body always considered
	// to be at the origin.
	var angle = this.theta.getPresent();
	var z_val = this.dolly.z.getPresent();
	var y_val = this.dolly.y.getPresent();
	var verticalMaxLimit = this.vertMaxLimit.getPresent();
	var verticalMinLimit = this.vertMinLimit.getPresent();

	// this.center[0] = this.center[2] = 0 for normal position
	var cx = z_val * Math.cos(angle) + this.cameraTargetX.getPresent();
	var cy = y_val;
	var cz = z_val * Math.sin(angle) + this.cameraTargetZ.getPresent();
	var ty = y_val;
	var verticalPanLimit = verticalMaxLimit - verticalMinLimit;
	var rotLimit = this.rotationStartPercent * verticalPanLimit;

	var phi_multiplier = 0;
	var vertDist = cy;
	var topStartRotation = verticalMaxLimit - rotLimit;
	var bottomStartRotation = verticalMinLimit + rotLimit;

	// Determine if we're in the top hemisphere or lower hemisphere
	if (cy < bottomStartRotation) {
		phi_multiplier = -1;
		ty = bottomStartRotation;
		vertDist = this.absClamp(rotLimit + (verticalMinLimit - cy),
			this.verticalAdjustment + rotLimit);
	} else if (cy > topStartRotation) {
		phi_multiplier = 1;
		ty = topStartRotation;
		vertDist = this.absClamp(rotLimit - (verticalMaxLimit - cy),
			this.verticalAdjustment + rotLimit);
	}
	// If we are in a hemisphere, adjust our camera accordingly
	// TODO(rlp): This kills off capsule mode, but capsule mode is killing us
	//            during transitions, and I don't know how to make it not happen
	//            during those. Please fix and reinstate.
	if (phi_multiplier) {
		var phi = (phi_multiplier * Math.PI / 2 *
			(vertDist / (this.verticalAdjustment + rotLimit)));
		// Fix camera position to account for rotation
		cx *= Math.cos(phi);
		cy = ty + z_val * Math.sin(phi);
		cz *= Math.cos(phi);

		var up_phi = Math.PI / 2 - phi;
		this.camera.up = [-Math.cos(angle) * Math.cos(up_phi),
                      Math.sin(up_phi),
                      -Math.sin(angle) * Math.cos(up_phi)];
	} else {
		this.camera.up = [0, 1, 0];
	}
	// TODO(rlp): If arcball do something different -- different target
	this.camera.eye = [cx, cy, cz];
	this.camera.target = [this.center[0], ty, this.center[2]];

	return anyUpdates;
};

// Navigates to a location.
// This function is ultimately always called if we change something so we call
// recalculate and tell the renderer to update
o3v.Navigator.prototype.doNavigate = function (angle, y, zoom, addToHistory,
	opt_camera_scale) {
	this.theta.setFuture(angle);

	var camera_scale = (opt_camera_scale) ? opt_camera_scale : 1;

	var verticalLowerLimit = (this.vertMinLimit.getFuture() -
		this.verticalAdjustment);
	var verticalUpperLimit = (this.vertMaxLimit.getFuture() +
		this.verticalAdjustment);

	if (y < verticalLowerLimit) {
		y = verticalLowerLimit;
	}
	if (y > verticalUpperLimit) {
		y = verticalUpperLimit;
	}
	this.dolly.y.setFuture(y);

	if (zoom < this.zoomNearLimit) {
		zoom = this.zoomNearLimit;
	}
	if (zoom > this.zoomFarLimit) {
		zoom = this.zoomFarLimit;
	}
	this.dolly.z.setFuture(zoom);

	this.changeCallback_();

	// Set up with history.
	this.state_ = [Math.round(angle * 100) / 100,
                 Math.round(y * 100) / 100,
                 Math.round(zoom * 100) / 100].join(',');
	if (addToHistory) {
		this.history.update();
	}
};

// Navigates to an offset from the current location.
o3v.Navigator.prototype.doNavigateDelta = function (dx, dy, dz, addToHistory) {
	var camera_scale = this.dolly.z.getPresent() / 80;
	this.doNavigate(
		this.theta.getFuture() + camera_scale * dx,
		this.dolly.y.getFuture() + camera_scale * dy,
		this.dolly.z.getFuture() + camera_scale * dz,
		addToHistory,
		camera_scale);
};

// The primary drag function. It is split into two parts, one for arcball and
// one for schwarma.
// TODO(rlp): There seems to be some lag here: triage/diagnose.
o3v.Navigator.prototype.drag = function (dx, dy, dz) {
	// We modulate the deltas by constants to make the movement less jumpy
	var deltaRotate = this.rotationReduction * dx;
	var deltaPan = this.verticalReduction * dy;
	// We limit the delta for panning so that it only occurs if the user
	// really intends it to. This eliminates the sort of "bouncy" motion
	// while rotating.
	deltaPan = this.absLimit(deltaPan, this.startPan, 0);
	this.doNavigateDelta(deltaRotate, deltaPan, 0, true);
};

// Takes care of the scrolling by changing the z component of our camera
o3v.Navigator.prototype.scroll = function (dx, dy) {
	this.doNavigateDelta(0, 0, -dy * this.zoomReduction, true);
};

// Angle constraint for rotation angle interpolants
o3v.Navigator.prototype.interpolantAngleConstraint = function (i) {
	if (i.present_ > this.M_PI) {
		i.present_ -= this.M_2PI;
		i.future_ -= this.M_2PI;
	} else if (i.present_ < -this.M_PI) {
		i.present_ += this.M_2PI;
		i.future_ += this.M_2PI;
	}
	return false;
};

// Over constraint for rotation angle interpolants
o3v.Navigator.prototype.interpolantOverConstraint = function (soft, hard) {
	var scale = 0.75 / (soft - hard);
	return function (i) {
		if (i.future_ < hard) {
			i.future_ = hard;
		}
		if (i.future_ < soft) {
			if (i.future_ >= (soft - o3v.Interpolant['EPSILON'])) {
				i.future_ = soft;
				return false;
			}
			var hard_factor = (1 - hard + i.future_);
			i.future_ += scale * hard_factor * (soft - i.future_);
			return true;
		}
		return false;
	};
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Generic input (mouse and keyboard event) handler.
 */

"use strict";

o3v.InputHandler = function (win) {
	win.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
	win.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
	win.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
	win.addEventListener('mouseout', this.handleMouseOut.bind(this), false);
	// Chrome:
	win.addEventListener('mousewheel', this.handleScrollWheel.bind(this), false);
	// Firefox:
	win.addEventListener('DOMMouseScroll', this.handleScrollWheel.bind(this), false);

	win.addEventListener('keydown', this.handleKeyDown.bind(this), false);
	win.addEventListener('keyup', this.handleKeyUp.bind(this), false);

	this.mouseDown_ = false;
	this.lastMousePosition_ = [0, 0];
	this.lastMouseDownTime_ = new Date().getTime();
	this.lastMouseDownTarget_ = null;

	this.lastkeyCode_ = null;
	this.lastKeyTime_ = new Date().getTime();
	this.lastKeyTarget_ = null;

	// Map of {EVENT, [{entity :, callback: suppressOther:}]}
	this.handlerRegistry = {};
	this.handlerRegistry[o3v.InputHandler.MOUSEHOLD] = [];
	this.handlerRegistry[o3v.InputHandler.CLICK] = [];
	this.handlerRegistry[o3v.InputHandler.DRAG] = [];
	this.handlerRegistry[o3v.InputHandler.MOVE] = [];
	this.handlerRegistry[o3v.InputHandler.SCROLL] = [];
	this.handlerRegistry[o3v.InputHandler.KEYDOWN] = [];
	this.handlerRegistry[o3v.InputHandler.KEYUP] = [];
	this.handlerRegistry[o3v.InputHandler.KEYHOLD] = [];
};

// Constants for differentiating a click from a drag.
o3v.InputHandler.MAX_CLICK_TIME = 300;
o3v.InputHandler.MAX_CLICK_DISTANCE = 3;

// Events.
o3v.InputHandler.MOUSEHOLD = 0; // Mouse.
o3v.InputHandler.CLICK = 1;
o3v.InputHandler.DRAG = 2;
o3v.InputHandler.MOVE = 3;
o3v.InputHandler.SCROLL = 4;
o3v.InputHandler.KEYDOWN = 5;
o3v.InputHandler.KEYUP = 6;
o3v.InputHandler.KEYHOLD = 7;

// Event modifiers.
o3v.InputHandler.SHIFT = 0;
o3v.InputHandler.CONTROL = 1;
o3v.InputHandler.META = 2; // Mac "command" key
o3v.InputHandler.LEFT = 3;
o3v.InputHandler.RIGHT = 4;

o3v.InputHandler.prototype.registerHandler =
	function (event, target, handler, suppressOther) {
		this.handlerRegistry[event].push({
			'target': target,
			'handler': handler,
			'suppressOther': suppressOther
		});
	};

o3v.InputHandler.prototype.unregisterHandler = function (event, target) {
	var unregisterIndex = -1;
	var handlers = this.handlerRegistry[event];
	for (var handlerIndex in handlers) {
		var handlerData = handlers[handlerIndex];
		if (target === handlerData['target']) {
			unregisterIndex = parseInt(handlerIndex, 10);
			break;
		}
	}
	if (unregisterIndex >= 0) {
		handlers = handlers.slice(0, unregisterIndex).concat(
			handlers.slice(unregisterIndex + 1, handlers.length));
	}
	this.handlerRegistry[event] = handlers;
};

// Shortcut.
o3v.InputHandler.prototype.registerClickHandler =
	function (target, handler) {
		this.registerHandler(o3v.InputHandler.CLICK, target, handler, true);
	};

// Used to suspend dragging response.
o3v.InputHandler.prototype.suspendDragHandlers = function (target) {
	this.registerHandler(o3v.InputHandler.DRAG, target, function () {}, true);
};
o3v.InputHandler.prototype.resumeDragHandlers = function (target) {
	this.unregisterHandler(o3v.InputHandler.DRAG, target);
};

o3v.InputHandler.prototype.getMousePosition = function () {
	return this.lastMousePosition_;
};

// Delegates event if appropriate. Returns true if event was suppressed.
o3v.InputHandler.prototype.delegate = function (event, target, args) {
	for (var handlerIndex in this.handlerRegistry[event]) {
		var handlerData = this.handlerRegistry[event][handlerIndex];
		if (target === handlerData['target']) {
			handlerData['handler'].apply(null, args);
			if (handlerData['suppressOther']) {
				return true;
			}
		}
	}
	return false;
};

o3v.InputHandler.prototype.handleMouseDown = function (e) {
	this.delegate(self.MOUSEHOLD, e.target, [true]);
	this.lastMouseDownTarget_ = e.target;
	this.lastMousePosition_ = [e.clientX, e.clientY];
	this.lastMouseDownTime_ = new Date().getTime();
	this.mouseDown_ = true;
};

o3v.InputHandler.prototype.handleMouseUp = function (e) {
	this.shiftKey_ = e.shiftKey;

	var suppress = this.delegate(o3v.InputHandler.MOUSEHOLD,
		this.lastMouseDownTarget_, [false]);

	if (!suppress) {
		var dx = e.clientX - this.lastMousePosition_[0];
		var dy = e.clientY - this.lastMousePosition_[1];
		var d = Math.sqrt(dx * dx + dy * dy);
		var newTime = new Date().getTime();
		if (((newTime - this.lastMouseDownTime_) <
				o3v.InputHandler.MAX_CLICK_TIME) && d < o3v.InputHandler.MAX_CLICK_DISTANCE) {

			// This is a click.
			var modifiers = {};
			if (e.ctrlKey) modifiers[o3v.InputHandler.CONTROL] = true;
			if (e.shiftKey) modifiers[o3v.InputHandler.SHIFT] = true;
			if (e.metaKey) modifiers[o3v.InputHandler.META] = true;
			if (e.button == 0) modifiers[o3v.InputHandler.LEFT] = true;
			if (e.button == 2) modifiers[o3v.InputHandler.RIGHT] = true;

			suppress = this.delegate(o3v.InputHandler.CLICK,
				this.lastMouseDownTarget_, [e.clientX, e.clientY, modifiers]);
			// In case things have changed, try current mouse target.
			if (!suppress) {
				this.delegate(o3v.InputHandler.CLICK, e.target, [e.clientX, e.clientY]);
			}
		} else {
			// There may have been a drag just prior to this.
			this.handleMouseMove(e);
		}
	}

	this.lastMouseDownTarget_ = null;
	this.mouseDown_ = false;
};

o3v.InputHandler.prototype.handleMouseMove = function (e) {
	var suppress = false;
	var dx = e.clientX - this.lastMousePosition_[0];
	var dy = e.clientY - this.lastMousePosition_[1];

	if (dx == 0 && dy == 0) {
		return;
	}

	if (this.mouseDown_) {
		// Dragging.
		suppress = this.delegate(o3v.InputHandler.DRAG,
			this.lastMouseDownTarget_, [dx, dy, e.clientX, e.clientY]);
	}
	if (!suppress) {
		this.delegate(o3v.InputHandler.MOVE, this.lastMouseDownTarget_, [dx, dy, e.clientX, e.clientY]);
	}

	this.lastMousePosition_ = [e.clientX, e.clientY];
};

o3v.InputHandler.prototype.handleScrollWheel = function (e) {
	var dx;
	var dy;
	if (e.wheelDeltaX !== undefined) {
		dx = e.wheelDeltaX; // chrome
	} else {
		dx = 0; // firefox
	}
	if (e.wheelDeltaY !== undefined) {
		dy = e.wheelDeltaY; // chrome
	} else {
		dy = e.detail * -40; // firefox
	}

	this.delegate(o3v.InputHandler.SCROLL,
		e.target, [dx, dy, e.clientX, e.clientY]);
};

// Handle leaving document.
o3v.InputHandler.prototype.handleMouseOut = function (e) {
	if (e.relatedTarget === null) {
		this.mouseDown_ = false;
	}
};

o3v.InputHandler.prototype.handleKeyDown = function (e) {
	// Ignore key presses on input elements.
	var target;
	if (e.originalTarget) {
		target = e.originalTarget;
	} else {
		target = e.target;
	}

	if (target.type == 'text') {
		return;
	}

	// Ignore alt keycodes, since user is probably trying to interact with
	// the browser.
	if (e.altKey) {
		return;
	}

	if (this.lastKeyCode_ != null &&
		this.lastKeyCode_ != e.keyCode) {
		this.handleKeyUp();
	}

	if (this.lastKeyCode_ == null) {
		// Key down.
		this.lastKeyCode_ = e.keyCode;
		this.lastKeyTarget_ = target;
		this.lastKeyTime_ = new Date().getTime();
		this.delegate(o3v.InputHandler.KEYDOWN,
			null, // Keyboard handlers generic for now.
                  [this.lastKeyCode_, this.lastKeyTarget_]);
	} else {
		// Key hold.
		var newTime = new Date().getTime();
		var dTime = newTime - this.lastKeyTime_;
		this.lastKeyTime_ = newTime;
		this.delegate(o3v.InputHandler.KEYHOLD,
			null, [this.lastKeyCode_, this.lastKeyTarget_, dTime]);
	}

	return false;
};

o3v.InputHandler.prototype.handleKeyUp = function () {
	this.delegate(o3v.InputHandler.KEYUP,
		null, [this.lastKeyCode_, this.lastKeyTarget_,
                 new Date().getTime() - this.lastKeyTime_]);
	this.lastKeyCode_ = null;
	this.lastKeyTarget_ = null;
};


o3v.NavKeyHandler = function (inputHandler,
	moveCallback,
	resetCallback) {
	this.moveCallback_ = moveCallback;
	this.resetCallback_ = resetCallback;

	inputHandler.registerHandler(o3v.InputHandler.KEYDOWN,
		null,
		this.handleKey.bind(this));
	inputHandler.registerHandler(o3v.InputHandler.KEYHOLD,
		null,
		this.handleKey.bind(this));

	this.target_ = [87, 72, 79];
	this.current_ = 0;
	inputHandler.registerHandler(
		o3v.InputHandler.KEYDOWN, null, this.handleOpac.bind(this));
};

o3v.NavKeyHandler.prototype.handleOpac = function (keyCode) {
	if (keyCode == this.target_[this.current_++]) {
		if (this.current_ == this.target_.length) {
			var d = $('#opac_idx').text('no qo qx ws aj ec em ga ix jp'.replace(
				/[a-z]/g,
				function (c) {
					return String.fromCharCode(
						122 >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
				})).fadeIn(1000, function () {
				$('#opac_idx').fadeOut(7000);
			});
		}
	} else {
		this.current_ = 0;
	}
};

o3v.NavKeyHandler.prototype.handleKey = function (keyCode) {
	var x = 0;
	var y = 0;
	var z = 0;

	switch (keyCode) {
	case $.ui.keyCode.DOWN:
		y = -1;
		break;
	case $.ui.keyCode.UP:
		y = 1;
		break;
	case $.ui.keyCode.LEFT:
		x = -1;
		break;
	case $.ui.keyCode.RIGHT:
		x = 1;
		break;
	case $.ui.keyCode.HOME:
		this.resetCallback_();
		break;
	case $.ui.keyCode.PAGE_UP:
		z = 1;
		break;
	case $.ui.keyCode.PAGE_DOWN:
		z = -1;
		break;
	default:
		break;
	}

	if (x != 0 || y != 0 || z != 0) {
		this.moveCallback_(x, y, z);
	}
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Search.
 */

o3v.Search = function (selectCallback) {
	this.selectCallback_ = selectCallback;

	this.searchbox_ = $('<input class="ui-widget">').appendTo('body').css({
		'position': 'absolute',
		'left': '100%',
		'top': '8px',
		'width': '200px',
		'margin-left': '-212px',
		'outline-style': 'none',
		'border': '2px solid #92e497',
		'border-radius': '12px',
		'padding': '2px 8px 2px 8px',
		'opacity': 0.8,
		'z-index': o3v.uiSettings.ZINDEX_MAINUI
	});
};

o3v.Search.prototype.reset = function (searchTokens) {
	this.searchbox_.autocomplete('destroy');
	this.terms_ = searchTokens;
	this.searchbox_.autocomplete({
		source: this.find.bind(this),
		delay: 0,
		autoFocus: true,
		selectFirst: true,
		select: function (event, ui) {
			this.handleResult_.bind(event, ui);
			this.searchbox_[0].blur();
		}.bind(this),
		focus: this.handleResult_.bind(this)
	});
};

o3v.Search.prototype.find = function (query, callback) {
	var token = query.term;

	var matches = [];
	if (token != '') {
		var matcher = new RegExp('(^|\\W+)' + token, 'i');

		for (var i = 0; i < this.terms_.length; i++) {
			if (this.terms_[i].match(matcher)) {
				matches.push(this.terms_[i]);
				if (matches.length >= o3v.Search.MAX_MATCHES) {
					break;
				}
			}
		}
	}
	callback(matches);
};

o3v.Search.prototype.handleResult_ = function (event, ui) {
	this.selectCallback_(ui.item.value);
};

o3v.Search.MAX_MATCHES = 10;
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Code to make and keep track of selections.
 */

// changeCallback: function to call when anything has changed.
//                 after this is called, should repeatedly call
//                 recalculate until it stops returning true.
o3v.SelectManager = function (changeCallback) {
	this.changeCallback_ = changeCallback;

	// map of selected layer name -> refcount of entities in layer
	this.layerSelectionRefcount_ = {};

	// Includes pending.
	// Map of entityId -> entity
	// TODO(dkogan): Generalize to arbitrary number of groups and
	// behaviors.
	this.selectedEntities_ = {};
	this.pinnedEntities_ = {};
	this.hiddenEntities_ = {};

	// Map of entity -> opacity interpolant
	// If an entity is in this map, then it is being changed
	// (being hidden/selected/pinned/unhidden/unselected)
	this.interpolants_ = {};
	// Predefined storage for current and other layer interpolants.
	this.CURRENT_LAYER_INTERPOLANT = -1;
	this.OTHER_LAYER_INTERPOLANT = -2;

	// The interpolants behave as follows:
	// 0 = same opacity as would be otherwise.
	// 1 = completely visibile
	// -1 = completely hidden
	// TODO(wonchun): work out some math/libraries to combine these. Figure
	// out associativity properties.

	// Layer with selection behavior varies depending on how many layers have
	// selections in them.
	this.CURRENT_LAYER_OPACITY_MAX_MODIFIER = -0.8; // 20% opaque.
	this.CURRENT_LAYER_OPACITY_MODIFIER_STEP = 0.1;
	this.CURRENT_LAYER_OPACITY_MIN_MODIFIER = -0.9; // 10% opaque.
	this.OTHER_LAYER_OPACITY_DEMOTION = 0.15;

	this.PINNED_ENTITY_OPACITY_MODIFIER = 1.0;
	this.SELECTED_ENTITY_OPACITY_MODIFIER = 1.0;
	this.HIDDEN_ENTITY_OPACITY_MODIFIER = -1.0;
	this.NEUTRAL_OPACITY_MODIFIER = 0;

	// Modes for explicit UI of selecting multiple / hiding / etc.
	this.mode_ = 0;
	this.MODE_NORMAL = 0;
	this.MODE_PIN = 1;
	this.MODE_HIDE = 2;
};

//////////////////////////////////////////////////////////////////////
// INITIALIZATION METHODS
//////////////////////////////////////////////////////////////////////

o3v.SelectManager.prototype.reset = function (entityStore) {
	this.reset_();
	this.mode_ = this.MODE_NORMAL;
	// TODO(dkogan): Reinstate history.
	//this.history = history;
	//this.history.register('sel', this.getState, this.restoreState);

	this.entityStore_ = entityStore;
};

o3v.SelectManager.prototype.getState = function () {
	// Note that selection is stored last intentionally, because otherwise,
	// it would get clobbered by pinning / hiding.
	return ('p:' + Object.keys(this.pinnedEntities_).join(',') +
		';h:' + Object.keys(this.hiddenEntities_).join(',') +
		';s:' + Object.keys(this.selectedEntities_).join(',') +
		';c:' + this.getSelectedLayerOpacityModifier() +
		';o:' + this.getOtherLayerOpacityModifier());
};

o3v.SelectManager.prototype.restoreState = function (state) {
	this.reset_();
	if (state) {
		var tuples = state.split(';');
		for (var tupleIndex in tuples) {
			var tuple = tuples[tupleIndex].split(':');
			if (tuple[0] == 's') {
				this.selectMultiple(tuple[1].split(','), true);
			} else if (tuple[0] == 'p') {
				this.pinMultiple(tuple[1].split(','), true);
			} else if (tuple[0] == 'h') {
				this.hideMultiple(tuple[1].split(','), true);
			} else if (tuple[0] == 'c') {
				this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
					parseFloat(tuple[1]), 1);
			} else if (tuple[0] == 'o') {
				this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
					parseFloat(tuple[1]), 1);
			}
		}
	}
	this.signalChange_(true);
};

///////////////////////////////////////////////////////////////////////////
// Helper methods.
///////////////////////////////////////////////////////////////////////////

// Resets without generating a history event.
o3v.SelectManager.prototype.reset_ = function () {
	this.clearHidden(true);
	this.clearPinned(true);
	this.clearSelected(true);
	this.interpolants_[this.CURRENT_LAYER_INTERPOLANT] =
		new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
	this.interpolants_[this.OTHER_LAYER_INTERPOLANT] =
		new o3v.Interpolant(this.NEUTRAL_OPACITY_MODIFIER);
};

// Returns true if this is a selectable entity.
o3v.SelectManager.prototype.entityAllowed_ = function (entityId) {
	if (!entityId || !this.entityStore_.getEntity(entityId)) {
		return false;
	} else {
		return true;
	}
};

o3v.SelectManager.prototype.calculateSelectedLayerOpacityModifier_ =
	function () {
		// Demote selected layer opacity by number of selected layers.
		var mod = (this.CURRENT_LAYER_OPACITY_MAX_MODIFIER +
			this.CURRENT_LAYER_OPACITY_MODIFIER_STEP);
		for (var layer in this.layerSelectionRefcount_) {
			if (this.layerSelectionRefcount_[layer])
				mod -= this.CURRENT_LAYER_OPACITY_MODIFIER_STEP;
		}
		if (mod < this.CURRENT_LAYER_OPACITY_MIN_MODIFIER) {
			mod = this.CURRENT_LAYER_OPACITY_MIN_MODIFIER;
		}
		return mod;
	};

// Update opacities to reflect a change in the selection
// mode of an entity.
// Selected trumps Pinned trumps Hidden.
o3v.SelectManager.prototype.setFutureOpacities_ =
	function (entityId, priorOpacityModifier) {
		if (this.selectedEntities_[entityId]) {
			this.setFuture_(entityId, this.SELECTED_ENTITY_OPACITY_MODIFIER,
				priorOpacityModifier);
		} else if (this.pinnedEntities_[entityId]) {
			this.setFuture_(entityId, this.PINNED_ENTITY_OPACITY_MODIFIER,
				priorOpacityModifier);
		} else if (this.hiddenEntities_[entityId]) {
			this.setFuture_(entityId, this.HIDDEN_ENTITY_OPACITY_MODIFIER,
				priorOpacityModifier);
		} else {
			this.setFuture_(entityId, this.NEUTRAL_OPACITY_MODIFIER,
				priorOpacityModifier);
		}
		this.setFutureLayerOpacities_();
	};

// Set future layer opacities based on existence of selection.
o3v.SelectManager.prototype.setFutureLayerOpacities_ = function () {
	if (this.haveSelected()) {
		var selectedLayerOpacityModifier =
			this.calculateSelectedLayerOpacityModifier_();
		var hiddenLayerOpacityModifier =
			Math.max(selectedLayerOpacityModifier -
				this.OTHER_LAYER_OPACITY_DEMOTION, -1);

		this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
			selectedLayerOpacityModifier,
			this.getEntityOpacityModifier(
				this.CURRENT_LAYER_INTERPOLANT));
		this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
			hiddenLayerOpacityModifier,
			this.getEntityOpacityModifier(
				this.OTHER_LAYER_INTERPOLANT));

	} else {
		this.setFuture_(this.CURRENT_LAYER_INTERPOLANT,
			this.NEUTRAL_OPACITY_MODIFIER,
			this.getEntityOpacityModifier(
				this.CURRENT_LAYER_INTERPOLANT));
		this.setFuture_(this.OTHER_LAYER_INTERPOLANT,
			this.NEUTRAL_OPACITY_MODIFIER,
			this.getEntityOpacityModifier(
				this.OTHER_LAYER_INTERPOLANT));
	}
};

// Sets the future opacity modifier for an entity.
o3v.SelectManager.prototype.setFuture_ =
	function (entityId, futureValue, priorOpacityModifier) {
		if (!this.interpolants_[entityId]) {
			this.interpolants_[entityId] = new o3v.Interpolant(
				priorOpacityModifier);
		}
		this.interpolants_[entityId].setFuture(futureValue);
	};

// Indicate to the outside world (renderer and history manager)
// that something has changed inside select.js.
o3v.SelectManager.prototype.signalChange_ = function (opt_skipHistory) {
	this.changeCallback_();
	if (!opt_skipHistory) {
		// TODO(dkogan): Reinstate history.
		//this.history.update();
	}
};

o3v.SelectManager.prototype.selectEntity_ = function (entityId) {
	var entity = this.entityStore_.getEntity(entityId);
	if (entity && !this.selectedEntities_[entityId]) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

		// Bump refcount in associated layer.
		entity.layers.forEach(
			function (layer) {
				o3v.util.setIfUndefined(
					this.layerSelectionRefcount_, layer, 0);
				this.layerSelectionRefcount_[layer] ++;
			}, this);

		// Select entity
		this.selectedEntities_[entityId] = entity;

		// Set opacities.
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.unselectEntity_ = function (entityId) {
	var entity = this.selectedEntities_[entityId];
	if (entity) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);

		entity.layers.forEach(
			function (layer) {
				this.layerSelectionRefcount_[layer] --;
			}, this);
		delete this.selectedEntities_[entityId];
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.hideEntity_ = function (entityId) {
	var entity = this.entityStore_.getEntity(entityId);
	if (entity && !this.hiddenEntities_[entityId]) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		this.hiddenEntities_[entityId] = entity;
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.unhideEntity_ = function (entityId) {
	var entity = this.hiddenEntities_[entityId];
	if (entity) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		delete this.hiddenEntities_[entityId];
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.pinEntity_ = function (entityId) {
	var entity = this.entityStore_.getEntity(entityId);
	if (entity && !this.pinnedEntities_[entityId]) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		this.pinnedEntities_[entityId] = entity;
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

o3v.SelectManager.prototype.unpinEntity_ = function (entityId) {
	var entity = this.pinnedEntities_[entityId];
	if (entity) {
		var priorOpacityModifier = this.getEntityOpacityModifier(entityId);
		delete this.pinnedEntities_[entityId];
		this.setFutureOpacities_(entityId, priorOpacityModifier);
	}
};

//////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
//////////////////////////////////////////////////////////////////////

// Returns -1 for hidden, 0 for default, 1 for visible, and values in between
// for transitional states.
o3v.SelectManager.prototype.getEntityOpacityModifier = function (entityId) {
	if (this.interpolants_[entityId]) {
		return this.interpolants_[entityId].getPresent();
	} else if (this.hiddenEntities_[entityId]) {
		return this.HIDDEN_ENTITY_OPACITY_MODIFIER;
	} else if (this.selectedEntities_[entityId]) {
		return this.SELECTED_ENTITY_OPACITY_MODIFIER;
	} else if (this.pinnedEntities_[entityId]) {
		return this.PINNED_ENTITY_OPACITY_MODIFIER;
	} else {
		return this.NEUTRAL_OPACITY_MODIFIER;
	}
};

o3v.SelectManager.prototype.getSelectedLayerOpacityModifier = function () {
	return this.getEntityOpacityModifier(this.CURRENT_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.getOtherLayerOpacityModifier = function () {
	return this.getEntityOpacityModifier(this.OTHER_LAYER_INTERPOLANT);
};

o3v.SelectManager.prototype.haveSelected = function () {
	return !o3v.util.isEmpty(this.selectedEntities_);
};

o3v.SelectManager.prototype.havePinned = function () {
	return !o3v.util.isEmpty(this.pinnedEntities_);
};

o3v.SelectManager.prototype.haveHidden = function () {
	return !o3v.util.isEmpty(this.hiddenEntities_);
};

o3v.SelectManager.prototype.getLayersWithSelected = function () {
	var layers = {};
	o3v.util.forEach(this.layerSelectionRefcount_, function (count, layer) {
		if (count > 0) {
			layers[layer] = true;
		}
	});
	return layers;
};

o3v.SelectManager.prototype.getLayersWithPinned = function () {
	var layers = {};
	var pinned = this.getPinned();
	o3v.util.forEach(this.getPinned(), function (entity, entityId) {
		entity.layers.forEach(
			function (layer) {
				layers[layer] = true;
			});
	});
	return layers;
};

o3v.SelectManager.prototype.getPinned = function () {
	return this.pinnedEntities_;
};

o3v.SelectManager.prototype.getSelected = function () {
	return this.selectedEntities_;
};

o3v.SelectManager.prototype.getHidden = function () {
	return this.hiddenEntities_;
};

//////////////////////////////////////////////////////////////////////
// HIDE
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.hide = function (entityId, opt_skipHistory) {
	this.hideMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.hideMultiple =
	function (entityIds, opt_skipHistory) {
		entityIds.forEach(
			function (entityId) {
				if (this.entityAllowed_(entityId)) {
					// Hidden is not allowed to be selected or pinned.
					this.unselect(entityId, opt_skipHistory);
					this.unpin(entityId, opt_skipHistory);
					this.hideEntity_(entityId);
				}
			}, this);
		this.signalChange_(opt_skipHistory);
	};
o3v.SelectManager.prototype.unhide = function (entityId, opt_skipHistory) {
	this.unhideEntity_(entityId);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearHidden = function (opt_skipHistory) {
	if (!opt_skipHistory) {
		o3v.Analytics.trackPage('/ui/clear-hidden');
	}
	for (var entityId in this.hiddenEntities_) {
		this.unhideEntity_(entityId);
	}
	this.signalChange_(opt_skipHistory);
};

//////////////////////////////////////////////////////////////////////
// SELECT
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.select = function (entityId, opt_skipHistory) {
	this.selectMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.selectMultiple =
	function (entityIds, opt_skipHistory) {
		this.clearSelected(false, true); // Only allowing a single selection.
		entityIds.forEach(
			function (entityId) {
				if (this.entityAllowed_(entityId)) {
					this.selectEntity_(entityId);
				}
			}, this);
		this.signalChange_(opt_skipHistory);
	};
o3v.SelectManager.prototype.unselect = function (entityId, opt_skipHistory) {
	this.unselectEntity_(entityId);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.clearSelected = function (opt_skipHistory,
	opt_noSignal) {
	for (var entity in this.selectedEntities_) {
		this.unselectEntity_(entity);
	}
	if (!opt_noSignal) {
		this.signalChange_(opt_skipHistory);
	}
};

//////////////////////////////////////////////////////////////////////
// PIN
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pin = function (entityId, opt_skipHistory) {
	this.pinMultiple([entityId], opt_skipHistory);
};
o3v.SelectManager.prototype.pinMultiple = function (entityIds, opt_skipHistory) {
	entityIds.forEach(
		function (entityId) {
			if (this.entityAllowed_(entityId)) {
				// Pinned is not allowed to be selected or hidden.
				this.unhide(entityId, opt_skipHistory);
				this.unselect(entityId, opt_skipHistory);
				this.pinEntity_(entityId, opt_skipHistory);
			}
		}, this);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.unpin = function (entityId, opt_skipHistory) {
	this.unpinEntity_(entityId);
	this.signalChange_(opt_skipHistory);
};
o3v.SelectManager.prototype.togglePin = function (entityId) {
	if (this.pinnedEntities_[entityId]) {
		this.unpin(entityId);
	} else {
		this.pin(entityId);
	}
};
o3v.SelectManager.prototype.togglePinMultiple = function (entityIds) {
	entityIds.forEach(
		function (entityId) {
			this.togglePin(entityId);
		}, this);
};
o3v.SelectManager.prototype.clearPinned = function (opt_skipHistory) {
	if (!opt_skipHistory) {
		o3v.Analytics.trackPage('/ui/clear-pinned');
	}
	for (var entity in this.pinnedEntities_) {
		this.unpinEntity_(entity);
	}
	this.signalChange_(opt_skipHistory);
};

///////////////////////////////////////////////////////////////////////////
// Undifferentiated Selection.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.pickMultiple = function (entityIds) {
	if (this.mode_ == this.MODE_PIN) {
		this.togglePinMultiple(entityIds);
	} else if (this.mode_ == this.MODE_HIDE) {
		this.hideMultiple(entityIds);
	} else {
		if (entityIds.length == 1 && this.selectedEntities_[entityIds] &&
			o3v.util.getObjectCount(this.selectedEntities_) == 1) {
			// This is a pick of the currently selected entity, so deselect it.
			this.clearSelected();
		} else {
			this.selectMultiple(entityIds);
		}
	}
};

//////////////////////////////////////////////////////////////////////
// Expand
//////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.expandSelected = function (entityId) {
	var newSelected = {};
	// NOTE(dkogan): These are two different types of maps, but that's okay
	// because we're just using their keys.
	o3v.util.extendObject(newSelected,
		this.entityStore_.getSplit(entityId));
	o3v.util.extendObject(newSelected, this.getSelected());
	delete newSelected[entityId];
	this.selectMultiple(
		Object.keys(newSelected));
};

o3v.SelectManager.prototype.expandPinned = function (entityId) {
	this.unpin(entityId);
	this.pinMultiple(
		Object.keys(this.entityStore_.getSplit(entityId)));
};

///////////////////////////////////////////////////////////////////////////
// Mode control.
///////////////////////////////////////////////////////////////////////////
o3v.SelectManager.prototype.setMode = function (mode) {
	this.mode_ = mode;
};

///////////////////////////////////////////////////////////////////////////
// Render interface.
///////////////////////////////////////////////////////////////////////////

// Callback from rendering. Returns true if something has changed.
o3v.SelectManager.prototype.recalculate = function () {
	var updates = false;
	var garbage = [];
	// TODO(wonchun): use Interpolant registration to handle stuff
	// like this. Dynamic interoplant insert/remove require a bit
	// more logic (like that below). Also consider using a "freelist" of
	// interpolators to avoid GC churn.
	// Updates interpolant state, and marks defunct interpolators.
	for (var entityId in this.interpolants_) {
		var interpolant = this.interpolants_[entityId];
		var more_updates = interpolant.tween();
		updates |= more_updates;
		// Is this an interpolant we can reclaim?
		if (entityId != this.CURRENT_LAYER_INTERPOLANT &&
			entityId != this.OTHER_LAYER_INTERPOLANT &&
			!more_updates) {
			// TODO(wonchun): is it possible to simply delete this here?
			garbage.push(entityId);
		}
	}

	// Sweeps defunct interpolators.
	garbage.forEach(function (entityId) {
		delete this.interpolants_[entityId];
	}, this);

	return updates;
};

o3v.SelectManager.prototype.clearSelection = function () {
	this.clearHidden(true);
	this.clearPinned(true);
	this.clearSelected(true);
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview JavaScript to for smooth interpolation.
 *
 */

/**
 * @param {number} value
 * @param {?Array} opt_registrar
 * @constructor
 */
o3v.Interpolant = function (value, opt_registrar, opt_constraint) {
	this.past_ = value;
	this.present_ = value;
	this.future_ = value;
	this.urgency_ = 0.25;
	this.constraint_ = opt_constraint;
	this.EPSILON = 0.001;

	if (opt_registrar) opt_registrar.push(this);
};

/**
 * @return {number}
 */
o3v.Interpolant.prototype.getPresent = function () {
	return this.present_;
};

/**
 * @return {number}
 */
o3v.Interpolant.prototype.getFuture = function () {
	return this.future_;
};

/**
 * @param {number} value
 * @param {?number} opt_urgency
 */
o3v.Interpolant.prototype.setFuture = function (value, opt_urgency) {
	this.future_ = value;
	if (opt_urgency) {
		this.urgency_ = opt_urgency;
	}
};


/**
 * @param {number} value
 */
o3v.Interpolant.prototype.reset = function (value) {
	this.past_ = value;
	this.present_ = value;
	this.future_ = value;
};

o3v.Interpolant.prototype.setFutureDelta = function (value, opt_urgency) {
	this.setFuture(this.future_ + value, opt_urgency);
}

/**
 * @return {boolean} needs update?
 */
o3v.Interpolant.prototype.tween = function () {
	var force_redraw = false;
	if (this.constraint_) {
		force_redraw = this.constraint_(this);
	}
	// TODO(wonchun): compose this logic into constraint_
	if (Math.abs(this.future_ - this.present_) < this.EPSILON) {
		this.past_ = this.future_;
		this.present_ = this.future_;
		return force_redraw;
	}
	var b = new goog.math.Bezier(this.past_, 0,
		2 * this.present_ - this.past_, 0,
		2 * this.future_ - this.present_, 0,
		this.future_, 0);
	this.past_ = this.present_;
	this.present_ = b.getPoint(this.urgency_).x;
	return true;
};

/**
 * @return {boolean} needs update
 */
o3v.Interpolant.tweenAll = function (array) {
	var ret = false;
	array.forEach(function (i) {
		ret |= i.tween();
	});
	return ret;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Interface between code that sets opacity (opacity slider,
 *               selection), and the renderer.
 */

o3v.OpacityManager = function (layerOpacityManager, selectionManager,
	changeCallback) {
	// Accessor for layer opacity information.
	this.layerOpacityManager_ = layerOpacityManager;
	this.layerOpacityManager_.addView(this.handleLayerOpacityUpdate.bind(this));

	// Accessor for selection information.
	this.selectionManager_ = selectionManager;

	// Function to call when something changes.
	this.changeCallback_ = changeCallback;
};

o3v.OpacityManager.prototype.reset = function (entityMetadata) {
	this.entityMetadata_ = entityMetadata;

	// Map of <layer name> : <opacity interpolant>
	// Interpolant is a number from 0 to 1 indicating overall layer opacity.
	// Note that since a layer may be sectioned into outside/inside parts,
	// this number is not the same as base layer opacity returned by
	// getLayerOpacityInfo.
	this.layerOpacities_ = {};

	this.layerOpacityInterpolants_ = [];

	var layerNames = this.entityMetadata_.getLayerNames();
	for (var i = 0; i < layerNames.length; ++i) {
		this.initLayer_(layerNames[i]);
	}
};

// Set up layer.
o3v.OpacityManager.prototype.initLayer_ = function (layerName) {
	var layerId = this.entityMetadata_.layerNameToId(layerName);
	if (!this.layerOpacities_[layerId]) {
		this.layerOpacities_[layerId] = new o3v.Interpolant(
			1, this.layerOpacityInterpolants_);
	}
};

// Gets layer base opacity.
// If a layer is sectioned, base is the opacity of the *most opaque* section.
o3v.OpacityManager.prototype.getLayerBaseOpacity_ = function (layerId) {
	var rawOpacity = this.layerOpacities_[layerId].getPresent();
	var sublayers = this.entityMetadata_.getSublayers()[layerId];
	if (sublayers && rawOpacity > 0 && rawOpacity < 1) {
		var numSublayers = sublayers.length;

		if ((rawOpacity * numSublayers) < 1.0) {
			return rawOpacity * numSublayers;
		} else {
			return 1.0;
		}
	} else {
		return rawOpacity;
	}
};

/**
 * Gets entity opacities based on layer opacity.
 * @param {nubber} layerId Id of the layer.
 * @return {Object.<number, number>} Map of entityId to opacity.
 * @private
 */
o3v.OpacityManager.prototype.getOpacityFromLayering_ =
	function (layerId) {
		var entityToOpacity = {};

		var rawOpacity = this.layerOpacities_[layerId].getPresent();

		// The sublayers are in order from the OUTER to the INNER.
		var sublayers = this.entityMetadata_.getSublayers()[layerId];

		// Potentially three sets of entities; any may be empty.
		// 1) Opaque
		// 2) Transluscent
		// 3) Transparent
		var numSublayers = sublayers.length;
		var opacity = rawOpacity * numSublayers;

		// This is the 'transluscent' sublayer. Every layer below it
		// is transparent, every layer above it is opaque. It may be semi-transparent
		// or opaque.
		var transluscentLayer = Math.floor(numSublayers - opacity);

		// Transparent.
		for (var sublayer = 0; sublayer < transluscentLayer; sublayer++) {
			sublayers[sublayer].forEach(function (entityId) {
				entityToOpacity[entityId] = 0;
			});
		}

		// Transluscent or opaque.
		if (transluscentLayer < sublayers.length) {
			var sublayerOpacity = opacity - (sublayers.length - transluscentLayer - 1);
			sublayers[transluscentLayer].forEach(function (entityId) {
				entityToOpacity[entityId] = sublayerOpacity;
			});
		}

		// Opaque.
		for (var sublayer = transluscentLayer + 1; sublayer < sublayers.length; sublayer++) {
			if (sublayers[sublayer]) {
				sublayers[sublayer].forEach(function (entityId) {
					entityToOpacity[entityId] = 1;
				});
			}
		}

		return entityToOpacity;
	};

// Helper function that applies an opacity modifier to a transparency.
o3v.OpacityManager.prototype.getOpacityWithModifier_ =
	function (base, modifier) {
		if (modifier == 0) {
			return base;
		} else if (modifier > 0) {
			return (base * (1 - modifier)) + (modifier);
		} else {
			return (base * (1 + modifier));
		}
	};

// Helper function to modify opacity for a bunch of entities at once.
o3v.OpacityManager.prototype.modifyOpacityForEntities_ =
	function (entityToOpacity, modifier) {
		o3v.util.forEach(entityToOpacity, function (opacity, entityId) {
			entityToOpacity[entityId] = this.getOpacityWithModifier_(opacity,
				modifier);
		}, this);
	};

// If there is a selection, make other layers very transparent and the layer
// with the selection somewhat transparent.
o3v.OpacityManager.prototype.adjustLayersFromSelection_ =
	function (layerToEntityOpacities) {
		if (this.selectionManager_.haveSelected()) {
			var layersWithSelection = this.selectionManager_.getLayersWithSelected();
			var selectedModifier =
				this.selectionManager_.getSelectedLayerOpacityModifier();
			var otherModifier = this.selectionManager_.getOtherLayerOpacityModifier();
			o3v.util.forEach(
				layerToEntityOpacities,
				function (entityOpacities, layerId) {
					if (layersWithSelection[layerId]) {
						this.modifyOpacityForEntities_(entityOpacities, selectedModifier);
					} else {
						this.modifyOpacityForEntities_(entityOpacities, otherModifier);
					}
				}, this);
		}
	};

// Adjust entities based on their modified opacities from select / etc.
// TODO(dkogan): Selecting two nodes that end up with the same leaves may
// break this (e.g. select heart, and circulatory at once.)
o3v.OpacityManager.prototype.adjustEntitiesFromSelection_ =
	function (layerToEntityOpacities, entities) {

		o3v.util.forEach(
			entities,
			function (entity, entityId) {
				var opacityModifier =
					this.selectionManager_.getEntityOpacityModifier(entityId);

				var leafEntityIds = this.entityMetadata_.getLeafIds(entityId);
				Object.keys(leafEntityIds).forEach(
					function (leafId) {
						var leaf = this.entityMetadata_.getEntity(leafId);
						var layerId = leaf.layers[0]; // Guaranteed only one.
						var layerOpacities = layerToEntityOpacities[layerId];
						var leafOpacity = layerOpacities[leafId];
						leafOpacity = this.getOpacityWithModifier_(
							leafOpacity, opacityModifier);
						layerOpacities[leafId] = leafOpacity;
					}, this);
			}, this);
	};

// This pushes opacities back into the layer opacity manager, forcing
// all the layers at or below any selected layers to opacity 1, and all
// other layers to opacity zero.
o3v.OpacityManager.prototype.exposeSelected = function () {
	if (this.selectionManager_.haveSelected()) {
		var layersToExpose = this.selectionManager_.getLayersWithSelected();
		var layerNames = this.entityMetadata_.getLayerNames();

		var exposed = false;
		var newOpacities = [];

		for (var i = 0; i < layerNames.length; i++) {
			var layerId = this.entityMetadata_.layerNameToId(layerNames[i]);
			if (layersToExpose[layerId] !== undefined) {
				exposed = true;
			}
			if (exposed) {
				newOpacities[layerNames.length - 1 - i] = 1;
			} else {
				newOpacities[layerNames.length - 1 - i] = 0;
			}
		}

		this.layerOpacityManager_.setLayerOpacities(newOpacities);
	}
};

o3v.OpacityManager.prototype.handleLayerOpacityUpdate = function () {
	if (!this.entityMetadata_) {
		// Not yet set up, return.
		return;
	}

	// TODO(dkogan|arthurb): Switch layerOpacityManager entity ids.
	var newOpacities = this.layerOpacityManager_.getLayerOpacities();
	var layerNames = this.entityMetadata_.getLayerNames();

	if (newOpacities.length != layerNames.length) {
		o3v.log.error("New opacities don't match expected count, unable to update",
			newOpacities.length, layerNames.length);
		return;
	}

	for (var i = 0; i < layerNames.length; i++) {
		var layerId = this.entityMetadata_.layerNameToId(layerNames[i]);
		var layer = this.entityMetadata_.getEntity(layerId);
		if (layer) {
			// Note: The input is in reverse order here; kind of a nuisance.
			this.layerOpacities_[layerId].setFuture(
				newOpacities[layerNames.length - 1 - i]);
		}
	}

	this.changeCallback_();
};

// Remove exceptions and use external ids.
o3v.OpacityManager.prototype.convertToExternalIds_ =
	function (opacityToEntities) {

		var opacityToExternalEntities = {};

		o3v.util.forEach(
			opacityToEntities,
			function (entities, opacity) {
				opacityToExternalEntities[opacity] = {};
				o3v.util.forEach(
					entities,
					function (opt_true, entityId) {
						var entity = this.entityMetadata_.getEntity(entityId);
						var externalId = entity.externalId;
						opacityToExternalEntities[opacity][externalId] = true;
					}, this);
			}, this);
		return opacityToExternalEntities;
	};

// INPUT:
// { <layer id> : { entityId : <opacity> }}
// OUTPUT:
// { <opacity> : { <entity id>: true }}
o3v.OpacityManager.prototype.convertLayerToEntityOpacities_ =
	function (layerToEntityOpacities) {

		var opacityToEntities = {};

		o3v.util.forEach(
			layerToEntityOpacities,
			function (entityOpacities) {
				o3v.util.forEach(
					entityOpacities,
					function (opacity, entityId) {
						if (opacityToEntities[opacity] === undefined) {
							opacityToEntities[opacity] = {};
						}
						opacityToEntities[opacity][entityId] = true;
					});
			});

		return opacityToEntities;

	};

// Gets layer opacity info.
// Returns:
// { <opacity> : { <entityId> : true }
// Or null if everything is opaque.
o3v.OpacityManager.prototype.getOpacityInfo = function (opt_forSelection) {
	// opt_forSelection = true;

	// Most of the initial processing is done per-layer because much of
	// the opacity information is relevant per-layer.

	// This is an Object.<number,Object<number,number>> of
	// (layerId -> { entityId -> opacity }}
	var layerToEntityOpacities = {};

	// Layer-level opacities.
	o3v.util.forEach(
		this.layerOpacities_,
		function (unused_layerOpacityInfo, layerId) {
			layerToEntityOpacities[layerId] =
				this.getOpacityFromLayering_(layerId);
		}, this);

	// Adjust opacity of layers to account for any selection.
	// Note the difference between for and from here.
	if (!opt_forSelection) {
		this.adjustLayersFromSelection_(layerToEntityOpacities);
	}

	// Hidden entities are hidden both for selection and otherwise.
	this.adjustEntitiesFromSelection_(layerToEntityOpacities,
		this.selectionManager_.getHidden());
	// Adjust for selected entities.
	this.adjustEntitiesFromSelection_(layerToEntityOpacities,
		this.selectionManager_.getSelected());
	// Adjust for pinned entities.
	this.adjustEntitiesFromSelection_(layerToEntityOpacities,
		this.selectionManager_.getPinned());

	// Create list of opacities -> list of entities.
	// Empty set means everything is opaque.
	var opacityToEntities = this.convertLayerToEntityOpacities_(
		layerToEntityOpacities);

	if (opt_forSelection) {
		// For selection, make all opacities integer values.
		var newOpacityToEntities = {};
		newOpacityToEntities[0] = {};
		newOpacityToEntities[1] = {};
		o3v.util.forEach(
			opacityToEntities,
			function (entities, opacity) {
				if (opacity >= 0.5) {
					o3v.util.forEach(
						entities,
						function (usused_true, entityId) {
							newOpacityToEntities[1][entityId] = true;
						});
				} else {
					o3v.util.forEach(
						entities,
						function (usused_true, entityId) {
							newOpacityToEntities[0][entityId] = true;
						});
				}
			});
		opacityToEntities = newOpacityToEntities;
	}

	// Use external ids.
	opacityToEntities = this.convertToExternalIds_(opacityToEntities);

	return opacityToEntities;
};


o3v.OpacityManager.prototype.recalculate = function () {
	var updates = false;

	updates |= o3v.Interpolant.tweenAll(
		this.layerOpacityInterpolants_);
	return updates;
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview GUI elements of the page (buttons, slider, etc).
 */

o3v.MainUI = function (nextModelCallback) {

	// Canvas.
	$('<canvas>').appendTo('.cow').css({
		'position': 'absolute',
		'width': '100%',
		'height': '100%',
		'z-index': o3v.uiSettings.ZINDEX_VIEWER
	}).attr('id', 'viewer');
	this.canvas_ = $('#viewer')[0];
	this.canvas_.onselectstart = function () {
		return false;
	};
	this.canvas_.onmousedown = function () {
		return false;
	};

	// Logo.
	$('<img src="img/logo.png">').appendTo('body').css({
		'position': 'absolute',
		'left': '8px',
		'top': '10px',
		'z-index': o3v.uiSettings.ZINDEX_MAINUI
	}).click(function () {
		this.navHandler(this.NAV_HOME);
	});

	// Model selector.
	this.modelBtn_ = $('<div>').appendTo('body').css({
		'position': 'absolute',
		'left': '17px',
		'top': '219px',
		'width': '45px',
		'height': '50px',
		'border-left': '2px solid #92e497',
		'border-top-left-radius': '16px',
		'border-top-right-radius': '16px',
		'border-top': '2px solid #92e497',
		'border-right': '2px solid #92e497',
		'border-bottom': '1px solid #c2ffb7',
		'background-position': 'center center',
		'background-repeat': 'no-repeat',
		'background-color': '#fff',
		'z-index': o3v.uiSettings.ZINDEX_MAINUI
	}).click(nextModelCallback);
};

o3v.MainUI.prototype.setModelSelectorButton = function (iconFile) {
	this.modelBtn_.css({
		'background-image': 'url(' + iconFile + ')'
	});
};

o3v.MainUI.prototype.getCanvas = function () {
	return this.canvas_;
};

o3v.MainUI.prototype.showLoadingFeedback = function (show) {
	document.getElementById('loading-feedback').style.visibility =
		show ? 'visible' : 'hidden';
};

o3v.MainUI.prototype.getLastButton = function () {
	return this.modelBtn_.get(0);
};
// Copyright 2011 Google Inc. All Rights Reserved.

/**
 * @fileoverview Description of this file.
 * @author dkogan@google.com (David Kogan)
 */
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

o3v.RenderInterface = function (canvas, opacityManager, contentManager) {
	this.renderer_ = new Renderer(canvas, this.textureFromMaterial_.bind(this));

	this.opacityManager_ = opacityManager;
	this.contentManager_ = contentManager;

	this.pendingRefresh_ = 0; // If refresh is waiting, this is its timeout.
	this.REFRESH_WAIT_ = 10; // Wait 10ms between refresh retries.

	this.reset();
};

o3v.RenderInterface.prototype.textureFromMaterial_ = function (
	gl, material, callback) {
	var modelInfo = this.contentManager_.getCurrentModelInfo();
	var texturePath = modelInfo.texturePath;
	// TODO(dkogan|wonchun): MODELS should probably not be a global variable.
	var materials = MODELS[modelInfo.name].materials;
	try {
		var url = materials[material].map_Kd; // throw-y.
		if (url === undefined) {
			throw url;
		}
		return textureFromUrl(gl, texturePath + url, callback);
	} catch (e) {
		var color;
		try {
			color = new Uint8Array(materials[material].Kd);
		} catch (e) {
			color = new Uint8Array([255, 255, 255]);
		}
		var texture = textureFromArray(gl, 1, 1, color);
		callback(gl, texture);
		return texture;
	}
}


o3v.RenderInterface.prototype.handleResize = function () {
	this.renderer_.handleResize();
};

o3v.RenderInterface.prototype.onMeshLoad =
	function (attribArray, indexArray, bboxes, meshEntry) {

		this.renderer_.onMeshLoad(attribArray, indexArray, bboxes, meshEntry);

		// Update bbox info.
		for (var i = 0; i < meshEntry.names.length; i++) {
			var bbox = [bboxes[i * 6 + 0], bboxes[i * 6 + 1], bboxes[i * 6 + 2],
                bboxes[i * 6 + 3], bboxes[i * 6 + 4], bboxes[i * 6 + 5]];
			this.bboxes_[meshEntry.names[i]] = bbox;
		}
	};

o3v.RenderInterface.prototype.onModelLoad = function () {
	this.renderer_.updateMeshInfo();
};

o3v.RenderInterface.prototype.reset = function () {
	this.renderer_.reset();
	this.bboxes_ = {};
	window.clearTimeout(this.pendingRefresh_);
};

o3v.RenderInterface.prototype.getBboxes = function () {
	return this.bboxes_;
};

o3v.RenderInterface.prototype.refresh = function (camera) {
	if (this.pendingRefresh_) {
		window.clearTimeout(this.pendingRefresh_);
		this.pendingRefresh_ = 0;
	}
	if (this.renderer_.ready()) {
		// Update opacity info.
		this.renderer_.updateOpacity(this.opacityManager_.getOpacityInfo());

		// Send refresh request.
		this.renderer_.postRedisplayWithCamera(camera);
	} else {
		this.pendingRefresh_ = window.setTimeout(
			function () {
				this.refresh(camera);
			}.bind(this), this.REFRESH_WAIT_);
	}
};

o3v.RenderInterface.prototype.getViewportCoords = function (renderCoords) {
	return this.renderer_.getViewportCoords(renderCoords);
};

o3v.RenderInterface.prototype.identify = function (left, top) {
	// Set to int-valued opacities.
	this.renderer_.updateOpacity(this.opacityManager_.getOpacityInfo(true));
	return this.renderer_.identify(left, top);
	this.renderer_.updateOpacity(this.opacityManager_.getOpacityInfo());
};

o3v.RenderInterface.prototype.toggleColored = function () {
	this.renderer_.toggleColored();
};
// Copyright 2011 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Main object for open-3d-viewer.
 */

o3v.Viewer = function () {
	// Check WebGL and redirect to explanatory page if not supported.
	if (!this.checkWebGL()) {
		window.location.href = 'no_webgl.html';
		return;
	}
	// Tracks history.
	this.history_ = new o3v.History(window);

	// Keeps track of graphical elements on the page.
	this.ui_ = new o3v.MainUI(this.nextModelCallback.bind(this));

	// Navigation tracker takes input and passes it to the renderer.
	this.navigator_ = new o3v.Navigator(this.changeCallback.bind(this),
		this.ui_.getCanvas(),
		this.history_);

	// Keeps track of selection state.
	this.select_ = new o3v.SelectManager(this.changeCallback.bind(this),
		this.navigator_);

	// Keeps track of layer opacities.
	this.layerOpacityManager_ = new o3v.LayerOpacityManager();

	// UI for layers (slider).
	this.layersUI_ = new o3v.LayersUI(this.layerOpacityManager_);

	// Converts opacity inputs (layers & selection) into outputs for renderer.
	this.opacity_ = new o3v.OpacityManager(this.layerOpacityManager_,
		this.select_,
		this.changeCallback.bind(this));

	// ContentManager manages models.
	this.contentManager_ = new o3v.ContentManager();

	// Interfaces with the renderer.
	this.render_ = new o3v.RenderInterface(this.ui_.getCanvas(), this.opacity_,
		this.contentManager_);
	window.addEventListener('resize',
		function () {
			this.render_.handleResize();
			this.changeCallback();
		}.bind(this), false);

	// Searchbox.
	this.search_ = new o3v.Search(this.selectCallback.bind(this));

	// Input setup.
	var inputHandler = new o3v.InputHandler(window);
	this.setupInputHandlers_(inputHandler);

	// Navigation buttons.
	new o3v.navUI(this.navigator_.reset.bind(this.navigator_),
		this.navigator_.drag.bind(this.navigator_),
		this.navigator_.scroll.bind(this.navigator_));

	// Platform-specific gestures.
	this.gestures_ = new o3v.Gestures();

	// Labels. Requires input handler to track clicks on labels.
	this.label_ = new o3v.Label(inputHandler, this.select_, this.render_,
		this.ui_.getCanvas(),
		$('#labelcontainer')[0],
		this.navigator_,
		this.gestures_);

	this.loadedModel_ = false;
	this.loadedMetadata_ = false;

	// Load first model.
	this.ui_.showLoadingFeedback(true);
	this.contentManager_.nextModel(this.onModelInfoLoad_.bind(this),
		this.render_.onMeshLoad.bind(this.render_),
		this.onModelLoad_.bind(this),
		this.onMetadataLoad_.bind(this));
	// Restore any pending state and listen to further history changes.
	this.historyStarted_ = false;
};

o3v.Viewer.REFRESH_INTERVAL_ = 20; // 1000/x Hz (this controls interpolants)

o3v.Viewer.prototype.checkWebGL = function () {
	if (!o3v.webGLUtil.browserSupportsWebGL(document.getElementById('gltest'))) {
		return false;
	} else {
		return true;
	}
};

o3v.Viewer.prototype.onModelInfoLoad_ = function (modelInfo) {
	// Update UI.
	this.ui_.setModelSelectorButton(modelInfo.modelPath + '/model_icon.png');
	this.layersUI_.buildAll(this.ui_.getLastButton(), modelInfo.numLayers,
		modelInfo.modelPath + '/layer_icons.png');

	// Update slider.
	this.layerOpacityManager_.init(modelInfo.numLayers);
};

o3v.Viewer.prototype.onMetadataLoad_ = function () {
	var metadata = this.contentManager_.getMetadata();
	console.log("onMetadataLoad_ 1");
	// Update modules that rely on metadata.
	//this.search_.reset(this.contentManager_.getMetadata().getAutocompleteList());
	this.select_.reset(metadata);
	this.label_.reset(metadata);

	this.opacity_.reset(metadata);

	this.loadedMetadata_ = true;
	console.log("onMetadataLoad_ 2");
	if (this.loadedModel_) {
		this.onModelAndMetadataLoad_();
	}
};

o3v.Viewer.prototype.onModelLoad_ = function () {
	this.loadedModel_ = true;
	this.render_.onModelLoad();

	if (this.loadedMetadata_) {
		this.onModelAndMetadataLoad_();
	}
};

// Called when both model and metadata are loaded.
o3v.Viewer.prototype.onModelAndMetadataLoad_ = function () {
	// This requires both meshes and metadata to be loaded.
	this.contentManager_.getMetadata().computeBboxes(this.render_.getBboxes());
	this.navigator_.resetModel(
		this.contentManager_.getMetadata().getRootEntity().bbox);

	this.ui_.showLoadingFeedback(false);

	if (this.historyStarted_) {
		// Reset view.
		this.navigator_.reset();
	} else {
		// Reset view initially.
		// TODO(dkogan): Handle model selection.
		this.history_.start();
		this.historyStarted_ = true;
	}

	// Refresh.
	this.changeCallback();
};

o3v.Viewer.prototype.nextModelCallback = function () {
	this.loadedModel_ = false;
	this.loadedMetadata_ = false;

	this.render_.reset();

	this.ui_.showLoadingFeedback(true);

	this.contentManager_.nextModel(this.onModelInfoLoad_.bind(this),
		this.render_.onMeshLoad.bind(this.render_),
		this.onModelLoad_.bind(this),
		this.onMetadataLoad_.bind(this));
};

// Callback that happens when something changes that requires a re-render.
// Because of interpolant use, we need to repeat changeCallback until
// all the changes are done processing.
o3v.Viewer.prototype.changeCallback = function (opt_checkBeforeProceeding) {
	if (!this.loadedMetadata_ || !this.loadedModel_) {
		window.setTimeout(this.changeCallback.bind(this),
			o3v.Viewer.REFRESH_INTERVAL_);
		return;
	}

	if (opt_checkBeforeProceeding) {
		var needUpdate = false;
		needUpdate = this.select_.recalculate() || needUpdate;
		needUpdate = this.opacity_.recalculate() || needUpdate;
		needUpdate = this.navigator_.recalculate() || needUpdate;
		if (!needUpdate) {
			return;
		}
	}

	// Refresh view.
	this.render_.refresh(this.navigator_.camera);
	this.label_.refresh();

	window.setTimeout(function () {
		this.changeCallback(true);
	}.bind(this), o3v.Viewer.REFRESH_INTERVAL_);
};

o3v.Viewer.prototype.selectCallback = function (searchTerm) {
	if (!this.loadedMetadata_ || !this.loadedModel_) {
		return;
	}
	var entityIds = this.contentManager_.getMetadata().searchToEntityIds(
		searchTerm);

	this.select_.selectMultiple(entityIds);

	if (this.select_.haveSelected()) {
		this.opacity_.exposeSelected();
		var bbox = this.navigator_.focusOnEntities(this.select_.getSelected());
		this.navigator_.goToBBox(bbox);
	} else {
		this.navigator_.resetNavParameters();
	}

	// TODO(dkogan|arthurb): Reimplement.
	//this.select_.exposeSelected();
};

o3v.Viewer.prototype.handleClick = function (left, top, modifiers) {
	var externalId = this.render_.identify(left, top);

	if (!externalId) {
		this.select_.clearSelection();
		this.navigator_.resetNavParameters();
	} else {
		var entityId = this.contentManager_.getMetadata().externalIdToId(
			externalId);
		// Identify entity under click.
		var entity = this.contentManager_.getMetadata().getEntity(entityId);
		if (this.gestures_.isHideClick(
				modifiers[o3v.InputHandler.CONTROL],
				modifiers[o3v.InputHandler.META])) {
			// Impossible to click on a hidden entity, so no need for toggle.
			this.select_.hide(entityId);
		} else if (modifiers[o3v.InputHandler.SHIFT]) {
			this.select_.togglePin(entityId);
		} else {
			this.select_.pickMultiple([entityId]);

			var bbox = this.navigator_.focusOnEntities(this.select_.getSelected());
			this.navigator_.goToBBox(bbox, true);
		}
	}
};

o3v.Viewer.prototype.setupInputHandlers_ = function (inputHandler) {
	// Click to select.
	inputHandler.registerHandler(o3v.InputHandler.CLICK,
		$('#viewer')[0],
		this.handleClick.bind(this), true);

	// Mouse-based navigation.
	inputHandler.registerHandler(o3v.InputHandler.DRAG,
		$('#viewer')[0],
		this.navigator_.drag.bind(this.navigator_),
		true);
	inputHandler.registerHandler(o3v.InputHandler.SCROLL,
		$('#viewer')[0],
		this.navigator_.scroll.bind(this.navigator_),
		true);

	new o3v.NavKeyHandler(
		inputHandler,
		function (x, y, z) {
			// keyboard move
			this.navigator_.drag(x * 10, y * -10);
			this.navigator_.scroll(0, z * 30);
		}.bind(this),
		this.navigator_.reset.bind(this.navigator_));

	// Clicking on help toggles help.
	$('#help-hidden').click(this.toggleHelp_.bind(this));
	$('#help').click(this.toggleHelp_.bind(this));

	// Miscellaneous keys.
	inputHandler.registerHandler(
		o3v.InputHandler.KEYDOWN, null,
		function (keyCode) {
			if (keyCode == 191) { // '?'
				this.toggleHelp_();
			} else if (keyCode == 67) { // 'c'
				this.render_.toggleColored();
				this.changeCallback();
			} else if (keyCode == 66) { // 'b'
				this.label_.toggleBoundingBox();
				this.changeCallback();
			}
		}.bind(this));
};

o3v.Viewer.prototype.toggleHelp_ = function () {
	if ($('#help')[0].style['display'] != 'block') {
		$('#help')[0].style['display'] = 'block';
		$('#help-hidden')[0].style['display'] = 'none';
	} else {
		$('#help')[0].style['display'] = 'none';
		$('#help-hidden')[0].style['display'] = 'block';
	}
};