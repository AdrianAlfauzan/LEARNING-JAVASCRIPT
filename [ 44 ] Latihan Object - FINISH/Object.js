// Membuat Object angkot

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        var hasil = console.log("Uang Kas : " + this.kas);
        return this.penumpang;
      }
    }
  };
}
// this.kas += bayar;
// console.log("Uang Kas : " + bayar);
// return penumpang;
var angkot1 = new Angkot("Adrian", ["cicahem", "cibiru"], [], 0);
var angkot2 = new Angkot("Adrian", ["cicahem", "cibiru"], [], 0);

// output yg sudah jadi
angkot1.penumpangNaik("adrian");
angkot1.penumpangNaik("adrian");
console.log("Penumpang : " + angkot1.penumpang);
angkot1.penumpangTurun("adrian", 20000);
angkot1.penumpangTurun("adrian", 20000);
angkot1.kas;
console.log("Total Uang kas Tersimpan : " + angkot1.kas);
