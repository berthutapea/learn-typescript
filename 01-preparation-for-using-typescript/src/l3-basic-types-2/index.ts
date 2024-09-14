// Array
let bilanganDibawah5: number[] = [1, 2, 3, 4, 5];

// tuples
let karyawan: [string, string, number] = ["kenzo", "programmer", 20];

// null & undefined
type Person = {
  name: string;
  age: number;
  partner: string | null;
};

let seorangSingle: Person = {
  name: "singel",
  age: 20,
  partner: null,
};

// void & never
function log(message: string): void {
  console.log(message);
}
function error(message: string): never {
  throw new Error(message);
}
