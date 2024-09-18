describe("Any", function () {
  it("should support ini typescript", function () {
    const person: any = {
      id: 1,
      name: "Gilbert Hutapea",
      age: 22,
    };

    person.age = 23;
    person.address = "Indonesia";

    console.info(person);
  });
});
