let l1_alas = [
    -0.75, -0.4638, // kiri bawah
    -0.44715, -0.11805, // kiri atas
    0.4365, -0.11805, // kanan atas
    0.4365, -0.11805, // kanan atas
    -0.75, -0.4638, // kiri bawah
    0.75, -0.4638, // kanan bawah
]

let l1_frame = [
    //segitiga bawah
    0, 0.2, // pusat
    -0.44715, -0.11805, // kiri bawah
    0.4365, -0.11805, // kanan bawah

    //segitiga kanan
    0, 0.2, // pusat
    0.4365, -0.11805, // kanan bawah
    0.438, 0.4307, // kanan atas bawah

    //pembuat siku kanan bawah
    0, 0.2, // pusat
    0.438, 0.4307, // kanan atas bawah
    0.392, 0.4307, // pusat atas kanan

    //pembuat siku kanan atas
    0, 0.2, // pusat
    0.392, 0.4307, // pusat atas kanan
    0.392, 0.4744, // kanan atas atas

    //segitiga atas
    0, 0.2, // pusat
    0.392, 0.4744, // kanan atas atas
    -0.4007, 0.4744, // kiri atas atas

    //pembuat siku kiri atas
    0, 0.2, // pusat
    -0.4, 0.4307, // pusat atas kiri
    -0.4, 0.4744, // kiri atas atas

    //pembuat siku kiri atas
    0, 0.2, // pusat
    -0.4, 0.4307, // pusat atas kiri
    -0.444, 0.4307, // kiri atas bawah

    //segitiga kiri
    0, 0.2, // pusat
    -0.44715, -0.11805, // kiri bawah
    -0.444, 0.4307, // kiri atas bawah
]

let l1_layar = [
    -0.4, 0.4307, // pusat atas kiri
    0.392, 0.4307, // pusat atas kanan
    -0.4, -0.075, // kiri bawah
    
    -0.4, -0.075, // kiri bawah
    0.392, 0.4307, // pusat atas kanan
    0.392, -0.075, // kanan bawah
]

let l1_shade = [
    -0.725, -0.487, // kiri bawah
    -0.75, -0.4638, // kiri atas
    0.75, -0.4638, // kanan atas
    0.75, -0.4638, // kanan atas
    -0.725, -0.487, // kiri bawah
    0.725, -0.487, // kanan bawah
]

let l1_keyboard = [
    -0.426,-0.1291, //kiri atas
    -0.535,-0.2674, //kiri bawah
    0.5219,-0.2674, //kanan bawah
    0.5219,-0.2674, //kanan bawah
    -0.426,-0.1291, //kiri atas
    0.4077,-0.1291, //kanan atas
]

let l1_keycaps = [
    //fn
    -0.5294, -0.264, // kiri bawah
    -0.51, -0.239, // kiri atas
    -0.4664, -0.264, // kanan bawah
    -0.4664, -0.264, // kanan bawah
    -0.51, -0.239, // kiri atas
    -0.448, -0.239, // kanan atas

    //ctrl
    -0.4573,-0.264, //kiri bawah
    -0.4408,-0.239, //kiri atas
    -0.3802,-0.239, // kanan atas
    -0.3802,-0.239, // kanan atas
    -0.4573,-0.264, //kiri bawah
    -0.3944,-0.264, //kanan bawah

    //opt
    -0.3713,-0.239, // kiri atas
    -0.3875,-0.264, // kiri bawah
    -0.3118,-0.239, // kanan atas
    -0.3118,-0.239, // kanan atas
    -0.3875,-0.264, // kiri bawah
    -0.3247,-0.264, // kanan bawah

    //cmd
    -0.304,-0.239, // kiri atas
    -0.3178,-0.264, // kiri bawah
    -0.236,-0.264, // kanan bawah
    -0.236,-0.264, // kanan bawah
    -0.304,-0.239, // kiri atas
    -0.2266,-0.239, // kanan atas

    //space
    -0.219,-0.239, // ki at
    0.1236,-0.239, // ka at
    -0.2273,-0.264, // ki ba
    -0.2273,-0.264, // ki ba
    0.1236,-0.239, // ka at
    0.128,-0.264, // ka ba

    //cmd right 
    0.1302,-0.239, // ki at
    0.2082,-0.239, // ka at
    0.136,-0.264, // ki ba
    0.136,-0.264, // ki ba
    0.2082,-0.239, // ka at
    0.2206,-0.264, // ka ba

    //opt
    0.2213,-0.239, // ki at
    0.2794,-0.239, // ka at
    0.2323,-0.264, // ki ba
    0.2323,-0.264, // ki ba
    0.2794,-0.239, // ka at
    0.2946,-0.264, // ka ba

    //left arrow
    0.2906,-0.239, // ki at
    0.3492,-0.239, // ka at
    0.303,-0.264, // ki ba
    0.303,-0.264, // ki ba
    0.3492,-0.239, // ka at
    0.367,-0.264, // ki at

    //up arrow
    0.358,-0.239, // ki at
    0.4194,-0.239,
    0.366,-0.2483,
    0.366,-0.2483,
    0.4194,-0.239,
    0.429,-0.2483,

    //down arrow
    0.3674,-0.2522,
    0.4322,-0.2522,
    0.3769,-0.264,
    0.3769,-0.264,
    0.4322,-0.2522,
    0.444,-0.264,

    //right arrow
    0.4281,-0.239,
    0.4945,-0.239,
    0.4501,-0.264,
    0.4501,-0.264,
    0.4945,-0.239,
    0.5157,-0.264,

    // level 2
    // r shift
    0.32677,-0.2105,
    0.473,-0.2106,
    0.33933,-0.233,
    0.33933,-0.233,
    0.473,-0.2106,
    0.4916,-0.233,

    // /
    0.2613,-0.2105,
    0.3194,-0.2105,
    0.2712,-0.233,
    0.2712,-0.233,
    0.3194,-0.2105,
    0.3332,-0.233,

    // .
    0.1952,-0.2105,
    0.2504,-0.2105,
    0.2053,-0.233,
    0.2053,-0.233,
    0.2504,-0.2105,
    0.2612,-0.233,

    // ,

]