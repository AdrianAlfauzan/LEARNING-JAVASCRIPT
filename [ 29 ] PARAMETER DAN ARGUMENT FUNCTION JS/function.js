// function tambah(a, b) {
//     return a + b;
// }

// console.log(tambah(2, 3));

function tambah(a, b) {
    return a + b;
}
function kali(a, b) {
    return a * b;
}

var hasil = kali(tambah(1, 2), tambah(3, 4))
console.log(hasil);
// 1 + 2 = 3
// 3 + 4 = 7
// 3 * 7 = 21
// Hasilnya 21

// Jumlahkan dulu yang tambah, lalu di kali

//---------------Arguments-------------------//
// function tambah() {
//     var hasil = 0
//     for (var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = tambah(1, 2, 3, 4, 5);
// console.log(coba)