describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    console.info(`Hello ${employee.name}`);
  }

  it("should support", () => {
    let employee: Employee = new Employee("Gilbert");
    console.info(employee);

    employee = new Manager("Budi");
    console.info(employee);

    employee = new VicePresident("Gilbert");
    console.info(employee);
  });

  it("should support method parameter polymorphism ", () => {
    sayHello(new Employee("Gilbert"));
    sayHello(new Manager("Aldi"));
    sayHello(new VicePresident("Yusdin"));
  });
});
