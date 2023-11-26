function jumlahVolumeDuaKubus(a, b) {
    var volumeA, volumeB, total;
    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}
// cara menjalankannya :
// argument
console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(10, 15));
// 8 --> a
// 3 --> b