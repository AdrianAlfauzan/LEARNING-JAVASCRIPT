// [+] Manipulasi array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr[1]);

// Array kosong ;
// var arr = [];
// arr[0] = "adrian";
// arr[1] = "azka";
// arr[2] = "tata";
// console.log(arr[1]);

// 2. Menghapus isi Array;
// Ini cara manual
// var arr = ["adrian", "musa", "alfauzan"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array;
// var arr = ["adrian", "musa", "alfauzan","informatika","informasi"];
// for (var i = 0; i < arr.length; i++){
//     console.log("Nama ke "+ i +" "+ arr[i])
// }

// [+] Method pada array
// 1. join --> dia menggabungkan seluruh isi Array dan mengubahnya menjadi sebuah string
// var arr = ["adrian", "musa", "alfauzan"];
// console.log(arr.join("-"));
// karena dia method, kita harus gunakan kurung buka!
// jika tidak mau pakai (,) kita bisa ubah

// 2. Push --> Menambahkan elemen baru di akhir
// var arr = ["adrian", "musa", "alfauzan"];
// arr.push("maulana");
// console.log(arr.join("-"));
// opsi --> bisa lebih ==> arr.push("maulana","azka","ronaldo");

// 3. Pop --> Menghapus elemen di akhir
// var arr = ["adrian", "musa", "alfauzan"];
// arr.pop()
// console.log(arr.join("-"));

// 4. unshift --> Menambahkan elemen baru di awal
var arr = ["adrian", "musa", "alfauzan"];
arr.unshift("Muhammad");
console.log(arr.join("-"));

// 5. shift --> Menghapus elemen di awal
var arr = ["adrian", "musa", "alfauzan"];
arr.shift();
console.log(arr.join("-"));
