// aliases type
// type Person = {
//   name: string;
//   age: number;
// };

// let bambang: Person = {
//   name: "Bambang",
//   age: 20,
// };

// union type
type Hewan = "mamalia" | "amfibi" | "unggas";
let ayam: Hewan = "unggas";

// intersection type
type Karyawan = {
  id: string;
  nama: string;
};
type KaryawanTetap = {
  email: string;
  jabatan: string;
};

type KaryawanYangTetap = Karyawan & KaryawanTetap;
let KaryawanTetap: KaryawanYangTetap = {
  id: "kt12",
  nama: "karyawan",
  email: "contoh@gmail.conm",
  jabatan: "junior",
};
