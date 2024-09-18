describe("If Statement", function () {
  it("should support in typescript", function () {
    const examValue = 90;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("No Bad");
    } else {
      console.info("Try Again");
    }
  });

  it("should support ternary operator", function () {
    const value = 80;
    const say = value >= 75 ? "Congratulation" : "Try Again";
    console.info(say);
  });

  it("should support switch statement", function () {
    function sayHello(name: string): string {
      switch (name) {
        case "Gilbert":
          return "Hi Gilbert";
        case "Budi":
          return "Hi Budi";
        default:
          return "Hello";
      }
    }

    console.info("Gilbert");
    console.info("Budi");
    console.info("Joko");
  });
});
