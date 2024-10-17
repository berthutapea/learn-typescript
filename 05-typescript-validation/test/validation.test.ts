import { z } from "zod";

describe("zod", () => {
  it("should support validation", async () => {
    const schema = z.string().min(3).max(100);

    const request = "Gilbert";
    const result = schema.parse(request);

    expect(result).toBe("Gilbert");
  });

  it("should support validate primitive data type", async () => {
    const usernameSchema = z.string().email();
    const isAdminSchema = z.boolean();
    const priceSchema = z.number().min(100).max(1000000);

    const username = usernameSchema.parse("gilbert@example.com");
    console.info(username);

    const isAdmin = isAdminSchema.parse(true);
    console.info(isAdmin);

    const price = priceSchema.parse(100);
    console.info(price);
  });

  it("should support data conversion", async () => {
    const usernameSchema = z.coerce.string().min(3).max(100);
    const isAdminSchema = z.coerce.boolean();
    const priceSchema = z.coerce.number().min(100).max(1000000);

    const username = usernameSchema.parse(1234);
    console.info(username);

    const isAdmin = isAdminSchema.parse("true");
    console.info(isAdmin);

    const price = priceSchema.parse("100");
    console.info(price);
  });
});
