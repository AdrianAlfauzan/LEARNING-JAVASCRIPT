// Global scope / Window scope
// var a = 1;

// function tes() {
//     var b = 2;
//     console.log(a);
//     // di dalam function kita dapat mengakses variabel global
//     // atau variabel yg ada di luar function.
// }
// tes();
// console.log(b);

// bagaimana jika ada variabel yang sama?
// var a = 1;
// function tes() {
//     // name conflict
//     var a = 2;
//     console.log(window.a);
//     // Ini untuk menjalan variabel di luar function
// }
// tes();


//-----------------------------
// var a = 1;
// function tes(a) {
//     a = 1000;
//     console.log(a);
// }
// tes(a);
// console.log(a);

// atau 

var a = 1;
function tes(a) {
    console.log(a);
}
tes(9999);
console.log(a);

