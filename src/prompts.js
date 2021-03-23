const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./generateHTML');

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the manager?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the managers id number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the managers email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the managers office number?",
  },
];

const endQuestion = [
  {
    type: "list",
    name: "selectNext",
    message:
      "Would you like to add another employee? Select engineer to add engineer, intern to add intern, or select end to exit",
    choices: ["Engineer", "Intern", "End"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of the engineer?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the engineers id number?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineers email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineers github username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the name of the intern?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is the interns id number?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the interns email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
  },
];

const managers = [];
const engineers = [];
const interns = [];

let htmlContent = ``;

function promptLoop() {
  inquirer.prompt(endQuestion).then((data) => {
      if(data.selectNext === "Engineer"){
          inquirer.prompt(engineerQuestions).then((data) => {
              engineers.push(new Engineer(data.engineerName,data.engineerId, data.engineerEmail, data.github))
              promptLoop();
          })
      } else if (data.selectNext === "Intern"){
          inquirer.prompt(internQuestions).then((data) => {
              interns.push(new Intern(data.internName, data.internId, data.internEmail, data.school));
              promptLoop()
          })
      } else {
          htmlContent += `<div class='row'>`;
          engineers.forEach((item) => htmlContent+= generateHTML.generateEngineer(item));
          htmlContent += `</div>
          <div class='row'>
          `
          interns.forEach((item) => htmlContent += generateHTML.generateIntern(item));
          htmlContent += generateHTML.footer;
          fs.writeFile("./dist/index.html", htmlContent, ()=> console.log('written'));
          return;
      };
  });
}

const promptStart = () => {
  inquirer.prompt(managerQuestions).then((data) => {
    let e = new Manager(
      data.managerName,
      data.managerId,
      data.managerEmail,
      data.officeNumber
    );
    managers.push(e);
    htmlContent += generateHTML.header;
    htmlContent += generateHTML.generateManager(managers[0]);
    console.log(managers[0]);
    promptLoop();
  });
};

promptStart();

module.exports = promptStart;
