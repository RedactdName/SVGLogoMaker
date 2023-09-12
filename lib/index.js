const Shape = require('./Shape')

//creates circle logo
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super()
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    insert() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
    addText() {
        return `<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
//creates square logo
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super()
        this.text = text
        this.shapeColor = shapeColor
        this.textColor = textColor

    }
    insert() {
        return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`
    } 
    addText() {
        return `<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
//creates triangle logo
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super()
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    
    insert() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
    addText(){
        return `<text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }


}
module.exports = { Circle, Square, Triangle }