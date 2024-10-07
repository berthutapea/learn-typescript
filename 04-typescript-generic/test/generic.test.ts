describe("Generic", () => {
  class GenericData<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }
  }

  it("should suppport multiple data type", () => {
    const dataNumber = new GenericData<number>(123);
    // dataNumber.value = "Gilbert"; //error
    // dataNumber.value = true; //error
    expect(dataNumber.value).toBe(123);

    const dataString = new GenericData<string>("Gilbert");
    // dataString.value = 123 //error
    // dataString.value = true //errorr
    const uper = dataString.value.toUpperCase();
    expect(uper).toBe("GILBERT");
  });
});
