// function tampilAngka(n) {
//     console.log("cetak - "+n);
//     return tampilAngka(n-1); // akan dikurangi 1
// }

// tampilAngka(10);

// Rekursif dgn BASE CASE
// function cetakAngka(n){
//     if ( n === 0 ){
//         return;
//         //fungsinya tidak diberi nilai apapun,karena untuk memberhentikannya.
//         // INI ADALAH BASE CASE!
//     }

//     console.log(n);
//     cetakAngka(n-1);
// }
// cetakAngka(10);

// Rekursif dgn KLASIK
function faktorial(n){
    if (n === 0) return 1;
    return n * faktorial(n-1);
}
console.log(faktorial(5)); // Akan mengembalikan 120
