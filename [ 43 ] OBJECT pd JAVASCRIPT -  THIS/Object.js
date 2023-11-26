// This
// var a = 10;
// console.log(this.a);

// Membuat object

// cara 1 - This Menggunakan Function Declaration
// function hallo() {
//   console.log("halo");
// }
// this.hallo();
// thisnya mengembalikkan object global

// cara 2 - This Menggunakan Object Literal
// var obj = {
//   a: 10,
//   nama: "adrian",
// };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();
// thisnya akan mengembalikkan objectnya berserta isinya

// cara 3 - Menggunakan Constructor Function (wajib ada keyword new!)
function Hallo() {
  console.log(this);
  console.log("halo");
}
var obj1 = new Hallo();
var obj2 = new Hallo();
// this nya mengembalikkan object yang baru dibuat
