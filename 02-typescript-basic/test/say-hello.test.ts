import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello gilbert", function () {
    expect(sayHello("gilbert")).toBe("Hello gilbert");
  });
});
