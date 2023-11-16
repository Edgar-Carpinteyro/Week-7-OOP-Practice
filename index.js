//Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. 
//Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
//Create an instance of the 'Circle' class and calculate its area. 
//Similarly, do the same for the 'Triangle' class.

class Shape {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    shapeArea(){
        let area = this.length * this.width;
        console.log(`The area of this shape is ${area}.`)
    }
}

let newShape = new Shape(10, 20);

newShape.shapeArea();

class Circle extends Shape {
    constructor(length, width, radius) {
        super(length, width);
        this.radius = radius;
    }
    circleArea() {
        let area = Math.PI * this.radius * this.radius;
        console.log(`The area of this circle is ${area}.`)
    }
}

let newCircle = new Circle(0, 0, 5);

newCircle.circleArea();

class Triangle extends Shape {
    constructor(length, width, height){
        super(length, width, height);
        this.height = height;
    }

    triangleArea() {
        let area = (this.height * this.width) / 2;
        console.log(`The area of this triangle is ${area}.`)
    }
}

let newTriangle = new Triangle(0, 2, 3);
newTriangle.triangleArea();