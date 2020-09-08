//Loading required Modules
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const fs = require("fs");
// const axios = require("axios");

// array of questions for user
function promptUserInfo() {
  return inquirer.prompt([
    // const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    //rest of the questions here....
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "table of contents",
      message: "What is the table of contents? (optional)",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "input",
      name: "credits",
      message: "List your collaborators with links to their GitHub profiles.",
    },
    {
      type: "input",
      name: "license",
      message: "What is your license?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Are there guidlines for contributing?",
    },
    {
      type: "input",
      name: "test",
      message: "Write tests for your application, if any.",
    },
    {
      type: "input",
      name: "questions",
      message: "Any questions for your project?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
}
// console.log(questions);

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("readme generated!");
  });
}

// function to initialize program
async function init() {
  try {
    const userAnswers = await promptUserInfo();
    generateMarkdown(userAnswers);
    writeToFile("README.md", generateMarkdown(userAnswers));
    console.log("Success!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
