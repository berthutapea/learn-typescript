describe("Union Type", function () {
  it("should support ini typescript", function () {
    let sample: number | string | boolean = "Gilbert";
    console.info(sample);
    sample = 100;

    console.info(sample);

    sample = true;
    console.info(sample);
  });

  it("should support typeof opreator", function () {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Gilbert")).toBe("GILBERT");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
