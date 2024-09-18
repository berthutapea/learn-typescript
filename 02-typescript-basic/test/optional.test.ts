describe("Optional parameter", function () {
  it("should suuport null adn undefined", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    }

    sayHello("Gilbert");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
