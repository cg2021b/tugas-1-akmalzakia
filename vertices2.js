let l2_alas = [
    // segitiga atas
    -0.027,-0.126, // pusat
    -0.3102,0.014, // kiri atas atas
    0.1896,0.026, // kanan atas atas

    // penyiku atas kiri atas
    -0.027,-0.126, // pusat
    -0.3102,0.014, // kiri atas atas
    -0.313,0.0076, // pusat kiri atas

    // penyiku atas kiri bawah
    -0.027,-0.126, // pusat
    -0.313,0.0076, // pusat kiri atas
    -0.3209,0.0094, // kiri atas bawah

    //  segitiga kiri
    -0.027,-0.126, // pusat
    -0.3209,0.0094, // kiri atas bawah
    -0.6453,-0.3512, // kiri bawah atas

    // penyiku bawah kiri atas
    -0.027,-0.126, // pusat
    -0.6453,-0.3512, // kiri bawah atas
    -0.6331,-0.3618, // pusat kiri bawah

    // penyiku bawah kiri bawah
    -0.027,-0.126, // pusat
    -0.6331,-0.3618, // pusat kiri bawah
    -0.6425,-0.3735, // kiri bawah bawah

    // segitiga bawah
    -0.027,-0.126, // pusat
    -0.6425,-0.3735, // kiri bawah bawah
    0.3734,-0.3486, // kanan bawah bawah

    // penyiku bawah kanan bawah
    -0.027,-0.126, // pusat
    0.3734,-0.3486, // kanan bawah bawah
    0.3663,-0.3307, // pusat kanan bawah

    // penyiku bawah kanan atas
    -0.027,-0.126, // pusat
    0.3663,-0.3307, // pusat kanan bawah
    0.3835,-0.323, // kanan bawah atas

    // segitiga kanan
    -0.027,-0.126, // pusat
    0.3835,-0.323, // kanan bawah atas
    0.203,0.0177, // kanan atas bawah

    // penyiku atas kanan bawah
    -0.027,-0.126, // pusat
    0.203,0.0177, // kanan atas bawah
    0.1923,0.0168, // pusat kanan atas

    // penyiku atas kanan atas
    -0.027,-0.126, // pusat
    0.1923,0.0168, // pusat kanan atas
    0.1896,0.026, // kanan atas atas
]

let l2_alas_bevel_kiri_atas = make_bevel(360, -0.313, 0.0076, 0.00810246875958, 0)
let l2_alas_bevel_kiri_bawah = make_bevel(360, -0.63, -0.36, 0.0148, 0)
let l2_alas_bevel_kanan_atas = make_bevel(360, 0.3663, -0.3307, 0.0192566871502, 0)
let l2_alas_bevel_kanan_bawah = make_bevel(360, 0.1923, 0.014, 0.0107377837564, 0)

let l2_shade = [
    -0.6425,-0.3735, // kiri atas
    0.3734,-0.3486, // kanan atas
    -0.626,-0.3936, // kiri bawah
    -0.626,-0.3936, // kiri bawah
    0.3734,-0.3486, // kanan atas
    0.3483,-0.368,
]

let l2_frame = [
    //segitiga kiri
    0.405,0.193, // pusat
    0.327,0.425, // kiri atas
    0.2012,0.021, // kiri bawah

    //segitiga bawah
    0.405,0.193, // pusat
    0.2012,0.021, // kiri bawah
    0.395,-0.348, // kanan bawah kiri

    //penyiku bawah bawah
    0.405,0.193, // pusat
    0.395,-0.348, // kanan bawah kiri
    0.4033,-0.3406, // pusat bawah

    //penyiku bawah atas
    0.405,0.193, // pusat
    0.4033,-0.3406, // pusat bawah
    0.4096,-0.353, // kanan bawah kanan

    //segitiga kanan
    0.405,0.193, // pusat
    0.4096,-0.353, // kanan bawah kanan
    0.6878,0.452, // kanan atas kanan

    //penyiku atas bawah
    0.405,0.193, // pusat
    0.6878,0.452, // kanan atas kanan
    0.6674,0.4543, // pusat atas

    //penyiku atas atas
    0.405,0.193, // pusat
    0.6674,0.4543, // pusat atas
    0.6704,0.4724, // kanan atas kiri

    //segitiga atas
    0.405,0.193, // pusat
    0.6704,0.4724, // kanan atas kiri
    0.327,0.425, // kiri atas
]

let l2_frame_bevel_atas = make_bevel(360, 0.6674, 0.4543, 0.0183469343488, 0)
let l2_frame_bevel_bawah = make_bevel(360, 0.4033, -0.3406, 0.0111198021565, 0)

let l2_layar = [
    0.323,0.399, //kiri atas
    0.652,0.417, //kanan atas
    0.2092,0.0357, //kiri bawah
    0.2092,0.0357, //kiri bawah
    0.652,0.417, //kanan atas
    0.4163,-0.273, //kanan bawah
]

let l2_keyboard = [
    -0.0965,0.013, //kiri atas
    0.162,0.019, //kanan atas
    -0.193,-0.33, //kiri bawah
    -0.193,-0.33, //kiri bawah
    0.162,0.019, //kanan atas
    0.297,-0.322, //kanan bawah
]

let l2_mousepad = [
    // penyiku atas kiri bawah
    -0.2836,-0.12, //pusat
    -0.3497,-0.0565, //pusat kiri atas
    -0.361,-0.0512, //kiri atas bawah

    //segitiga kiri
    -0.2836,-0.12, //pusat
    -0.361,-0.0512, //kiri atas bawah
    -0.4849,-0.1912, //kiri bawah atas

    //penyiku bawah kiri atas
    -0.2836,-0.12, //pusat
    -0.4849,-0.1912, //kiri bawah atas
    -0.4752,-0.1921, //pusat kiri bawah

    //penyiku bawah kiri bawah
    -0.2836,-0.12, //pusat
    -0.4752,-0.1921, //pusat kiri bawah
    -0.4778,-0.2017, //kiri bawah bawah

    //segitiga bawah
    -0.2836,-0.12, //pusat
    -0.4778,-0.2017, //kiri bawah bawah
    -0.1795,-0.193, //kanan bawah bawah

    //penyiku bawah kanan bawah
    -0.2836,-0.12, //pusat
    -0.1795,-0.193, //kanan bawah bawah
    -0.1772,-0.1805, //pusat kanan bawah

    //penyiku bawah kanan atas
    -0.2836,-0.12, //pusat
    -0.1772,-0.1805, //pusat kanan bawah
    -0.1622,-0.1819, //kanan bawah atas

    //segitiga kanan
    -0.2836,-0.12, //pusat
    -0.1622,-0.1819, //kanan bawah atas
    -0.1207,-0.0496, //kanan atas bawah

    //penyiku atas kanan bawah
    -0.2836,-0.12, //pusat
    -0.1207,-0.0496, //kanan atas bawah
    -0.13,-0.0466, //pusat kanan atas

    //penyiku atas kanan atas
    -0.2836,-0.12, //pusat
    -0.13,-0.0466, //pusat kanan atas
    -0.1275,-0.04045, //kanan atas atas

    //segitiga atas
    -0.2836,-0.12, //pusat
    -0.1275,-0.04045, //kanan atas atas
    -0.3426,-0.0468, //kiri atas atas

    //penyiku atas kiri atas
    -0.2836,-0.12, //pusat
    -0.3426,-0.0468, //kiri atas atas
    -0.3497,-0.0565, //pusat kiri atas

]

let l2_mousepad_bevel_atas_kiri = make_bevel(360, -0.3497, -0.0565, 0.0120208152802, 0)
let l2_mousepad_bevel_atas_kanan = make_bevel(360, -0.13, -0.0466, 0.00663871222452, 0)
let l2_mousepad_bevel_bawah_kiri = make_bevel(360, -0.474, -0.1921, 0.00974166310237, 0)
let l2_mousepad_bevel_bawah_kanan = make_bevel(360, -0.1772, -0.1805, 0.0127098387087, 0)


let l2_keycaps = [
    // arrow right
    -0.1742,-0.287,
    -0.1012,-0.287,
    -0.1842,-0.3234,
    -0.1842,-0.3234,
    -0.1012,-0.287,
    -0.1081,-0.3234,

    // arrow down
    -0.1651,-0.2528,
    -0.1318,-0.2528,
    -0.1748,-0.2808,
    -0.1748,-0.2808,
    -0.1318,-0.2528,
    -0.1387,-0.2808,

    // arrow up
    -0.1234,-0.2525,
    -0.0937,-0.2525,
    -0.1322,-0.2808,
    -0.1322,-0.2808,
    -0.0937,-0.2525,
    -0.1006,-0.2808,

    // arrow left
    -0.1547,-0.2174,
    -0.0888,-0.2174,
    -0.1638,-0.245,
    -0.1638,-0.245,
    -0.0888,-0.2174,
    -0.0948,-0.245,

    // level 1
    -0.0877,0.012,
    -0.0499,0.012,
    -0.153,-0.212,
    -0.153,-0.212,
    -0.0499,0.012,
    -0.0888,-0.212,

    // shift
    -0.0826,-0.24,
    -0.0148,-0.24,
    -0.094,-0.3235,
    -0.094,-0.3235,
    -0.0148,-0.24,
    -0.0179,-0.3235,

    // level 2
    -0.0444,0.012,
    -0.0053,0.012,
    -0.082,-0.236,
    -0.082,-0.236,
    -0.0053,0.012,
    -0.0152,-0.236,

    // enter
    -0.008,-0.254,
    0.0655,-0.254,
    -0.009,-0.323,
    -0.009,-0.323,
    0.0655,-0.254,
    0.0686,-0.323,

    // level 3
    0.001,0.0132,
    0.0424,0.0132,
    -0.0075,-0.2495,
    -0.0075,-0.2495,
    0.0424,0.0132,
    0.0632,-0.2495,

    // \
    0.0747,-0.283,
    0.1497,-0.283,
    0.078,-0.32,
    0.078,-0.32,
    0.1497,-0.283,
    0.1588,-0.32,

    // ]
    0.0705,-0.2457,
    0.1428,-0.2457,
    0.074,-0.2746,
    0.074,-0.2746,
    0.1428,-0.2457,
    0.1515,-0.2746,

    // level 4
    0.0478,0.0147,
    0.0892,0.0147,
    0.0683,-0.24,
    0.0683,-0.24,
    0.0892,0.0147,
    0.1424,-0.24,

    // delete
    0.1558,-0.264,
    0.228,-0.264,
    0.1706,-0.32,
    0.1706,-0.32,
    0.228,-0.264,
    0.249,-0.32,

    // level 5
    0.0928,0.0145,
    0.1346,0.0145,
    0.154,-0.254,
    0.154,-0.254,
    0.1346,0.0145,
    0.2257,-0.254,

    // power
    0.2427,-0.2786,
    0.2726,-0.2786,
    0.2585,-0.32,
    0.2585,-0.32,
    0.2726,-0.2786,
    0.2905,-0.32,

    // level 6
    0.1398,0.015,
    0.1578,0.015,
    0.2413,-0.275,
    0.2413,-0.275,
    0.1578,0.015,
    0.2714,-0.275,

]

let l2_gap_layar = [
    0.2006,0.006,
    0.209,0.006,
    0.3475,-0.2728,
    0.3475,-0.2728,
    0.209,0.006,
    0.358,-0.2728,
]