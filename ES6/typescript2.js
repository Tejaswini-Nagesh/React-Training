// Create a class Circle that implements Printable
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.print = function () {
        console.log("Circle with radius ".concat(this.radius));
    };
    return Circle;
}());
// Create a class Employee that implements Printable
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.print = function () {
        console.log("Employee: ".concat(this.name));
    };
    return Employee;
}());
// Define the printAll function that takes an array of Printable objects and invokes their print() method
function printAll(objects) {
    for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
        var obj = objects_1[_i];
        obj.print();
    }
}
// Create instances of Circle and Employee
var circle = new Circle(5);
var employee = new Employee("John Doe");
// Call the printAll function with both objects
printAll([circle, employee]);
