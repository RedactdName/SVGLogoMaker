//GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const { Circle, Square, Triangle } = require('./lib/')
const promptUser = () => {
    inquirer
        .prompt([
            {
                // I can enter three characters
                type: 'input',
                name: 'text',
                message: 'Please enter 3 letters'
            },
            {
                // I am presented with a list of shapes to choose from: circle, triangle, and square
                type: 'list',
                name: 'shape',
                message: 'Select your shape',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                // Text Color - enter a color keyword (OR a hexadecimal number)
                type: 'input',
                name: 'textColor',
                message: 'Enter your text color'
            },
            {
                // Shape Color - enter a color keyword (OR a hexadecimal number)
                type: 'input',
                name: 'shapeColor',
                message: 'Enter your shape color'
            },


        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            buildSVG(answers)
        })
        .catch((error) => {
            console.log(error)
            // if (error.isTtyError) {
            //     // Prompt couldn't be rendered in the current environment
            //     console.log('Oops something happened')
            // } else {
            //     // Something else went wrong
            //     console.log('Oops something happened')
            // }
        });

}
const buildSVG = (answers) => {
    console.log(answers)
    if (answers.shape === 'Square') {
        // build square logo
        const square = new Square(answers.shapeColor, answers.text, answers.textColor)
        var svgString = square.render()+ square.insert()+ square.addText()
        // return square.render()
    } else if (answers.shape === "Circle") {
        // Build circle logo
        const circle = new Circle(answers.shapeColor, answers.text, answers.textColor)
        var svgString = circle.render()+ circle.insert()+ circle.addText()
    } else {
        // build triangle logo
        const triangle = new Triangle(answers.shapeColor, answers.text, answers.textColor)
        var svgString = triangle.render()+ triangle.insert()+ triangle.addText()
    } 
    // WHEN I have entered input for all the prompts
    // THEN an SVG file is created named `logo.svg`
   fs.writeFile(path.join(__dirname,'logo.svg'), svgString, (data,err)=>{console.log(err)}) 
   console.log('Generated logo.svg')
}
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered//
promptUser()