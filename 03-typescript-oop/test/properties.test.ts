describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string;
    // kode: properties default value
    // name: string = "Guest"
    // kode: properties default value
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }

    // kode: properties default value
    // constructor(id: number) {
    //   this.id = id;
    // }
    // kode: properties default value
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "Gilbert");
    // kode: properties default value
    // const customer = new Customer(1);
    // kode: properties default value
    customer.age = 20;

    console.info(customer.id);
    console.info(customer.name);
    console.info(customer.age);
    console.info(customer);
  });

  it("should can have methods", () => {
    const customer = new Customer(1, "Gilbert");
    customer.sayHello("Budi");
  });
});
