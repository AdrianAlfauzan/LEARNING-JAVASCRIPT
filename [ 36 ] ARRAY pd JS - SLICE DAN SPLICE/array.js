// 6. Splice
// cara - 1 --> menambahkan array baru
// var arr = ["adrian", "musa", "alfauzan"];
// arr.splice(2, 0, "Ronaldo");
// console.log(arr.join('-'))

// cara - 2 --> menghapus beberapa array
// Ini artinya kita menghapus mulai dari index 1 sampai index 2
// var arr = ["adrian", "musa", "alfauzan"];
// arr.splice(1, 2);
// console.log(arr.join("-"));

// cara - 3 --> menghapus beberapa array lalu menambahkan dengan yang baru
// Ini artinya kita menghapus mulai dari index 1 sampai index 2
// lalu menambahkan array baru
// var arr = ["adrian", "musa", "alfauzan"];
// arr.splice(1, 2, "Kakang", "Ramos");
// console.log(arr.join("-"));

// 7. Slice
var arr = ["adrian", "musa", "alfauzan", "Kakang", "Ramos"];
var arr2 = arr.slice(1, 3);
console.log(arr2.join("-")); // Array Baru
console.log(arr.join("-")); // Array Lama
