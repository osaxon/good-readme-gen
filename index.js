// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter the title of your project',
    name: 'title',
},
{
    type: 'input',
    message: 'Provide a description of the project',
    name: 'desc',
},
{
    type: 'input',
    message: 'Installation instructions',
    name: 'install',
},
{
    type: 'input',
    message: 'Contributors',
    name: 'contributors',
},
{
    type: 'list',
    message: 'Licence',
    choices: ["A", "B", "C"],
    name: 'licence',

}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if(err){
            console.log("An error occurred");
        } else {
            console.log("File created");
        }
    })
}

function createFile(data) {
    writeToFile("README.md", generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createFile(response);
    })
    .catch((err) => {
        console.log(err)
    })
    
}

// Function call to initialize app
init();
