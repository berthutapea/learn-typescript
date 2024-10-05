describe("no generic", () => {
  class Data {
    value: any;
    constructor(value: any) {
      this.value = value;
    }
  }

  it("should accept all value", async () => {
    const data = new Data("Gilbert");
    // data.value = 100;//sample 

    console.info(data.value.toUpperCase());
  });
});
