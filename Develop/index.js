const api = require("./utils/api");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");
const fs = require("fs");


const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your repo called?",
    name: "title"
  },
  {
    type: "input",
    message: "Describe your Repo",
    name: "description"
  },
  {
    type: "input",
    message: "How do you install your project?",
    name: "install",
    default: "npm i"
  },
  {
    type: "list",
    message: "Are there any licenses?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    message: "How can other users contribute to this repository?",
    name: "contribute"
  },
  {
    type: "input",
    message: "How can users run tests??",
    name: "test",
    default: "npm test"
  }
];

function writeFs(fileName, info) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), info, function (error) {
    if (error) return console.log(error)
  });
};
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(answers);
    api
      .getUser(answers.github)
      .then(({ info }) => {
        writeFs("README.md", generateMarkdown({ ...answers, ...info }));
      })
  });
};
init();