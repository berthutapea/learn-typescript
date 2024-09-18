import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "212121",
      npwp: "23232323",
    };

    seller.name = "Toko Gilbert";

    console.info(seller);
  });

  it("should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Gilbert", "Hutapea", "Ganteng"];
    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Gilbert",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Gilbert");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Gilbert",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Hutapea",
      division: "IT",
      numberOfEmployeess: 10,
    };

    console.info(manager);
  });

  it("should support in interface", function () {
    const person: Person = {
      name: "Gilbert",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Budi"));
  });

  it("should support intersection types", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Gilbert",
    };

    console.info(domain);
  });

  it("should support type assetions", function () {
    const person: any = {
      name: "Gilbert",
      age: 22,
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});
