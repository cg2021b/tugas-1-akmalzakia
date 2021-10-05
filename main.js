function createShader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(success) {
        return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}



/**
 * @type {HTMLCanvasElement} canvas
 */
let canvas = document.getElementById('myCanvas');

/**
 * @type {WebGLRenderingContext} gl
 */
let gl = canvas.getContext('experimental-webgl');

let vertices = [
    ...l1_alas, ...l1_frame, ...l1_bevel_layar_kiri, ...l1_bevel_layar_kanan, ...l1_layar, ...l1_shade, ...l1_keyboard,
	...l1_keycaps, ... l1_mousepad, ...l1_bevel_mousepad_kiri_atas, ...l1_bevel_mousepad_kanan_atas, ...l1_bevel_mousepad_kiri_bawah, ...l1_bevel_mousepad_kanan_bawah,
]


let vertexShaderCode = `
    attribute vec2 a_position;
    attribute vec4 a_color;
    varying vec4 v_color;
    uniform mat4 u_matrix;

    void main() {
        gl_Position = u_matrix * vec4(a_position, 0, 1.65);
        v_color = a_color;
    }
`

let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderCode);

let fragmentShaderCode = `
	precision mediump float;
	varying vec4 v_color;

	void main() {
		gl_FragColor = v_color;
	}
`;

let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderCode);

let shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

let coords = gl.getAttribLocation(shaderProgram, "a_position");
var colorLocation = gl.getAttribLocation(shaderProgram, "a_color");

var color = [];

for (let i = 0; i < l1_alas.length/2; i++) {
	let r = 0.65;
	let g = 0.65;
	let b = 0.65;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}
for (let i = 0; i < l1_frame.length/2; i++) {
	let r = 0.65;
	let g = 0.65;
	let b = 0.65;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_bevel_layar_kiri.length/2; i++) {
	let r = 0.65;
	let g = 0.65;
	let b = 0.65;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_bevel_layar_kanan.length/2; i++) {
	let r = 0.65;
	let g = 0.65;
	let b = 0.65;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}


for (let i = 0; i < l1_layar.length/2; i++) {
	let r = 0.70;
	let g = 0.70;
	let b = 0.70;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_shade.length/2; i++) {
	let r = 0.60;
	let g = 0.60;
	let b = 0.60;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_keyboard.length/2; i++) {
	let r = 0.70;
	let g = 0.70;
	let b = 0.70;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_keycaps.length/2; i++) {
	let r = 0.50;
	let g = 0.50;
	let b = 0.50;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_mousepad.length/2; i++) {
	let r = 0.70;
	let g = 0.70;
	let b = 0.70;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_bevel_mousepad_kiri_atas.length/2; i++) {
	let r = 0.70;
	let g = 0.70;
	let b = 0.70;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_bevel_mousepad_kanan_atas.length/2; i++) {
	let r = 0.70;
	let g = 0.70;
	let b = 0.70;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_bevel_mousepad_kanan_bawah.length/2; i++) {
	let r = 0.70;
	let g = 0.70;
	let b = 0.70;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}

for (let i = 0; i < l1_bevel_mousepad_kiri_bawah.length/2; i++) {
	let r = 0.70;
	let g = 0.70;
	let b = 0.70;
	color.push(r);
	color.push(g);
	color.push(b);
	color.push(1);
}




let colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);
gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(colorLocation);

let vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
gl.vertexAttribPointer(coords, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coords);

function draw(){
    gl.useProgram(shaderProgram);

    const leftObj = [
        1.0, 0.0, 0.0, 0.0,
		0.0, 1.0, 0.0, 0.0,
		0.0, 0.0, 1.0, 0.0,
		-0.5, 0.0, 0.0, 1.0
    ]

    gl.clearColor(0.972, 0.941, 0.874, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);

    const u_matrix = gl.getUniformLocation(shaderProgram, 'u_matrix');

    gl.uniformMatrix4fv(u_matrix, false, leftObj);

    gl.drawArrays(
		gl.TRIANGLES, 
		0, 
		(l1_alas.length + l1_frame.length + l1_layar.length + l1_bevel_layar_kiri.length
            + l1_bevel_layar_kanan.length + l1_shade.length + l1_keyboard.length + l1_keycaps.length
			+ l1_mousepad.length + l1_bevel_mousepad_kiri_atas.length + l1_bevel_mousepad_kanan_atas.length
			+ l1_bevel_mousepad_kiri_bawah.length + l1_bevel_mousepad_kanan_bawah.length )/2
	);

	// gl.drawArrays(
	// 	gl.TRIANGLES, 
	// 	0, 
	// 	(l1_bevel_layar_kiri.length)/2
	// );

    requestAnimationFrame(draw);
}

draw();