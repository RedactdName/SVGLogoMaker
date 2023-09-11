class Shape {
    constructor(){
        
    }
    //move svg string to child constructor
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        text x="150" y="100" text-anchor="middle" alignment-baseline="middle"
       
   `
    }
}
module.exports = Shape

//line 9 insert shape svg depending on user choice