var penumpang = ["adrian", undefined, "ronaldo"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jIKA ANGKOT KOSONG
  if (penumpang.length == 0) {
    // TAMBAH PENUMPANG DI AWAL ARRAY
    penumpang.push(namaPenumpang);
    // KEMBALIKAN ISI ARRAY & KELUAR DARI FUNCTION
    return penumpang;
  }
  // ELSE
  else {
    // TELUSURI SELURUH KURSI DARI AWAL
    for (var i = 0; i < penumpang.length; i++) {
      // JIKA ADA KURSI KOSONG
      if (penumpang[i] == undefined) {
        // TAMBAH PENUMPANG DI KURSI TERSEBUT
        penumpang[i] = namaPenumpang;
        // KEMBALIKAN ISI ARRAY & KELUAR DARI FUNCTION
        return penumpang;
      }
      // JIKA SUDAH ADA NAMA YANG SAMA
      else if (penumpang[i] == namaPenumpang) {
        // TAMPILKAN PESAN KESALAHANNYA
        console.log(namaPenumpang + " Sudah ada di dalam angkot!");
        // KEMBALIKAN ISI ARRAY & KELUAR DARI FUNCTION
        return penumpang;
      }

      // JIKA SELURUH KURSI TERISI
      else if (i == penumpang.length - 1) {
        // TAMBAH PENUMPANG DI AKHIR ARRAY
        penumpang.push(namaPenumpang);
        // KEMBALIKAN ISI ARRAY & KELUAR DARI FUNCTION
        return penumpang;
      }
    }
  }
};
