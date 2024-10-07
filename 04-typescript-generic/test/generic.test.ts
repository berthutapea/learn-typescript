describe("Generic", () => {
  class GenericData<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }

    get(): T {
      return this.value;
    }

    set(value: T) {
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

  function create<T>(value: T): T {
    return value;
  }

  it("should support function generic", async () => {
    const result: string = create<string>("Gilbert");
    expect(result).toBe("Gilbert");

    const result2: number = create<number>(123);
    expect(result2).toBe(123);
  });

  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }
  class Triple<K, V, T> {
    constructor(public first: K, public second: V, public third: T) {}
  }

  it("should suppor multiple generic type", async () => {
    const entry = new Entry<number, string>(1, "Hello");
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("Hello");

    const triple = new Triple<number, string, boolean>(1, "Hello", true);
    expect(triple.first).toBe(1);
    expect(triple.second).toBe("Hello");
    expect(triple.third).toBe(true);
  });
});
