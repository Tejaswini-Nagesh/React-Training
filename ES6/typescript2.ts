interface Printable {
    print(): void;
  }
  
  class Circle implements Printable {
    constructor(private radius: number) {}
  
    print(): void {
      console.log(`Circle with radius ${this.radius}`);
    }
  }
  
  class Employee implements Printable {
    constructor(private name: string) {}
  
    print(): void {
      console.log(`Employee: ${this.name}`);
    }
  }
  
  function printAll(objects: Printable[]): void {
    for (const obj of objects) {
      obj.print();
    }
  }
  
  const circle = new Circle(5);
  const employee = new Employee("John Doe");
  
  printAll([circle, employee]);
  