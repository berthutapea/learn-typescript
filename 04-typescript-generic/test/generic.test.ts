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

  it("should support optional generic type", async () => {
    const entry = new Entry(1, "Hello");
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("Hello");
  });

  class SimpleGeneric<T = string> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }

  it("should create simple generic", async () => {
    const simple = new SimpleGeneric<string>();
    simple.setValue("Gilbert");
    // simple.setValue(100)
    // simple.setValue(true)

    expect(simple.getValue()!.toUpperCase()).toBe("GILBERT");
  });

  interface Employee {
    id: string;
    name: string;
  }

  interface Manager extends Employee {
    totalEmployee: number;
  }

  interface VP extends Manager {
    totalManager: number;
  }

  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it("should support constraint", async () => {
    const data1 = new EmployeeData<Employee>({
      id: "100",
      name: "Gilbert",
    });
    const data2 = new EmployeeData<Manager>({
      id: "100",
      name: "Gilbert",
      totalEmployee: 100,
    });
    const data3 = new EmployeeData<VP>({
      id: "100",
      name: "Gilbert",
      totalEmployee: 100,
      totalManager: 10,
    });

    // const data4 = new EmployeeData<string>("Gilbert") //error
    // const data4 = new EmployeeData<number>(100) //error
  });

  it("should support array", async () => {
    const array = new Array<string>();
    array.push("Gilbert");
    array.push("Hutapea");

    expect(array[0]).toBe("Gilbert");
    expect(array[1]).toBe("Hutapea");
  });

  it("should support set", async () => {
    const set = new Set<string>();
    set.add("Gilbert");
    set.add("Hutapea");
    set.add("Gilbert");

    expect(set.size).toBe(2);
    expect(set.has("Gilbert")).toBe(true);
    expect(set.has("Hutapea")).toBe(true);
  });

  it("should support map", async () => {
    const map = new Map<string, number>();
    map.set("Gilbert", 100);
    map.set("Hutapea", 90);

    expect(map.get("Gilbert")).toBe(100);
    expect(map.get("Hutapea")).toBe(90);
  });

  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === "Gilbert") {
          resolve("Hello " + value);
        } else {
          reject("Not Found");
        }
      }, 1000);
    });
  }

  it("should support promise", async () => {
    const result = await fetchData("Gilbert");
    expect(result.toUpperCase()).toBe("HELLO GILBERT");

    try {
      await fetchData("Budi");
    } catch (e) {
      expect(e).toBe("Not Found");
    }
  });
});
