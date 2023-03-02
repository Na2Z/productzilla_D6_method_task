console.log("Method");
//cara 1
function hello(nama, asal = "Indonesia") {
  console.log("Hello nama saya " + nama + "saya dari " + asal + "salam kenal.");
}
//cara 2
const greatings = function (name) {
  console.log("Hallo nama saya " + name);
};
//cara 3
let sapa = (nama) => {
  console.log("halo saya " + nama);
};

hello("Ari", "Bandung");
hello("bagas", "jakarta");
greatings("gunawan");
sapa("joko");

console.log("Function");

function Hasilhitung(x, y, z) {
  const hasil = (x * y) / z;
  console.log(hasil);
  return hasil;
}
let x = 10;
let y = 15;
let z = 5;
Hasilhitung(x, y, z);
