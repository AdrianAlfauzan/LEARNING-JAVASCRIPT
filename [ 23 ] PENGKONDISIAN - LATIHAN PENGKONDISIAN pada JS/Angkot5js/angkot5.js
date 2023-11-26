var jumlahangkot = 10;
for (var noangkot = 1; noangkot <= jumlahangkot; noangkot++){
    if (noangkot <= 6 && noangkot !== 5) {
        // jika no angkot kurang dari sama dengan 6 dan
        // no angkot tidak sama dengan 5
        // maka angka 5 akan menjadi false
        console.log("Angkot No." + noangkot + " Beroperasi dengan Baik");
    } else if (noangkot == 8 || noangkot === 5) {
        // || --> atau
        console.log("Angkot No." + noangkot + " Sedang Lembur");
    } else if (noangkot == 10) {
        console.log("Angkot No." + noangkot + " Sedang Lembur");
    } 
    else {
        console.log("Angkot No." + noangkot + " Beroperasi Tidak Baik");
    }
} 
