// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter the title of your project',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a short summary for your project',
    name: 'shortDesc',
},
{
    type: 'input',
    message: 'Provide more detail about the project',
    name: 'desc',
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => console.log("File created"))
}

function createFile(data) {
    let title = `#${data.title}`;
    let desc = `## Description\n${data.desc}`;
    const fileData = [];

    fileData.push(title);
    fileData.push(desc);

    const fileDataString = fileData.join('\n');

    writeToFile("README.md", fileDataString);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createFile(response);
    })
    console.log("File created")
}

// Function call to initialize app
init();
