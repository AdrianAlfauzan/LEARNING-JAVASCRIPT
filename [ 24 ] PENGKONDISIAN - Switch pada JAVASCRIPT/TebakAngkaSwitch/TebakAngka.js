// bisa memakai cara ini untuk Me-random angka :
// var numberOfNumbers = 10;
// varNomor awal = 1;
// var rnd = Math.floor((Math.random() * numberOfNumbers) + startingNumber);

// untuk mengabaikan desimal dengan menggunakan Math.floor().

var AngkaRandom = Math.floor(Math.random() * 10) + 1;
var kesempatan = 3;

while (kesempatan > 0) {
    var Angka = parseInt(prompt("Masukkan Angka 1 - 10 (Sisa Kesempatan: " + kesempatan + ")"));

    switch (true) {
        case Angka < AngkaRandom:
            alert("Angka terlalu rendah (Sisa Kesempatan: " + (kesempatan - 1) + ")");
            break;
        case Angka > AngkaRandom:
            alert("Angka terlalu tinggi (Sisa Kesempatan: " + (kesempatan - 1) + ")");
            break;
        default:
            alert("Kamu Benar! Jawabannya adalah " + AngkaRandom);
            kesempatan = 0; // Berhenti setelah menebak dengan benar.
            break;
    }

    kesempatan--;
}

if (kesempatan === 0) {
    alert("Kamu telah kehabisan kesempatan. Angka yang dicari adalah " + AngkaRandom);
}
