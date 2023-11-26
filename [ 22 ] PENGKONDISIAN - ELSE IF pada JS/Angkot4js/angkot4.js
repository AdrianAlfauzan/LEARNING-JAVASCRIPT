var jumlahangkot = 10;
for (var noangkot = 1; noangkot <= jumlahangkot; noangkot++){
    if (noangkot <= 6) {
        console.log("Angkot No." + noangkot + " Beroperasi dengan Baik");
    } else if (noangkot == 8) {
        console.log("Angkot No." + noangkot + " Sedang Lembur");
    } else if (noangkot == 10) {
        console.log("Angkot No." + noangkot + " Sedang Lembur");
    } 
    else {
        console.log("Angkot No." + noangkot + " Beroperasi Tidak Baik");
    }
} 
