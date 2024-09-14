// Topics:
// 1. Class declaration
// 2. properties & method
// 3. constructor
// 4. OOP`s concept: Intheritace (Pewarisan)
// 5. OOP`s concept: Abstraction (Abstraksi)
// 6. OOP`s concept: Encapsulation (Enkapsilasi)
//    6.1 Accessors (Getter & Setter)
//    6.2 Members visibility / Access modifier
// 7. OOP`s concept: Polymorphism (Polimorfise)

class Rekening {
  //   protected nama: string;
  //   private umur: number;
  //   private saldo: number;
  nama: string;
  umur: number;
  saldo: number;

  constructor(nama: string, umur: number, saldo?: number) {
    this.nama = nama;
    this.umur = umur;

    this.saldo = saldo ?? 0;
  }

  set setNama(newName: string) {
    this.nama = newName;
  }

  get getName(): string {
    return this.nama;
  }

  bukaRekening(setorAwal: number) {}

  deposit(jumlahDeposit: number): void {
    this.saldo = this.saldo + jumlahDeposit;
  }

  withdraw(jumlahPenarikan: number): void {
    this.saldo = this.saldo - jumlahPenarikan;
  }
}

class RekeningTabungan extends Rekening {
  bunga: number;

  constructor(nama: string, umur: number, saldo: number, bunga: number) {
    super(nama, umur, saldo);
    this.bunga = bunga;
  }

  bukaRekening(setorAwal: number) {
    if (setorAwal < 100_000) {
      throw new Error("Jumlah setoran minimal Rp.100.000");
    }
    this.saldo = setorAwal;
  }
}

interface IBunga {
  hitungBunga: (bungaSaatIni: number) => void;
}

class RekeningInvestasi extends Rekening implements IBunga {
  hitungBunga(bungaSaatIni: number) {
    this.saldo = this.saldo + this.saldo * bungaSaatIni;
  }

  bukaRekening(setorAwal: number) {
    if (setorAwal < 100_000) {
      throw new Error("Jumlah setoran minimal Rp.500.000");
    }
    this.saldo = setorAwal;
  }
}

let rekeningGilbert = new RekeningTabungan("Gilbert", 20, 10_000_000, 0.1);
rekeningGilbert.bukaRekening(10);
let rekeningSkilvul = new Rekening("Skilvul", 15, 10_000_000);

console.log(rekeningSkilvul.nama);
