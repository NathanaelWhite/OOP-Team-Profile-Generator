// require fs
const fs = require("fs");
// require inquirer, page-template.js
const inquirer = require("inquirer");
const pageTemplate = require("./src/page-template.js");
// require all lib files
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee.js");


let employeeArr = [];

const promptRole = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Add a new employee!",
        choices: ["Engineer", "Intern", "Manager", "Done"],
      },
    ])
    .then((response) => {
      if (response.role !== "Done") {
        promptEmployee(response.role);
      }
      else {
          console.log('My team is complete!');
          return employeeArr;
      }
    });
};

const promptEmployee = (role) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter your employee ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address.",
      },
    ])
    .then((response) => {
      if (role === "Manager") {
        promptManager(response);
      } else if (role === "Engineer") {
        // call engineer func
        promptEngineer(response);
      } else {
        // call intern func
        promptIntern(response);
      }
    });
};

const promptManager = (data) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "officeNum",
        message: "What is you office number?",
      },
    ])
    .then(({ officeNum }) => {
      const manager = new Manager(data.name, data.id, data.email, officeNum);
      console.log(manager);
      employeeArr.push(manager);
      promptRole();
    });
};

const promptEngineer = (data) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
      },
    ])
    .then(({ github }) => {
      const engineer = new Engineer(data.name, data.id, data.email, github);
      console.log(engineer);
      employeeArr.push(engineer);
      promptRole();
    });
};

const promptIntern = (data) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Enter your School.'
            }
        ])
        .then(({ school }) => {
            const intern = new Intern(data.name, data.id, data.email, school);
            console.log(intern);
            employeeArr.push(intern);
            promptRole();
        });
};
// prompt user for information. create an object for user questions

//writeFile to dist folder

// TODO: Create a function to initialize app
// const init = () => {
//     inquirer
//     .prompt(questions)
//     .then((readmeData) => {
//         return generateMarkdown(readmeData);
//     })
//     .then((data) => {
//         return writeToFile(data)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
//   };

//   // Function call to initialize app
//   init();
promptRole();
