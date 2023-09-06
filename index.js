//GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
const inquirer = require('inquirer');
const {Circle, Square} = require('./lib/')
const promptUser = ()=>{
    inquirer
  .prompt([
    {
        type:'input',
        name: 'text',
        message: 'Please enter 3 letters'
    },
    {
        type:'list',
        name: 'shape',
        message: 'Select your shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type:'input',
        name: 'textColor',
        message: 'Enter your text color'
    },
    {
        type:'input',
        name: 'shapeColor',
        message: 'Enter your shape color'
    },

    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    buildSVG(answers)
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log('Oops something happened')
    } else {
        // Something else went wrong
        console.log('Oops something happened')
    }
});

}
const buildSVG = (answers) =>{
    console.log(answers)
        if(answers.shape === 'Square'){
            // build square logo
            const square = new Square(answers.shapeColor)
            console.log(square.render())
        }else if(answers.shape === "Circle"){
            // Build circle logo
            const circle = new Circle (answers.shapeColor)
            console.log(circle.render())
        }else {
            // build triangle logo
            const triangle = new Triangle (answers.shapeColor)
            console.log(triangle.render())
        }
}
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered//
promptUser()