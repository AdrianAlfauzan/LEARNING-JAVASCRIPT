// alert("Selamat datang");
// var lagi = true;

// while (lagi === true) {
//     var nama = prompt("Masukkan Nama");
//     alert("Halo" + nama)

//     lagi = confirm("coba lagi ?");
// }
// alert("Thank you!");

var lagi = true;
while (lagi != false) {
  alert("BERJALAN");
  lagi = prompt("Ketik berhenti!");
  switch (lagi) {
    case "berhenti":
      alert("telah stop");
      break;
    default:
      alert("Wooopss! ngawur!!!");
  }
  if (lagi != true) {
    break;
  }
}
