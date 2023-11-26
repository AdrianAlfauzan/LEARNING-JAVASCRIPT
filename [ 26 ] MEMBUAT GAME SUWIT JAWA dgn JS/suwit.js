var tanya = true;
while (tanya) {
    // Menangkap pilihan player

    var p = prompt("Pilih : gajah, semut, orang");

    // Menangkap pilihan computer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = "gajah";
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }
    
    var hasil = "";
    // Menentukan Rules
    if (p == comp) {
        hasil = "SERI!";
    } else if (p == "gajah") {
        // if (comp == "orang") {
        //     hasil = "MENANG!"
        // }
        // else {
        //     hasil = "KALAH";
        // }

        // BISA MEMAKAI OPERATOR TERNARY, JIKA HANYA MENGGUNAKAN IF DAN ELSE SAJA
        hasil = (comp == "orang") ? "MENANG!" : "KALAH";
        // Jika TRUE maka --> MENANG!
        // Jika FALSE maka --> KALAH

    } else if (p == "orang") {
        if (comp == "gajah") {
            hasil = "KALAH"
        }
        else {
            hasil = "MENANG!";
        }
    } else if (p == "semut") {
        if (comp == "orang") {
            hasil = "KALAH";
        } else {
            hasil = "MENANG";
        }
    } else {
        hasil = "Masukkan pilihan dengan Benar!";
    }

    // Tampilkan hasilnya
    alert("Anda memilih : " + p + " Dan komputer memilih : " + comp + "\nMaka hasilnya : Anda " + hasil);
    tanya = confirm("Lagi?");
}

alert("Terima Kasih telah bermain ^_^")