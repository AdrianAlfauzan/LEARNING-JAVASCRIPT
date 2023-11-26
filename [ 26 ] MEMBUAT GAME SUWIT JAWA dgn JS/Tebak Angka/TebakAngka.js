

// bisa memakai cara ini untuk Me-random angka :
// var numberOfNumbers = 10;
// varNomor awal = 1;
// var rnd = Math.floor((Math.random() * numberOfNumbers) + startingNumber);

// untuk mengabaikan desimal dengan menggunakan Math.floor().

// Cara singkatnya :
var angka = Math.floor(Math.random() * 10) + 1;
var tanya = true;
var kesempatan = 3; // Menginisialisasi jumlah kesempatan

while (tanya && kesempatan > 0) {
    var tebakangka = prompt("Silahkan tebak angka 1 - 10 (Sisa Kesempatan: " + kesempatan + ")");

    if (tebakangka === null) {
        alert("Anda membatalkan permainan.");
        break; // Keluar dari permainan jika pengguna membatalkan.
    } else {
        tebakangka = parseInt(tebakangka);

        if (tebakangka === angka) {
            alert("Kamu Benar!");
            tanya = confirm("Ingin melanjutkan permainan?");
        } else if (tebakangka > angka) {
            alert("Tebakan terlalu tinggi! Coba lagi. (Sisa Kesempatan: " + (kesempatan - 1) + ")");
        } else {
            alert("Tebakan terlalu rendah! Coba lagi. (Sisa Kesempatan: " + (kesempatan - 1) + ")");
        }

        kesempatan--;
    }
}

if (kesempatan === 0) {
    alert("Anda telah menggunakan semua kesempatan. \nAngka yang dicari adalah " + angka);
}

alert("Terima Kasih telah bermain!");


