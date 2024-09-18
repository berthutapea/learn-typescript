describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Gilbert",
    };

    console.info(person);

    person.id = "2";
    person.name = "Hutapea";

    console.info(person);
  });
});
