// any
// let person: any = { name: "Gilbert" };
// person();

// unknown
// let nilaiUjian: unknown;
// nilaiUjian = 100;

// console.log(typeof nilaiUjian);

// let nilaiAkhir;
// if (typeof nilaiUjian === "number") {
//   nilaiAkhir = nilaiUjian + 100;
//   console.log("nilai akhir:", nilaiAkhir);
// }

// boolean
// let benarAtauSalah: boolean = true;
// let benar: true = true;
// let salah = false;

// benar = false;

// number & bigint
// let harga1: number = 10000;
// let harga2: number = 20_000_000;

// let angkaKecil: number = 100n;
// let angkaBesar: bigint = 100n;

// string
const userName: string = "Gilbert";
console.log(userName.charAt(0));
console.log(userName.toUpperCase());

// symbol
let a = Symbol("a");
let b: symbol = Symbol("a");
console.log(a === b);

// object
// type Person = {
//   name: string;
//   umur: number;
//   partner?: string;
// };
// interface Person {
//   name: string;
//   umur: number;
//   partner?: string;
// }

// let person: Person = {
//   name: "Bambang",
//   umur: 20,
// };

// let daftarKursiBus: {
//   [nomorKursi: string]: string;
// } = {
//   "1A": "Bambang",
//   "1B": "Tono",
//   "3B": "Kenzo",
// };
