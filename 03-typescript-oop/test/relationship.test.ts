describe("Relationship", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  it("should support relationship", () => {
    const person: Person = new Customer("Gilbert");
    console.info(person.name);
  });
});
