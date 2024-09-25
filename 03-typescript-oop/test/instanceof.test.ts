describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const budi = new Employee();
  const gilbert = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof budi);
    console.info(typeof gilbert);
  });

  it("should support instanceof", () => {
    expect(budi instanceof Employee).toBe(true);
    expect(budi instanceof Manager).toBe(false);

    expect(gilbert instanceof Employee).toBe(false);
    expect(gilbert instanceof Manager).toBe(true);
  });
});
