describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  //   function sayHello(employee: Employee): void {
  //     console.info(`Hello ${employee.name}`);
  //   }

  //   code type cast true
  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  //   code type cast false
  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  it("should support", () => {
    let employee: Employee = new Employee("Gilbert");
    console.info(employee);

    employee = new Manager("Budi");
    console.info(employee);

    employee = new VicePresident("Gilbert");
    console.info(employee);
  });

  it("should support method parameter polymorphism true", () => {
    sayHello(new Employee("Gilbert"));
    sayHello(new Manager("Aldi"));
    sayHello(new VicePresident("Yusdin"));
  });

  it("should support method parameter polymorphism false", () => {
    sayHelloWrong(new Employee("Gilbert"));
    sayHelloWrong(new Manager("Aldi"));
    sayHelloWrong(new VicePresident("Yusdin"));
  });
});
