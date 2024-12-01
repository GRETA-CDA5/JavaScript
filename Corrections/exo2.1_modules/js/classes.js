import { Point } from "./modules/point.js";

// This is an abstract class
class Shape {
    constructor(name, color) {
        console.log(this.constructor);
        if (this.constructor === Shape) {
            throw new TypeError('Abstract class "Shape" cannot be instantiated directly');
        }
        this.name = name;
        this.color = color;     // must be a litteral object {R: , G: , B: }
        this.surface = 0;       // not yet computed; you must use calculateSurface() method
    }
}




// export { Shape, Circle, Canvas};
