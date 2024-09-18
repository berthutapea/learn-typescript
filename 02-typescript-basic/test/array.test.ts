describe("Array", function () {
  it("should sama wiyh javascript", function () {
    const names: string[] = ["gilbert", "budi", "joko"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "Main Game";
  });

  it("should support tuple", function () {
    const person: readonly [string, string, number] = [
      "Gilbert",
      "Hutapea",
      22,
    ];
    console.info(person);

    console.info(person);
    console.info(person[0]);
    console.info(person[1]);

    // person[0] = "Budi";
  });
});
