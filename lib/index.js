const Shape = require('./Shape')
class Circle extends Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor
    }
    insert(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}
class Square extends Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor

    }
    insert(){
        return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`
    }
}
class Triangle extends Shape {
        constructor(shapeColor){
            this.shapeColor = shapeColor
    
        }
        insert(){
            return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`
        }
    

}
module.exports = {Circle, Square, Triangle}