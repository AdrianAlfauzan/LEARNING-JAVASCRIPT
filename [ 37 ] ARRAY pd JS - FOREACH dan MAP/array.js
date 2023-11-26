// 8. foreach
// cara - 1 --> tidak pakai index
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// angka.forEach(function (e) {
//   console.log(e);
// });

// cara - 2 --> pakai index
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["adrian", "musa", "alfauzan"];
// nama.forEach(function (e, i) {
//   console.log("mahasiswa ke - " + i + " adalah : " + e);
// });

// 9. Map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join("-"));

// 10. sort --> Mengurutkan array
// cara - 1
// var angka = [1, 2, 10, 5, 20, 6, 8, 4];
// console.log("angka awal : " + angka.join("-"));
// angka.sort();
// console.log("hasil : " + angka.join("-"));

// cara 2 --> HATI - HATI JIKA KETEMU SEPERTI INI
var angka = [5, 6, 10, 2, 8, 50, 0, 1, 3, 100, 7, 4];
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join("-"));
