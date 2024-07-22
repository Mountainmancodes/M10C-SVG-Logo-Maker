const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

const prompts = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the SVG:',
        validate: input => input.length <= 3 || 'Text must be 3 characters or less',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hex):',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select the shape for the SVG:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hex):',
    },
];

function createShape(text, textColor, shapeType, shapeColor) {
    let shapeInstance;
    if (shapeType === 'Circle') {
        shapeInstance = new Circle(shapeColor);
    } else if (shapeType === 'Triangle') {
        shapeInstance = new Triangle(shapeColor);
    } else if (shapeType === 'Square') {
        shapeInstance = new Square(shapeColor);
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render()}
            <text x="150" y="100" font-size="40" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
        </svg>
    `;

    return svgContent;
}

function saveToFile(filename, content) {
    fs.writeFileSync(`examples/${filename}`, content);
    console.log('Generated logo.svg');
}

async function runApp() {
    const answers = await inquirer.prompt(prompts);
    const svgData = createShape(answers.text, answers.textColor, answers.shapeType, answers.shapeColor);
    saveToFile('logo.svg', svgData);
}

runApp();