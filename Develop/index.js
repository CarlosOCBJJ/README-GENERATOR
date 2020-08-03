var inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [

    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your input?",
      name: "input"
    },
    {
      type: "input",
      message: "Re-enter input to confirm:",
      name: "confirm"
    },
    type: "input",
    message: "What is your user name?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your input?",
    name: "input"
  },
  {
    type: "input",
    message: "Re-enter input to confirm:",
    name: "confirm"
  }
  ])


  //using fs methods to read/write to the readme
function //fs.writeFileSync
//reference the readme 

//using g