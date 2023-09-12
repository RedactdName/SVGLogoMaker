class Shape {
    //constructs shapes
    constructor(){
        
    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        text x="150" y="100" text-anchor="middle" alignment-baseline="middle"
        
        `
        //moved svg string to child constructor at end of addText of ./lib/index.js for each shape
    }
}
module.exports = Shape

