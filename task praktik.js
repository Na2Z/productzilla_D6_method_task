console.log("Task Praktik");

console.log("Nomor 1");
function perkenalan(nama, asal, suku) {
  console.log(
    "Hallo nama saya " +
      nama +
      " saya berasal dari " +
      asal +
      " dan saya termasuk dalam suku " +
      suku
  );
}

let kenalan = (nama, asal, suku) => {
  console.log(
    `kenalin, nama gw ${nama}, gw dari ${asal}, dan termasuk suku ${suku}`
  );
};

perkenalan("Shahnaz", "Purwokerto", "Javanesse");
kenalan("Shahnaz", "Purwokerto", "Javanesse");

console.log("Nomor 2");

let x = 10;
let y = 5;
let phi = 3.14;

function fx1(x) {
  const hasil = x ** 2;
  return hasil;
}
function fx2(x, y) {
  const hasil = x * 2 + y * 2;
  return hasil;
}
function fx3(x, y) {
  const hasil = (x * y) / 2;
  return hasil;
}
function fx4(x, y) {
  const hasil = x * y;
  return hasil;
}
function fx5(x) {
  const hasil = phi * 2 * x;
  return hasil;
}

console.log(fx1(x));
console.log(fx2(x, y));
console.log(fx3(x, y));
console.log(fx4(x, y));
console.log(fx5(phi, x));
