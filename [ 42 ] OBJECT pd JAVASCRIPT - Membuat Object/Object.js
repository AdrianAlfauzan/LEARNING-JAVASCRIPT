// Membuat object

// Menggunakan Object literal
var mhs1 = {
  nama: "Adrian",
  nrp: "3411221020",
  email: "stalkerxstalk@gmail.com",
  jurusan: "Teknik Informatika",
};

var mhs2 = {
  nama: "Musa",
  nrp: "3411221050",
  email: "stalkerxstalk@gmail.com",
  jurusan: "Teknik Informasi",
};
// Menggunakan Object literal

// Menggunakan Function Declaration --> ini akan lebih ringkas
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}
var mhs3 = buatObjectMahasiswa("Ronaldo", "3411221000", "ronaldo@gmail.com", "Teknik Sepakbola");
var mhs3 = buatObjectMahasiswa("Pessi", "34003400", "pessiun@gmail.com", "Teknik Pessi");
// Menggunakan Function Declaration

// Menggunakan Constructor --> KHUSUS UNTUK MEMBUAT OBJECT
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("Kaka", "12345678", "kaka@gmail.com", "Teknik Pelatih");
// Menggunakan Constructor --> KHUSUS UNTUK MEMBUAT OBJECT
